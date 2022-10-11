import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <Accordion className='my-5 mx-5' defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header> #1 What is the purpose of React Router?</Accordion.Header>
                <Accordion.Body className='text-start'>
                    React Router is an API for React applications.A tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app. React router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform. React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.
                    By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.When not using React Router, App is often the highest parent component in React apps. With React Router, however, the Router component needs to be the highest parent. This just lets all of the component use the power of Router, because as a parent, it passes down all of its props to its children, and thus the entire application.

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>#2 How does context API works?</Accordion.Header>
                <Accordion.Body className='text-start'>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>#3 What is useRef() hooks?</Accordion.Header>
                <Accordion.Body className='text-start'>
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.The useRef hook is a very handy option for both interacting with DOM elements and storing mutating information in your app without triggering a re-render. However, it is suggested to only use the useRef when necessary and within a useEffect to avoid bugs.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blog;