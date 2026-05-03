from django.urls import path
from .views import count_api

urlpatterns = [
  path('count/', count_api)
]