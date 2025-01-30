from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializerResetPassword

class ResetPasswordAPIView(APIView):
    def post(self, request):
        serializer = UserSerializerResetPassword(data=request.data)  # Step 2

        if serializer.is_valid():  # Step 3
            # Perform the password reset logic (example: update password)
            user = User.objects.get(email=serializer.validated_data['email'])
            user.password = serializer.validated_data['password']
            user.save()

            return Response({"message": "Password reset successful"}, status=status.HTTP_200_OK)  # Step 4
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # Handle errors
