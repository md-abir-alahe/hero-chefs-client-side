/* eslint-disable no-unused-vars */
import React from 'react';
import Pdf from "react-to-pdf";

const Blog = () => {
    // kldjflkadsjlkj
    const ref = React.createRef();
    const options = {
        orientation: 'l',
        unit: 'in',
        format: 'a4'
    }
    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-7'>
                <h1 className='mt-8 text-4xl font-extrabold text-cyan-900'>Blog</h1>
                <Pdf targetRef={ref} filename="blog.pdf" options={options} x={.5} y={.5} scale={0.7}>
                    {({ toPdf }) => <button className='btn' onClick={toPdf}>Download PDF</button>}
                </Pdf>
            </div>
            <div className='my-8' ref={ref}>
                <div tabIndex={0} className="collapse collapse-arrow border border-4 border-cyan-900 bg-orange-50 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-bold text-cyan-900">
                        What is the differences between uncontrolled and controlled components?
                    </div>
                    <div className="collapse-content">
                        <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-4 border-cyan-900 bg-orange-50 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-bold text-cyan-900">
                        How to validate React props using PropTypes?
                    </div>
                    <div className="collapse-content">
                        <p>The PropTypes utility exports a wide range of validators for configuring type definitions. Below, we’ll list the available validators for basic, renderable, instance, multiple, collection, and required prop types.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-4 border-cyan-900 bg-orange-50 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-bold text-cyan-900">
                        What is the difference between nodejs and express js?
                    </div>
                    <div className="collapse-content">
                        <p>js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-4 border-cyan-900 bg-orange-50 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-bold text-cyan-900">
                        What is a custom hook, and why will you create a custom hook?
                    </div>
                    <div className="collapse-content">
                        <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;