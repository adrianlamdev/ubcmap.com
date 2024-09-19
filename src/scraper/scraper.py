import requests
import re
from bs4 import BeautifulSoup


class CourseScraper:
    def __init__(self, config, url):
        self.config = config
        self.subjects = self.get_subjects()

    def extract_subject(self, subject):
        pass

    def get_subjects(self):
        # https://vancouver.calendar.ubc.ca/course-descriptions/courses-subject
        url = "https://vancouver.calendar.ubc.ca/course-descriptions/courses-subject"
        response = requests.get(url)
        soup = BeautifulSoup(response.text, "html.parser")
        raw_subjects = soup.find_all("ol", class_="list-buttons")

    def scrape(self):
        pass

    def process_data(self, data):
        pass

    def save_to_supabase(self, processed_data):
        pass

    def run(self):
        data = self.scrape()
        processed_data = self.process_data(data)
        self.save_to_supabase(processed_data)


test = CourseScraper("config", "url")
test.get_subjects()
