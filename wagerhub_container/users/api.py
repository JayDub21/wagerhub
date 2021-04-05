from users.models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializer

# User Viewset
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()

    # Change view to only see THEIR bets
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer