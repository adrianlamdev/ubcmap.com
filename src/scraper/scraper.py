import requests
import re
from bs4 import BeautifulSoup


class CourseScraper:
    def __init__(self, config):
        self.config = config
        self.subjects = self.get_subjects()

    def get_subjects(self):
        url = "https://vancouver.calendar.ubc.ca/course-descriptions/courses-subject"
        response = requests.get(url)
        soup = BeautifulSoup(response.text, "html.parser")
        raw_subjects = soup.find_all("ol", class_="list-buttons")

        subjects = []
        for ol in raw_subjects:
            for li in ol.find_all("li"):
                a_tag = li.find("a")
                if a_tag:
                    subject = a_tag.text.split(" - ")[0].strip()
                    subject = subject.replace("_", "").lower()
                    subjects.append(subject)

        return subjects

    def scrape(self):
        # https://vancouver.calendar.ubc.ca/course-descriptions/subject/{subject}
        for subject in self.subjects:
            print(subject)
            url = f"https://vancouver.calendar.ubc.ca/course-descriptions/subject/{subject}"
            response = requests.get(url)
            soup = BeautifulSoup(response.text, "html.parser")
            raw_courses = soup.find_all("ol", class_="list-none")

            print(raw_courses)
            break

    def process_data(self, data):
        pass

    def save_to_supabase(self, processed_data):
        pass

    def run(self):
        data = self.scrape()
        processed_data = self.process_data(data)
        self.save_to_supabase(processed_data)


test = CourseScraper("config")
test.get_subjects()
test.scrape()
