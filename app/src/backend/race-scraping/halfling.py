import requests
from bs4 import BeautifulSoup

URL = "http://dnd5e.wikidot.com/halfling"
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
            # print the feature
            print(text_list[0] + ': ')
            # print the feature description
            print(text_list[1])
    # iteration 2 is for lightfoot halfling
    if i == 2:
        print()
        variant1_header = section.h3.span.text
        print(variant1_header, end='')
        variant1_list = section.find('div', class_='col-lg-12')
        for feature1 in variant1_list.find_all('ul'):
            feature1_text = feature1.li.text
            text1_list = feature1.text.split('.')
            # print the feature
            print(text1_list[0] + ': ')
            # print the feature description
            print(text1_list[1], end='')
    # iteration 3 is for stout halfling
    if i == 3:
        print('\n')
        variant2_header = section.h3.span.text
        print(variant2_header, end='')
        variant2_list = section.find('div', class_='col-lg-12')
        for feature2 in variant2_list.find_all('ul'):
            feature2_text = feature2.li.text
            text2_list = feature2.text.split('.')
            # print the feature
            print(text2_list[0] + ': ')
            # print the feature description
            print(text2_list[1], end='')
    i += 1