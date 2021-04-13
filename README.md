# Alicia's code challenge

An extra simple CRUD table

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started
```git clone git@github.com:aliciahickman/alicias-code-challenge.git```\
``` cd alicias-code-challenge```\
```npm install``` \
```npm start```

Now the app is running in development mode.\
The browser should open [http://localhost:3000](http://localhost:3000) automatically.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## What's inside
### JS
Top level 'App.js': contains the CRUD state logic and defines pages with React-router.

Two page components: MainList and Details. The Details page is the only other file that contains state logic.

All other sub-component pieces are in the 'components' folder. 

### CSS

Each component file has self-contained styling at the bottom. This is my first go at using Emotion.js, looking forward to learning the best-practice methods.\
Theme variables are in the CSS folder.\
'Normalize.css' is also imported into index.js.

## Other scripts
In the project directory, you can also run:
### `npm test`

Launches the test runner in the interactive watch mode.\
I have room to learn more about testing, my coverage could  be improved. After researching, something like Puppeteer sounds like it would allow me to test across pages more fully.

```npm test -- --coverage ``` \
Shows test coverage table after running tests.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
