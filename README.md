# React Tutorial Project

## About

I was writing a React tutorial but it was an incredibly boring read.  So I decided to do a project based tutorial instead.  This README will briefly cover some React basics and then jump straight into a project.  If you're new to React, I don't think you'll completely understand everything even after explanation.  But I think this is a fairly quick way to cover several topics and should put you in a position to know what kinds of questions to Google for.

I also think I can move more quickly than normal tutorials on the internet because I know my audience are *not* beginners when it comes to programming.  Since JavaScript was covered in Software Dev and it's a required class, I'm assuming some JavaScript knowledge.

Because Software Dev taught very little JavaScript, I'll also assume that people may not be familiar with more modern language features.  I'll try to give quick explanations about any features that get used in this tutorial.  If you know JavaScript pretty well, then I apologize in advance for any pre-emptive handholding.

### A note:
There are two main ways to write components in React.  You can write components as function components or class components.  It used to be the case that only class components could be stateful.  In 2018, React introduced hooks which allowed function components to be stateful, among other things.

I am choosing to completely ignore class components. I am mentioning this up front because I have never seen a React tutorial that starts off with hooks.  They always introduce class based components first, and often spend the bulk of their time on them, only introducing hooks as an afterthought.

I think this is a mistake.  In my opinion, the abstraction of hooks is way easier to understand and way faster/easier to write.  When I was learning React, almost every frustrating experience I had related to class specific details.  If I had to learn React again, I would have much rather learned the way with hooks first and then learned classes as an afterthought (for dealing with codebases that were written before 2018 which is a lot of them).

I think the React team also considers hooks the preferred way, but class based components are a valid option to, and you can mix the two.  If you have experience with class components and like that better, you can definitely make your components that way.

## Other Resources
This is the first time I've written a tutorial.  Maybe it's crap.  My feelings won't be hurt if you use other resources.  Some good free resources are:
- React's Docs
- Stackoverflow / Google
- YouTube

There are also some paid resources that you can get for free by verifying you are a student through GitHub.  There are a lot more than the two on this list, and you should check them out, but two I have made use of and like are:
- Educative.io.  They do text based classes and have courses on React.  I've used their programming interview prep course and found it super helpful.
- FrontEndMasters.  They do video course and have a ton of beginner to advanced stuff about web development (mostly front-end focused like the name suggests).  I've used two courses of theirs for related topics and they were both super helpful.

You can also let me know on Slack if something here is buggy or confusing and I'll try to help you out.

## The Project
We're going to go over some React basics and then throw together a Hangman App from scratch.

## Getting Started
Before you can start the project, you need to install some stuff.  You'll need to install [NodeJS](https://nodejs.org/en/download/).  You'll also need a package manager.  NodeJS comes with npm, which is perfectly fine to use.  

I'd recommend installing [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable), as it has certain advantages over npm (it's faster, it has nice workspace features, etc.).  I will include commands for both though.  The link warns you that there is a new version of yarn.  I'm sure it's great, and you're welcome to use it, but I only know the classic one and so I can't guarantee the tutorial will work out with the new one.  From my understanding there were enough big changes with yarn 2 that companies are expected to take a while to transition, so the latest version of yarn classic isn't obsolete as of now.

## Creating the React App
Now that node is installed and you have a package manager, we can create a React App.  We're going to use a tool called `create-react-app` to do that:
- in your command line, navigate to the directory you want to put your project in.
- use the command `npx create-react-app react-basics` (or switch out 'react-basics' with a name you like better)
- after the script finishes then `cd react-basics`
- For fun, type the command `yarn start` or `npm start` if you're using npm.  This will start up a development server, open up your default browser and bring up a placeholder app that comes with the project.
- When you're done you can shut down the server with `ctrl+c`

## Hello World
Let's write a few really basic things before getting into the project.  Open up `src/App.js`.  There will be some code already there, this
is the code for the placeholder app.  If you want to look it over, you can, then delete all the text.  Now we'll write a Hello World app:
```jsx
import React from 'react';

const App = () => {
    return <h1>Hello, World!</h1>;
}

export default App;
```
Save the app and then use `yarn start` or `npm start` again.  When everything finishes loading you should see your header displayed on your browser.  Let's walk through what is happening here really quickly.

First you are importing React.  This is pretty self explanatory.

Next you are creating a component.  A component is a function that returns jsx.  Jsx is the stuff that looks like HTML.  The syntax of jsx
is extremely similar to HTML.  There are some differences, but we'll get into them as they come up.

