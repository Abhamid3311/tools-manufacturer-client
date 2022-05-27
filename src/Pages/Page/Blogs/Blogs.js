import React from 'react';

const Blogs = () => {
    const products = [
        {
            name: "LG laptop",
            price: 70000,
            description: "This is a LED 15 inchis laptop",
            made: "japan"
        },
        {
            name: "LG mobile",
            price: 25000,
            description: "This is a 5 inchis mobile",
            made: "japan"
        },
        {
            name: "samsung laptop",
            price: 90000,
            description: "This is a LED 19 inchis laptop",
            made: "korea"
        },
        {
            name: "samsung galaxy mobile",
            price: 25000,
            description: "This is a super amoled display phone",
            made: "korea"
        },
        {
            name: "I-phone",
            price: 160000,
            description: "This is a patti wala phone",
            made: "USA"
        }
    ];

    const handleSearchDevice = e => {
        const searchText = e.target.value;
        console.log(searchText);
        products.filter(product => product.includes('searchText'));

    }
    return (
        <div className='m-10'>
            <h1 className='text-5xl text-center text-accent font-bold my-10'>Blog page</h1>


            <div className='mb-10'>
                <h2 className='text-3xl font-semibold mb-8'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>

                <div>
                    <input
                        onChange={handleSearchDevice}
                        name='search'
                        type="text"
                        placeholder='search'
                        class="input input-bordered input-primary w-full max-w-xs" />
                    <div>
                        {

                        }
                    </div>
                </div>
            </div>

            <div className='mb-10'>
                <h2 className='text-3xl font-semibold'>How will you improve the performance of a React Application?</h2>

                <p>Optimizing application performance is key for developers. it is key for eye catching user concentration. so that we need to improve App performance. Keep component state local where necessary. manage React component for prevent unnesessary re-rendaring. lazy loading image in react. Optimize Image for save data and rendering time. Code-splitting in React using dynamic <strong>import()</strong>. Windowing or list virtualization in React applications. </p>
            </div>

            <div className='mb-10'>
                <h2 className='text-3xl font-semibold'> What are the different ways to manage a state in a React application?</h2>

                <p>Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components. There are Four kinds of State in react:-
                </p>
                <ul>
                    <li>Local State</li>
                    <li>Global State</li>
                    <li>Server State</li>
                    <li>URL State</li>
                </ul>
                <p>Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.  Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>
                <p> Server state is that Data  comes from an external server that must be integrated with our UI state.Data that exists on our URLs, including the pathname and query parameters.</p>
            </div>

            <div className='mb-10'>
                <h2 className='text-3xl font-semibold'> How does prototypical inheritance work? </h2>

                <p> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object. When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.</p>
            </div>

            <div className='mb-10'>
                <h2 className='text-3xl font-semibold'>What is a unit test? Why should write unit tests?</h2>

                <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended.[2] In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure. During development, a software developer may code criteria, or results that are known to be good, into the test to verify the unit's correctness. During test case execution, frameworks log tests that fail any criterion and report them in a summary. For this, the most commonly used approach is test - function - expected value.</p>
            </div>



        </div>
    );
};

export default Blogs;