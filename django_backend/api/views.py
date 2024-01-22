# api/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db import connection

class CurrentTimeView(APIView):
    def get(self, request, *args, **kwargs):
        with connection.cursor() as cursor:
            cursor.execute("SELECT NOW() as now;")
            server_time = cursor.fetchone()[0].strftime("%Y-%m-%d %H:%M:%S")

        return Response({"now": server_time}, status=status.HTTP_200_OK)

class PingView(APIView):
    def get(self, request, *args, **kwargs):
        return Response({"message": "pong"}, status=status.HTTP_200_OK)
