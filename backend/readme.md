# Login/Sign-Up Django Implementation

## Installation Steps
- Run `pip install -r requirements.txt` to install dependencies.
- Once dependencies are installed, run `python manage.py runserver` to run the Django application.

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