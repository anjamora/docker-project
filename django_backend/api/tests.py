from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status

class CurrentTimeViewTest(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_get_current_time(self):
        # Arrange
        url = "http://localhost:8000"  # Replace with your actual URL

        # Act
        response = self.client.get(url)

        # Assert
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("now", response.data)

    # Add more test cases if needed
    def test_get_pong(self):
        # Arrange
        url = "http://localhost:8000/ping/"  # Replace with your actual URL

        # Act
        response = self.client.get(url)

        # Assert
        self.assertIn("message", response.data)
        self.assertEqual(response.data["message"], "pong")