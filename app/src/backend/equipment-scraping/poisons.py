import requests
import pandas as pd
import _mysql_connector
from bs4 import BeautifulSoup

# create a dictionary to store the data
data = {
    'Poisons': [],
    'Type': [],
    'Price per Dose': []
}

URL = "http://dnd5e.wikidot.com/poisons"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

table = soup.find('table', class_='wiki-content-table')

# set the poisons categories
for index2, item in enumerate(table.find_all('th')):
    if index2 == 3:
        for i in range(17):
            data['Poisons'].append(item.text)
    if index2 == 6:
        for i in range(4):
            data['Poisons'].append(item.text)
    if index2 == 9:
        for i in range(10):
            data['Poisons'].append(item.text)
    if index2 == 12:
        for i in range(6):
            data['Poisons'].append(item.text)
c = 0
for index3, item1 in enumerate(table.find_all('td')):
    if c == 0:
        data['Poisons'].append(item1.text)
        c += 1
    elif c == 1:
        data['Type'].append(item1.text)
        c += 1
    elif c == 2:
        data['Price per Dose'].append(item1.text.replace('\xa0', ' '))
        c = 0

# convert the dictionary to a pandas DataFrame
df = pd.DataFrame(data)

# convert the pandas dataframe to a .csv file
#df.to_csv('poison.csv')

# print out the Dataframe
print(df)
