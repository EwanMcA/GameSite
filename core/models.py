from django.db import models

class Board(models.Model):
    x_size = models.IntegerField(default=0)
    y_size = models.IntegerField(default=0)
    crop_yield = models.CharField(max_length=2500, default='')
    pasture_yield = models.CharField(max_length=2500, default='')
    ore_yield = models.CharField(max_length=2500, default='')
    wood_yield = models.CharField(max_length=2500, default='')
    fresh_water = models.CharField(max_length=2500, default='')
