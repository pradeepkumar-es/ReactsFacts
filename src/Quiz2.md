Quiz!

1. What is a React component?
Ans: React Component is reusable component
Ans: A function that returns React elements (JSX). (UI)

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
Ans: Component name always start with capital letter

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```
Ans: in rendering we have to use <Header /> instead of Header ()