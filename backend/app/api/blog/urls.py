from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import PostsViewSet


API_ROUTER = DefaultRouter()
API_ROUTER.register('posts', PostsViewSet)

urlpatterns = [
    path('', include(API_ROUTER.urls)),
]