Finally you're exporting the App.  It's a default export.

### JavaScript imports and exports
If you're unfamliar with JavaScript exports and imports, there are a few kinds of imports.  Named imports/exports use this format:
```js
// in stuff.js
export const tutorialRating = 'meh';
export const tutorialStars = 2;
// in another file.  You use the relative path for imports
import { tutorialRating, tutorialStars as lookAnAlias } from './stuff';
```
When importing named exports, you need to put them in curly brackets.  Basically there is some object (objects are essentially hash maps / dictionaries) that is exported and the object has two keys called `tutorialRating` and `tutorialStars`.  The import is using something
called object destructuring.  This is a cool trick that lets you take items out of an object and make them into variables.  For example:
```js
const bestBabyNames = {
    boy: 'Billy Bob',
    girl: 'Billy Jean'
}
const { boy, girl } = bestBabyNames; // uses the keys as variable names and the values as variable values
```
You can also import a namespace object that has all a file's exports like this:
```js
import * as tutorialMetadata from './stuff';
```
Default exports use the format we saw above:
```js
export default App;
// in another file
import App from './App';
```
With default exports you don't use the curly braces.  The export also doesn't have a name, in this case `App` is a logical alias, but we could name it whatever we want and the import will still work.

## What happens with the App component?
I won't go into the details of React too much, but we're exporting our App.  So what is using it?  By default, the entry point for a React app
is `index.js`.  We don't need to edit the file for this project, but let's briefly take a look at the file.  If you look inside `index.js`
you'll see some code like this (I just copied and pasted my `index.js` file).

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
First let's look at the imports.  We're importing React like you'd expect.  We're also importing a library called `ReactDOM`.  ReactDOM is responsible for actually rendering the content of your app to the webpage.  Notice that we're also importing a `.css` file, so we can use CSS from within React.  You can't always do this with JavaScript without configuring how your code is bundled, but `create-react-app` took care of this detail for us, which is pretty cool.  Then we're importing App, which is also expected.  I don't know what `reportWebVitals` is so we'll ignore it.

Inside of the `ReactDOM.render()` method we see it's taking JSX as a first argument and an HTML element as it's second argument.

The React App uses a single page of HTML located in the `public` folder.  If you look inside of the public folder, you'll find a file called `index.js`.  The file is mostly comments, but you'll see a line in it that looks like this:
```html
<div id="root"></div>
```
This empty div is where ReactDOM renders our App.

Great detective work! Let's never talk about this again.

## Adding another component

Let's add another component to our app.  Usually we'll want to put components in their own files, but for now let's keep everything in `App.js`.

Back inside of App.js let's add another component.  Let's put two tags in this component.  JSX is basically HTML, so you can feel free to choose your favorite HTML tags and it should work fine.  We'll need to write a new function, and have the function return some JSX.  Here's my component.  And the modified App.

**Important Note: by convention components always begin with capital letters.  Many linters enforce this convention.  If you ever end up using React with TypeScript you can sometimes have confusing type errors that are actually not type errors at all and are caused by you starting the component with a lowercase letter**
```jsx
const NewComponent = () => {
  return (
    <h2>Hello</h2>
    <p>World</p>
  );
}

const App = () => {
  return (
    <h1>Hello, World!</h1>
    <NewComponent />
  );
}
```
If you have a linter, you'll notice this has problems.  And if you save then when the server refreshes it will crash.  This is one difference between React and HTML.  In React, components have a tree structure.  There can only be one root component and all other components need to be enclosed in it.  There are two ways to fix this code.  I will use a different method for each component.  First, you can use standard HTML tags to wrap the other tags like this:
```jsx
const App = () => {
    return (
        <div className='App'>
            <h1>Hello, World!</h1>
            <NewComponent />
        </div>
    );
}
```
You don't need to give your div's classNames.  I am doing it to illustrate two points.  
- 1. `class` is a reserved word in JavaScript.  In HTML you would write `class='App'` but in JSX you used `className` instead.
- 2. You can add attributes to JSX tags, which will contrast with the second approach.

