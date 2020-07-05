from django.db import models

class Game(models.Model):
    # TODO use uuid for pk (and for game id on frontend)
    num_players = models.IntegerField(default=1)

class Player(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    name = models.CharField(max_length=12)
    
    class Meta:
        unique_together = [['game', 'name']]
