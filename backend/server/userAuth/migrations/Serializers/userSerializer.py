from rest_framework.serializers import ModelSerializer
from api.models import User

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
    
class UserSerializerLogIn(ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password']
    
# class UserSerializerResetPassword(ModelSerializer):
#     confirm_password = CharField(write_only=True)  

#     class Meta:
#         model = User
#         fields = ['email', 'password', 'confirm_password']

#     def validate(self, data):
#         """Ensure that password and confirm_password match."""
#         if data['password'] != data['confirm_password']:
#             raise serializers.ValidationError({"password": "Passwords do not match."})
#         return data