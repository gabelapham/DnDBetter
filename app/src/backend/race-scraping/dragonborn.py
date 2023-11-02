import requests
import pandas as pd
from bs4 import BeautifulSoup

URL = "http://dnd5e.wikidot.com/dragonborn"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

# title
title = soup.find('div', class_='page-title page-header').text
print(title + ':')

# description
desc = soup.find('strong').text
print(desc + '\n')

# data
data = soup.find('div', class_='feature')
# iterate through the rows to access the features and variants
i = 1
for section in data.find_all('div', class_='row'):
    # iteration 1 is for features
    if i == 1:
        feature_header = section.h1.span.text
        print(feature_header)
        features_list = section.find('div', class_='col-lg-12')
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
    # iteration 2 is for the standard dragon
    if i == 2:
        print()
        variant1_header = section.h3.span.text
        print(variant1_header)
        variant1_list = section.find('div', class_='col-lg-12')
        for feature1 in variant1_list.find_all('ul'):
            feature1_text = feature1.li.text
            text1_list = feature1.text.split('.')
            # print the feature and its description
            for index, text in enumerate(text1_list):
                if index == 0:
                    print(text + ":")
                elif index != len(text1_list) - 1:
                    print(text + ".", end="")
                elif index == len(text1_list) - 1:
                    print()
    i+=1