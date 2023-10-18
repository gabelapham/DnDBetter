import requests
from bs4 import BeautifulSoup
import pandas as pd

# Used later for creating pandas dataframe. May become obsolete if classes are broken into individual files
classNames = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "wizard"]

URL = "http://dnd5e.wikidot.com/barbarian"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")
results = soup.find("div", class_="col-lg-12")
practice = results.text
# Every class gets a different # of features per level, so a table is used to hold the number of features per level per class
barbLevelUp = [0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

# Unfortunately, the wikidot website we are scraping from is not particularly well formatted when it comes to class information. As such, there is no means by which I
# can loop through the entire page to gather information, and must instead individually partition the data
practice = practice.partition("Hit Points")[1] + practice.partition("Hit Points")[2]
barbClassFeatures = [practice.partition("Proficiencies")[0]]
practice = practice.partition("Proficiencies")[1] + practice.partition("Proficiencies")[2]

barbClassFeatures.append(practice.partition("Equipment")[0])
practice = practice.partition("Equipment")[1] + practice.partition("Proficiencies")[2]

barbClassFeatures.append(practice.partition("Rage")[0])
practice = practice.partition("Rage")[1] + practice.partition("Rage")[2]

barbClassFeatures.append(practice.partition("Unarmored Defense")[0])
practice = practice.partition("Unarmored Defense")[1] + practice.partition("Unarmored Defense")[2]

barbClassFeatures.append(practice.partition("Danger Sense")[0])
practice = practice.partition("Danger Sense")[1] + practice.partition("Danger Sense")[2]

barbClassFeatures.append(practice.partition("Reckless Attack")[0])
practice = practice.partition("Reckless Attack")[1] + practice.partition("Reckless Attack")[2]

barbClassFeatures.append(practice.partition("Primal Path")[0])
practice = practice.partition("Primal Path")[1] + practice.partition("Primal Path")[2]

barbClassFeatures.append(practice.partition("Primal Knowledge (Optional)")[0])
practice = practice.partition("Primal Knowledge (Optional)")[1] + practice.partition("Primal Knowledge (Optional)")[2]

barbClassFeatures.append(practice.partition("Ability Score Improvement")[0])
practice = practice.partition("Ability Score Improvement")[1] + practice.partition("Ability Score Improvement")[2]

barbClassFeatures.append(practice.partition("Extra Attack")[0])
practice = practice.partition("Extra Attack")[1] + practice.partition("Extra Attack")[2]

barbClassFeatures.append(practice.partition("Fast Movement")[0])
practice = practice.partition("Fast Movement")[1] + practice.partition("Fast Movement")[2]

barbClassFeatures.append(practice.partition("Feral Instinct")[0])
barbClassFeatures.append("Path Feature")
practice = practice.partition("Feral Instinct")[1] + practice.partition("Feral Instinct")[2]

barbClassFeatures.append(practice.partition("Instinctive Pounce (Optional)")[0])
practice = (practice.partition("Instinctive Pounce (Optional)")[1] +
            practice.partition("Instinctive Pounce (Optional)")[2])

barbClassFeatures.append(practice.partition("Brutal Critical")[0])
practice = practice.partition("Brutal Critical")[1] + practice.partition("Brutal Critical")[2]
barbClassFeatures.append(barbClassFeatures[9])

barbClassFeatures.append(practice.partition("Relentless Rage")[0])

# Certain pieces of class information, typical those that occur multiple times, are not included in wikidot's class description. So I occasionally had to append to the
# information by hand, and not by partition the website
barbClassFeatures.append("Path Feature")
barbClassFeatures.append(barbClassFeatures[8])
practice = practice.partition("Relentless Rage")[1] + practice.partition("Relentless Rage")[2]

barbClassFeatures.append(practice.partition("Persistent Rage")[0])
barbClassFeatures.append(barbClassFeatures[9])
barbClassFeatures.append(barbClassFeatures[16])
barbClassFeatures.append("Path Feature")
practice = practice.partition("Persistent Rage")[1] + practice.partition("Persistent Rage")[2]

barbClassFeatures.append(practice.partition("Indomitable Might")[0])
barbClassFeatures.append(barbClassFeatures[9])
barbClassFeatures.append(barbClassFeatures[16])
practice = practice.partition("Indomitable Might")[1] + practice.partition("Indomitable Might")[2]

barbClassFeatures.append(practice.partition("Primal Champion")[0])
barbClassFeatures.append(barbClassFeatures[9])
practice = practice.partition("Primal Champion")[1] + practice.partition("Primal Champion")[2]

barbClassFeatures.append(practice)
barbClassFeatures = [i for i in barbClassFeatures if i]

# The process above repeats, but now for the bard class
URL = "http://dnd5e.wikidot.com/bard"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")
results = soup.find("div", class_="col-lg-12")
practice = results.text
bardLevelUp = [0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 10, 10, 10, 12, 12, 13, 14, 14, 15, 16,
               16, 17, 18, 19, 19, 20]

practice = practice.partition("Hit Points")[1] + practice.partition("Hit Points")[2]
bardClassFeatures = [(practice.partition("Proficiencies")[0])]
practice = practice.partition("Proficiencies")[1] + practice.partition("Proficiencies")[2]

bardClassFeatures.append(practice.partition("Equipment")[0])
practice = practice.partition("Equipment")[1] + practice.partition("Equipment")[2]

bardClassFeatures.append(practice.partition("Spellcasting")[0])
practice = practice.partition("Spellcasting")[1] + practice.partition("Spellcasting")[2]

bardClassFeatures.append(practice.partition("Bardic Inspiration")[0])
practice = practice.partition("Bardic Inspiration")[1] + practice.partition("Bardic Inspiration")[2]

bardClassFeatures.append(practice.partition("Jack of All Trades")[0])
practice = practice.partition("Jack of All Trades")[1] + practice.partition("Jack of All Trades")[2]

bardClassFeatures.append(practice.partition("Song of Rest")[0])
practice = practice.partition("Song of Rest")[1] + practice.partition("Song of Rest")[2]

bardClassFeatures.append(practice.partition("Magical Inspiration (Optional)")[0])
practice = (practice.partition("Magical Inspiration (Optional)")[1] +
            practice.partition("Magical Inspiration (Optional)")[2])

bardClassFeatures.append(practice.partition("Bard College")[0])
practice = practice.partition("Bard College")[1] + practice.partition("Bard College")[2]

bardClassFeatures.append(practice.partition("Expertise")[0])
practice = practice.partition("Expertise")[1] + practice.partition("Expertise")[2]

bardClassFeatures.append(practice.partition("Ability Score Improvement")[0])
practice = practice.partition("Ability Score Improvement")[1] + practice.partition("Ability Score Improvement")[2]

bardClassFeatures.append(practice.partition("Bardic Versatility")[0])
practice = practice.partition("Bardic Versatility")[1] + practice.partition("Bardic Versatility")[2]

bardClassFeatures.append(practice.partition("Font of Inspiration")[0])
practice = practice.partition("Font of Inspiration")[1] + practice.partition("Font of Inspiration")[2]

bardClassFeatures.append("Bardic Inspiration (d8)")

bardClassFeatures.append(practice.partition("Countercharm")[0])
practice = practice.partition("Countercharm")[1] + practice.partition("Countercharm")[2]

bardClassFeatures.append(practice.partition("Magical Secrets")[0])
practice = practice.partition("Magical Secrets")[1] + practice.partition("Magical Secrets")[2]

bardClassFeatures.append("Bard College Feature")
bardClassFeatures.append("ASI")
bardClassFeatures.append("Bardic Versatility (Optional)")
bardClassFeatures.append("Song of Rest (d8)")
bardClassFeatures.append("Bardic Inspiration (d10)")
bardClassFeatures.append("Expertise")

bardClassFeatures.append(practice.partition("Superior Inspiration")[0])
practice = practice.partition("Superior Inspiration")[1] + practice.partition("Superior Inspiration")[2]

bardClassFeatures.append("ASI")
bardClassFeatures.append("Bardic Versatility (Optional)")
bardClassFeatures.append("Song of rest (d10)")
bardClassFeatures.append("Magical Secrets")
bardClassFeatures.append("Bard College Feature")
bardClassFeatures.append("Bardic Inspiration (d12)")
bardClassFeatures.append("ASI")
bardClassFeatures.append("Bardic Versatility (Optional)")
bardClassFeatures.append("Song of rest (d12)")
bardClassFeatures.append("Magical Secrets")
bardClassFeatures.append("ASI")
bardClassFeatures.append("Bardic Versatility (Optional)")
bardClassFeatures.append(practice)

# Cleric information scraped by Tyler Catuncan. Same process as bard and barbarian
URL = "http://dnd5e.wikidot.com/cleric"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")
results = soup.find("div", class_="col-lg-12")
practice = results.text
practice = practice.partition("Hit Points")[1] + practice.partition("Hit Points")[2]
clericLevelUp = [0, 0, 0, 1, 1, 2, 2, 2, 4, 4, 5, 6, 6, 8, 8, 8, 8, 10, 11, 12, 12, 14, 16, 16, 17, 17, 18, 19, 19, 20]
clericClassFeatures = [practice.partition("Proficiencies")[0]]
practice = practice.partition("Proficiencies")[1] + practice.partition("Proficiencies")[2]

clericClassFeatures.append(practice.partition("Equipment")[0])
practice = practice.partition("Equipment")[1] + practice.partition("Equipment")[2]

clericClassFeatures.append(practice.partition("Spellcasting")[0])
practice = practice.partition("Spellcasting")[1] + practice.partition("Spellcasting")[2]

clericClassFeatures.append(practice.partition("Divine Domain")[0])
practice = practice.partition("Divine Domain")[1] + practice.partition("Divine Domain")[2]

clericClassFeatures.append(practice.partition("Channel Divinity")[0])
practice = practice.partition("Channel Divinity")[1] + practice.partition("Channel Divinity")[2]

clericClassFeatures.append(practice.partition("Harness Divine Power (Optional)")[0])
practice = (practice.partition("Harness Divine Power (Optional)")[1] +
            practice.partition("Harness Divine Power (Optional)")[2])

clericClassFeatures.append("Divine Domain Feature")

clericClassFeatures.append(practice.partition("Ability Score Improvement")[0])
practice = practice.partition("Ability Score Improvement")[1] + practice.partition("Ability Score Improvement")[2]

clericClassFeatures.append(practice.partition("Cantrip Versatility (Optional)")[0])
practice = (practice.partition("Cantrip Versatility (Optional)")[1] +
            practice.partition("Cantrip Versatility (Optional)")[2])

clericClassFeatures.append(practice.partition("Destroy Undead")[0])
practice = practice.partition("Destroy Undead")[1] + practice.partition("Destroy Undead")[2]

clericClassFeatures.append("Channel Divinity 2")
clericClassFeatures.append("Divine Domain Feature")

clericClassFeatures.append("ASI")
clericClassFeatures.append("Destroy Undead (CR 1)")
clericClassFeatures.append("Divine Domain Feature")
clericClassFeatures.append("Cantrip Versatility (Optional)")

clericClassFeatures.append(practice.partition("Divine Intervention")[0])
practice = practice.partition("Dive Intervention")[1] + practice.partition("Divine Intervention")[2]

clericClassFeatures.append(practice)

clericClassFeatures.append("Destroy Undead (CR 2)")
clericClassFeatures.append("ASI")
clericClassFeatures.append("Cantrip Versatility (Optional)")
clericClassFeatures.append("Destroy Undead (CR 3)")
clericClassFeatures.append("ASI")
clericClassFeatures.append("Cantrip Versatility (Optional)")
clericClassFeatures.append("Destroy Undead (CR 4)")
clericClassFeatures.append("Divine Domain Feature")
clericClassFeatures.append("Channel Divinity 3")
clericClassFeatures.append("ASI")
clericClassFeatures.append("Cantrip Versatility (Optional)")
clericClassFeatures.append(practice.partition("long rest.")[2])


URL = "http://dnd5e.wikidot.com/druid"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")
results = soup.find("div", class_="col-lg-12")
practice = results.text
practice = practice.partition("Hit Points")[1] + practice.partition("Hit Points")[2]
features = results.findAll("p")
print(len(features))
druidLevelUp = [0, 0, 0, 1, 1, 2, 2, 2, 4, 4, 4, 6, 8, 8, 8, 10, 12, 12, 14, 16, 16, 18, 18, 19, 19, 20]
druidClassFeatures = [practice.partition("Proficiencies")[0]]
print(len(druidLevelUp))
practice = practice.partition("Proficiencies")[1] + practice.partition("Proficiencies")[2]

druidClassFeatures.append(practice.partition("Equipment")[0])
practice = practice.partition("Equipment")[1] + practice.partition("Equipment")[2]

druidClassFeatures.append(practice.partition("Druidic")[0])
practice = practice.partition("Druidic")[1] + practice.partition("Druidic")[2]

druidClassFeatures.append(practice.partition("Spellcasting")[0])
practice = practice.partition("Spellcasting")[1] + practice.partition("Spellcasting")[2]

druidClassFeatures.append(practice.partition("Wild Shape")[0])
practice = practice.partition("Wild Shape")[1] + practice.partition("Wild Shape")[2]

druidClassFeatures.append(practice.partition("Druid Circle")[0])
practice = practice.partition("Druid Circle")[1] + practice.partition("Druid Circle")[2]

# Once the data has been scraped, it's info is then stored into a dictionary to associate the poper features with the proper levels. The dictionary is then made into a
# pandas dataframe.
barbData = {
    "class": classNames[0],
    "level": barbLevelUp,
    "features": barbClassFeatures,
}

df1 = pd.DataFrame(barbData)

bardData = {
    "class": classNames[1],
    "level": bardLevelUp,
    "features": bardClassFeatures
}

df2 = pd.DataFrame(bardData)

clericData = {
    "class": classNames[2],
    "level": clericLevelUp,
    "features": clericClassFeatures,
}

df3 = pd.DataFrame(clericData)

# Once all of our dictionaries have been created, we than make a list of dictionaries and convert the entire list into a pandas dataframe. This allows all of the
# information to be stored in a single data structure
table = [df1, df2, df3]

finalDf = pd.concat(table)
finalDf = finalDf.reset_index()

# Allows the entire dataframe to be printed, rather than just the beginning and end. Purely for testing purposes
with pd.option_context('display.max_rows', None,
                       'display.max_columns', None,
                       'display.precision', 9,
                       ):
    print(finalDf)

