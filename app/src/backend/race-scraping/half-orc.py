import requests
from bs4 import BeautifulSoup

URL = "http://dnd5e.wikidot.com/half-orc"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

# title
title = soup.find('div', class_='page-title page-header').text
print(title + ':')

# description
desc = soup.find('strong').text
print(desc + '\n')

# features
features = soup.find('div', class_='feature')
feature_header = features.h1.span.text
print(feature_header)
features_list = features.find('div', class_='col-lg-12')
for feature in features_list.find_all('ul'):
    feature_text = feature.li.text
    text_list = feature_text.split('.')
    # print the feature and its description
    for index, text in enumerate(text_list):
        if index == 0:
            print(text + ":")
        elif index != len(text_list) - 1:
            print(text + ".", end="")
        elif index == len(text_list) - 1:
            print()