The second approach is using something called a Fragment.  Sometimes you will see people use `<React.Fragment>` but there is also a shorthand:
```jsx
const NewComponent = () => {
    <>
        <h2>Hello</h2>
        <p>World</p>
    </>
}
```
Now when we save, the App should run correctly again.  There's tradeoffs between using fragments and tags like `<div>`s for this.  A fragment can't have extra attributes, so if you wanted to style a component using a class or id then you would want to use a `<div>`, `<span>`, etc.  A fragment also doesn't get rendered in the actual HTML output.  So it's as if it's not there.  This can be nice if you don't want your website's HTML completely cluttered with tags that you're not even using.

## Dynamic Content with Props
This is one of the most important patterns in React and it's an area where we finally get to do more than write just plain HTML.  React components
can take an argument called `props`.  Props is just an object that gets passed down to a component.  Let's delete NewComponent and make another one.  This will be a custom Hello World component:
```jsx
/* A note if you aren't familiar with arrow functions.  One line arrow functions have implicit returns.  So this returns JSX */
const CustomHello = (props) => <h1>Hello, {props.name}</h1>;
```
Notice that `props.name` is wrapped in curly braces.  Any reference to JavaScript code or JavaScript variables within JSX needs to be wrapped in curly braces.

Now we can pass in a custom name from the App component:
```jsx
const App = () => {
    return <CustomHello name='Martha' />;
}
```
So far, this isn't much different from hard coding the name, but hopefully you can see how this could be useful.  For code readability, let's make a change to our `CustomHello` component.  Instead of taking `props` as an argument, we can use object destructuring inside of the function definition.
```jsx
const CustomHello = ({ name }) => <h1>Hello, {name}</h1>
```
Here this doesn't matter much.  But say `CustomHello` as a very large component.  If someone else had to use your component, they would see that it takes `props` as an argument, but they'd have no idea what kind of data they could pass to the component without reading through all of your component code and seeing what keys of props get used.  As a side note, this is less of an issue in if you are using TypeScript with React because your props object will have a type so people will be able to see the expected fields from their IDE's intellisence.

### Making more use of Props
Let's make some more use of the fact that we have props by rendering multiple greetings.  We'll have an array of name strings, and we'll make a
greeting for each name in the array.  We'll need to make use of JavaScript Array methods because you can't write `for` loops within JSX.
```jsx
const App = () => {
    const names = ['Julian', 'Ricky', 'Bubbles']
    return (
        <div>
            {names.map(n => <CustomHello name={n}/>)}
        </div>
    );
}
```
In case you're not familiar with `map`, `map` takes a function as an argument.  It copies the array calling it, applies the function to each element of that array and then returns the modified copy.  JSX can render arrays of components, so it renders all of the custom greetings on the page.

### The use state hook
We're going to do one more thing with this App and then we'll make something more interesting.  So far we can pass props into components, but all those values are hardcoded.  What if we want to change things real time?  Let's make a button that toggles the text on our gretting between blue
and red.  Then our App can finally be an eyesore to be proud of.  First we need to import useState from react.  Let's modify the import statement.
```jsx
/* Note that we don't HAVE to do this.  We could always type React.useState.  But for things you use frequently
this is a pain. */
import React, { useState } from 'react';
```
We're going to decide the text color in the App component, but we need each header to know its color, so we'll need to pass the color as a prop.  Let's modify the CustomGretting component to allow for this.  We'll use inline css styles as well.  Inline css styles are a little different from how they are in HTML.  Instead of passing a string of css code you pass a JavaScript object.  It should be pretty self explanatory when you see the code.
```jsx
const CustomHello = ({name, color}) => (
  <h1 style={{color: color}}>Hello, {name}</h1>
);
```
Now we need to modify the App component.  This will be a bit more work.  First, we want to keep track of the color.  Let's call useState:
```jsx
const App = () => {
    const [color, setColor] = useState('red');
    // ...
}
```
Here we are using array destructuring, it's similar to object destructuring but for arrays.  Unlike object destructuring, it relies on ordering rather than name, so we can name these anything we want, but this is standard and pretty clear.  `useState` returns some state variable, and then a function that allows us to change that variable.  `useState` takes a default value as an argument.  So whatever we pass `useState` will be the initial conidition for the state.

Next we want to write a changeHandler, we don't have to do this, but it's a little cleaner imo:
```jsx
const App = () => {
    const [color, setColor] = useState('red');
    const onColorChange = () => {
        setColor(c => c === 'red' ? 'blue' : 'red');
    }
    // ...
}
```
There are two ways to use a setState function.  One is to pass it a value directly like this `setColor('green');` and another is through an updater function.  The updater function uses the current state to make the decision about the next state.  In this case using:
```jsx
const onColorChange = () => {
    setColor(color === 'red' ? 'blue' : 'red');
}
```
Will probably work just fine.  But using the value your updating has the potential to introduce bugs, so it is better to use an updater function any time you need to use the value of the state to determine the next state.

