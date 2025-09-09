from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('camion-pluma/', views.camion_pluma, name='camion-pluma'),
]