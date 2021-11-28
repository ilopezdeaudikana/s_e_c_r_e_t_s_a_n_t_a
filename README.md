## Secret santa 

This app generates random asignments from a list of users returned from the API. There are not any routes other than the main page.

The UI is divided in three components, Santa, Pairs and Card. The logic is divided as follows:

1. Santa component: Triggers an API request to get the list of users and passes them down to the pairs component.
2. Pairs component: Does the actual pairing of the users and passes a pair to each card.
3. Card component: Renders the pair.

The stack I used is `React`, `Typescript`, `React hooks`, `Redux`, `Sagas`, `Jest`, `JSDoc` and `Scss modules`.

I chose redux for state management. The state has this format.

```js
export interface PlayersState {
  list: Player[];
}

export interface State {
  players: PlayersState;
}
```
There are only three actions for 1) requesting the list 2) setting the list and 3) shuffling the list.

The list is shuffled on every page load and also by clicking on the rearrange button.

I added JSDoc to have a fast view of all these components in html format.

I added a bunch of tests for the main areas of the app.

I used flexbox for the layout and scss modules to take advantage of the scoping of CSS that CRA generates.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn docs`

Autogenerates docs from comments in code. You can check the generated html in the docs folder


