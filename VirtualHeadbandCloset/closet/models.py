from django.db import models

# Create your models here.
class Headband(models.Model):
   headband_name = models.CharField(max_length=200)
   shopify_id = models.CharField(max_length=200)
   image_path = models.ImageField(upload_to='resources/headbands')
   
   def __str__(self):
      return self.headband_name
