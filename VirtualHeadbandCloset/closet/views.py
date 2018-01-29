from django.http import HttpResponse


def index(request):
    return HttpResponse("Welcome to the Headbands of Hope Virtual Closet!")
