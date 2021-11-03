from django.contrib import admin
from .models import Product

# register Product model to the admin page
admin.site.register(Product)