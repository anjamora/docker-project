# api/urls.py
from django.urls import path
from .views import CurrentTimeView, PingView

urlpatterns = [
    path('', CurrentTimeView.as_view(), name='current_time'),
    path('ping/', PingView.as_view(), name='ping'),
]
