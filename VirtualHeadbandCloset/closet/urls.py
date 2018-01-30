from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:s_id>/', views.try_on, name='try_on')
]


