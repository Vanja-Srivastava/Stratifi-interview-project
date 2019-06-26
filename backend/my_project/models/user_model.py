import djongo.models as models

class UserModel(models.Model):

    fullname = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)