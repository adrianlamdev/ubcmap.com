import requests
from bs4 import BeautifulSoup


class Scraper:
    def __init__(self, config, url):
        self.config = config
        self.url = url

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
