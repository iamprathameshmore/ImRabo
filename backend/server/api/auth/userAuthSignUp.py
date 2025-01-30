from rest_framework.views import APIView
from rest_framework.response import Response
from api.Serializers.userSerializer import UserSerializer
from rest_framework import status


# Create your views here.
class UserAuthSignUp(APIView):

    def get(self, request):
        return Response(data="User Auth ImRabo")

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)