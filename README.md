# Build Search filter in React
React code to build a simple search filter functionality to display a filtered list based on the search query entered by the user.

The following are the steps to create a Search filter using React JS:

1. Declare React states for search input values.
2. Create HTML input text for entering search term and update state in onChange function.
3. Add Array.filter() on list of items with search term value.

# Simple counter exercise
Creating a simple counter using React which increments or decrements count dynamically on-screen as the user clicks on the button. This exercise requires knowledge of fundamental React concepts such as State, Component, etc.

We can complete the simple counter exercise with the following steps:

1. Create React state to store the count value.
2. Declare JS functions to incement or decrement the value through setState().
3. Add HTML buttons with onClick to JSX code.


# Display a list in React
React code to print each item from the list on the page using Array.map() function to display each item on the page.

The list of items is displayed using React JS through the following steps:

1. Declare list of items as JS Array.
2. Access each item using Array.map()
3. Return JSX code in callback function for every item.


# Build Accordion in React
Creating an accordion that toggles text content on click of the accordion header using React State and conditional rendering.

The following are the steps to create an accordion in React JS:

1. Display every title of accordion with body.
2. Hide every accordion body using element.display = none;
3. Toggle visibility of accordion body on click of title.  

# Image Slider using React JS
React exercise to create an image slide, where users can view multiple images with next/previous buttons. Additionally, there is also an option to select an image from any index of the list through a click-on option circle.

The following are the steps to create an image slider in React JS:

1. Declare array of objects with id and image url.
2. For pre/next functionality, we decrement/increment count of the index of active image.
3. Update active image index with clicked option.

# Create a Checklist in React
React code to display a checklist with multiple options that can select and the selected options are dynamically displayed on the screen. React State is used to keep track of checked options and onChange() Event handler is triggered to alter the state whenever an option is checked or unchecked.

The following are the steps to create a Checklist in React JS:

1. Create React state to track checkbox value.
2. Function to update checkbox value based on event.target.checked
3. Add checkbox input element to JSX code with onChange function.

# Simple Login form in React
React code for simple login form where the user login by entering their username and password. The form inputs are validated to check if correct information is entered and the error messages are the validation fails. The login form is hidden and the “Welcome, ${name}” message is shown when the user login is successful.

The following are the steps to create a simple login form using React JS:

1. Create name, email and password input form elements.
2. React States to store user input values.
3. Add form validation for compare name, email and password with correct values.
4. Display “Welcome, ${name}” if login is successful, else display the error message.

# Print data from REST API
React code to collect data from rest API using fetch() in JavaScript combined with useEffect() to load the content on page render.

The following are the steps to print data from REST API in React JS:

1. Create React state to store the API response.
2. Declare State to Component JSX code to display the API response.
3. JS function where API call is through axios.get() or fetch().
4. Add callback function to update the React state with API response.
5. Add HTML button with JS function with onChange attribute.

# Multi-Page navigation using React Router
React code to develop a multipage application with navigation for Home, About and Blog pages. The route-based component rendering is implemented using the “react-dom” npm package to allow users to navigate to different pages and render the component with respect to the route.

The following are the steps to Navigation with React Router in React JS:

1. Add “react-router-dom” npm package to package.json .
2. Specify the path for every component.
3. Enclose the routes with <Router> and <Switch> in App.js

# Context API in React Components
Context allows values to be passed from multiple levels of child components without using props. Thus context can be used as an alternative to Redux in some of the cases. Learn more about the context in React from reactjs.org/docs/context.html.

The following are the steps to use Context API using React JS:

1. Create React context using React.createContext().
2. Declare context object with properties and values.
3. Wrap App.js with <AppContext.Provider> </AppContext.Provider> with values as context object.
4. Access context object through components using React.useContext().