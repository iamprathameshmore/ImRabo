from django.shortcuts import render
from userAuth.models import UserModel
from rest_framework.decorators import api_view
from rest_framework.response import Response
from userAuth.utils.api_exceptions import handle_exceptions
from userAuth.utils.otp import generate_otp, verify_otp
from userAuth.serializers import *


# Create your views here.

@api_view(['POST'])
@handle_exceptions
def Login(request):
  
        data = request.data
        serializer = LoginSerializer(data=data)

        if serializer.is_valid():
            email = serializer.validated_data['email']
            user = UserModel.objects.filter(email=email).first()

            if not user:
                return Response({"error": "User not found"}, status=404)

            otp, secret_key = generate_otp()
            user.otp = secret_key
            user.save()
            print(f"Generated OTP for {email}: {otp}")

            response = Response({"message": "OTP sent successfully!", "email": email})
            response.set_cookie(
            key="user_email",
            value=email,
            max_age=600,  
            httponly=True,  
            secure=False,  
            samesite="Strict"  
            )

            return response

        return Response({"error": "Invalid data"}, status=400).delete_cookie("user_email")


@api_view(['POST'])
@handle_exceptions
def Signup(request):
    data = request.data

    serializer = SignupSerializer(data=data)
    if serializer.is_valid():
        name = serializer.validated_data['name']
        email = serializer.validated_data['email']

        if UserModel.objects.filter(email=email).exists():
            return Response({"error": "User already exists"}, status=400)
    
        otp, secret_key = generate_otp()
        user = UserModel.objects.create(name=name, email=email, otp=secret_key)
        response = Response({"message": "OTP sent successfully!", "email": email}, status=200)
        response.set_cookie(
            key="user_email",
            value=email,
            max_age=600, 
            httponly=True,  
            secure=False, 
            samesite="Strict"  
        )

        return response

    return Response({"error": "Invalid data"}, status=400)



@api_view(['POST'])
@handle_exceptions
def Verification(request):
    data = request.data
    print(data)

    return Response(data='LogIn')

