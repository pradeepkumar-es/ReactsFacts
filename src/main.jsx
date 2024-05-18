import React from 'react'
import ReactDOM from 'react-dom/client' //React DOM is a JavaScript library for building user interfaces
// import App from './App.jsx'
import './index.css'
// import reactlogo from './assets/react-logo.png'

//initial code of installtion
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */
/*
const page = <div>
  <img src="../src/assets/react-logo.png" width="45px" />
  <h1>Fun facts about React</h1>
  <ul>
    <li>Was first released in 2013</li>
    <li>Was originally created by Jordan Walke</li>
    <li>Has well over 100K stars on GitHub</li>
    <li>Is maintained by Facebook</li>
    <li>Powers thousands of enterprise apps, including mobile apps</li>
  </ul>
</div>

// ReactDOM.render(page, document.getElementById("root"))  //old way: react17: will not work in newer version
ReactDOM.createRoot(document.getElementById("root")).render(page) //will also work
*/


//custom components
// function TemporaryComponent ()  { //name shoiuld be capitalized
//   return (
//     <div>
//   <img src="../src/assets/react-logo.png" width="45px" />
//   <h1>Fun facts about React</h1>
//   <ul>
//     <li>Was first released in 2013</li>
//     <li>Was originally created by Jordan Walke</li>
//     <li>Has well over 100K stars on GitHub</li>
//     <li>Is maintained by Facebook</li>
//     <li>Powers thousands of enterprise apps, including mobile apps</li>
//   </ul>
// </div>
//   )
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<TemporaryComponent/>)



/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */
// function WhyReact () {
//   return (
//     <div>
//       <ol>
//       <li>Reusability</li>
//       <li>Declarative</li>
//       <li>JSX</li>
//       <li>Popular library</li>
//       <li>Easy to get job, if i know it</li>
//       </ol>
//     </div>
    
//   )
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<WhyReact/>)//commenting for part 2 challenge


/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
*/

// function Header (){
//   return (
//     <nav className='nav'>
//       <img src="../src/assets/react-logo.png" alt="react logo" /*width="40px"*/ className='react-logo'/>
//       <ul className='nav-items'>
//         <li>Pricing</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   )
// }

// function H1 (){
//   return (
//     <h1>Reasons
//     I'm excited to learn React</h1>
//   )
// }

// function Footer () {
//   return (
//     <div>
//       ©2024 Kumar development. All rights reserved.
//     </div>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(
//   // fragment
//   <> 
//   <Header/>
//   <H1/>
//   <WhyReact/>
//   <Footer/>
//   </>
// )


/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/
/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

// function MainContent () {
//   return (
//     <div>
//        <h1>Reasons
//     I'm excited to learn React</h1>
//     <ol>
//       <li>Reusability</li>
//       <li>Declarative</li>
//       <li>JSX</li>
//       <li>Popular library</li>
//       <li>Easy to get job, if i know it</li>
//       </ol>
//     </div>
//   )
// }

// function WhyReact () {
//   return (
//     <div>
//       {/* child components inside parent componetns */}
//       < Header/> 
//       <MainContent/>
//       <Footer/>
//     </div>
    
//   )
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<WhyReact/>)

//Organizing components
//in separate components
// import Header from './Header' //after creating component Header in sperate file
//importing name can be other than Heder or other than Header component  name but ./Header should be exact as file name

/**
Challenge: move the Footer and MainContent components
into their own files.
*/
// import MainContent from './MainContent'
// import Footer from './Footer'




//Project Setup
/**
Challenge: Project setup

- Create a `components` folder
- Create the following components in separate files inside
  the components folder.  In each one, just render an `h1` 
  with the name of the component (e.g. return <h1>Navbar goes here</h1>):
    - Navbar
    - Main
- Create an App component outside the components folder (sibling to
  the index.js file)
    - Have App render the Navbar and Main components
- Import and render the App component inside of index.js using ReactDOM
    - At this point you should have your "Navbar goes here" etc. showing up
      in the mini-browser.
- Go to Google fonts and get the "Inter" font with weights 400, 600, and 700.
  Put the links to those fonts ABOVE the style.css link in index.html (Use
  the `<link/>` elements instead of the @import or npm options for getting
  the fonts. You may need to do some extra research to figure out how this 
  works if you haven't done it before)
*/
import App from './App'
ReactDOM.createRoot(document.getElementById("root")).render(<App/>)
