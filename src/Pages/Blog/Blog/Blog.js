import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10'>
            <div className='bg-gray-100 p-8 rounded-2xl shadow-xl'>
                <h1 className='text-2xl'>Que: What are the different ways to manage a state in a React application?</h1>
                <p className='text-xl mt-3'>Ans: There are four main types of state you need to properly manage in your React apps:
                    1. Local state
                    2. Global state
                    3. Server state
                    4. URL state</p>
            </div>
            <div className='bg-gray-100 p-8 mt-8 shadow-xl'>
                <h1 className='text-2xl'>Que:How does prototypical inheritance work?</h1>
                <p className='text-xl mt-3'>Ans: Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
            </div>
            <div className='bg-gray-100 p-8 mt-8 shadow-xl'>
                <h1 className='text-2xl'>Que:What is a unit test? Why should we write unit tests?</h1>
                <p className='text-xl mt-3'>Ans: The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div className='bg-gray-100 p-8 mt-8 shadow-xl'>
                <h1 className='text-2xl'>Que: React vs. Angular vs. Vue?</h1>
                <p className='text-xl mt-3'>Ans: Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>

            </div>
        </div>
    );
};

export default Blog;