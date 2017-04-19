# WebCanada Todo
## Explanation of Choices

1. Use of Local Storage

Since this job is a front end development job I figured I might as well make my version of the todo list entirely implemented on the front end. I use local storage for persistence which makes this project exceedingly simple! One caveat. Safari does not allow the use of local storage in privacy mode. If you test in Safari do not use privacy mode.

2. CSS Modules

There isn't much CSS in this project but I elected to use modular css to eliminate global css. I could've used SASS or SCSS in this project since it's so tiny but there is a legitimate benefit to having interactions and transitions toggled with javascript and styled in regular old css.

3. ES6 Syntax

I really like some of the conveniences enabled with the new ES6 syntax. I think it improves legibility and makes development easier. I've used this syntax all over the place so hopefully you're fully versed in it.

4. Functional Components

I used functional components when I could mainly to avoid state and keep things simple.

### Installation
1. Clone this project
```
git clone https://github.com/guptamo/webcanada
```
2. Install Dependencies
```
(yarn/npm) install
```

### Start the Development Server
```
(yarn/npm) start
```

- Open localhost:8080 in your favorite/test browser
- If you'd like to reset the storage enter ```localStorage.removeItem("tasks") ``` in your console.
