from .standard_response import StandardResponse

class IncorrectPasswordResponse(StandardResponse):

    def __init__(self):
            self.status_code = 400
            self.status = "Error"
            self.message = "Incorrect Password"