Finally lets add a JSX button.  The button will make use of the change handler whenever it's clicked.
```jsx
// ...
<button onClick={onColorChange}>change color</button>
// ...
```
The button's `onClick` prop takes some function to be called whenever the button is clicked.  So whenever the button is clicked, the color will be changed.

Our final app should look like this:

```jsx
import React, { useState } from 'react';

const CustomHello = ({name, color}) => (
  <h1 style={{color: color}}>Hello, {name}</h1>
);

const App = () => {
  const [ color, setColor ] = useState('red');
  const onColorChange = () => {
    setColor(c => c === 'red' ? 'blue' : 'red');
  }
  const names = ['Julian', 'Ricky', 'Bubbles'];
  return (
    <div>
      {names.map(n => <CustomHello name={n} color={color}/>)}
      <button onClick={onColorChange}>change color</button>
    </div>
  )
}

export default App;
```

You might wonder why you need to use such an indirect way of dealing with the state.  If you're just changine a variable couldn't you just do something like this?
```js
let color = 'red';
// whenever you need to change it
const changeHandler = () => color = 'blue';
```
The problem is that whenever components are never modified when they are rerendered.  Instead, when a component is changed, an entirely new instance of that component is created and the old one is thrown out.  So every time a changeHandler gets used, something changes and the component is thrown out, then the new component starts with the initial value of red again, so you never change the color.

# Hangman Project

Let's make a quick Hangman app to really use this stuff in practice.  With extra emphasis on _quick_.  This won't feel like a complete app when we're done, because we won't do much styling, I'm assuming you know CSS already.

I'm going to use the same app we just used for experimenting around.  But if you want to keep it, you can create a new react app for this project.

## Materials
I have some MS Paint drawings to use for the Hangman progression.  You can download those drawings from `src/resources`.

## Organizing the App

We're going to build the App out of separate components so the first thing we need to do is think about what functionalities our Hangman game should have.  Here is what I came up with:

- The app needs to accept user input for guesses.  It should know what letters were already guessed
- The app should display the progress on the word.  Correctly guessed letters should be displayed as is.  Unguessed letters should be displayed as blanks.
- The app needs to display the hangman picture and monitor progress.
- The app needs to keep track if the player has won or lost the game.  When the player has won or lost we can display a message and a restart button.
- The app should display information about what has already been guessed to the user

Now that we have that, we need to figure out how to break it up into components.  Each component should take care of one functionality.  Here's what I'm thinking:

- We should have a top level game component.  This will hold then other components, and will keep track of game data like if the player has won or lost, how many guesses they have left, and what the secret word is.
- We should have a component that displays the hangman picture.
- We should have a component that handles user input.
- We should have a component that displays the progress on the secret word.

We'll go into a little more detail when we make each these components.

Now that we have an outline for our app, let's get started on our first component.  If this all seems a little messy, don't worry, we'll do a little cleanup at the end.

## The secret word component
Let's make the secret word component first.  I had a tough time deciding which component to make first, and I think whichever one gets chosen, things will feel a little unclear at first.  Try to stick with me and hopefully it will all make a lot of sense when it comes together.

Let's first make a file called `SecretWord.js` inside of the `src` folder.

A general rule to try to follow in React is to have components be responsible for the least amount of information possible.  What that means is that, whenever we can, we want a component to recieve all the information it needs through props.

The SecretWord component will need to know what random word has been chosen.  It will also need to know what letters the user has guessed.  But it will not keep track of these, instead it will just be told about them from the top level Game component.  So our function signature will look like this:

```js
import React from 'react';

const SecretWord = ({ chosenWord, guessedLetters }) => {

}
```

`chosenWord` will be a string.  Let's decide beforehand that `guessedLetters` will be a JavaScript Set object.  This way we can quickly check if a letter exists in the set using the `set.has()` method.

Next we can write the code to decide what to display.  We want to display a blank space if the letter hasn't been guessed and a letter if it has been guessed.  We can do this in one line of code using string and array methods.  I'll try to explain what these do after, if you're not so familiar with JavaScript, but if you've done string operations in Python (for example) this should be fairly understandable to you.
```js
const SecretWord = ({ chosenWord, guessedLetters }) => {
    const displayText = chosenWord.split('').map(letter => guessedLetters.has(letter) ? letter : '_').join(' ');
}
```
Let's walk through what this does in case you're new to JavaScript:

