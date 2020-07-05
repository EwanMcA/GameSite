"""GameSite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from api import views

urlpatterns = [
    path('core/', include('core.urls')),
    path('admin/', admin.site.urls),
    path('new_game', views.new_game, name='new_game'),
    path('<int:game_id>/players', views.players, name='players'),
    path('<int:game_id>/new_player', views.new_player, name='new_player'),
    path('board/<int:id>', views.board, name='board'),
]
