from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    first = models.CharField(blank=True, max_length=100)
    last = models.CharField(blank=True, max_length=100)
    email = models.EmailField(blank=True, max_length=100)
    phone = models.CharField(blank=True, max_length=100)
    address = models.CharField(blank=True, max_length=100)
    city = models.CharField(blank=True, max_length=100)
    state = models.CharField(blank=True, max_length=100)
    zipcode = models.CharField(blank=True, max_length=100)
    country = models.CharField(blank=True, max_length=100)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    
