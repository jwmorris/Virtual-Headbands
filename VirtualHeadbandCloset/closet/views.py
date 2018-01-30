from django.http import HttpResponse
from .models import Headband
from django.shortcuts import get_object_or_404, render

def index(request):
    return HttpResponse("Welcome to the Headbands of Hope Virtual Closet!")

def try_on(request, s_id):
    hb = get_object_or_404(Headband, shopify_id=s_id)
    return render(request, 'closet/try_on.html', {'headband': hb})