# Sprint 3
Cooper Sarphie, csarphie, cooperalpaca

## What I planned to do
- get the login system working with the database, and have it so the login state is consistent across pages

## What I did not do
I achieved all of my assigned issues, and accomplished all I set out to do.

## What problems I ecnountered
- was having trouble with connecting to the database but I figured it out
- There still is no form validation or security measures on the login page, so I will have to fix that

## Issues I worked on
- - [#9](https://github.com/gabelapham/DnDBetter/issues/9) setting up backend db for user login and data saving
  
## Files I worked on
- /DNDBetter/app/src/backend/server.cjs - this is the backend of the login page and the rest of the site as well. the way it works is by listening for requests on a certain port
- /DNDBetter/app/src/frontend/Login_page/src/app.jsx - this is the front end of the login page, it sends requests to the backend that connect to the server
## What I accomplished
I was able to finally get the frontend to get data from the database, and now the login system will be easy to finalize and implement a final version with all the features.
