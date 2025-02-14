from django.db import models

class UserModel(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    email = models.EmailField(max_length=254, unique=True)
    otp = models.CharField(max_length=6, blank=True, null=True)

    def __str__(self):
        return self.name if self.name else self.email