# Sprint 2

Triton Eden, teden, DnDBetter

### What you planned to do
- tiefling.py: Issue #47 https://github.com/gabelapham/DnDBetter/issues/31
- gnome.py: Issue #46 https://github.com/gabelapham/DnDBetter/issues/32
- dragonborn.py: Issue #45 https://github.com/gabelapham/DnDBetter/issues/33

### What you did not do
- None

### What problems you encountered
- I had issues with the non-uniform nature of the http://dnd5e.wikidot.com/ website
- I had issues with the pycharm virtual enviornment giving me incorrect outputs

### Issues you worked on
- [#45] (https://github.com/gabelapham/DnDBetter/issues/45) Scraping the dragonborn race page
- [#46] (https://github.com/gabelapham/DnDBetter/issues/46) Scraping the gnome race page
- [#47] (https://github.com/gabelapham/DnDBetter/issues/47) Scraping the gnome race page
- [#61] (https://github.com/gabelapham/DnDBetter/issues/61) Reformat all of the race scraping to be uniform

### Files you worked on
- human.py https://github.com/gabelapham/DnDBetter/blob/main/app/src/backend/race-scraping/human.py
- dwarf.py https://github.com/gabelapham/DnDBetter/blob/main/app/src/backend/race-scraping/dwarf.py
- halfling.py https://github.com/gabelapham/DnDBetter/blob/main/app/src/backend/race-scraping/halfling.py
- elf.py https://github.com/gabelapham/DnDBetter/blob/main/app/src/backend/race-scraping/elf.py
- half-elf.py https://github.com/gabelapham/DnDBetter/blob/main/app/src/backend/race-scraping/half-elf.py
- half-orc.py https://github.com/gabelapham/DnDBetter/blob/main/app/src/backend/race-scraping/half-orc.py
- dragonborn.py https://github.com/gabelapham/DnDBetter/blob/main/app/src/backend/race-scraping/dragonborn.py
- tiefling.py https://github.com/gabelapham/DnDBetter/blob/main/app/src/backend/race-scraping/tiefling.py
- gnome.py https://github.com/gabelapham/DnDBetter/blob/main/app/src/backend/race-scraping/gnome.py

### What you accomplished
- For sprint 2 I completely scraped all 9 race information pages from the http://dnd5e.wikidot.com/ website. Similar to sprint 1 I had to scrape the title from the these pages as well as 
the race description, features, and variants using BeautifulSoup. The webpages for the 3 races I scraped in sprint 2 had formatting that prevented me from using the methods I used to
scrape the previous 6 races. I found a new was to parse through the data that allowed me to get the information from the last 3 races I needed to scrape, and made the data from the races
I scraped in sprint 1 look more presentable.
