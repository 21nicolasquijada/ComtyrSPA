from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def camion_pluma(request):
    return render(request, 'camion-pluma.html')

def camion_plano(request):
    return render(request, 'camion-plano.html')