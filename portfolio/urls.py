from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('contact/submit/', views.contact_submit, name='contact_submit'),
    path('blog/', views.blog_list, name='blog_list'),
    path('blog/<slug:slug>/', views.blog_detail, name='blog_detail'),
]
