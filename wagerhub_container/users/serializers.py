from rest_framework import serializers
from users.models import User

# Lead Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'