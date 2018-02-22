# Your Next Trip

This web project was about displaying the next coming trip for a given route / stop. 

## Description

This project was bootstrapped with `Create React App`, Behind the scenes, `webpack` was used.

The static files was inside public folder which was generated by React CLI. A sub-folder called json was created manually and includes three json files specific to the api url.

There was one more folder, `src`, which was generated by `React CLI` too. And inside the `src`, three more `sub-folder` were created manually. They are:
* api
* components
* redux

## Technical Implementation

### api
* `routeApi.js`: Async fetching logic definition

### components
* `Header.js`: content of head 
* `NextBus.js`: stateless component for displaying message of next bus
* `Routes.js`: stateless component for grouping three `dropdown controls` which were implemented using `Semantic UI React` 
* `SelectRoute.js`: reusable stateless functional component for displaying dropdown control
* `YourTrip.js`: `stateless component`, and then was converted to `stateful component` by using `connect` of `react-redux`

### redux
* `actions.js`: definition of actions and `redux thunks` 
* `actionTypes.js`:  defination of action types
* `index.js`: `combineReducers` for providing a `rootReducer` for creating `Redux store`
* `reducers.js`: defination of reducers
* `state.js`: application state defination
* `store.js`: `Redux store` defination, along with `rootReducer`, `thunk` and `applyMiddleware`. This file was referenced by root file of `index.js`
   
### Note
* All of the components were `stateless component`, except `YourTrip`, which was converted to `statefull component` for interaction between `stateless components` and `application state`
* For simplicity: the files with `state management` put inside `redux folder`
* No relationship was found with **_Route_** `Dropdown List`. It was defined standalone 
* There was a relationship , parent-child, created between **_Direction_** and **_Stop_** `Dropdown List`
* Message showing `coming trip` was standalone.
* The aim of `YourTrip` file focused on `Redux logic`, such as sending `props` down to `sub-components`, or dispatch `action` when sub-components `emit event`, not too much for dealing with UI showing logic

## Technologies and tools used

* Environment: `React`, `ES6`
* UI control: `Semantic UI React`
* State manager: `Redux`, `React-Redux`, `Redux Thunk`
* Data api: `whatwg-fetch`

## Try It!

* Go to `yourtrip-react`
* Run `npm install`
* Run `npm start`
* Navigate to `http://localhost:3000/`
