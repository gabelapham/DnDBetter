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
practice = practice.partition("Equipment")[1] + practice.partition("Equipment")[2]

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

ASI = barbClassFeatures[9]

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
cantVers = clericClassFeatures[9]

clericClassFeatures.append("Channel Divinity 2")
clericClassFeatures.append("Divine Domain Feature")

clericClassFeatures.append(ASI)
clericClassFeatures.append("Destroy Undead (CR 1)")
clericClassFeatures.append("Divine Domain Feature")
clericClassFeatures.append(cantVers)

clericClassFeatures.append(practice.partition("Divine Intervention")[0])
practice = practice.partition("Dive Intervention")[1] + practice.partition("Divine Intervention")[2]

clericClassFeatures.append(practice)

clericClassFeatures.append("Destroy Undead (CR 2)")
clericClassFeatures.append(ASI)
clericClassFeatures.append(cantVers)
clericClassFeatures.append("Destroy Undead (CR 3)")
clericClassFeatures.append(ASI)
clericClassFeatures.append(cantVers)
clericClassFeatures.append("Destroy Undead (CR 4)")
clericClassFeatures.append("Divine Domain Feature")
clericClassFeatures.append("Channel Divinity 3")
clericClassFeatures.append(ASI)
clericClassFeatures.append(cantVers)
clericClassFeatures.append(practice.partition("long rest.")[2])

cantVers = clericClassFeatures[9]

URL = "http://dnd5e.wikidot.com/druid"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")
results = soup.find("div", class_="col-lg-12")
practice = results.text
practice = practice.partition("Hit Points")[1] + practice.partition("Hit Points")[2]
druidLevelUp = [0, 0, 0, 1, 1, 2, 2, 2, 4, 4, 4, 6, 8, 8, 8, 10, 12, 12, 14, 16, 16, 18, 18, 19, 19, 20]
druidClassFeatures = [practice.partition("Proficiencies")[0]]
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

druidClassFeatures.append(practice.partition("Wild Companion (Optional)")[0])
practice = practice.partition("Wild Companion")[1] + practice.partition("Wild Companion")[2]

druidClassFeatures.append(practice.partition("Ability Score Improvement")[0])

druidClassFeatures.append("Wild Shape Improvement")
druidClassFeatures.append(ASI)
druidClassFeatures.append(cantVers)
practice = practice.partition("druid spell list.\n")[2]

druidClassFeatures.append("Druid Circle Feature")
druidClassFeatures.append("Wild Shape Improvement")
druidClassFeatures.append(ASI)
druidClassFeatures.append(cantVers)

druidClassFeatures.append("Druid Circle Feature")
druidClassFeatures.append(ASI)
druidClassFeatures.append(cantVers)

druidClassFeatures.append("Druid Circle Feature")
druidClassFeatures.append(ASI)
druidClassFeatures.append(cantVers)

druidClassFeatures.append(practice.partition("Beast Spells")[0])
practice = practice.partition("Beast Spells")[1] + practice.partition("Beast Spells")[2]

druidClassFeatures.append(practice.partition("Archdruid")[0])
practice = practice.partition("Archdruid")[1] + practice.partition("Archdruid")[2]

druidClassFeatures.append(ASI)
druidClassFeatures.append(cantVers)

druidClassFeatures.append(practice)

URL = "https://5thsrd.org/character/classes/fighter/"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")
test = soup.find("div", id="page-content")
names = test.findAll("h3")
fighterLevelUp = [0, 0, 0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20]
properties = test.findAll("p")
propertiesList = []

for i in range(len(properties)):
    propertiesList.append(properties[i].text)

equipment = test.findAll("ul")
equipmentString = ""
for i in range(len(equipment)):
    equipmentString += equipment[i].text

propertiesList[3] += equipmentString

h4s = test.findAll("h4")
fightingStyles = []
for i in range(6):
    fightingStyles.append(h4s[i].text)

# YOU ARE CURRENTLY HERE, TRYING TO GET ALL THE FIGHTING STYLES INTO A SINGLE INDEX. IT MAY BE A FOOL's ERRAND
for i in range(6):
    propertiesList[4] += '\n' + fightingStyles[i] + ": " + propertiesList[4+i+1]

