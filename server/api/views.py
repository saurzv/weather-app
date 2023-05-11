import requests
import os
from django.http import JsonResponse
from dotenv import load_dotenv

load_dotenv()

def index(request):
    return JsonResponse({}, status=200)

def getWeather(request, **kwargs):

    city = kwargs['city']
    if not city :
        return JsonResponse({'error' : 'no city provided'}, status=400)

    api_key = os.environ.get('API_KEY')

    geo_url = f'http://api.openweathermap.org/geo/1.0/direct?q={city}&limit=1&appid={api_key}'
    rsp = requests.get(geo_url)

    if rsp.status_code == 200 :
        data = rsp.json()

        lat = data[0]['lat']
        lon = data[0]['lon']

        url = f'http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={api_key}&units=metric'

        rsp = requests.get(url)

        if rsp.status_code == 200 :

            data = rsp.json()
            print(data)
            return JsonResponse(data, status=200)
        else :
            return JsonResponse({'error' : 'Some error occured'}, status=400)
    
    else :
        return JsonResponse({'error' : 'Some error occured'}, status=400)