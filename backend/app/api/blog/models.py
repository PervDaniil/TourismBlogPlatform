from django.db import models


class Post(models.Model):
    id = models.BigAutoField(primary_key = True)
    image = models.ImageField(upload_to = 'blog/images/')
    title = models.CharField(blank = False, max_length = 64)
    description = models.CharField(blank = True, max_length=1024)
    created_at = models.DateTimeField(auto_now_add = True)
    
    def __str__(self):
        return f'Post {self.title} | {self.id}'