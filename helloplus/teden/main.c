import requests
from bs4 import BeautifulSoup

URL = "http://dnd5e.wikidot.com/half-orc"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

# grab the features list
results = soup.find("div", class_="col-lg-12")

print(results.prettify())
