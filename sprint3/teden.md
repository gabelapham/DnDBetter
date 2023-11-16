# Sprint 3

Triton Eden, teden, DnDBetter

### What you planned to do
- race-data.py: Issue #74 https://github.com/gabelapham/DnDBetter/issues/74
- tools.py: Issue #75 https://github.com/gabelapham/DnDBetter/issues/75
- race-data.csv #76 https://github.com/gabelapham/DnDBetter/issues/76
- d_ancestry.csv https://github.com/gabelapham/DnDBetter/issues/76
- tools.csv #76 https://github.com/gabelapham/DnDBetter/issues/76

### What you did not do
- None

### What problems you encountered
- The races pages changed on http://dnd5e.wikidot.com/ website changed so I had to rescrape all of the race pages
- I had some issues connecting to the mySQL database

### Issues you worked on
- [#74] (https://github.com/gabelapham/DnDBetter/issues/74) add all race data to a single pandas data frame
- [#75] (https://github.com/gabelapham/DnDBetter/issues/75) scraping the tools page
- [#76] (https://github.com/gabelapham/DnDBetter/issues/76) add the race and tools data to the mySQL data base

### Files you worked on
- race-data.py https://github.com/gabelapham/DnDBetter/blob/main/app/src/backend/race-scraping/race-data.py
- race-data.csv https://github.com/gabelapham/DnDBetter/blob/main/app/src/backend/race-scraping/race-data.csv
- d_ancestry.csv https://github.com/gabelapham/DnDBetter/blob/main/app/src/backend/race-scraping/d_ancestry.csv
- tools.py https://github.com/gabelapham/DnDBetter/blob/main/app/src/backend/equipment-scraping/tools.py
- tools.csv https://github.com/gabelapham/DnDBetter/blob/main/app/src/backend/equipment-scraping/tools.csv

### What you accomplished
- For sprint 3 I finished scraping the race data from http://dnd5e.wikidot.com/ website and adding it to the mySQL database. I also craped the tools page and added it to the
mySQL database. To add the data to the mySQL database I added my scraped data to pandas data frames and then converted those data frames into csv files. Then I imported those
csv files on to the mySQL.
