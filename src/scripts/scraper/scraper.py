import logging
from typing import Dict, List, Optional
import time

import os
from supabase import create_client, Client

import requests
from requests.exceptions import RequestException
import re
from bs4 import BeautifulSoup

logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)


url: str = "https://crypzuepzmuggyxcdkjg.supabase.co"
key: str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyeXB6dWVwem11Z2d5eGNka2pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3MTQ5NTIsImV4cCI6MjA0MjI5MDk1Mn0.ZfqNiucGmTUjQKaYEJP5gx9JX4tqzshk9cnGI-8gc78"
supabase: Client = create_client(url, key)


class CourseScraperConfig:
    BASE_URL = "https://vancouver.calendar.ubc.ca"
    SUBJECTS_URL = f"{BASE_URL}/course-descriptions/courses-subject"
    COURSE_URL = f"{BASE_URL}/course-descriptions/subject/"


class CourseInfo:
    def __init__(
        self,
        code: str,
        title: str,
        description: str,
        credits: int,
        prerequisites: Optional[str] = None,
        corequisites: Optional[str] = None,
    ):
        self.code = code
        self.title = title
        self.description = description
        self.credits = credits
        self.prerequisites = prerequisites
        self.corequisites = corequisites

    def to_dict(self) -> Dict:
        return {
            "code": self.code,
            "title": self.title,
            "description": self.description,
            "credits": self.credits,
            "prerequisites": self.prerequisites,
            "corequisites": self.corequisites,
        }


class CourseScraper:
    def __init__(self, config: Dict):
        self.config = config
        self.subjects = self.get_subjects()
        self.courses: Dict[str, List[CourseInfo]] = {}

    def get_subjects(self) -> List[str]:
        try:
            response = requests.get(CourseScraperConfig.SUBJECTS_URL)
            response.raise_for_status()
            soup = BeautifulSoup(response.text, "html.parser")
            raw_subjects = soup.find_all("ol", class_="list-buttons")

            subjects = []
            for ol in raw_subjects:
                for li in ol.find_all("li"):
                    a_tag = li.find("a")
                    if a_tag:
                        subject = (
                            a_tag.text.split(" - ")[0].strip().replace("_", "").lower()
                        )
                        subjects.append(subject)
            return subjects
        except RequestException as e:
            logger.error(f"Error fetching subjects: {e}")
            return []

    def scrape_subject(self, subject: str) -> int:
        url = f"{CourseScraperConfig.COURSE_URL}{subject}"
        try:
            response = requests.get(url)
            response.raise_for_status()
            soup = BeautifulSoup(response.text, "html.parser")
            raw_courses = soup.find_all("article", class_="node--type-course")

            subject_courses = []
            for course in raw_courses:
                course_info = self._extract_course_info(course)
                if course_info:
                    subject_courses.append(course_info)

            self.courses[subject] = subject_courses
            return len(subject_courses)
        except RequestException as e:
            logger.error(f"Error scraping subject {subject}: {e}")
            return 0

    def _extract_course_info(self, course_html) -> Optional[CourseInfo]:
        header = course_html.find("h3", class_="text-lg")
        if not header:
            return None

        code_title = header.text.strip().split("  ")
        if len(code_title) < 2:
            return None

        code = code_title[0][:-4]  # Removing the last 4 characters (space and credits)
        title = code_title[1]

        description_elem = course_html.find("p")
        if not description_elem:
            return None

        full_text = description_elem.text.strip()
        full_text = re.sub(r"\[.*?\]", "", full_text).strip()

        parts = re.split(r"(Prerequisite:|Corequisite:)", full_text)
        description = parts[0].strip()
        prerequisites = None
        corequisites = None

        for i in range(1, len(parts), 2):
            if parts[i] == "Prerequisite:":
                prerequisites = parts[i + 1].strip()
            elif parts[i] == "Corequisite:":
                corequisites = parts[i + 1].strip()

        credits_match = re.search(r"\((\d+)\)", header.text)
        credits = int(credits_match.group(1)) if credits_match else 0

        return CourseInfo(
            code, title, description, credits, prerequisites, corequisites
        )

    def _scrape(self) -> Dict[str, List[Dict]]:
        for subject in self.subjects:
            if subject == "mathv" or subject == "cpscv" or subject == "cpenv":
                logger.info(f"Scraping {subject}...")
                num_courses = self.scrape_subject(subject)
                logger.info(f"Scraped {num_courses} courses for {subject}")
                self._save_to_supabase(subject, self.courses[subject])
        return {
            subject: [course.to_dict() for course in courses]
            for subject, courses in self.courses.items()
        }

    def _save_to_supabase(self, subject: str, courses: List[CourseInfo]):
        # TODO: Implement this function

        # for subject, courses in self.courses.items():
        #     supabase.table("Subjects").insert({}).execute()
        #     for course in courses:
        #         supabase.table("Courses").insert({}).execute()
        response = supabase.table("Subject").upsert({"id": subject}).execute()

        for course in courses:
            pass

    def run(self):
        start_time = time.time()  # Start time
        logger.info("Scraping process started...")

        scraped_data = self._scrape()

        end_time = time.time()  # End time
        processing_time = end_time - start_time  # Calculate processing time

        logger.info(f"Scraping process completed in {processing_time:.2f} seconds.")
        # self.save_to_supabase(processed_data)
