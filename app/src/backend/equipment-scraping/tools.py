import requests
import pandas as pd
import _mysql_connector
from bs4 import BeautifulSoup

# create a dictionary to store the data
data = {
    'Tool Set': [],
    'Category': [],
    'Cost': [],
    'Weight': []
}

URL = "http://dnd5e.wikidot.com/tools"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

table = soup.find('table', class_='wiki-content-table')

# set the tool categories
for index2, item in enumerate(table.find_all('th')):
    if index2 == 3:
        for i in range(17):
            data['Category'].append(item.text)
    if index2 == 6:
        for i in range(4):
            data['Category'].append(item.text)
    if index2 == 9:
        for i in range(10):
            data['Category'].append(item.text)
    if index2 == 12:
        for i in range(6):
            data['Category'].append(item.text)
c = 0
for index3, item1 in enumerate(table.find_all('td')):
    if c == 0:
        data['Tool Set'].append(item1.text)
        c += 1
    elif c == 1:
        data['Cost'].append(item1.text)
        c += 1
    elif c == 2:
        data['Weight'].append(item1.text.replace('\xa0', ' '))
        c = 0

# convert the dictionary to a pandas DataFrame
df = pd.DataFrame(data)

# convert the pandas dataframe to a .csv file
df.to_csv('tool.csv')

# print out the Dataframe
print(df)
