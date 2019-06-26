from rest_framework import serializers
from .models.user_model import UserModel


class UserModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserModel
        fields = ('fullname', 'username', 'password')

class ResponseSerializer(serializers.Serializer):

    status = serializers.CharField()
    message = serializers.CharField()
    # status_code = serializers.IntegerField()
    # content_type = serializers.CharField()

class LoginSuccessResponseSerializer(serializers.Serializer):

    status = serializers.CharField()
    message = serializers.CharField()
    user = serializers.DictField()
    # status_code = serializers.IntegerField()
    # content_type = serializers.CharField()