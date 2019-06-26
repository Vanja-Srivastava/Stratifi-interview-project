from .standard_response import StandardResponse

class LoginSuccessResponse(StandardResponse):

    def __init__(self, user):
        self.status = "Success"
        self.message = "Login Successful"
        self.user = user