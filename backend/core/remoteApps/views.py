from rest_framework import permissions, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.exceptions import ParseError, NotAuthenticated
from drf_spectacular.utils import extend_schema
import logging

from .serializers import RemoteAppsSerializer


class RemoteAppsViewSet(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]

    @extend_schema(
        summary="取得 APP 資訊",
        responses=RemoteAppsSerializer
    )
    @action(detail=False, methods=['get'])
    def appInfo(self, request):
        logging.info("取得 APP 資訊")
        serializer = RemoteAppsSerializer()
        return Response({
            "app": "RemoteApps",
            "version": "1.0.0"
        })
