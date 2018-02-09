# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render


# Create your views here.

def index_view(request):
    context = {}
    template = 'index.html'

    return render(request, template, context)


def page1_view(request):
    context = {}
    template = 'page1.html'

    return render(request, template, context)


def page2_view(request):
    context = {}
    template = 'page2.html'

    return render(request, template, context)


def page3_view(request):
    context = {}
    template = 'page3.html'

    return render(request, template, context)


def page4_view(request):
    context = {}
    template = 'page4.html'

    return render(request, template, context)


def page5_view(request):
    context = {}
    template = 'page5.html'

    return render(request, template, context)
