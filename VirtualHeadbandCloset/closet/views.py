from django.http import HttpResponse
from .models import Headband
from django.shortcuts import get_object_or_404, render

def index(request):
	return render(request, 'closet/index.html')

def try_on(request, s_id):
    hb = get_object_or_404(Headband, shopify_id=s_id)
    return render(request, 'closet/try_on.html', {'headband': hb})