from django.urls import path, include
from userAuth.views import *

urlpatterns = [
    path('log-in/', Login, name='login' ),
    path('sign-up/', Signup, name='signup' ),
    path('verification/', Verification, name='verification' ),
   
]
