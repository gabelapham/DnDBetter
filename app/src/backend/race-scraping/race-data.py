import requests
import pandas as pd
import _mysql_connector
from bs4 import BeautifulSoup

# create a dictionary to store the data
data = {
    'Race': [],
    'Description': [],
    'Features': [],
    'Subraces': [],
    'S1desc': [],
    'S1f': [],
    'S2desc': [],
    'S2f': [],
    'Tinker_Devices': []
}

d_ancestry = {
    'Dragon Color': [],
    'Damage Type': [],
    'Breath Weapon': []
}

# dragonborn
URL = "http://dnd5e.wikidot.com/dragonborn"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

# title
title = soup.find('div', class_='page-title page-header').text
data['Race'].append(title)

page_content = soup.find('div', id='page-content')
for index, content in enumerate(page_content):
    # description
    if index == 5:
        data['Description'].append(content.text)
    # features
    if index % 2 != 0 and index > 5 and index < 18:
        data['Features'].append(content.text.replace('\n', ''))
    # draconic ancestry table
    if index == 19:
        table = soup.find('table', class_='wiki-content-table')
        c = 0
        for index2, item in enumerate(table.find_all('td')):
            if c == 0:
                d_ancestry['Dragon Color'].append(item.text)
                c+=1
            elif c == 1:
                d_ancestry['Damage Type'].append(item.text)
                c+=1
            elif c == 2:
                d_ancestry['Breath Weapon'].append(item.text)
                c = 0
    if index % 2 != 0 and index > 19 and index < 26:
        data['Features'].append(content.text.replace('\n', ''))

# make sure all arrays are of the same length
for i in range(8):
    data['Race'].append(title)
    data['Description'].append(pd.NA)
for i in range(9):
    data['Subraces'].append(pd.NA)
    data['S1desc'].append(pd.NA)
    data['S1f'].append(pd.NA)
    data['S2desc'].append(pd.NA)
    data['S2f'].append(pd.NA)
    data['Tinker_Devices'].append(pd.NA)

# dwarf
URL = "http://dnd5e.wikidot.com/dwarf"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

# title
title = soup.find('div', class_='page-title page-header').text
data['Race'].append(title)

page_content = soup.find('div', id='page-content')
for index, content in enumerate(page_content):
    # description
    if index == 5:
        data['Description'].append(content.text.replace('\xa0', ' '))
    # features
    if index % 2 != 0 and index > 5 and index < 28:
        data['Features'].append(content.text.replace('\n', ''))
    # subraces
    # hill dwarf
    if index == 29:
        data['Subraces'].append(content.text)
    if index == 31:
        data['S1desc'].append(content.text)
    if index == 33 or index == 35:
        data['S1f'].append(content.text.replace('\n', ''))
    # mountain dwarf
    if index == 37:
        data['Subraces'].append(content.text)
    if index == 39:
        data['S2desc'].append(content.text)
    if index == 41 or index == 43:
        data['S2f'].append(content.text.replace('\n', ''))

# make sure all arrays are of the same length
for i in range(10):
    data['Race'].append(title)
    data['Description'].append(pd.NA)
    data['S1desc'].append(pd.NA)
    data['S2desc'].append(pd.NA)
for i in range(9):
    data['Subraces'].append(pd.NA)
    data['S1f'].append(pd.NA)
    data['S2f'].append(pd.NA)
for i in range(11):
    data['Tinker_Devices'].append(pd.NA)

# elf
URL = "http://dnd5e.wikidot.com/elf"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

# title
title = soup.find('div', class_='page-title page-header').text
data['Race'].append(title)

page_content = soup.find('div', id='page-content')
for index, content in enumerate(page_content):
    # description
    if index == 5:
        data['Description'].append(content.text.replace('\xa0', ' '))
    # features
    if index % 2 != 0 and index > 6 and index < 26:
        data['Features'].append(content.text.replace('\n', ''))
    # subraces
    # high elf
    if index == 43:
        data['Subraces'].append(content.text)
    if index == 45 or index == 47:
        data['S1desc'].append(content.text)
    if index % 2 != 0 and index > 47 and index < 56:
        data['S1f'].append(content.text.replace('\n', ''))
    # wood elf
    if index == 57:
        data['Subraces'].append(content.text)
    if index == 59 or index == 61:
        data['S2desc'].append(content.text)
    if index % 2 != 0 and index > 61 and index < 70:
        data['S2f'].append(content.text.replace('\n', ''))

