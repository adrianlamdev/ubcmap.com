import logging
import os
from dotenv import load_dotenv
from scraper.scraper import CourseScraper

# Load environment variables from .env file
load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)


def main():
    # Load configuration from environment variables
    config = {
        "supabase_url": os.getenv("SUPABASE_URL"),
        "supabase_key": os.getenv("SUPABASE_KEY"),
        # Add any other configuration parameters here
    }

    # Create an instance of CourseScraper
    scraper = CourseScraper(config)

    try:
        # Run the scraper
        logger.info("Starting the scraping process...")
        scraper.run()
        logger.info("Scraping process completed successfully.")
    except Exception as e:
        logger.error(f"An error occurred during the scraping process: {str(e)}")


if __name__ == "__main__":
    main()
