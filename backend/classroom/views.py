from django.http import JsonResponse
from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

def api_root(request):
    return JsonResponse({"message": "Welcome to the Classroom Management API"})

def favicon(request):
    return JsonResponse({}, status=204)
