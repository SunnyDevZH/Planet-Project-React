# filepath: accounts/urls.py
from django.urls import path
from .views import RegisterView, LoginView, registration_view

urlpatterns = [
    path('registration/', RegisterView.as_view(), name='register'),  # Ändere dies zu 'registration/'
    path('login/', LoginView.as_view(), name='login'),
    path('registration-page/', registration_view, name='registration_page'),  # Ändere dies zu 'registration-page/'
]