import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <div className='text-center my-6'>
                    <h1 className='text-2xl font-semibold text-cyan-400'>1. What are the different ways to manage a state in a React application?</h1>
                    <p>With React, you won’t modify the UI from code directly. For <br></br>example, you won’t write commands like “disable the button”, “enable the button”,<br></br> “show the success message”, etc. Instead, you will describe the UI you want to see for the<br></br> different visual states of your component (“initial state”, “typing<br></br> state”, “success state”), and then trigger the state changes in response to user<br></br> input. This is similar to how designers think about UI.</p>
                </div>
                <div className='text-center my-6'>
                    <h1 className='text-2xl font-semibold text-cyan-400'>2. How does prototypical inheritance work?</h1>
                    <p>The Prototypal Inheritance is a feature in javascript used to add<br></br> methods and properties in objects. It is a method by which an object<br></br> can inherit the properties and methods of another object. Traditionally, in order<br></br> to get and set the [[Prototype]] of an object, we use Object. <br></br>getPrototypeOf and Object.</p>
                </div>
                <div className='text-center my-6'>
                    <h1 className='text-2xl font-semibold text-cyan-400'>3. What is a unit test? Why should we write unit tests?</h1>
                    <p>The main objective of unit testing is to isolate written code to<br></br> test and determine if it works as intended. Unit testing is an important<br></br> step in the development process, because if done correctly,<br></br> it can help detect early flaws in code which may be more difficult<br></br> to find in later testing stages.</p>
                </div>
                <div className='text-center my-6'>
                    <h1 className='text-2xl font-semibold text-cyan-400'>4.  React vs. Angular vs. Vue??</h1>
                    <p>Vue provides higher customizability and hence is easier to learn<br></br> than Angular or React. Further, Vue has an overlap with Angular and<br></br> React with respect to their functionality like the use of components.<br></br> Hence, the transition to Vue from either of the two is an easy option.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;