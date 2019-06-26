import json

class StandardResponse:

    def __init__(self, status_code=200, status="Success", message=""):
        self.content_type='application/json'
        self.status_code = status_code
        self.status = status
        self.message = message

    def __str__(self):
        output_dict = dict(status= self.status, message= self.message)
        return json.dumps(output_dict, indent=4)