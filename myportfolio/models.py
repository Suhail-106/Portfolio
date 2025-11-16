from django.db import models


class datasave(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    confirm_passwowrd = models.CharField(max_length=50)
    massages = models.TextField()
    user_otp = models.CharField(max_length=6, blank=True, default='000000')
    session_otp = models.CharField(max_length=6, blank=True, default='000000')

    def __str__(self):
        return self.name





# Create your models here.