- `chosenWord.split('')` converts the string into an array of letters.
- `.map(letter => guessedLetters.has(letter) ? letter : '_')` we're iterating through the letters and seeing if the letter has been guessed or not (using the ternary operator and the set `has` method).  If it has been guessed we keep the letter, if not we replace it with a blank.  This method returns an array.
- Using the array we returns we are calling `.join(' ')`.  The join method converts an array into a string, the argument tells it what character (if any) to put between each letter.  We are putting a space between each letter to make the blank spaces easier to see.

Now all that is left to do is to return JSX that displays the text.  I'm chosing to use an `h1` tag here.  We should also export the component so it can be used elsewhere.  This is our final code:

```js
import React from 'react';

/* The div and ids that I am providing are in case you want to use them for styling later */
export const SecretWord = ({ chosenWord, guessedLetters }) => {
    const display = chosenWord.split('').map(letter => guessedLetters.has(letter) ? letter : '_').join(' ');
    return (
        <div id='secret-word'>
            <h1 id='secret-word-display'>{display}</h1>
        </div>
    );
}
```

## Top Level Game component

Now that we have our first component, let's start the top level game component and display the word.  First let's make a file called `Game.js` inside the `src` folder.  Now we can start by making some imports and a skeleton for the component.  The game component manages all the information for this app, so it doesn't need anything passed down to it:

```js
import React from 'react';
import { SecretWord } from './SecretWord';

export const Game = () => {
    
}
```
Now lets add the secret word component.  We'll hard code all the values for now, and we'll come back to the game component later.
```js
export const Game = () => {
    return (
        <div id='hangman-game'>
            <SecretWord chosenWord='farmer' guessedLetter={new Set(['a', 'e', 'f'])}>
        </div>
    );
}
```
This should be enough to show us that the `SecretWord` component is working.  Finally, let's modify `App.js` so we can see our progress.  Delete the boiler play content in App.js and replace it with this:
```js
import React from 'react';
import { Game } from './Game';

const App = () => <Game />;

export default App;
```
You can see App is just returning Game.  We could have maybe just put the game logic in App.  You can if you want.  I think I prefer it this way.

Now run `yarn start` or `npm start` to see our progress.

## Some cleanup

Before we go on, let's do a really quick refactor so this doesn't get too messy.  Inside of `src` let's make a directory called `components`.  Then inside of the `components` directory called `SecretWord`.  Move `SecretWord.js` into this directory.  Then we're going to make a file in the `SecretWord` directory called `index.js`.  Inside `index.js` we're going to write one line of code:
```js
export { SecretWord } from './SecretWord';
```
Doing this allows us to import from the folder.  There's a few reasons this is cool.  For one, it saves typing.  Instead of writing
```js
import { SecretWord } from './components/SecretWord/SecretWord';
```
We can stop at the folder name.  You can also imagine a case where you have a folder that has a lot of related files.  For example, a  `utils` folder.  Then we can write all our logic in seperate files.  But import them from the same place.
```js
// in index.js
export { getSomeItem }  from './getSomeItem';
export { performTask } from './performTast';
// ...
// in another file these can be imported from a single place
import { getSomeItem, performTask } from './utils';
```
Finally, putting each component in its own folder means that when we later add stylesheets, we can keep each css file with the component it belongs to without cluttering our `src` folder.

Now that we've made this change, we'll need to modify `Game.js` to fix the import statement.  Change the import to:
```js
import { SecretWord } from './components/SecretWord';
```

For this project, this might be overkill, but it's a useful thing to do for big projects.

## The Hangman Image

This is going to be a lot of copying and pasting.  First, you're going to want to copy the resources folder from this repo into your own repo.  Put it inside your src folder.

Webpack is a little weird with how you use images.  We're going to need to import the image urls.  This looks like a pain, but 1. it can be automated, and 2. there's probably a better way, I just can't be bothered to look it up.

Make a folder inside of components called HangmanDisplay, and make a file called `HangmanDisplay.js` inside that folder.  Copy and paste this
import code into it:

