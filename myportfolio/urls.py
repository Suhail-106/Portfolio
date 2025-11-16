from django.urls import path
from . import views

urlpatterns = [
    path('', views.home,name="home"),
    path('facebook/', views.facebook, name='facebook'),
    path('signup/',views.signup,name="signup"),
    path('login/',views.login_user,name="login_view"),
    path('verify/',views.verify_otp,name="verify_otp")
]
