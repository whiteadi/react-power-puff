This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About

This is a simple SPA that is using [tvmaze api](http://www.tvmaze.com/api) to get data about the show Power Puff Girls and its episodes,
show id can be changed in constants though, of course you can use an additional api call to get shows and populate a dropdown box with: Choose show...

It uses simple custom hooks to call the above API and although initially Redux suppose to be used I left it this way because of simplicity but also lack of time.

## Getting started

To have the small app running locally, in the project directory, you can run:

### `yarn`

and then

### `yarn start`

## Building

Running:

### `yarn build`

bundles the app in production mode, mimified and optimized for deploing it to production.

## Packages used (extra to ones create react app adds in)

[normalise scss](https://github.com/JohnAlbin/normalize-scss) A collection of HTML element and attribute rulesets to normalize styles across all browsers.

[react-media-hook](https://github.com/lessmess-dev/react-media-hook) React Hook for Media Queries. I used it for choosing what imagas should be displayed.

[react-html-parser](https://github.com/wrakky/react-html-parser) A utility for converting HTML strings into React components.
