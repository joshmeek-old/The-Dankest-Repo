# This is written for PYTHON 3
# Don't forget to install requests package

import requests
import json
import urllib

customerId = 'your customerId here'
apiKey = 'your apiKey here'

url = 'http://api.reimaginebanking.com/enterprise/withdrawals?key=9353cf37bda3beedf35c7964ea1e1f3d'#.format(customerId,apiKey)

response = urllib.urlopen(url)
data = json.loads(response.read())

with open('withdrawals.json', 'w') as outfile:
    json.dump(data, outfile)