```js
import React from 'react';
import stage0 from '../../resources/stage-0.jpg';
import stage1 from '../../resources/stage-1.jpg';
import stage2 from '../../resources/stage-2.jpg';
import stage3 from '../../resources/stage-3.jpg';
import stage4 from '../../resources/stage-4.jpg';
import stage5 from '../../resources/stage-5.jpg';
import stage6 from '../../resources/stage-6.jpg';
import stage7 from '../../resources/stage-7.jpg';
import stage8 from '../../resources/stage-8.jpg';
import './HangmanDisplay.css'

const imgSrcArray = [stage0, stage1, stage2, stage3, stage4, stage5, stage6, stage7, stage8];
```

We're also importing a css file, which we haven't made yet.  But we will soon.

Now we need to make the actual image component.  We want the Game component to tell use what guess we're on, and then we'll use that guess as an array index to determine what hangman picture we display.  So the guess number will be passed as props:

```js
// I called it stageNumber when I wrote the code
export const HangmanDisplay = ({ stageNumber }) => {

}
```

Now we're going to need to make an image component.  For this we use the `<img>` tag.  The `<img>` tag needs a `src` attribute which tells it the url of the picture.  We're going to use these imported items as the `src`.  We should also write an `alt` tag to explain what the image is for people who have trouble seeing.

```js
export const HangmanDisplay = ({ stageNumber }) => {
    return <img src={imgSrcArray[stageNumber]} alt={`hangman stage ${stageNumber} out of 8`}/>;
}
```

Okay, now it's time to write the only css we will write for this project.  The first picture is just a blank white picture.  So that people know there will be something displayed there, I want to add an outline.  We're going to make use of a separate css file to do this, so that you know how.  Inside the same folder, make a file called `HangmanDisplay.css`.  You can name these whatever you want, but the same name as the JavaScript file is a good convention.  Let's add an id to our `img` tag:

```js
return <img src={imgSrcArray[stageNumber]} alt={`hangman stage ${stageNumber} out of 8`} id='hangman-display'/>;
```

Now in the css file we can add the style we want:
```css
#hangman-display {
    border: 2px solid black;
}
```

That's all the css we're going to write.  If you like the project a lot and want to make it look nice at the end, you should definitely write more but I'm assuming you know how to write css.

One annoying caveat.  Even though we're importing separate css files, the styles in these are still global.  So the style you import for one file will affect the entire app.  There are tools to get around this, but we won't cover that.

Finally, let's make an `index.js` file in this folder and export our component:
```js
export { HangmanDisplay } from './HangmanDisplay';
```

## The User Input Component

Make a folder in `components` called `UserInput`.  Make `UserInput.js` and `index.js` files.

We're going to implement the user input as a series of buttons.  Buttons are really easy to work with (even though they aren't always the best choice) and this makes it easy to show the user what letters they have already guessed.

There are a few things we'll need from the game component here.  We need to know what letters have been guessed, we'll use this information to disable letters that have already been guessed.  We also need a way to update the guessed letters.  We're going to pass an event handler from the Game component to do this.  The code for the event handler will be inside the Game component.

So our starting code will look like this:

```js
import React from 'react';

const UserInput = ({ guessedLetters, guessHandler }) => {

}
```

We need a button for each letter.  I also think the buttons are going to have enough information that we can make a second component for them.  This component will need to know what letter it is displaying, if it should be disabled (a boolean) and a guessHandler.

```js
import React from 'react';

const InputButton = ({ letter, disabled, guessHandler }) => {

}

const UserInput = // ...
```

I haven't given much information about the guessHandler so far.  But we can imagine it needs to know what letter the input button has.  So each    `InputButton` will have a slightly different version of the `guessHandler`.  We're going to be returning a `button` tag that makes use of this.

```js
const InputButton = ({ letter, disabled, guessHandler }) => {
    // we're doing this so that each button has a slightly different guessHandler, based on the letter it displays
    const handleGuess = () => guessHandler(letter);
    // we've already seen onClick before.  disabled just takes a boolean and greys out / disables the button when it is set to true
    // I am setting the letter to uppercase here because I think it looks nicer, but all our logic so far is using lowercase letters
    return <button onClick={handleGuess} disabled={disabled}>{letter.toUppercase()}</button>;
}
```

Now that we have this set up we need to make the full user input.  This will be displaying one button per letter of the alphabet.  So first let's make an array with all the letters of the alphabet.  The we can use the `map` method to make an array of `InputButtons`.  We'll use our `guessedLetters` set to help us determine if the button should be disabled or not.

