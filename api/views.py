from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from core.models import Board
from api.models import Game, Player
import json

@api_view(['GET'])
def new_game(request):
    game = Game()
    game.save()
    return Response(status=status.HTTP_200_OK, data={"game_link": game.id})

@api_view(['GET'])
def players(request, game_id):
    #print(request.META['REMOTE_ADDR'])
    players = {"players": [ player.name for player in Player.objects.filter(game=game_id) ]}
    return Response(status=status.HTTP_200_OK, data={"data": json.loads(json.dumps(players))})

@api_view(['POST'])
def new_player(request, game_id):
    current_player = request.session.get("PLAYER_NAME", "")
    if current_player:
        Player.objects.filter(game=Game.objects.get(id=game_id), name=current_player).delete()

    player = Player(game=Game.objects.get(id=game_id), name=request.data["name"])
    player.save()
    
    request.session["PLAYER_NAME"] = request.data["name"]
    return Response(status=status.HTTP_200_OK, data="1")

@api_view(['GET'])
def board(request, id):
    board = Board.objects.get(pk=id)
    data_set = {
        "xSize": board.x_size,
        "ySize": board.y_size,
        "cropYield": board.crop_yield,
        "pastureYield": board.pasture_yield,
        "oreYield": board.ore_yield,
        "woodYield": board.wood_yield,
        "freshWater": board.fresh_water
    }
    json_dump = json.dumps(data_set)
    json_object = json.loads(json_dump)
    return Response(status=status.HTTP_200_OK, data={"data": json_object})
