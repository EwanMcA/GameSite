from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
import json

# This will return a list of books
@api_view(['GET'])
def players(request):
  print(request.META['REMOTE_ADDR'])
  data_set = {"players": [{ "IP": request.META['REMOTE_ADDR']}]}
  json_dump = json.dumps(data_set)

  #players = '{"players": [{ "ip": "Mcaewa" }, { "name": "eli_jw"}]}'
  json_object = json.loads(json_dump)
  return Response(status=status.HTTP_200_OK, data={"data": json_object})
