from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from core.models import Board
import json


@api_view(['GET'])
def players(request):
    print(request.META['REMOTE_ADDR'])
    data_set = {"players": [{"IP": request.META['REMOTE_ADDR']}]}
    json_dump = json.dumps(data_set)

    #players = '{"players": [{ "ip": "Mcaewa" }, { "name": "eli_jw"}]}'
    json_object = json.loads(json_dump)
    return Response(status=status.HTTP_200_OK, data={"data": json_object})


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
