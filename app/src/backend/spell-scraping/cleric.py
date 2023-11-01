import requests
from bs4 import BeautifulSoup
import pandas as pd


url = "http://dnd5e.wikidot.com/spells:cleric"
response = requests.get(url)

html_content = response.text

soup = BeautifulSoup(html_content, "lxml")

content = soup.find("div", class_ = "yui-content")

title = ["level", "spell_name", "school", "casting_time", "range", "duration", "component"]

# spell_df = pd.DataFrame(columns=features)


if content:
    cantrip = content.find("div", id= "wiki-tab-0-0")
    clericSpell = []
    clericSpell.append(title)
    
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
                    clericSpell.append(features)

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
                    clericSpell.append(features)

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
                    clericSpell.append(features)

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
                    clericSpell.append(features)

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
                    clericSpell.append(features)

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
                    clericSpell.append(features)

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
                    clericSpell.append(features)

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
                    clericSpell.append(features)

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
                    clericSpell.append(features)

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
                    clericSpell.append(features)

                    continue

                itr += 1


    clericSpell_df = pd.DataFrame(clericSpell)
    print(clericSpell_df)

