import requests
from bs4 import BeautifulSoup
import pandas as pd

URL = "http://dnd5e.wikidot.com/armor"
page = requests.get(URL).text
soup = BeautifulSoup(page, "html.parser")
results = soup.find("div", id="page-content")
td = results.findAll("td")

armor = {
    "name": [],
    "armor class": [],
    "strength": [],
    "stealth": [],
    "weight": [],
    "cost": []
}

for i in range(0, len(td)-12, 6):
    armor["name"].append(td[i].text)
    armor["armor class"].append(td[i+1].text)
    armor["strength"].append(td[i+2].text)
    armor["stealth"].append(td[i+3].text)
    armor["weight"].append(td[i+4].text)
    armor["cost"].append(td[i+5].text)
# print(results)

df = pd.DataFrame(armor)
df = df.reset_index()

with pd.option_context('display.max_rows', None,
                       'display.max_columns', None,
                       'display.precision', 3,
                       ):
    print(df)

URL = "http://dnd5e.wikidot.com/weapons"
page = requests.get(URL).text
soup = BeautifulSoup(page, "html.parser")
results = soup.find("div", id="page-content")
td = results.findAll("td")

weapons = {
    "name": [],
    "cost": [],
    "damage": [],
    "weight": [],
    "properties": []
}

ammunition = {
    "ammo": [],
    "cost": [],
    "weight": []
}

print(len(td))
for i in range(0, len(td)-39, 5):
    weapons["name"].append(td[i].text)
    weapons["cost"].append(td[i+1].text)
    weapons["damage"].append(td[i+2].text)
    weapons["weight"].append(td[i+3].text)
    weapons["properties"].append(td[i+4].text)

for i in range(len(td)-39, len(td)-39+12, 3):
    print(i, end=" ")
    print(td[i])
    ammunition["ammo"].append(td[i].text)
    ammunition["cost"].append(td[i+1].text)
    ammunition["weight"].append(td[i+2].text)

df1 = pd.DataFrame(weapons)
df1 = df1.reset_index()
df2 = pd.DataFrame(ammunition)
df2 = df2.reset_index()

df.to_csv("armor.csv")
df1.to_csv("weapons.csv")
df2.to_csv("ammunition.csv")