from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from products.views import CreateCheckoutSessionView
from .views import CheckOutView, ObtainTokenPairWithColorView, CustomUserCreate, HelloWorldView, LogoutAndBlacklistRefreshTokenForUserView


urlpatterns = [
    path('user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('token/obtain/', ObtainTokenPairWithColorView.as_view(), name='token_create'),  # override sjwt stock token
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('hello/', HelloWorldView.as_view(), name='hello_world'),
    path('blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(), name='blacklist'),
    path('create-checkout-session/', CreateCheckoutSessionView.as_view(), name='create-checkout-session'),
    path('checkout/', CheckOutView.as_view(), name='checkout')
]