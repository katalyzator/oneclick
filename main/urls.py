from django.conf.urls import url, include

from main.views import index_view, page4_view, page1_view, page2_view, page3_view, page5_view

urlpatterns = [
    url('^$', index_view, name='index'),
    url(r'^page1/$', page1_view, name='page1'),
    url(r'^page2/$', page2_view, name='page2'),
    url(r'^page3/$', page3_view, name='page3'),
    url(r'^page4/$', page4_view, name='page4'),
    url(r'^page5/$', page5_view, name='page5'),
]
