import json
from my_project.errors import InvalidUsernameResponse, MissingFieldResponse, StandardResponse, IncorrectPasswordResponse, LoginSuccessResponse
from my_project.models.user_model import UserModel
import jwt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from my_project.serializers import ResponseSerializer

@api_view(['POST'])
def sign_up(request):

    if request.method == "POST":

        received_json_data = json.loads(request.body)
        sign_up_request_dict = dict(received_json_data)

        response_object = None
        if 'username' not in sign_up_request_dict:
            response_object = MissingFieldResponse('username')
        elif 'password' not in sign_up_request_dict:
            response_object = MissingFieldResponse('password')
        elif 'fullname' not in sign_up_request_dict:
            response_object = MissingFieldResponse('fullname')

        if response_object != None:
            response_data = ResponseSerializer(response_object).data
            return Response(response_data, status=response_object.status_code, content_type=response_object.content_type)
        else:
            user = UserModel(
                fullname=sign_up_request_dict['fullname'],
                username=sign_up_request_dict['username'],
                password=sign_up_request_dict['password']
            )
            user.save()
            response_object = StandardResponse(
                message="Successfully signed up")
            
            response_data = ResponseSerializer(response_object).data
            return Response(response_data, content_type=response_object.content_type)

    else:
        return Response("Invalid Request", status=400,content_type=response_object.content_type)

@api_view(['POST'])
def login(request):
    if request.method == "POST":

        print(request.body)

        received_json_data = json.loads(request.body)
        login_request_dict = dict(received_json_data)

        response_object = None
        if 'username' not in login_request_dict:
            response_object = MissingFieldResponse('username')
        elif 'password' not in login_request_dict:
            response_object = MissingFieldResponse('password')

        if response_object != None:
            return Response(response_object, status=response_object.status_code, content_type=response_object.content_type)
        else:
            try:
                myobject = UserModel.objects.get(
                    username=login_request_dict['username'])

                print(myobject)

                if myobject.password != login_request_dict['password']:
                    response_object = IncorrectPasswordResponse()
                    return Response(response_object, status=response_object.status_code, content_type=response_object.content_type)
                else:
                    response_object = StandardResponse(
                        message="Successfully logged in")

                    response_object = ResponseSerializer(response_object).data
                    response = Response(response_object, content_type='application/json')
                    encoded_jwt = jwt.encode({ 'userId': myobject.id }, 'secret', algorithm='HS256')
                    response['Access-Token-Allow-Headers'] = "token"
                    response['token'] = encoded_jwt
                    return response

            except Exception as e:
                print(str(e))
                response_object = InvalidUsernameResponse()
                response_object = ResponseSerializer(response_object).data
                return Response(response_object)

    else:
        return Response("Invalid Request", status=400)
