from django.db import models

class User(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    email = models.EmailField(max_length=254, unique=True)
    password = models.CharField(max_length=128)  # Increased max_length for security

    def __str__(self):
        return self.name if self.name else self.email