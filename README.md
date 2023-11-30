# Currency Exchanger (Independent Project)

#### A website where a user can input USD amount and choose up to 5 currencies to exchange, using the exchange rate API _https://www.exchangerate-api.com/_

#### By Kim Robinson

## Technologies Used

* Javascript
* CSS
* Bootstrap
* Html
* webpack
* npm
* ESlint
* Babel
* securing api key with .env

## Description
Currency exhange application:

    A user should be able to enter an amount (in U.S. dollars), then specify another currency and submit a form. The user should then see the total amount they entered in converted currency. For example, a user might enter 10 dollars and then see that amount in South Korean won.
    Users should be able to convert U.S. currency into at least 5 other types of currency.
    If the API call results in an error (any message not a 200 OK), the application should return a notification to the user that states what the error is (in the DOM). 
    If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist. 

## Setup/Installation Requirements

1. Navigate to my github repository for this project (https://github.com/kimmykokonut/currency-exchanger)
2. Click the 'Fork' button and you will be taken to a new page where you can give your repository a new name and description. Choose "create fork".
3. Click the 'code' button and copy the url for HTTPS.
4. On your local computer, create a working directory for my files and name appropriately.
5. On your terminal, type $ git clone 'url' (using the url from step 3.)
6. On your terminal, type $ code . to open in VS Code. If you do not have VS Code Editor, you may download here: https://code.visualstudio.com/
7. Once in VS Code, open the terminal there and type $ npm install (to install the packages and dependencies).
8. Update the files to your liking.  Add a .env file to the root directory.
9. Get your own free api key by creating an account at: https://app.exchangerate-api.com/sign-up
10.  Put your key in your .env file like so: >API_KEY=(your key here)
11. To see it rendered in a browser you can start a development server by typing $ npm run start in the VS Code terminal and it should open a browser window located at localhost.8080
12. Have fun!

_If this is too much and you just want to see what it looks like, go to my github pages for this project here: https://kimmykokonut.github.io/galactic-age-calculator_

Optional:

    If you want to build onto the project, you can run the terminal command $ npm run build
    If you want to lint the JS files in the SRC folder you can run the terminal command $ npm run lint
    If you want to run tests with Jest on the business logic you may do some in the terminal command $ npm run test
    To learn more about npm, go here: https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/

## Known Bugs

* If no value is in the input, the answer is 0
* If no name is entered, get: TypeError: giphyResponse.data[0] is undefined.

## License

MIT License. see license.md for more information