for i in range(6):
    j = 5
    propertiesList.pop(j)

propertiesList.pop(0)

features = [names[0].text + "\n" + propertiesList[0], names[1].text + "\n" + propertiesList[1],
            names[2].text + "\n" + propertiesList[2], names[3].text + "\n" + propertiesList[3],
            names[4].text + "\n" + propertiesList[4], names[5].text + "\n" + propertiesList[5],
            names[6].text + "\n" + propertiesList[6], names[7].text + "\n" + propertiesList[7],
            names[8].text + "\n" + propertiesList[8], names[7].text + "\n" + propertiesList[7],
            names[6].text + "\n" + propertiesList[6], names[7].text + "\n" + propertiesList[7],
            names[9].text + "\n" + propertiesList[9], names[6].text + "\n" + propertiesList[6],
            names[8].text + "\n" + propertiesList[8], names[7].text + "\n" + propertiesList[7],
            names[9].text + "\n" + propertiesList[9], names[7].text + "\n" + propertiesList[7],
            names[6].text + "\n" + propertiesList[6], names[7].text + "\n" + propertiesList[7],
            names[5].text + "\n" + propertiesList[5], names[9].text + "\n" + propertiesList[9],
            names[6].text + "\n" + propertiesList[6], names[7].text + "\n" + propertiesList[7],
            names[8].text + "\n" + propertiesList[8]]

