from rest_framework.pagination import LimitOffsetPagination
from rest_framework.serializers import ModelSerializer
from .models import Post


class PostPagination(LimitOffsetPagination):
    default_limit = 12
    max_limit = 24


class PostModelSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'