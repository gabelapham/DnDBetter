# Sprint 3

Gabe Lapham, glapham, DnDBetter

## What I Planned To Do

- [#65](https://github.com/gabelapham/DnDBetter/issues/65)
- [#66](https://github.com/gabelapham/DnDBetter/issues/66)
- [#70](https://github.com/gabelapham/DnDBetter/issues/70)

## What I Did Not Do
- Querying from the MySQL database (I did not have access to the server until today, 11/15/23, so it unfortunately was not possible)

## What Problems I Encountered
- Because JS uses both the '+' sign for both adding integers AND concatenation, it took me more time than I'd like to admit for me to figure out how to get my healFunc working correctly since it would only concatenate the numbers and not actually add them like they should.

## Issues I Worked On
- [#65](https://github.com/gabelapham/DnDBetter/issues/65) Inventory Search Functionality
- [#66](https://github.com/gabelapham/DnDBetter/issues/66) Hit Points, Hit Dice, and Money
- [#70](https://github.com/gabelapham/DnDBetter/issues/70) Short Rest and Long Rest Functionality

## Files I Worked On
- app/src/frontend/Stats_Page/src/StatsApp.jsx
- app/src/frontend/Stats_Page/src/Stats.jsx
- app/src/frontend/Stats_Page/src/Stats.css 
- app/src/frontend/Stats_Page/src/components/DamagePopup.css 
- app/src/frontend/Stats_Page/src/components/DamagePopup.jsx 
- app/src/frontend/Stats_Page/src/components/HealthPopup.css 
- app/src/frontend/Stats_Page/src/components/HealthPopup.jsx
- app/src/frontend/Stats_Page/src/components/ItemSearch.css
- app/src/frontend/Stats_Page/src/components/ItemSearch.jsx
- app/src/frontend/Stats_Page/src/components/LongRestPopup.jsx
- app/src/frontend/Stats_Page/src/components/RestPopup.css
- app/src/frontend/Stats_Page/src/components/ShortRestPopup.jsx

## What I Accomplished
Overall, I was able to add some very necessary functionality to the stats page, and bring it closer to being a final product. Health is one of the main components of keeping up with a character, and once I'm able to query the needed information from the races, classes, spells, and items, we'll have a complete product.