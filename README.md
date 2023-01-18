# Canal Movie Front.
###  this project a frontend App for [themoviedb](https://developers.themoviedb.org/3/movies/get-movie-videos) website 

## Table of contents
* [General info](#general-info)
* [Overview](#overview)
* [In search](#in-search)
* [Components](#components)
* * [CustomHook](#custom-hooks)
* [Available Scripts](#available-scripts)
## General info
By default i use discovery request to find all TV or Movie content and apply a search, sort, paginate module in it.  
With search mode it's use MultiSearch Route to find all Movie and TV content  
**NB:** sorting in not allowed by API in Search Mode. 

we could see a Detail Mode, to find out more a single content with some couple detail. 
```In case if search Word is empty we set discovery mode TV by default.```

#### <strong> <u>In Discovery</u> :
 mode we can have can't alltogether TV and movie content this is why I choice by default select TV content by default. <strong>

#### Pagination Module: 
pagination module is base on the result on the page and un dynamically change on page content updating. 

### In search:
By default: page is set to 1 befaore return results.

![Alt text](documents/search.PNG)

## Overview: 
![Alt text](documents/overview.PNG)

### Components
  We have some BaseComponents
  - List : to display all Result with image and name.
  - Sort : Sorting popularity desc or asc and handle QueryParams  
  - Paginate : base on the returned result return range on to paginate and handle fireCurrentposition Change.
  - Search : text input with debouce to fire changeEnvent in change.  
  
  we have Layout And Page Contents.
  - we have some Layouting systems as component to organise display area, in this project i use V5layout.  
  - SeachPage: Compose multiple other component to make search page, with Using Fetching Service to get all Contents. 
  - DetailPage: to display view of a single component.

  #### Custom hooks
  - useDeouceHook. it is a hook to handle delay and word distinction before fire event, Base on Rxjs. 
  


### Available Scripts

#### `npm start`
The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\


#### `npm run build`

Builds the app for production to the `build` folder.\
#### `npm run eject`




