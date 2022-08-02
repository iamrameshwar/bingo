# Bingo App
---
## Netlify (Demo URL)
https://lucky-rugelach-d980ad.netlify.app/

## General Information

1. This project uses Yarn3 and Plug'n'Play, which means *much* faster install times.
2. AWS Severeless Socket Server is used for multiplayer score board

## Setup Process For Web Development
Make sure you have yarn installed, then run the following commands in your console.

1. clone repo

   `git clone https://github.com/iamrameshwar/bingo.git`

2. navigate to project folder

   `cd bingo`
2. install and set up environment

   `yarn install`
3. start the dev server

   `yarn start`
4. visit `http://localhost:3000` to view the app.

And you're done!

## Packages Used
1. @mui/material MUI offers a comprehensive suite of UI tools to help us ship features faster. MUI is having fully-loaded component library and production-ready components. This is used in this project to ease the design work.
    - Dependent Pckages:
        - @emotion/react
        - @emotion/styled
        - @mui/material
        - @mui/styled-engine-sc
2. @reduxjs/toolkit This is used to maintain state in the web app.
3. react-lottie This is used to show animated lottie files.
    - Dependent Pckages:
        - prop-types