# Sprint 2
Zichen Fu (Frank), Celestial Trace, DnDBetter

# sprint planned
- for this sprint I planned to fix and finish up the main functionality of the spell page 
- help with the data scraping so that I'll be able to obtain the necessary spell data and present it to the user

# sprint didn't do
- I mainly focused on formatting the web page so that it would have the correct layout so I yet have focused on the styling of the web page

# problems encountered
- a problem I encountered is that I splitted up the web page into parts with div. Because some of the component of the page were so closely positioned, it caused some issue with format of certain elements. 

# issue
- #48 scrape spells for the bard class
- #49 scrape spells for the cleric class
- #50 scrape spells for the druid class
- #51 scrape spells for the paladin class

# files worked on
- DnDBetter/app/src/frontend/Spell_Page/src/component/SpellPrep.jsx
- DnDBetter/app/src/frontend/Spell_Page/src/component/SpellPrep.css
- DnDBetter/app/src/frontend/Spell_Page/src/component/FunctionalCounter.jsx
- DnDBetter/app/src/frontend/Spell_Page/src/component/FunctionalCounter.css
- DnDBetter/app/src/backend/spell-scraping/bard.py
- DnDBetter/app/src/backend/spell-scraping/cleric.py
- DnDBetter/app/src/backend/spell-scraping/druid.py
- DnDBetter/app/src/backend/spell-scraping/paladin.py

# accomplishment
- I was able to connect the spell slot input with the counter of each level so user can manage through increment and decrement
- I set up the spell preparation indicator button so that each is their individual component and not all connected as one
- I was able to scrape and store spell attribute such as spell name, range, and duration of each level for 4 of the character classes


