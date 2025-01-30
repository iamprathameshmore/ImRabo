from django.urls import path, include

from api.auth.userAuthLogIn import UserAuthLogIn
from api.auth.userAuthSignUp import UserAuthSignUp

urlpatterns = [
    path('auth/log-in/', UserAuthLogIn.as_view(), name="log-in"),
    path('auth/sign-up/', UserAuthSignUp.as_view(), name="sign-up"),
]