Finally we're going to add a `key` prop to each of these.  `key` props are something all components can have (even though we didn't explicitly mention it).  This will help us avoid a warning from React that happens with component arrays.  React needs to determine if things changes to help it decide what things it needs to re-render and what things it can keep the same.  The key prop helps React know if the buttons changed or not, and prevents it from doing unnecessary work.

```js

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const UserInput = ({ guessedLetters, guessHandler }) => {
    return (
        <div id='user-input'>
            {alphabet.map(letter => <InputButton letter={letter} disabled={guessedLetters.has(letter)} guessHandler={guessHandler} key={letter}>)}
        </div>
    )
}
```

That's all we need here.  Let's finish up by exporting it from our `index.js` file.  After that we'll finish up the Game component, which will have most of the app logic.

```js
export { UserInput } from './UserInput';
```

## Finishing the Game Component

This component will be a lot more complicated than the others.  We can delete what we did before.  Then let's start by importing all the components we made, as well as React.  We're also going to make use of state, so we can import `useState` as well.

```js
import React, { useState } from 'react';

import { SecretWord } from './components/SecretWord';
import { UserInput } from './components/UserInput';
import { HangmanDisplay } from './components/HangmanDisplay';
```

Now let's make a list of words to randomly choose from, and a function that chooses a random one of them.

```js
const words = [
    'farmer',
    'market',
    'horse',
    'house'
];

const chooseRandomWord = () => words[Math.floor(Math.random() * 4)];
```

We also will want to keep track of the maximum number of guesses in a variable and we can make a function that checks if the user won while we're at it.  This function will take a set of letters the user has guessed and see if every letter in the chosen word has been guessed.

```js
const chooseRandomWord = () => words[Math.floor(Math.random() * 4)];

const checkWin = (word, guessed) => word.split('').every(letter => guessed.has(letter));

const MAX_GUESSES = 8; // This is how many hangman pictures I have
```

Now we're ready to write the game component.  First let's think about what state it needs to keep track of.  The game component needs to:
- keep track of the user's guesses so far.  This starts as an empty set.
- keep track of what word was randomly selected.  This is chosen randomly at the start.
- keep track of how many failed guesses the user has made.  This starts as 0.

We'll make a `useState` variable for each of these:

```js
const Game = () => {
    const [guessedLetters, setGuessedLetters] = useState(new Set());
    const [chosenWord, setChosenWord] = useState(chooseRandomWord());
    const [guessCount, setGuessCount] = useState(0);
}
```

Now let's take care of some unfinished stuff.  We know we needed to make a guess handler.  The guess handler needs to update our guessedLetters set with a new letter.  If that letter is not a correct guess, we need to increment the guess count as well.

```js
const Game = () => {
    // ... 

    const guessHandler = (letter) => {
        const next = new Set(guessedLetters);
        next.add(letter);
        setGuessedLetters(next);
        if(chosenWord.search(letter) === -1) {
            setGuessCount(c => c + 1);
        }
    }
}
```

We also want to make a reset handler function.  This will clear all the guesses and choose a new random word.  The user can use this to start a new game whenever their game has finished.

```js
const Game = () => {
    // ... everything else so far ...
    const handleReset = () => {
        setGuessedLetters(new Set());
        setChosenWord(chooseRandomWord());
        setGuessCount(0);
    }
}
```

Now let's go ahead and put all of the pieces together so far.  We should put the picture at the top, then the secret work, and then the input buttons can be at the bottom.  The app should look something like this now:

```js
const Game = () => {
    // ... everything we've just done ...
    return (
        <div id='hangman-game'>
            <HangmanDisplay stageNumber={guessCount} />
            <SecretWord chosenWord={chosenWord} guessedLetters={guessedLetters} />
            <UserInput guessedLetters={guessedLetters} guessHandler={guessHandler} />
        </div>
    );
}
```

This is almost the whole App.  But we need to make sure that the app does the correct thing when it is done.  When the user loses the game, then I want the HangmanDisplay to remain up, and the rest of the app can be replaced by a "You Lose" message and a reset button.  I also want to let the user know what the correct answer was.  When the user wins the game, I'll also keep the HangmanDisplay up and I'll replace the rest of the app with "You Win" and a reset button.

There's several ways to do this.  For example you can render a component conditionally in JSX like this:
```jsx
return (
    <div className='example'>
        <AlwaysRendered />
        { condition ? <TrueComponent /> : <FalseComponent />}
    </div>
);
```
I think this gets a little hard to read if you need to nest conditions.  Another option is to assign components to variables and then use a variable.  This will look like this.

