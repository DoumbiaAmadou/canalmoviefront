# Canal Movie Front.
### [description] this project a frontend App for [themoviedb](https://developers.themoviedb.org/3/movies/get-movie-videos) website 

**[InProgres]**


By default it's use discovery request to find all TV content and apply a search, sort, paginate module in it. 
in search mode it's use MultiSearch Route to find all Movie and TV content 
NB: sorting in not allowed by API in Search Mode. 

we could see a Detail Mode, to find out more a single content with some couple detail. 
if search is emplty we reset to discovery mode TV.

<strong> <u>In discovery</u>: mode we can get alltogether TV and movie content thi's why I choice to by default select TV mode in discovery. <strong>

Pagination Module: 
pagination module is base on the result on the page and un dynamically change on page content updating. 

in search mode page is set to 1 befaore return result.

## Available Scripts

#### `npm start`
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\


### `npm run build`

Builds the app for production to the `build` folder.\
### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**


