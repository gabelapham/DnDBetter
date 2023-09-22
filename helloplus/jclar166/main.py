import requests
from bs4 import BeautifulSoup

URL = "http://dnd5e.wikidot.com/barbarian"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")
results = soup.find("div", class_="col-lg-12")
practice = results.text

practice = practice.partition("Hit Points")[1] + practice.partition("Hit Points")[2]
classFeatures = [practice.partition("Proficiencies")[0]]
practice = practice.partition("Proficiencies")[1] + practice.partition("Proficiencies")[2]

classFeatures.append(practice.partition("Equipment")[0])
practice = practice.partition("Equipment")[1] + practice.partition("Proficiencies")[2]

classFeatures.append(practice.partition("Rage")[0])
practice = practice.partition("Rage")[1] + practice.partition("Rage")[2]

classFeatures.append(practice.partition("Unarmored Defense")[0])
practice = practice.partition("Unarmored Defense")[1] + practice.partition("Unarmored Defense")[2]

classFeatures.append(practice.partition("Danger Sense")[0])
practice = practice.partition("Danger Sense")[1] + practice.partition("Danger Sense")[2]

classFeatures.append(practice.partition("Reckless Attack")[0])
practice = practice.partition("Reckless Attack")[1] + practice.partition("Reckless Attack")[2]

classFeatures.append(practice.partition("Primal Path")[0])
practice = practice.partition("Primal Path")[1] + practice.partition("Primal Path")[2]

classFeatures.append(practice.partition("Primal Knowledge (Optional)")[0])
practice = practice.partition("Primal Knowledge (Optional)")[1] + practice.partition("Primal Knowledge (Optional)")[2]

classFeatures.append(practice.partition("Ability Score Improvement")[0])
practice = practice.partition("Ability Score Improvement")[1] + practice.partition("Ability Score Improvement")[2]

classFeatures.append(practice.partition("Extra Attack")[0])
practice = practice.partition("Extra Attack")[1] + practice.partition("Extra Attack")[2]

classFeatures.append(practice.partition("Fast Movement")[0])
practice = practice.partition("Fast Movement")[1] + practice.partition("Fast Movement")[2]

classFeatures.append(practice.partition("Feral Instinct")[0])
classFeatures.append("Path Feature")
practice = practice.partition("Feral Instinct")[1] + practice.partition("Feral Instinct")[2]

classFeatures.append(practice.partition("Instinctive Pounce (Optional)")[0])
practice = (practice.partition("Instinctive Pounce (Optional)")[1] +
            practice.partition("Instinctive Pounce (Optional)")[2])

classFeatures.append(practice.partition("Brutal Critical")[0])
practice = practice.partition("Brutal Critical")[1] + practice.partition("Brutal Critical")[2]
classFeatures.append("ASI")

classFeatures.append(practice.partition("Relentless Rage")[0])
classFeatures.append("Path Feature")
classFeatures.append("Primal Knowledge (Optional)")
practice = practice.partition("Relentless Rage")[1] + practice.partition("Relentless Rage")[2]

classFeatures.append(practice.partition("Persistent Rage")[0])
classFeatures.append("ASI")
classFeatures.append("Brutal Critical (2)")
classFeatures.append("Path Feature")
practice = practice.partition("Persistent Rage")[1] + practice.partition("Persistent Rage")[2]

classFeatures.append(practice.partition("Indomitable Might")[0])
classFeatures.append("ASI")
classFeatures.append("Brutal Critical (3)")
practice = practice.partition("Indomitable Might")[1] + practice.partition("Indomitable Might")[2]

classFeatures.append(practice.partition("Primal Champion")[0])
classFeatures.append("ASI")
practice = practice.partition("Primal Champion")[1] + practice.partition("Primal Champion")[2]

classFeatures.append(practice)
classFeatures = [i for i in classFeatures if i]

for i in range(len(classFeatures)):
    print(classFeatures[i])
