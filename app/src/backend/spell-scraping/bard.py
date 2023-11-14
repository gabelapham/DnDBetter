import requests
from bs4 import BeautifulSoup
import pandas as pd
from sqlalchemy import create_engine

host = "database-1.cmqlznpoxxy9.us-east-2.rds.amazonaws.com"
user =  "admin"
password = "DnDisAwesome"
db = "dndbetter"


url = "http://dnd5e.wikidot.com/spells:bard"
response = requests.get(url)

html_content = response.text

soup = BeautifulSoup(html_content, "lxml")

content = soup.find("div", class_ = "yui-content")

title = ["level", "spell_name", "description","school", "casting_time", "range", "duration", "component"]

# spell_df = pd.DataFrame(columns=features)

bardSpell = []
# bardSpell.append(title)

if content:

    cantrip = content.find("div", id= "wiki-tab-0-0")
    if cantrip:
        
        itr = 0
        for individual_spell in cantrip.find_all("tr"):
            features = []
            for element in individual_spell.find_all("td"):
    
                if itr == 0:
                    level = 0
                    features.append(level)
                    spell_name = element.text
                    features.append(spell_name)

                    anchor_tag = element.find("a")
                    description_url = anchor_tag.get("href")
                    description_url = "http://dnd5e.wikidot.com" + description_url
                    # print(description_url)
                    description_page = requests.get(description_url)
                    description_soup = BeautifulSoup(description_page.text, "lxml")
                    page_content = description_soup.find("div", id="page-content")
                    
                    content_p_count = 0
                    for paragraph in page_content.find_all("p"):
                        content_p_count += 1

                    content_itr = 0
                    spell_description = ""
                    for paragraph in page_content.find_all("p"):
                        if content_itr >= 3 and content_itr < content_p_count - 1:
                            spell_description = spell_description + paragraph.text
                            
                            # f = open("output.txt", "a")
                            # f.write(paragraph.text + "\n")
                            # f.close()
                        content_itr += 1
                    # print(spell_description)
                    features.append(spell_description)

                elif itr == 1:
                    school = element.text
                    features.append(school)
                elif itr == 2:
                    cast_time = element.text
                    features.append(cast_time)
                elif itr == 3:
                    spell_range = element.text
                    features.append(spell_range)
                elif itr == 4:
                    duration = element.text
                    features.append(duration)
                elif itr == 5:
                    component = element.text
                    features.append(component)
                    itr = 0
                    # print("spell:  ", spell_name)
                    # print("school:  ", school)
                    # print("cast:  ", cast_time)
                    # print("range:  ", spell_range)
                    # print("duration:", duration)
                    # print("component", component)
                    bardSpell.append(features)

                    continue

                itr += 1

    cantrip = content.find("div", id= "wiki-tab-0-1")
    if cantrip:
        
        itr = 0
        for individual_spell in cantrip.find_all("tr"):
            features = []
            for element in individual_spell.find_all("td"):
    
                if itr == 0:
                    level = 1
                    features.append(level)
                    spell_name = element.text
                    features.append(spell_name)

                    anchor_tag = element.find("a")
                    description_url = anchor_tag.get("href")
                    description_url = "http://dnd5e.wikidot.com" + description_url
                    # print(description_url)
                    description_page = requests.get(description_url)
                    description_soup = BeautifulSoup(description_page.text, "lxml")
                    page_content = description_soup.find("div", id="page-content")
                    
                    content_p_count = 0
                    for paragraph in page_content.find_all("p"):
                        content_p_count += 1

                    content_itr = 0
                    spell_description = ""
                    for paragraph in page_content.find_all("p"):
                        if content_itr >= 3 and content_itr < content_p_count - 1:
                            spell_description = spell_description + paragraph.text
                            
                            # f = open("output.txt", "a")
                            # f.write(paragraph.text + "\n")
                            # f.close()
                        content_itr += 1
                    # print(spell_description)
                    features.append(spell_description)

                elif itr == 1:
                    school = element.text
                    features.append(school)
                elif itr == 2:
                    cast_time = element.text
                    features.append(cast_time)
                elif itr == 3:
                    spell_range = element.text
                    features.append(spell_range)
                elif itr == 4:
                    duration = element.text
                    features.append(duration)
                elif itr == 5:
                    component = element.text
                    features.append(component)
                    itr = 0
                    # print("spell:  ", spell_name)
                    # print("school:  ", school)
                    # print("cast:  ", cast_time)
                    # print("range:  ", spell_range)
                    # print("duration:", duration)
                    # print("component", component)
                    bardSpell.append(features)

                    continue

                itr += 1

    cantrip = content.find("div", id= "wiki-tab-0-2")
    if cantrip:
        
        itr = 0
        for individual_spell in cantrip.find_all("tr"):
            features = []
            for element in individual_spell.find_all("td"):
    
                if itr == 0:
                    level = 2
                    features.append(level)
                    spell_name = element.text
                    features.append(spell_name)

                    anchor_tag = element.find("a")
                    description_url = anchor_tag.get("href")
                    description_url = "http://dnd5e.wikidot.com" + description_url
                    # print(description_url)
                    description_page = requests.get(description_url)
                    description_soup = BeautifulSoup(description_page.text, "lxml")
                    page_content = description_soup.find("div", id="page-content")
                    
                    content_p_count = 0
                    for paragraph in page_content.find_all("p"):
                        content_p_count += 1

                    content_itr = 0
                    spell_description = ""
                    for paragraph in page_content.find_all("p"):
                        if content_itr >= 3 and content_itr < content_p_count - 1:
                            spell_description = spell_description + paragraph.text
                            
                            # f = open("output.txt", "a")
                            # f.write(paragraph.text + "\n")
                            # f.close()
                        content_itr += 1
                    # print(spell_description)
                    features.append(spell_description)

                elif itr == 1:
                    school = element.text
                    features.append(school)
                elif itr == 2:
                    cast_time = element.text
                    features.append(cast_time)
                elif itr == 3:
                    spell_range = element.text
                    features.append(spell_range)
                elif itr == 4:
                    duration = element.text
                    features.append(duration)
                elif itr == 5:
                    component = element.text
                    features.append(component)
                    itr = 0
                    # print("spell:  ", spell_name)
                    # print("school:  ", school)
                    # print("cast:  ", cast_time)
                    # print("range:  ", spell_range)
                    # print("duration:", duration)
                    # print("component", component)
                    bardSpell.append(features)

                    continue

                itr += 1

    cantrip = content.find("div", id= "wiki-tab-0-3")
    if cantrip:
        
        itr = 0
        for individual_spell in cantrip.find_all("tr"):
            features = []
            for element in individual_spell.find_all("td"):
    
                if itr == 0:
                    level = 3
                    features.append(level)
                    spell_name = element.text
                    features.append(spell_name)

                    anchor_tag = element.find("a")
                    description_url = anchor_tag.get("href")
                    description_url = "http://dnd5e.wikidot.com" + description_url
                    # print(description_url)
                    description_page = requests.get(description_url)
                    description_soup = BeautifulSoup(description_page.text, "lxml")
                    page_content = description_soup.find("div", id="page-content")
                    
                    content_p_count = 0
                    for paragraph in page_content.find_all("p"):
                        content_p_count += 1

                    content_itr = 0
                    spell_description = ""
                    for paragraph in page_content.find_all("p"):
                        if content_itr >= 3 and content_itr < content_p_count - 1:
                            spell_description = spell_description + paragraph.text
                            
                            # f = open("output.txt", "a")
                            # f.write(paragraph.text + "\n")
                            # f.close()
                        content_itr += 1
                    # print(spell_description)
                    features.append(spell_description)

                elif itr == 1:
                    school = element.text
                    features.append(school)
                elif itr == 2:
                    cast_time = element.text
                    features.append(cast_time)
                elif itr == 3:
                    spell_range = element.text
                    features.append(spell_range)
                elif itr == 4:
                    duration = element.text
                    features.append(duration)
                elif itr == 5:
                    component = element.text
                    features.append(component)
                    itr = 0
                    # print("spell:  ", spell_name)
                    # print("school:  ", school)
                    # print("cast:  ", cast_time)
                    # print("range:  ", spell_range)
                    # print("duration:", duration)
                    # print("component", component)
                    bardSpell.append(features)

                    continue

                itr += 1

    cantrip = content.find("div", id= "wiki-tab-0-4")
    if cantrip:
        
        itr = 0
        for individual_spell in cantrip.find_all("tr"):
            features = []
            for element in individual_spell.find_all("td"):
    
                if itr == 0:
                    level = 4
                    features.append(level)
                    spell_name = element.text
                    features.append(spell_name)

                    anchor_tag = element.find("a")
                    description_url = anchor_tag.get("href")
                    description_url = "http://dnd5e.wikidot.com" + description_url
                    # print(description_url)
                    description_page = requests.get(description_url)
                    description_soup = BeautifulSoup(description_page.text, "lxml")
                    page_content = description_soup.find("div", id="page-content")
                    
                    content_p_count = 0
                    for paragraph in page_content.find_all("p"):
                        content_p_count += 1

                    content_itr = 0
                    spell_description = ""
                    for paragraph in page_content.find_all("p"):
                        if content_itr >= 3 and content_itr < content_p_count - 1:
                            spell_description = spell_description + paragraph.text
                            
                            # f = open("output.txt", "a")
                            # f.write(paragraph.text + "\n")
                            # f.close()
                        content_itr += 1
                    # print(spell_description)
                    features.append(spell_description)

                elif itr == 1:
                    school = element.text
                    features.append(school)
                elif itr == 2:
                    cast_time = element.text
                    features.append(cast_time)
                elif itr == 3:
                    spell_range = element.text
                    features.append(spell_range)
                elif itr == 4:
                    duration = element.text
                    features.append(duration)
                elif itr == 5:
                    component = element.text
                    features.append(component)
                    itr = 0
                    # print("spell:  ", spell_name)
                    # print("school:  ", school)
                    # print("cast:  ", cast_time)
                    # print("range:  ", spell_range)
                    # print("duration:", duration)
                    # print("component", component)
                    bardSpell.append(features)

                    continue

                itr += 1

    cantrip = content.find("div", id= "wiki-tab-0-5")
    if cantrip:
        
        itr = 0
        for individual_spell in cantrip.find_all("tr"):
            features = []
            for element in individual_spell.find_all("td"):
    
                if itr == 0:
                    level = 5
                    features.append(level)
                    spell_name = element.text
                    features.append(spell_name)

                    anchor_tag = element.find("a")
                    description_url = anchor_tag.get("href")
                    description_url = "http://dnd5e.wikidot.com" + description_url
                    # print(description_url)
                    description_page = requests.get(description_url)
                    description_soup = BeautifulSoup(description_page.text, "lxml")
                    page_content = description_soup.find("div", id="page-content")
                    
                    content_p_count = 0
                    for paragraph in page_content.find_all("p"):
                        content_p_count += 1

                    content_itr = 0
                    spell_description = ""
                    for paragraph in page_content.find_all("p"):
                        if content_itr >= 3 and content_itr < content_p_count - 1:
                            spell_description = spell_description + paragraph.text
                            
                            # f = open("output.txt", "a")
                            # f.write(paragraph.text + "\n")
                            # f.close()
                        content_itr += 1
                    # print(spell_description)
                    features.append(spell_description)

                elif itr == 1:
                    school = element.text
                    features.append(school)
                elif itr == 2:
                    cast_time = element.text
                    features.append(cast_time)
                elif itr == 3:
                    spell_range = element.text
                    features.append(spell_range)
                elif itr == 4:
                    duration = element.text
                    features.append(duration)
                elif itr == 5:
                    component = element.text
                    features.append(component)
                    itr = 0
                    
                    bardSpell.append(features)

                    continue

                itr += 1
                
    cantrip = content.find("div", id= "wiki-tab-0-6")
    if cantrip:
        
        itr = 0
        for individual_spell in cantrip.find_all("tr"):
            features = []
            for element in individual_spell.find_all("td"):
    
                if itr == 0:
                    level = 6
                    features.append(level)
                    spell_name = element.text
                    features.append(spell_name)

                    anchor_tag = element.find("a")
                    description_url = anchor_tag.get("href")
                    description_url = "http://dnd5e.wikidot.com" + description_url
                    # print(description_url)
                    description_page = requests.get(description_url)
                    description_soup = BeautifulSoup(description_page.text, "lxml")
                    page_content = description_soup.find("div", id="page-content")
                    
                    content_p_count = 0
                    for paragraph in page_content.find_all("p"):
                        content_p_count += 1

                    content_itr = 0
                    spell_description = ""
                    for paragraph in page_content.find_all("p"):
                        if content_itr >= 3 and content_itr < content_p_count - 1:
                            spell_description = spell_description + paragraph.text
                            
                            # f = open("output.txt", "a")
                            # f.write(paragraph.text + "\n")
                            # f.close()
                        content_itr += 1
                    # print(spell_description)
                    features.append(spell_description)

                elif itr == 1:
                    school = element.text
                    features.append(school)
                elif itr == 2:
                    cast_time = element.text
                    features.append(cast_time)
                elif itr == 3:
                    spell_range = element.text
                    features.append(spell_range)
                elif itr == 4:
                    duration = element.text
                    features.append(duration)
                elif itr == 5:
                    component = element.text
                    features.append(component)
                    itr = 0

                    bardSpell.append(features)

                    continue

                itr += 1

    cantrip = content.find("div", id= "wiki-tab-0-7")
    if cantrip:
        
        itr = 0
        for individual_spell in cantrip.find_all("tr"):
            features = []
            for element in individual_spell.find_all("td"):
    
                if itr == 0:
                    level = 7
                    features.append(level)
                    spell_name = element.text
                    features.append(spell_name)

                    anchor_tag = element.find("a")
                    description_url = anchor_tag.get("href")
                    description_url = "http://dnd5e.wikidot.com" + description_url
                    # print(description_url)
                    description_page = requests.get(description_url)
                    description_soup = BeautifulSoup(description_page.text, "lxml")
                    page_content = description_soup.find("div", id="page-content")
                    
                    content_p_count = 0
                    for paragraph in page_content.find_all("p"):
                        content_p_count += 1

                    content_itr = 0
                    spell_description = ""
                    for paragraph in page_content.find_all("p"):
                        if content_itr >= 3 and content_itr < content_p_count - 1:
                            spell_description = spell_description + paragraph.text
                            
                            # f = open("output.txt", "a")
                            # f.write(paragraph.text + "\n")
                            # f.close()
                        content_itr += 1
                    # print(spell_description)
                    features.append(spell_description)

                elif itr == 1:
                    school = element.text
                    features.append(school)
                elif itr == 2:
                    cast_time = element.text
                    features.append(cast_time)
                elif itr == 3:
                    spell_range = element.text
                    features.append(spell_range)
                elif itr == 4:
                    duration = element.text
                    features.append(duration)
                elif itr == 5:
                    component = element.text
                    features.append(component)
                    itr = 0
                    bardSpell.append(features)

                    continue

                itr += 1

    cantrip = content.find("div", id= "wiki-tab-0-8")    
    if cantrip:

        itr = 0
        for individual_spell in cantrip.find_all("tr"):
            features = []
            for element in individual_spell.find_all("td"):
    
                if itr == 0:
                    level = 8
                    features.append(level)
                    spell_name = element.text
                    features.append(spell_name)

                    anchor_tag = element.find("a")
                    description_url = anchor_tag.get("href")
                    description_url = "http://dnd5e.wikidot.com" + description_url
                    # print(description_url)
                    description_page = requests.get(description_url)
                    description_soup = BeautifulSoup(description_page.text, "lxml")
                    page_content = description_soup.find("div", id="page-content")
                    
                    content_p_count = 0
                    for paragraph in page_content.find_all("p"):
                        content_p_count += 1

                    content_itr = 0
                    spell_description = ""
                    for paragraph in page_content.find_all("p"):
                        if content_itr >= 3 and content_itr < content_p_count - 1:
                            spell_description = spell_description + paragraph.text
                            
                            # f = open("output.txt", "a")
                            # f.write(paragraph.text + "\n")
                            # f.close()
                        content_itr += 1
                    # print(spell_description)
                    features.append(spell_description)

                elif itr == 1:
                    school = element.text
                    features.append(school)
                elif itr == 2:
                    cast_time = element.text
                    features.append(cast_time)
                elif itr == 3:
                    spell_range = element.text
                    features.append(spell_range)
                elif itr == 4:
                    duration = element.text
                    features.append(duration)
                elif itr == 5:
                    component = element.text
                    features.append(component)
                    itr = 0
                    bardSpell.append(features)

                    continue

                itr += 1

    cantrip = content.find("div", id= "wiki-tab-0-9")
    if cantrip:
        
        itr = 0
        for individual_spell in cantrip.find_all("tr"):
            features = []
            for element in individual_spell.find_all("td"):
    
                if itr == 0:
                    level = 9
                    features.append(level)
                    spell_name = element.text
                    features.append(spell_name)

                    anchor_tag = element.find("a")
                    description_url = anchor_tag.get("href")
                    description_url = "http://dnd5e.wikidot.com" + description_url
                    # print(description_url)
                    description_page = requests.get(description_url)
                    description_soup = BeautifulSoup(description_page.text, "lxml")
                    page_content = description_soup.find("div", id="page-content")
                    
                    content_p_count = 0
                    for paragraph in page_content.find_all("p"):
                        content_p_count += 1

                    content_itr = 0
                    spell_description = ""
                    for paragraph in page_content.find_all("p"):
                        if content_itr >= 3 and content_itr < content_p_count - 1:
                            spell_description = spell_description + paragraph.text
                            
                            # f = open("output.txt", "a")
                            # f.write(paragraph.text + "\n")
                            # f.close()
                        content_itr += 1
                    # print(spell_description)
                    features.append(spell_description)

                elif itr == 1:
                    school = element.text
                    features.append(school)
                elif itr == 2:
                    cast_time = element.text
                    features.append(cast_time)
                elif itr == 3:
                    spell_range = element.text
                    features.append(spell_range)
                elif itr == 4:
                    duration = element.text
                    features.append(duration)
                elif itr == 5:
                    component = element.text
                    features.append(component)
                    itr = 0
                    bardSpell.append(features)

                    continue

                itr += 1
   


# print(bardSpell)
bardSpell_df = pd.DataFrame(bardSpell, columns=title, index=None)
# bardSpell_df = bardSpell_df.reset_index(drop=True)
# bardSpell_df.drop(index=0, inplace=True)

engine = create_engine(f'mysql+pymysql://{user}:{password}@{host}/{db}')

bardSpell_df.to_sql(name='bardSpell', con=engine, if_exists='replace', index=False)


# bardSpell_df.to_csv("./bard.csv", index=False, mode='w');     



        
        # while title:
        #     title = title.find_next("tr")
        #     print(title)
        #     if not title:
        #         break

        #     spell_name = title.find_next("td")
        #     school = spell_name.find_next("td")
        #     cast_time = school.find_next("td")
        #     spell_range = cast_time.find_next("td")
        #     duration = spell_range.find_next("td")
        #     component = duration.find_next("td")
            


