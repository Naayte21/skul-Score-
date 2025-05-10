from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet, api_root, favicon

router = DefaultRouter()
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('', api_root),
    path('favicon.ico', favicon),
    path('api/', include(router.urls)),
]
