import React from 'react';

const Blogs = () => {
    return (
        <div className='m-10'>
            <h1 className='text-5xl text-center text-accent font-bold my-10'>Blog page</h1>

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
            <h2 className='text-3xl font-semibold'> </h2>
            </div>

        </div>
    );
};

export default Blogs;