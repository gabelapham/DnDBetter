# Sprint 3
Jonathan Clark, JonClark28, jclar166

## What I planned to do
- Scraping weapons https://github.com/gabelapham/DnDBetter/issues/78
- Scraping armor https://github.com/gabelapham/DnDBetter/issues/77
- Scraping usable items https://github.com/gabelapham/DnDBetter/issues/79
- Placing all my previously scraped information on the database https://github.com/gabelapham/DnDBetter/issues/80

## What I did not do
I achieved all of my assigned issues, and accomplished all I set out to do.

## What problems I ecnountered
- Wikidot tables having inconcsitent tags
- Wikidot tables containing more info than we wanted (this is why for loop upper bounds are subtracted from)

## Issues I worked on
- Scraping weapons [78](https://github.com/gabelapham/DnDBetter/issues/78)
- Scraping armor [77](https://github.com/gabelapham/DnDBetter/issues/77)
- Scraping usable [79](items https://github.com/gabelapham/DnDBetter/issues/79)
- Placing all my previously scraped information on the database [80](https://github.com/gabelapham/DnDBetter/issues/80)
  
## Files I worked on
- /DNDBetter/app/src/bakend/equipment-scraping/armor_weapons.py - This resulted in the files armor.csv, weapons.csv, ammunition.csv
- /DNDBetter/app/arc/backend/equipment-scraping/gear.py - This resulted in the files items.csv, gear.csv

## What I accomplished
I was able to finally finish scraping all the information that was expected of me for this project. I was also able to get all of said information onto the sql database, meaning that the frontend can now
query the database to access that information and display it to the user on the webpage.
