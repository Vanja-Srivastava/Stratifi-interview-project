from my_project.errors.standard_response import StandardResponse

class InvalidUsernameResponse(StandardResponse):

    def __init__(self):
        self.content_type = "application/json"
        self.status_code = 400
        self.status = "Error"
        self.message = "Invalid Username"