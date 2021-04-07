from django.urls import path, include
from users import views
from wh_react import views


urlpatterns = [
    path('', include('wh_react.urls')),
    path('', include('users.urls')),
]
