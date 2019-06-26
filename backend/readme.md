# Login/Sign-Up Django Implementation

## Installation Steps
if you have python2 installed on your machine:
- Run `pip install -r requirements.txt` to install dependencies.
You will have to install sqlparse version 0.2.4
- If sqlparse is already installed then first uninstall it- Run 'pip uninstall sqlparse'
- Run 'pip install sqlparse==0.2.4' to install the required version for the app.
- Once dependencies are installed, run `python manage.py runserver` to run the Django application.

If you have both python 2 and python3 installed then on your machine:
- Run `pip3 install -r requirements.txt` to install dependencies.
You will have to install sqlparse version 0.2.4
- If sqlparse is already installed then first uninstall it- Run 'pip3 uninstall sqlparse'
- Run 'pip3 install sqlparse==0.2.4' to install the required version for the app.
- Once dependencies are installed, run `python3 manage.py runserver` to run the Django application.



### Sign-Up API
```
    POST http://localhost:8000/sign-up
    {
        "fullname": "John Doe",
        "username" : "johndoe",
        "password" : "password"
    }
```

### Login API
```
    POST http://localhost:8000/login
    {
        "username" : "johndoe",
        "password" : "password"
    }
```
