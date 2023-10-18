Contains the file responsible for scraping and databasing every piece of class information. The reason everything is done by hand rather than accomplished by looping 
through tags is because the website we are scraping from, [wikidot](http://dnd5e.wikidot.com/), does not display all necessary information in the body of its [page](http://dnd5e.wikidot.com/druid). This link shows how the druid gets a total of 23 features according to their level up table, but only 13 are given a proper 
description on the page. Because of this, when there are class features that repeat or simply are not listed as part of the page body, a for loop or while loop would 
fail to grab them withoutextensive conditional statements. Rather than dealing with that headache, the information is scraped by hand.
