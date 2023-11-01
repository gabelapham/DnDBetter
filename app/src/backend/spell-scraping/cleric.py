import requests
from bs4 import BeautifulSoup
import pandas as pd


url = "http://dnd5e.wikidot.com/spells:cleric"
response = requests.get(url)

html_content = response.text

soup = BeautifulSoup(html_content, "lxml")

content = soup.find("div", class_ = "yui-content")

features = ["level", "spell_name", "school", "casting_time", "range", "duration", "component"]

spell_df = pd.DataFrame(columns=features)


if content:
    cantrip = content.find("div", id= "wiki-tab-0-0")
    # print(cantrip)
    if cantrip:
        
        itr = 0
        for individual_spell in cantrip.find_all("tr"):
            for element in individual_spell.find_all("td"):
    
                if itr == 0:
                    spell_name = element.text
                elif itr == 1:
                    school = element.text
                elif itr == 2:
                    cast_time = element.text
                elif itr == 3:
                    spell_range = element.text
                elif itr == 4:
                    duration = element.text
                elif itr == 5:
                    component = element.text
                    full_spell = {"level": "cantrip", "spell_name": spell_name, "school": school, "casting_time": cast_time, "range": spell_range, "duration": duration, "component": component}
                    # spell_df = spell_df.append(full_spell, ignore_index= True)
                    itr = 0
                    print("spell:  ", spell_name)
                    print("school:  ", school)
                    print("cast:  ", cast_time)
                    print("range:  ", spell_range)
                    print("duration:", duration)
                    print("component", component)
                    continue

                itr += 1
    cantrip = content.find("div", id= "wiki-tab-0-1")
    # print(cantrip)
    if cantrip:
        
        itr = 0
        for individual_spell in cantrip.find_all("tr"):
            for element in individual_spell.find_all("td"):
    
                if itr == 0:
                    spell_name = element.text
                elif itr == 1:
                    school = element.text
                elif itr == 2:
                    cast_time = element.text
                elif itr == 3:
                    spell_range = element.text
                elif itr == 4:
                    duration = element.text
                elif itr == 5:
                    component = element.text
                    full_spell = {"level": "cantrip", "spell_name": spell_name, "school": school, "casting_time": cast_time, "range": spell_range, "duration": duration, "component": component}
                    # spell_df = spell_df.append(full_spell, ignore_index= True)
                    itr = 0
                    print("spell:  ", spell_name)
                    print("school:  ", school)
                    print("cast:  ", cast_time)
                    print("range:  ", spell_range)
                    print("duration:", duration)
                    print("component", component)
                    continue

                itr += 1
    cantrip = content.find("div", id= "wiki-tab-0-2")
    # print(cantrip)
    if cantrip:
        
        itr = 0
        for individual_spell in cantrip.find_all("tr"):
            for element in individual_spell.find_all("td"):
    
                if itr == 0:
                    spell_name = element.text
                elif itr == 1:
                    school = element.text
                elif itr == 2:
                    cast_time = element.text
                elif itr == 3:
                    spell_range = element.text
                elif itr == 4:
                    duration = element.text
                elif itr == 5:
                    component = element.text
                    full_spell = {"level": "cantrip", "spell_name": spell_name, "school": school, "casting_time": cast_time, "range": spell_range, "duration": duration, "component": component}
                    # spell_df = spell_df.append(full_spell, ignore_index= True)
                    itr = 0
                    print("spell:  ", spell_name)
                    print("school:  ", school)
                    print("cast:  ", cast_time)
                    print("range:  ", spell_range)
                    print("duration:", duration)
                    print("component", component)
                    continue

                itr += 1
    cantrip = content.find("div", id= "wiki-tab-0-3")
    # print(cantrip)
    if cantrip:
        
        itr = 0
        for individual_spell in cantrip.find_all("tr"):
            for element in individual_spell.find_all("td"):
    
                if itr == 0:
                    spell_name = element.text
                elif itr == 1:
                    school = element.text
                elif itr == 2:
                    cast_time = element.text
                elif itr == 3:
                    spell_range = element.text
                elif itr == 4:
                    duration = element.text
                elif itr == 5:
                    component = element.text
                    full_spell = {"level": "cantrip", "spell_name": spell_name, "school": school, "casting_time": cast_time, "range": spell_range, "duration": duration, "component": component}
                    # spell_df = spell_df.append(full_spell, ignore_index= True)
                    itr = 0
                    print("spell:  ", spell_name)
                    print("school:  ", school)
                    print("cast:  ", cast_time)
                    print("range:  ", spell_range)
                    print("duration:", duration)
                    print("component", component)
                    continue

                itr += 1
    cantrip = content.find("div", id= "wiki-tab-0-4")
    # print(cantrip)
    if cantrip:
        
        itr = 0
        for individual_spell in cantrip.find_all("tr"):
            for element in individual_spell.find_all("td"):
    
                if itr == 0:
                    spell_name = element.text
                elif itr == 1:
                    school = element.text
                elif itr == 2:
                    cast_time = element.text
                elif itr == 3:
                    spell_range = element.text
                elif itr == 4:
                    duration = element.text
                elif itr == 5:
                    component = element.text
                    full_spell = {"level": "cantrip", "spell_name": spell_name, "school": school, "casting_time": cast_time, "range": spell_range, "duration": duration, "component": component}
                    # spell_df = spell_df.append(full_spell, ignore_index= True)
                    itr = 0
                    print("spell:  ", spell_name)
                    print("school:  ", school)
                    print("cast:  ", cast_time)
                    print("range:  ", spell_range)
                    print("duration:", duration)
                    print("component", component)
                    continue

                itr += 1
    cantrip = content.find("div", id= "wiki-tab-0-5")
    # print(cantrip)
    if cantrip:
        
        itr = 0
        for individual_spell in cantrip.find_all("tr"):
            for element in individual_spell.find_all("td"):
    
                if itr == 0:
                    spell_name = element.text
                elif itr == 1:
                    school = element.text
                elif itr == 2:
                    cast_time = element.text
                elif itr == 3:
                    spell_range = element.text
                elif itr == 4:
                    duration = element.text
                elif itr == 5:
                    component = element.text
                    full_spell = {"level": "cantrip", "spell_name": spell_name, "school": school, "casting_time": cast_time, "range": spell_range, "duration": duration, "component": component}
                    # spell_df = spell_df.append(full_spell, ignore_index= True)
                    itr = 0
                    print("spell:  ", spell_name)
                    print("school:  ", school)
                    print("cast:  ", cast_time)
                    print("range:  ", spell_range)
                    print("duration:", duration)
                    print("component", component)
                    continue

                itr += 1
    cantrip = content.find("div", id= "wiki-tab-0-6")
    # print(cantrip)
    if cantrip:
        
        itr = 0
        for individual_spell in cantrip.find_all("tr"):
            for element in individual_spell.find_all("td"):
    
                if itr == 0:
                    spell_name = element.text
                elif itr == 1:
                    school = element.text
                elif itr == 2:
                    cast_time = element.text
                elif itr == 3:
                    spell_range = element.text
                elif itr == 4:
                    duration = element.text
                elif itr == 5:
                    component = element.text
                    full_spell = {"level": "cantrip", "spell_name": spell_name, "school": school, "casting_time": cast_time, "range": spell_range, "duration": duration, "component": component}
                    # spell_df = spell_df.append(full_spell, ignore_index= True)
                    itr = 0
                    print("spell:  ", spell_name)
                    print("school:  ", school)
                    print("cast:  ", cast_time)
                    print("range:  ", spell_range)
                    print("duration:", duration)
                    print("component", component)
                    continue

                itr += 1
    cantrip = content.find("div", id= "wiki-tab-0-7")
    # print(cantrip)
    if cantrip:
        
        itr = 0
        for individual_spell in cantrip.find_all("tr"):
            for element in individual_spell.find_all("td"):
    
                if itr == 0:
                    spell_name = element.text
                elif itr == 1:
                    school = element.text
                elif itr == 2:
                    cast_time = element.text
                elif itr == 3:
                    spell_range = element.text
                elif itr == 4:
                    duration = element.text
                elif itr == 5:
                    component = element.text
                    full_spell = {"level": "cantrip", "spell_name": spell_name, "school": school, "casting_time": cast_time, "range": spell_range, "duration": duration, "component": component}
                    # spell_df = spell_df.append(full_spell, ignore_index= True)
                    itr = 0
                    print("spell:  ", spell_name)
                    print("school:  ", school)
                    print("cast:  ", cast_time)
                    print("range:  ", spell_range)
                    print("duration:", duration)
                    print("component", component)
                    continue

                itr += 1
    cantrip = content.find("div", id= "wiki-tab-0-8")
    # print(cantrip)
    if cantrip:
        
        itr = 0
        for individual_spell in cantrip.find_all("tr"):
            for element in individual_spell.find_all("td"):
    
                if itr == 0:
                    spell_name = element.text
                elif itr == 1:
                    school = element.text
                elif itr == 2:
                    cast_time = element.text
                elif itr == 3:
                    spell_range = element.text
                elif itr == 4:
                    duration = element.text
                elif itr == 5:
                    component = element.text
                    full_spell = {"level": "cantrip", "spell_name": spell_name, "school": school, "casting_time": cast_time, "range": spell_range, "duration": duration, "component": component}
                    # spell_df = spell_df.append(full_spell, ignore_index= True)
                    itr = 0
                    print("spell:  ", spell_name)
                    print("school:  ", school)
                    print("cast:  ", cast_time)
                    print("range:  ", spell_range)
                    print("duration:", duration)
                    print("component", component)
                    continue

                itr += 1
    cantrip = content.find("div", id= "wiki-tab-0-9")
    # print(cantrip)
    if cantrip:
        
        itr = 0
        for individual_spell in cantrip.find_all("tr"):
            for element in individual_spell.find_all("td"):
    
                if itr == 0:
                    spell_name = element.text
                elif itr == 1:
                    school = element.text
                elif itr == 2:
                    cast_time = element.text
                elif itr == 3:
                    spell_range = element.text
                elif itr == 4:
                    duration = element.text
                elif itr == 5:
                    component = element.text
                    full_spell = {"level": "cantrip", "spell_name": spell_name, "school": school, "casting_time": cast_time, "range": spell_range, "duration": duration, "component": component}
                    # spell_df = spell_df.append(full_spell, ignore_index= True)
                    itr = 0
                    print("spell:  ", spell_name)
                    print("school:  ", school)
                    print("cast:  ", cast_time)
                    print("range:  ", spell_range)
                    print("duration:", duration)
                    print("component", component)
                    continue

                itr += 1

 

