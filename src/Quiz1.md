<!-- The .md file extension stands for Markdown documentation, and Markdown is a lightweight markup language used to create formatted text. Markdown is easy to read and write, especially compared to more complex mark-up languages like HTML. -->
1. Why do we need to `import React from "react"` in our files?
Ans: React defines JSX, without react import JSX will not work


2. If I were to console.log(page) in index.js, what would show up?
<!-- const page = <div>
  <img src="../src/assets/react-logo.png" width="45px" />
  <h1>Fun facts about React</h1>
  <ul>
    <li>Was first released in 2013</li>
    <li>Was originally created by Jordan Walke</li>
    <li>Has well over 100K stars on GitHub</li>
    <li>Is maintained by Facebook</li>
    <li>Powers thousands of enterprise apps, including mobile apps</li>
  </ul>
</div> -->
Ans: will give Javascript object
Ans:A JavaScript object. React elements that describe what React should
eventually add to the real DOM for us.
3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
Ans: not wrapped in single element or parent element

4. What does it mean for something to be "declarative" instead of "imperative"?
Ans: declarative means: what to do is only told rest react will do
    imperative means: tell how to do do something then it will do

5. What does it mean for something to be "composable"?
Ans: resusable component
Ans: We have small pieces that we can put together to make something
larger/greater than the individual pieces.