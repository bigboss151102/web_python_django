from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    return HttpResponse("<em>My Second Project</em>")

def help(request):
    my_dict = {"insert_text" : "This is Help Page !"}
    return render(request, "apptwo/help.html", context=my_dict)