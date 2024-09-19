import pytest
from unittest.mock import patch, MagicMock
from scripts.scraper.scraper import CourseScraper, CourseInfo
import requests


@pytest.fixture
def mock_requests_get():
    with patch("requests.get") as mock_get:
        yield mock_get


@pytest.fixture
def scraper():
    return CourseScraper({})


def test_get_subjects(scraper, mock_requests_get):
    """Test that get_subjects returns the correct number of subjects."""
    mock_requests_get.return_value.text = """
    <ol class="list-buttons">
        <li><a href="#">ADHE_V - Adult Education</a></li>
        <li><a href="#">MATH_V - Mathematics</a></li>
    </ol>
    """
    mock_requests_get.return_value.status_code = 200
    subjects = scraper.get_subjects()
    assert len(subjects) == 2
    assert "adhev" in subjects
    assert "mathv" in subjects


def test_get_specific_subject(scraper, mock_requests_get):
    """Test that a specific subject is in the list of subjects."""
    mock_requests_get.return_value.text = """
    <ol class="list-buttons">
        <li><a href="#">ADHE_V - Adult Education</a></li>
    </ol>
    """
    mock_requests_get.return_value.status_code = 200
    subjects = scraper.get_subjects()
    assert "adhev" in subjects, "adhev should be in the list of subjects"


def test_scrape_adhe_courses(scraper, mock_requests_get):
    """Test that ADHE courses are correctly scraped and stored."""
    mock_requests_get.return_value.text = """
    <article class="node--type-course">
        <h3 class="text-lg">ADHE_V 327 (3)  Teaching Adults</h3>
        <p>Planning, conducting and evaluating instruction for adults. [3-0-0]</p>
    </article>
    """
    mock_requests_get.return_value.status_code = 200
    num_courses = scraper.scrape_subject("adhev")
    assert num_courses == 1, "There should be one ADHE course"
    assert (
        "adhev" in scraper.courses
    ), "ADHE courses should be stored in the courses dictionary"
    assert (
        len(scraper.courses["adhev"]) == num_courses
    ), "Number of courses should match the returned count"

    sample_course = scraper.courses["adhev"][0]
    assert sample_course.code == "ADHE_V 327", "Course code should be correct"
    assert sample_course.title == "Teaching Adults", "Course title should be correct"
    assert (
        sample_course.description
        == "Planning, conducting and evaluating instruction for adults."
    ), "Course description should be correct"
    assert sample_course.credits == 3, "Course credits should be correct"


@pytest.mark.parametrize(
    "course_code,expected_title,expected_description",
    [
        (
            "ADHE_V 327",
            "Teaching Adults",
            "Planning, conducting and evaluating instruction for adults.",
        ),
        (
            "ADHE_V 412",
            "An Overview of Adult Education",
            "Survey of adult education theory and practice in Canada and the world.",
        ),
    ],
)
def test_specific_adhe_courses(
    scraper, mock_requests_get, course_code, expected_title, expected_description
):
    """Test that specific ADHE courses are correctly scraped and stored."""
    mock_requests_get.return_value.text = f"""
    <article class="node--type-course">
        <h3 class="text-lg">{course_code} (3)  {expected_title}</h3>
        <p>{expected_description} [3-0-0]</p>
    </article>
    """
    mock_requests_get.return_value.status_code = 200
    scraper.scrape_subject("adhev")
    course = next((c for c in scraper.courses["adhev"] if c.code == course_code), None)
    assert course is not None, f"{course_code} should exist"
    assert (
        course.title == expected_title
    ), f"{course_code} should have the correct title"
    assert (
        course.description == expected_description
    ), f"{course_code} should have the correct description"
    assert course.credits == 3, f"{course_code} should have credits"


def test_scrape_subject_unexpected_html(scraper, mock_requests_get):
    """Test that the scraper handles unexpected HTML structures gracefully."""
    mock_requests_get.return_value.text = (
        "<html><body>Unexpected structure</body></html>"
    )
    mock_requests_get.return_value.status_code = 200
    num_courses = scraper.scrape_subject("adhev")
    assert num_courses == 0, "No courses should be scraped from unexpected HTML"


def test_scrape_subject_request_exception(scraper, mock_requests_get):
    """Test that the scraper handles request exceptions gracefully."""
    mock_requests_get.side_effect = requests.exceptions.RequestException(
        "Mocked exception"
    )
    num_courses = scraper.scrape_subject("adhev")
    assert (
        num_courses == 0
    ), "No courses should be scraped when a request exception occurs"
