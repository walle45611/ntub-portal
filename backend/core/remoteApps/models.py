from django.db import models

class RemoteApp(models.Model):
    name = models.CharField(max_length=100, unique=True)
    url = models.URLField()

    def __str__(self):
        return self.name