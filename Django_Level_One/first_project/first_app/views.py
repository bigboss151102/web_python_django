from django.shortcuts import render
from django.http import HttpResponse
from first_app.models import Topic, AcessRecord, Webpage

# Create your views here.

def index(request):
    webpage_list = AcessRecord.objects.order_by('date')
    date_dict = {'access_records': webpage_list}
    return render(request, "first_app/index.html", context=date_dict)