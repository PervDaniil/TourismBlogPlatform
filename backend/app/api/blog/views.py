from .serializers import PostModelSerializer, PostPagination
from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Post


class PostsViewSet(ReadOnlyModelViewSet):
    queryset = Post.objects.all()
    pagination_class = PostPagination
    serializer_class = PostModelSerializer
    
    