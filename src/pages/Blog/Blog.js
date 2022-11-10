import React from 'react';
import { useTitle } from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='my-10 mx-20'>
            <div>
                <h2 className='text-2xl text-left font-semibold italic'><span>Q : </span>What is the difference between SQL and NoSql database ? </h2>
                <h3 className='text-left mt-5 ml-5 text-xl font-semibold italic'><span>A : </span><span className='underline'>SQl db: </span><span>A SQL Database follows a table like structure which can have an
                    unlimited number of rows and every data present inside the database
                    is properly structured with Predefined Schemas, it is basically used
                    to manipulate Relational Databases Management Systems.</span><br /> <br />
                    <span className='underline'>NoSQl db: </span><span>Write now we are using NoSQL database. also i am build this website using mongodb which is Nosql database. A NoSQL Database is a Distributed Database where the data is very
                        unstructured with Dynamic Schema. Unlike SQL it cannot have unlimited
                        rows but it follows a Standard Schema Definition and can store all
                        sorts of data models with large distributed data in the form of
                        key-value pairs, graph databases, documents or wide-column stores.</span>

                </h3>
            </div>
            <div className='mt-10'>
                <h2 className='text-2xl text-left font-semibold italic'><span>Q : </span>What is JWT and how does it works ? </h2>
                <h3 className='text-left mt-5 ml-5 text-xl font-semibold italic'><span>A : </span><span className='underline'>SQl db: </span><span>JWT system we are acctually using for some security for our website. We can save our user data using JWT token. We are store jwt token inside our compute local storage which is less secure HTTTP COOKIE but alsoo localstorage is secure system for jwt token. How we use jwt token, first able we need to install jwt token, then requre it on your server side and provide token with a secret key, then use when you want to use this token</span>
                </h3>
            </div>
            <div className='mt-10'>
                <h2 className='text-2xl text-left font-semibold italic'><span>Q : </span>What is the difference between JavaScript and Node.js ? </h2>
                <h3 className='text-left mt-5 ml-5 text-xl font-semibold italic'><span>A : </span><span className='underline'>JavaScript : </span><span>Javascript is a simple object-oriented programming language for building interactive HTML pages. JavaScript is also commonly used in the development of games and mobile applications. The program can only be executed and run in an internet browser because it is interpreted as scripting. To run and execute the code outside the browser, we can utilize Node.js.
                    It's also known as a browser settings language because it may be used for client-side and server-side programming.</span><br /> <br />
                    <span className='underline'>Node.js: </span><span>For executing JavaScript on the server, Node.js is a bridge, open-source Js runtime environment. JavaScript code can now execute outside of the browser, thanks to Node.js. Node.js has many components and is primarily used for web development. It may run on various operating systems, including Windows, Linux, and Mac OS. It provides a cross-platform runtime environment for developing highly scalable server-side JavaScript applications with event-driven, non-blocking (asynchronous) I/O.</span>

                </h3>
            </div>
            <div className='mt-10'>
                <h2 className='text-2xl text-left font-semibold italic'><span>Q : </span>How does Node JS handle multiple request at the same time ? </h2>
                <h3 className='text-left mt-5 ml-5 text-xl font-semibold italic'><span>A : </span><span className='underline'>SQl db: </span><span>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.Node js is very use for JavaScript. its make our life easier</span>
                </h3>
            </div>
        </div>
    );
};

export default Blog;    