# make sure all arrays are of the same length
for i in range(9):
    data['Race'].append(title)
    data['Description'].append(pd.NA)
for i in range(8):
    data['Subraces'].append(pd.NA)
    data['S1desc'].append(pd.NA)
    data['S2desc'].append(pd.NA)
for i in range(6):
    data['S1f'].append(pd.NA)
    data['S2f'].append(pd.NA)
for i in range(10):
    data['Tinker_Devices'].append(pd.NA)

# gnome
URL = "http://dnd5e.wikidot.com/gnome"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

# title
title = soup.find('div', class_='page-title page-header').text
data['Race'].append(title)

page_content = soup.find('div', id='page-content')
for index, content in enumerate(page_content):
    # description
    if index == 5:
        data['Description'].append(content.text.replace('\xa0', ' '))
    # features
    if index % 2 != 0 and index > 6 and index < 22:
        data['Features'].append(content.text.replace('\n', ''))
    # subraces
    # forest gnome
    if index == 23:
        data['Subraces'].append(content.text + ' Gnome')
    if index == 25:
        data['S1desc'].append(content.text)
    if index % 2 != 0 and index > 25 and index < 32:
        data['S1f'].append(content.text.replace('\n', ''))
    # forest gnome
    if index == 33:
        data['Subraces'].append(content.text + ' Gnome')
    if index == 35:
        data['S2desc'].append(content.text)
    if index % 2 != 0 and index > 35 and index < 40:
        data['S2f'].append(content.text.replace('\n', ''))
    # getting the tinker feature
    # parse the tinker devices and add them
    if index == 41:
        tinker = content.text.split('\n')
        data['S2f'].append(tinker[1])
        data['Tinker_Devices'].append(tinker[3])
        data['Tinker_Devices'].append(tinker[4])
        data['Tinker_Devices'].append(tinker[5])
        data['Tinker_Devices'].append(tinker[6])

# make sure all arrays are of the same length
for i in range(7):
    data['Race'].append(title)
    data['Description'].append(pd.NA)
    data['S1desc'].append(pd.NA)
    data['S2desc'].append(pd.NA)
for i in range(6):
    data['Subraces'].append(pd.NA)
for i in range(5):
    data['S1f'].append(pd.NA)
    data['S2f'].append(pd.NA)
for i in range(4):
    data['Tinker_Devices'].append(pd.NA)

# half-elf
URL = "http://dnd5e.wikidot.com/half-elf"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

# title
title = soup.find('div', class_='page-title page-header').text
data['Race'].append(title)

page_content = soup.find('div', id='page-content')
for index, content in enumerate(page_content):
    # description
    if index == 5:
        data['Description'].append(content.text)
    # features
    if index % 2 != 0 and index > 5 and index < 22:
        data['Features'].append(content.text.replace('\n', ''))
    # feature: skill versatility
    if index == 23:
        mark1 = content.find('li')
        versatility = mark1.find('ul')
        for index2, point in enumerate(versatility):
            if index2 == 1:
                data['Features'].append(point.text.replace('\n', '').replace(' (General)', ''))

# make sure all arrays are of the same length
for i in range(8):
    data['Race'].append(title)
    data['Description'].append(pd.NA)
for i in range(9):
    data['Subraces'].append(pd.NA)
    data['S1desc'].append(pd.NA)
    data['S1f'].append(pd.NA)
    data['S2desc'].append(pd.NA)
    data['S2f'].append(pd.NA)
    data['Tinker_Devices'].append(pd.NA)

# half-orc
URL = "http://dnd5e.wikidot.com/half-orc"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

# title
title = soup.find('div', class_='page-title page-header').text
data['Race'].append(title)

page_content = soup.find('div', id='page-content')
for index, content in enumerate(page_content):
    # description
    if index == 5:
        data['Description'].append(content.text)
    # features
    if index % 2 != 0 and index > 5 and index < 26:
        data['Features'].append(content.text.replace('\n', ''))

# make sure all arrays are of the same length
for i in range(9):
    data['Race'].append(title)
    data['Description'].append(pd.NA)
