from .serializers import PostModelSerializer, PostPagination
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.response import Response
from django.core.cache import cache
from .models import Post


class PostsViewSet(ReadOnlyModelViewSet):
    queryset = Post.objects.all()
    pagination_class = PostPagination
    serializer_class = PostModelSerializer
    
    def list(self, request, *args, **kwargs):
        cache_key = 'posts'
        cached_data = cache.get(cache_key)
        
        if cached_data:
            return Response(cached_data)
        
        serialized_response = super().list(request, *args, **kwargs)
        cache.set(cache_key, serialized_response.data, timeout = 10 * 1)
        return serialized_response
    
    