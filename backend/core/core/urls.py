from django.urls import path, include
from rest_framework.routers import DefaultRouter
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView

from remoteApps.views import RemoteAppsViewSet

router = DefaultRouter()
router.register(r'remoteApps', RemoteAppsViewSet, basename='remoteApps')

urlpatterns = [
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    path('', include(router.urls)),
    path('swagger/', SpectacularSwaggerView.as_view(url_name='schema'),
         name='swagger-ui'),
    path('redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]
