from rest_framework.views import APIView
from rest_framework.response import Response
from api.Serializers.userSerializer import UserSerializerLogIn
from rest_framework import status


# Create your views here.
class UserAuthLogIn(APIView):

    def get(self, request):
        return Response(data="User Auth ImRabo")

    
    def post(self, request):
        serializer = UserSerializerLogIn(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)