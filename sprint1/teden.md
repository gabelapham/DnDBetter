# Sprint 1

Triton Eden, teden, DnDBetter

### What you planned to do
- human.py: Issue #31 https://github.com/gabelapham/DnDBetter/issues/31
- dwarf.py: Issue #32 https://github.com/gabelapham/DnDBetter/issues/32
- halfling.py: Issue #33 https://github.com/gabelapham/DnDBetter/issues/33

### What you did not do
- None

### What problems you encountered
- I had issues with the non-uniform nature of the http://dnd5e.wikidot.com/ website
- I had issues accessing different html elements that have no difference besides their text

### Issues you worked on
- [#31] (https://github.com/gabelapham/DnDBetter/issues/31) Scraping the human race page
- [#32] (https://github.com/gabelapham/DnDBetter/issues/32) Scraping the dwarf race page
- [#33] (https://github.com/gabelapham/DnDBetter/issues/33) Scraping the halfling race page
- [#34] (https://github.com/gabelapham/DnDBetter/issues/34) Scraping the elf race page
- [#35] (https://github.com/gabelapham/DnDBetter/issues/35) Scraping the half-elf race page
- [#36] (https://github.com/gabelapham/DnDBetter/issues/36) Scraping the half-orc race page

### Files you worked on
- human.py https://github.com/gabelapham/DnDBetter/tree/main/backend/race-scraping/human.py
- dwarf.py https://github.com/gabelapham/DnDBetter/tree/main/backend/race-scraping/dwarf.py
- halfling.py https://github.com/gabelapham/DnDBetter/tree/main/backend/race-scraping/halfling.py
- elf.py https://github.com/gabelapham/DnDBetter/tree/main/backend/race-scraping/elf.py
- half-elf.py https://github.com/gabelapham/DnDBetter/tree/main/backend/race-scraping/half-elf.py
- half-orc.py https://github.com/gabelapham/DnDBetter/tree/main/backend/race-scraping/half-orc.py

### What you accomplished
- For sprint 1 I completely scraped six race information pages from the http://dnd5e.wikidot.com/ website. I had to scrape the title from the these pages as well as 
the race description, features, and variants. I used BeautifulSoup to read the html from the file and imported requests to communicate with the website. For the basic
scraping I am just printing the information to the command line. For each race I had to adjust how I scraped the data a bit as each page was slightly different.