URL = "http://dnd5e.wikidot.com/monk"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")
results = soup.find("div", class_="col-lg-12")
practice = results.text
practice = practice.partition("Hit Points")[1] + practice.partition("Hit Points")[2]
monkLevelUp = [0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

monkClassFeatures = [practice.partition("Proficiencies")[0]]
practice = practice.partition("Proficiencies")[1] + practice.partition("Proficiencies")[2]

monkClassFeatures.append(practice.partition("Equipment")[0])
practice = practice.partition("Equipment")[1] + practice.partition("Equipment")[2]

monkClassFeatures.append(practice.partition("Unarmored Defense")[0])
practice = practice.partition("Unarmored Defense")[1] + practice.partition("Unarmored Defense")[2]

monkClassFeatures.append(practice.partition("Martial Arts")[0])
practice = practice.partition("Martial Arts")[1] + practice.partition("Martial Arts")[2]

monkClassFeatures.append(practice.partition("Ki")[0])
practice = practice.partition("Ki")[1] + practice.partition("Ki")[2]

monkClassFeatures.append(practice.partition("Unarmored Movement")[0])
practice = practice.partition("Unarmored Movement")[1] + practice.partition("Unarmored Movement")[2]

monkClassFeatures.append(practice.partition("Dedicated Weapon (Optional)")[0])
practice = practice.partition("Dedicated Weapon (Optional)")[1] + practice.partition("Dedicated Weapon (Optional)")[2]

monkClassFeatures.append(practice.partition("Monastic Tradition")[0])
practice = practice.partition("Monastic Tradition")[1] + practice.partition("Monastic Tradition")[2]

monkClassFeatures.append(practice.partition("Deflect Missiles")[0])
practice = practice.partition("Deflect Missiles")[1] + practice.partition("Deflect Missiles")[2]

monkClassFeatures.append(practice.partition("Ki-Fueled Attack (Optional)")[0])
practice = practice.partition("Ki-Fueled Attack (Optional)")[1] + practice.partition("Ki-Fueled Attack (Optional)")[2]

monkClassFeatures.append(practice.partition("Ability Score Improvement")[0])
practice = practice.partition("Ability Score Improvement")[1] + practice.partition("Ability Score Improvement")[2]

monkClassFeatures.append(practice.partition("Slow Fall")[0])
practice = practice.partition("Slow Fall")[1] + practice.partition("Slow Fall")[2]

monkClassFeatures.append(practice.partition("Quickened Healing (Optional)")[0])
practice = practice.partition("Quickened Healing (Optional)")[1] + practice.partition("Quickened Healing (Optional)")[2]

monkClassFeatures.append(practice.partition("Extra Attack")[0])
practice = practice.partition("Extra Attack")[1] + practice.partition("Extra Attack")[2]

monkClassFeatures.append(practice.partition("Stunning Strike")[0])
practice = practice.partition("Stunning Strike")[1] + practice.partition("Stunning Strike")[2]

monkClassFeatures.append(practice.partition("Focused Aim (Optional)")[0])
practice = practice.partition("Focused Aim (Optional)")[1] + practice.partition("Focused Aim (Optional)")[2]

monkClassFeatures.append(practice.partition("Ki-Empowered Strikes")[0])
practice = practice.partition("Ki-Empowered Strikes")[1] + practice.partition("Ki-Empowered Strikes")[2]

monkClassFeatures.append(practice.partition("Evasion")[0])
practice = practice.partition("Evasion")[1] + practice.partition("Evasion")[2]

monkClassFeatures.append("Monastic Tradition Feature")

monkClassFeatures.append(practice.partition("Stillness of Mind")[0])
practice = practice.partition("Stillness of Mind")[1] + practice.partition("Stillness of Mind")[2]

monkClassFeatures.append(practice.partition("Purity of Body")[0])
practice = practice.partition("Purity of Body")[1] + practice.partition("Purity of Body")[2]

monkClassFeatures.append(ASI)
monkClassFeatures.append(monkClassFeatures[6])

monkClassFeatures.append(practice.partition("Tongue of the Sun and Moon")[0])
practice = practice.partition("Tongue of the Sun and Moon")[1] + practice.partition("Tongue of the Sun and Moon")[2]

monkClassFeatures.append(ASI)
monkClassFeatures.append("Monastic Tradition Feature")

monkClassFeatures.append(practice.partition("Diamond Soul")[0])
practice = practice.partition("Diamond Soul")[1] + practice.partition("Diamond Soul")[2]

monkClassFeatures.append(practice.partition("Timeless Body")[0])
practice = practice.partition("Timeless Body")[1] + practice.partition("Timeless Body")[2]

monkClassFeatures.append(practice.partition("Empty Body")[0])
practice = practice.partition("Empty Body")[1] + practice.partition("Empty Body")[2]

monkClassFeatures.append(ASI)
monkClassFeatures.append("Monastic Tradition Feature")

monkClassFeatures.append(practice.partition("Perfect Self")[0])
practice = practice.partition("Perfect Self")[1] + practice.partition("Perfect Self")[2]

monkClassFeatures.append(ASI)

monkClassFeatures.append(practice)

URL = "http://dnd5e.wikidot.com/paladin"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")
results = soup.find("div", class_="col-lg-12")
practice = results.text
practice = practice.partition("Hit Points")[1] + practice.partition("Hit Points")[2]
paladinLevelUp = [0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 6, 7, 8, 8, 10, 11, 12, 12, 14, 15, 16, 16, 18, 19, 19, 20]

paladinClassFeatures = [practice.partition("Proficiencies")[0]]
practice = practice.partition("Proficiencies")[1] + practice.partition("Proficiencies")[2]

paladinClassFeatures.append(practice.partition("Equipment")[0])
practice = practice.partition("Equipment")[1] + practice.partition("Equipment")[2]

paladinClassFeatures.append(practice.partition("Divine Sense")[0])
practice = practice.partition("Divine Sense")[1] + practice.partition("Divine Sense")[2]

paladinClassFeatures.append(practice.partition("Lay on Hands")[0])
practice = practice.partition("Lay on Hands")[1] + practice.partition("Lay on Hands")[2]

paladinClassFeatures.append(practice.partition("Fighting Style")[0])
practice = practice.partition("Fighting Style")[1] + practice.partition("Fighting Style")[2]

paladinClassFeatures.append(practice.partition("Close Quarters Shooter (UA)")[0])
practice = practice.partition("Spellcasting")[1] + practice.partition("Spellcasting")[2]

paladinClassFeatures.append(practice.partition("Divine Smite")[0])
practice = practice.partition("Divine Smite")[1] + practice.partition("Divine Smite")[2]

paladinClassFeatures.append(practice.partition("Divine Health")[0])
practice = practice.partition("Divine Health")[1] + practice.partition("Divine Health")[2]

paladinClassFeatures.append(practice.partition("Sacred Oath")[0])
practice = practice.partition("Sacred Oath")[1] + practice.partition("Sacred Oath")[2]

paladinClassFeatures.append(practice.partition("Harness Divine Power (Optional)")[0])
practice = practice.partition("Harness Divine Power")[1] + practice.partition("Harness Divine Power")[2]

paladinClassFeatures.append(practice.partition("Ability Score Improvement")[0])
practice = practice.partition("Ability Score Improvement")[1] + practice.partition("Ability Score Improvement")[2]

paladinClassFeatures.append(practice.partition("Martial Versatility (Optional)")[0])
practice = practice.partition("Martial Versatility (Optional)")[1] + practice.partition("Martial Versatility (Optional)")[2]

paladinClassFeatures.append(practice.partition("Extra Attack")[0])
practice = practice.partition("Extra Attack")[1] + practice.partition("Extra Attack")[2]

paladinClassFeatures.append(practice.partition("Aura of Protection")[0])
practice = practice.partition("Aura of Protection")[1] + practice.partition("Aura of Protection")[2]

paladinClassFeatures.append(practice.partition("Aura of Courage")[0])
practice = practice.partition("Aura of Courage")[1] + practice.partition("Aura of Courage")[2]

paladinClassFeatures.append("Sacred Oath Feature")
paladinClassFeatures.append(ASI)
paladinClassFeatures.append(paladinClassFeatures[12])

paladinClassFeatures.append(practice.partition("Improved Divine Smite")[0])
practice = practice.partition("Improved Divine Smite")[1] + practice.partition("Improved Divine Smite")[2]

paladinClassFeatures.append(practice.partition("Cleansing Touch")[0])
practice = practice.partition("Cleansing Touch")[1] + practice.partition("Cleansing Touch")[2]

paladinClassFeatures.append(ASI)
paladinClassFeatures.append(paladinClassFeatures[12])

paladinClassFeatures.append(practice)

paladinClassFeatures.append("Sacred Oath Feature")
paladinClassFeatures.append(ASI)
paladinClassFeatures.append(paladinClassFeatures[12])

paladinClassFeatures.append("All aura ranges increased to 30 feet")

paladinClassFeatures.append(ASI)
paladinClassFeatures.append(paladinClassFeatures[12])
paladinClassFeatures.append("Sacred Oath Feature")

martVers = paladinClassFeatures[12]

URL = "http://dnd5e.wikidot.com/ranger"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")
results = soup.find("div", class_="col-lg-12")
practice = results.text
practice = practice.partition("Hit Points")[1] + practice.partition("Hit Points")[2]
rangerLevelUp =[0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 8, 8, 8, 10, 10, 11, 12, 12, 14, 14, 15, 16, 16, 18, 19, 19, 20]

rangerClassFeatures = [practice.partition("Proficiencies")[0]]
practice = practice.partition("Proficiencies")[1] + practice.partition("Proficiencies")[2]

rangerClassFeatures.append(practice.partition("Equipment")[0])
practice = practice.partition("Equipment")[1] + practice.partition("Equipment")[2]

rangerClassFeatures.append(practice.partition("Favored Enemy")[0])
practice = practice.partition("Favored Enemy")[1] + practice.partition("Favored Enemy")[2]

rangerClassFeatures.append(practice.partition("Favored Foe (Optional)")[0])
practice = practice.partition("Natural Explorer")[1] + practice.partition("Natural Explorer")[2]

# rangerClassFeatures.append(practice.partition("Natural Explorer")[0])
# practice = practice.partition("Natural Explorer")[1] + practice.partition("Natural Explorer")[2]

rangerClassFeatures.append(practice.partition("Deft Explorer (Optional)")[0])
practice = practice.partition("Fighting Style")[1] + practice.partition("Fighting Style")[2]

rangerClassFeatures.append(practice.partition("Close Quarters Shooter (UA)")[0])
practice = practice.partition("Spellcasting")[1] + practice.partition("Spellcasting")[2]

rangerClassFeatures.append(practice.partition("Spellcasting Focus (Optional)")[0])
practice = practice.partition("Primeval Awareness")[1] + practice.partition("Primeval Awareness")[2]

rangerClassFeatures.append(practice.partition("Primal Awareness")[0])
practice = practice.partition("Ranger Conclave")[1] + practice.partition("Ranger Conclave")[2]

rangerClassFeatures.append(practice.partition("Ability Score Improvement")[0])
practice = practice.partition("Ability Score Improvement")[1] + practice.partition("Ability Score Improvement")[2]

rangerClassFeatures.append(practice.partition("Martial Versatility (Optional)")[0])
practice = practice.partition("Martial Versatility (Optional)")[1] + practice.partition("Martial Versatility (Optional)")[2]

rangerClassFeatures.append(practice.partition("Extra Attack")[0])
practice = practice.partition("Extra Attack")[1] + practice.partition("Extra Attack")[2]

rangerClassFeatures.append(practice.partition("Land's Stride")[0])
practice = practice.partition("Land's Stride")[1] + practice.partition("Land's Stride")[2]

rangerClassFeatures.append("Favored Enemy Improvement" + rangerClassFeatures[3].partition("if they speak one at all.")[2])
FEI = rangerClassFeatures[len(rangerClassFeatures)-1]

rangerClassFeatures.append("Natural Explorer Improvement" + rangerClassFeatures[4].partition("how long ago they passed through the area.\n")[2])
NEI = rangerClassFeatures[len(rangerClassFeatures)-1]

rangerClassFeatures.append("Ranger Conclave Feature")

rangerClassFeatures.append(practice.partition("Hide in Plain Sight")[0])
practice = practice.partition("Hide in Plain Sight")[1] + practice.partition("Hide in Plain Sight")[2]

rangerClassFeatures.append(ASI)
rangerClassFeatures.append(martVers)
rangerClassFeatures.append(NEI)

rangerClassFeatures.append(practice.partition("Nature's Veil (Optional)")[0])
practice = practice.partition("Vanish")[1] + practice.partition("Vanish")[2]

rangerClassFeatures.append("Ranger Conclave Feature")
rangerClassFeatures.append(ASI)
rangerClassFeatures.append(martVers)
rangerClassFeatures.append(FEI)

rangerClassFeatures.append(practice.partition("Feral Senses")[0])
practice = practice.partition("Feral Sense")[1] + practice.partition("Feral Senses")[2]

rangerClassFeatures.append("Ranger Conclave Feature")
rangerClassFeatures.append(ASI)
rangerClassFeatures.append(martVers)

rangerClassFeatures.append(practice.partition("Foe Slayer")[0])
practice = practice.partition("Foe Slayer")[1] + practice.partition("Foe Slayer")[2]

rangerClassFeatures.append(ASI)
rangerClassFeatures.append(martVers)

rangerClassFeatures.append(practice)

URL = "http://dnd5e.wikidot.com/rogue"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")
results = soup.find("div", class_="col-lg-12")
practice = results.text
practice = practice.partition("Hit Points")[1] + practice.partition("Hit Points")[2]
rogueLevelUp =[0, 0, 0, 1, 1, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

rogueClassFeatures = [practice.partition("Proficiencies")[0]]
practice = practice.partition("Proficiencies")[1] + practice.partition("Proficiencies")[2]

rogueClassFeatures.append(practice.partition("Equipment")[0])
practice = practice.partition("Equipment")[1] + practice.partition("Equipment")[2]

rogueClassFeatures.append(practice.partition("Expertise")[0])
practice = practice.partition("Expertise")[1] + practice.partition("Expertise")[2]

rogueClassFeatures.append(practice.partition("Sneak Attack")[0])
practice = practice.partition("Sneak Attack")[1] + practice.partition("Sneak Attack")[2]

rogueClassFeatures.append(practice.partition("Thieves' Cant")[0])
practice = practice.partition("Thieves' Cant")[1] + practice.partition("Thieves' Cant")[2]

rogueClassFeatures.append(practice.partition("Cunning Action")[0])
practice = practice.partition("Cunning Action")[1] + practice.partition("Cunning Action")[2]

rogueClassFeatures.append(practice.partition("Roguish Archetype")[0])
practice = practice.partition("Roguish Archetype")[1] + practice.partition("Roguish Archetype")[2]

rogueClassFeatures.append(practice.partition("Steady Aim (Optional)")[0])
practice = practice.partition("Steady Aim (Optional)")[1] + practice.partition("Steady Aim (Optional)")[2]

rogueClassFeatures.append(practice.partition("Ability Score Improvement")[0])
practice = practice.partition("Ability Score Improvement")[1] + practice.partition("Ability Score Improvement")[2]

rogueClassFeatures.append(practice.partition("Uncanny Dodge")[0])
practice = practice.partition("Uncanny Dodge")[1] + practice.partition("Uncanny Dodge")[2]

rogueClassFeatures.append(practice.partition("Evasion")[0])
practice = practice.partition("Evasion")[1] + practice.partition("Evasion")[2]

rogueClassFeatures.append("Expertise Improvement" + rogueClassFeatures[3].partition("either of the chosen proficiencies.")[2])

rogueClassFeatures.append(practice.partition("Reliable Talent")[0])
practice = practice.partition("Reliable Talent")[1] + practice.partition("Reliable Talent")[2]

rogueClassFeatures.append(ASI)
rogueClassFeatures.append("Roguish Archetype Feature")
rogueClassFeatures.append(ASI)

rogueClassFeatures.append(practice.partition("Blindsense")[0])
practice = practice.partition("Blindsense")[1] + practice.partition("Blindsense")[2]

rogueClassFeatures.append(ASI)
rogueClassFeatures.append("Roguish Archetype Feature")

rogueClassFeatures.append(practice.partition("Slippery Mind")[0])
practice = practice.partition("Slippery Mind")[1] + practice.partition("Slippery Mind")[2]

rogueClassFeatures.append(practice.partition("Elusive")[0])
practice = practice.partition("Elusive")[1] + practice.partition("Elusive")[2]

rogueClassFeatures.append(ASI)
rogueClassFeatures.append("Roguish Archetype Feature")

rogueClassFeatures.append(practice.partition("Stroke of Luck")[0])
practice = practice.partition("Stroke of Luck")[1] + practice.partition("Stroke of Luck")[2]

rogueClassFeatures.append(ASI)
rogueClassFeatures.append(practice)

for i in rogueClassFeatures:
    print(i)

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

druidData = {
    "class": classNames[3],
    "level": druidLevelUp,
    "features": druidClassFeatures
}

df4 = pd.DataFrame(druidData)

fighterData = {
    "class": classNames[4],
    "level": fighterLevelUp,
    "features": features,
}
df5 = pd.DataFrame(fighterData)

monkData = {
    "class": classNames[5],
    "level": monkLevelUp,
    "features": monkClassFeatures
}
df6 = pd.DataFrame(monkData)

paladinData = {
    "class": classNames[6],
    "level": paladinLevelUp,
    "features": paladinClassFeatures
}
df7 = pd.DataFrame(paladinData)

rangerData = {
    "class": classNames[7],
    "level": rangerLevelUp,
    "features": rangerClassFeatures
}
df8 = pd.DataFrame(rangerData)

rogueData = {
    "class": classNames[8],
    "level": rogueLevelUp,
    "features": rogueClassFeatures
}
df9 = pd.DataFrame(rogueData)
# Once all of our dictionaries have been created, we than make a list of dictionaries and convert the entire list into a pandas dataframe. This allows all of the
# information to be stored in a single data structure
table = [df1, df2, df3, df4, df5, df6, df7, df8, df9]

finalDf = pd.concat(table)
finalDf = finalDf.reset_index()

# Allows the entire dataframe to be printed, rather than just the beginning and end. Purely for testing purposes
with pd.option_context('display.max_rows', None,
                       'display.max_columns', None,
                       'display.precision', 4,
                       ):
    print(finalDf)
