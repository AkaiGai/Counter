from django.shortcuts import render
from rest_framework.decorators import api_view
from django.http import HttpResponse
from .models import Counter

@api_view(['GET'])
def count_api(request):
  
  count, created = Counter.objects.get_or_create(id=1)
  count.value += 1
  count.save()
  return HttpResponse(str(count.value), content_type='text/plain')


