from my_project.errors.standard_response import StandardResponse

class MissingFieldResponse(StandardResponse):

    def __init__(self, missing_field_name):
        self.status_code = 400
        self.status = "Error"
        self.message = missing_field_name + " is a required field"