import requests
from bs4 import BeautifulSoup
import pandas as pd

URL = "http://dnd5e.wikidot.com/adventuring-gear"
page = requests.get(URL).text
soup = BeautifulSoup(page, "html.parser")
results = soup.find("div", id="page-content")
td = results.findAll("td")

gear = {
    "gear": [],
    "cost": [],
    "contents": []
}

for i in range(0, len(td)-290, 3):
    gear["gear"].append(td[i].text)
    gear["cost"].append(td[i+1].text)
    gear["contents"].append(td[i+2].text)

df = pd.DataFrame(gear)
df = df.reset_index()


items = {
    "name": [],
    "cost": [],
    "weight": []
}

for i in range(len(td)-289, len(td)-290+219, 3):
    items["name"].append(td[i].text)
    items["cost"].append(td[i+1].text)
    items["weight"].append(td[i+2].text)

df2 = pd.DataFrame(items)
df2 = df2.reset_index()

df.to_csv("gear.csv")
df2.to_csv("items.csv")
