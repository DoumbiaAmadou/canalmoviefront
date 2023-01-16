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
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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
