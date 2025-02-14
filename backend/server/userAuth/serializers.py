from rest_framework.serializers import ModelSerializer
from userAuth.models import UserModel


class LoginSerializer(ModelSerializer):
    class Meta:
        model = UserModel
        fields = ['email']

class SignupSerializer(ModelSerializer):
    class Meta:
        model = UserModel
        fields = ['name', 'email']

class VerificationSerializer(ModelSerializer):
    class Meta:
        model = UserModel
        fields = ['email', 'otp']

   