for i in range(10):
    data['Subraces'].append(pd.NA)
    data['S1desc'].append(pd.NA)
    data['S1f'].append(pd.NA)
    data['S2desc'].append(pd.NA)
    data['S2f'].append(pd.NA)
    data['Tinker_Devices'].append(pd.NA)

# halfling
URL = "http://dnd5e.wikidot.com/halfling"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

# title
title = soup.find('div', class_='page-title page-header').text
data['Race'].append(title)

page_content = soup.find('div', id='page-content')
for index, content in enumerate(page_content):
    # description
    if index == 5:
        data['Description'].append(content.text.replace('\xa0', ' '))
    # features
    if index % 2 != 0 and index > 6 and index < 24:
        data['Features'].append(content.text.replace('\n', ''))
    # subraces
    # lightfoot halfling
    if index == 25:
        data['Subraces'].append(content.text + ' Halfling')
    if index == 27 or index == 29:
        data['S1desc'].append(content.text)
    if index % 2 != 0 and index > 29 and index < 34:
        data['S1f'].append(content.text.replace('\n', ''))
    # stout halfling
    if index == 35:
        data['Subraces'].append(content.text + ' Halfling')
    if index == 37:
        data['S2desc'].append(content.text)
    if index % 2 != 0 and index > 37 and index < 42:
        data['S2f'].append(content.text.replace('\n', ''))

# make sure all arrays are of the same length
for i in range(8):
    data['Race'].append(title)
    data['Description'].append(pd.NA)
    data['S2desc'].append(pd.NA)
for i in range(7):
    data['Subraces'].append(pd.NA)
    data['S1desc'].append(pd.NA)
    data['S1f'].append(pd.NA)
    data['S2f'].append(pd.NA)
for i in range(9):
    data['Tinker_Devices'].append(pd.NA)

# human
URL = "http://dnd5e.wikidot.com/lineage:human"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

# title
title = soup.find('div', class_='page-title page-header').text
data['Race'].append(title)

page_content = soup.find('div', id='page-content')
for index, content in enumerate(page_content):
    # description
    if index == 5:
        data['Description'].append(content.text.replace('\xa0', ' '))
    # features
    if index % 2 != 0 and index > 5 and index < 18:
        data['Features'].append(content.text.replace('\n', ''))

# make sure all arrays are of the same length
for i in range(5):
    data['Race'].append(title)
    data['Description'].append(pd.NA)
for i in range(6):
    data['Subraces'].append(pd.NA)
    data['S1desc'].append(pd.NA)
    data['S1f'].append(pd.NA)
    data['S2desc'].append(pd.NA)
    data['S2f'].append(pd.NA)
    data['Tinker_Devices'].append(pd.NA)

# tiefling
URL = "http://dnd5e.wikidot.com/tiefling"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

# title
title = soup.find('div', class_='page-title page-header').text
data['Race'].append(title)

page_content = soup.find('div', id='page-content')
for index, content in enumerate(page_content):
    # description
    if index == 5:
        data['Description'].append(content.text.replace('\xa0', ' '))
    # features
    if index % 2 != 0 and index > 6 and index < 22:
        data['Features'].append(content.text.replace('\n', ''))
    # subrace
    # bloodline of asmodeus tiefling
    if index == 23:
        data['Subraces'].append(content.text + ' Tiefling')
    if index == 25:
        data['S1desc'].append(content.text)
    if index == 27 or index == 29:
        data['S1f'].append(content.text.replace('\n', ''))

# make sure all arrays are of the same length
for i in range(7):
    data['Race'].append(title)
    data['Description'].append(pd.NA)
    data['Subraces'].append(pd.NA)
    data['S1desc'].append(pd.NA)
for i in range(6):
    data['S1f'].append(pd.NA)
for i in range(8):
    data['S2desc'].append(pd.NA)
    data['S2f'].append(pd.NA)
    data['Tinker_Devices'].append(pd.NA)

# convert the dictionary to a pandas DataFrame
df = pd.DataFrame(data)
da = pd.DataFrame(d_ancestry)

# convert the pandas Dataframes to .csv files
df.to_csv('racedata.csv')
da.to_csv('d_ancestry.csv')