```jsx
let secondComponent;
if(condition) {
    secondComponent = <TrueComponent />
} else {
    secondComponent = <FalseComponent />
}
return (
    <div className='example'>
        <AlwaysRendered />
        {secondComponent}
    </div>
);
```

I'm going to use this approach for the tutorial.  We're going to need three jsx variables.  A variable for regular gameplay.  A variable for gameplay after the player has lost.  And a variable for gameplay after the user has won.

```jsx
// inside of the Game component
const RegularDisplay = (
    <>
        <SecretWord chosenWord={chosenWord} guessedLetters={guessedLetters}/>
        <UserInput guessedLetters={guessedLetters} guessHandler={guessHandler} />
    </>
);

const WinDisplay = (
    <>
        <h1>You Win!</h1>
        <button onClick={handleReset}>Reset</button>
    </>
);

const LoseDisplay = (
    <>
        <h1>You Lose! The word was {chosenWord}</h1>
        <button onClick={handleReset}>Reset</button>
    </>
);
```
Finally, let's make a conditional that picks one of these and change the Component's return value:

```jsx
let currentDisplay;
if(guessCount < MAX_GUESSES) {
    currentDisplay = checkWin(chosenWord, guessedLetters) ? WinDisplay : RegularDisplay;
} else {
    currentDisplay = LoseDisplay;
}
return (
    <div id='hangman-game'>
        <HangmanDisplay stageNumber={guessCount}/>
        {currentDisplay}
    </div>
);
```

This is all the code we need to write for the Game component.  Since I moved pretty fast, here's what your complete code should look like:

```jsx
import React, { useState } from 'react';

import { SecretWord } from './components/SecretWord';
import { UserInput } from './components/UserInput';
import { HangmanDisplay } from './components/HangmanDisplay';

const words = [
    'farmer',
    'market',
    'horse',
    'house'
];

const chooseRandomWord = () => words[Math.floor(Math.random() * 4)];

const checkWin = (word, guessed) => word.split('').every(letter => guessed.has(letter));

const MAX_GUESSES = 8;

export const Game = () => {
    
    const [guessedLetters, setGuessedLetters] = useState(new Set());
    const [chosenWord, setChosenWord] = useState(chooseRandomWord());
    const [guessCount, setGuessCount] = useState(0);

    const guessHandler = (letter) => {
        const next = new Set(guessedLetters);
        next.add(letter);
        setGuessedLetters(next);
        if(chosenWord.search(letter) === -1) {
            setGuessCount(c => c + 1);
        }
    }

    const handleReset = () => {
        setGuessedLetters(new Set());
        setChosenWord(chooseRandomWord());
        setGuessCount(0);
    }

    const RegularDisplay = (
        <>
            <SecretWord chosenWord={chosenWord} guessedLetters={guessedLetters}/>
            <UserInput guessedLetters={guessedLetters} guessHandler={guessHandler} />
        </>
    );

    const WinDisplay = (
        <>
            <h1>You Win!</h1>
            <button onClick={handleReset}>Reset</button>
        </>
    );

    const LoseDisplay = (
        <>
            <h1>You Lose! The word was {chosenWord}</h1>
            <button onClick={handleReset}>Reset</button>
        </>
    );
    
    let currentDisplay;
    if(guessCount < MAX_GUESSES) {
        currentDisplay = checkWin(chosenWord, guessedLetters) ? WinDisplay : RegularDisplay;
    } else {
        currentDisplay = LoseDisplay;
    }

    return (
        <div id='hangman-game'>
            <HangmanDisplay stageNumber={guessCount}/>
            {currentDisplay}
        </div>
    );
}
```

Now you have a functional Hangman App.  Pretty easy, hopefully.

## Next Steps

You don't need to do anything else now.  The main point was to walk through some React syntax in a way that was hopefully a little less boring.  But if you want to do anything else, I'd suggest stying the App.  It's pretty ugly right now since we didn't write any css.  But you already saw how to import css files when we made the `HangmanDisplay` component.  If you wanted, you could make css files for all the components and make this look like a real game.

If you got this far, I hope it felt like a good use of your time.  If there were any problems, feel free to reach out to me.  You can also look through this repo, which has the completed project.  It seems to work fine on my machine, but I'll admit I haven't tested it very thoroughly.