# Getting Started with my app - Spectrum Challenge

This app is created using React. Access this app by clicking [here](https://wizardly-morse-eaf334.netlify.app)

## Available Scripts

In the project directory, you can run:

### `npm start`

You can clone the app using: 

```
git clone <<Repo HTTPS link>>
```

Then you can install npm: 

```
npm install
```

Once npm is installed you can run

```
npm run serve
```

you will be able to look at project on [https://localhost:3000](https://localhost:3000).

### `npm test`

Test files are not yet added, due to lack of time.\
This app has been deployed on Netlify and Pipelined with [Buddy.work](https://buddy.works/).\
The Deployed app can be accessed using this [Link](https://wizardly-morse-eaf334.netlify.app)

## Libraries:

- This app is build using React library.
- For styling, Semantic-UI-React library has been used.

## Pages:

- Front Page
- Home Page

## Features:

- Initially user will be on FrontPage, where you will find arrow to direct user to HomePage
- The API provided is shown in form of table
- User can sort table by Restaurant Name, Address, City, State
- Table is using pagination with each page with 10 entries of restaurants.
- Above table, a message will be displayed always for number of total results found
- If it's first page, the previous button will be disabled. If it's last page, the next button will be disabled.
- You can search in Search bar, which is on left bar in the screen. Search will show result as if it matches full or partially with Restaurant Name, City, State or Genre. Result will change as per text is type (The requirement said that the result should display when enter is hit. If that needs to be implemented, we have to set onChange event when enter(keycode: 13) is triggered)
- User can set additional features by clicking button with filter icon (funnel icon). That will open the filter section, where you can enter and find the type or genre and state in the filter box (text area + dropdown).
- The result when filtered will reflect result will atleast one of the Genre or State selected in filter.
- User can use Navigation Bar to switch from Homepage to Frontpage and vice versa.
- User and use all three features - Search Bar, Genre Filter & State Filter.
- The table is using Semantic UI components Table, Table.Row, Table.HeaderCell, Table.Cell, which under the hood is using HTML tags such as table, tr, th, td respectively. Because its the same, we are using same attributes like colspan.

## Work that can be done:

There are number of things that can be done with this project.
Some of those things are that can be done if time was not a constrain:

- Testing: Small or big, an app needs unit testing for proper implementation. The project is equipped with testing libraries - Mocha & Chai. Additionally, we could have performed Cypress for e2e testing.
- TypeScrpt: This project was initiated with Javascript, but type detection and advanced error detection for types could have been implemented using TypeScript.
- Redux store management: As app grows more, it need store management which component can communicate (pass data between component) easily. Redux-Thunk implementation would have made that communication efficient.
- Additional features: Many additional features could have been added, filtering on other attributes, using lat-long to show the location of Restaurant on Google-Maps using google-map library, etc.

I hope you liked the project. Feel free to contact author at shrikantpatel.js@gmail.com

Follow my Instagram Page [Everything FrontEnd](https://www.instagram.com/shrikbiz.js/) (a new venture) & medium [shrikbiz](shrikbiz.medium.com).
