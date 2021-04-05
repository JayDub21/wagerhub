from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('wh_react.urls')),
    path('', include('users.urls')),
]
