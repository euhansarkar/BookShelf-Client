import React from "react";
import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <div>
    <Helmet>
        <title>blogs - BookShelf</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <h2 className="my-6  text-center font-bold text-4xl">Blogs</h2>
      <div className="grid gap-20 grid-cols-1 md:grid-cols-2 lg:my-20 md:text:xl">
        <div className="card w-full  shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p className="mt-5">
              There are four main types of state you need to properly manage in
              your React apps: Local state Global state Server state URL state
              Let's cover each of these in detail: Local (UI) state – Local
              state is data we manage in one or another component. Local state
              is most often managed in React using the useState hook. For
              example, local state would be needed to show or hide a modal
              component or to track values for a form component, such as form
              submission, when the form is disabled and the values of a form’s
              inputs. Global (UI) state – Global state is data we manage across
              multiple components. Global state is necessary when we want to get
              and update data anywhere in our app, or in multiple components at
              least. A common example of global state is authenticated user
              state. If a user is logged into our app, it is necessary to get
              and change their data throughout our application. Sometimes state
              we think should be local might become global. Server state – Data
              that comes from an external server that must be integrated with
              our UI state. Server state is a simple concept, but can be hard to
              manage alongside all of our local and global UI state.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card w-full  shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">
              What is a unit test? Why should we write unit tests?
            </h2>
            <p className="mt-5">
              Unit testing is a software development process in which the
              smallest testable parts of an application, called units, are
              individually and independently scrutinized for proper operation.
              This testing methodology is done during the development process by
              the software developers and sometimes QA staff. The main objective
              of unit testing is to isolate written code to test and determine
              if it works as intended. Unit testing is an important step in the
              development process, because if done correctly, it can help detect
              early flaws in code which may be more difficult to find in later
              testing stages. Unit testing is a component of test-driven
              development (TDD), a pragmatic methodology that takes a meticulous
              approach to building a product by means of continual testing and
              revision. This testing method is also the first level of software
              testing, which is performed before other testing methods such as
              integration testing. Unit tests are typically isolated to ensure a
              unit does not rely on any external code or functions. Testing can
              be done manually but is often automated.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card w-full  shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">
              Angular Vs React Vs Vue: A Brief Overview What is Angular?
            </h2>
            <p className="mt-5">
              AngularJS was developed in 2009 by Google. The first version was
              Angular.JS. Angular is currently known as a JavaScript framework.
              Obviously, all significant Google projects have been developed
              with Angular. Angular.js is an MVC framework. A major disadvantage
              of Angular is that it uses a regular DOM, and thus, the entire
              tree structure of the HTML tags is updated, which massively
              impacts the loading time. Angular.js has its Ionic framework for
              mobile applications. Pros and Cons of Angular Pros: Allows MVC
              architecture. Good maintainability. Web applications built with
              Angular perform very well. Angular lets you manage microfrontend
              architecture Projects may now be developed, expanded, and
              generated more quickly thanks to technologies like the Angular-CLI
              command-line tool. Angular provides a basic framework for
              developing web applications and manages them without additional
              libraries. Easy unit and end-to-end testing. Cons: Reloads the
              complete HTML tags tree structure. Slow loading time due to the
              Ionic app. Because of the given framework, Angular is relatively
              stiff and inflexible. To work with Angular.js, you need a certain
              training period. If a user has deactivated JavaScript in the
              browser, using a JavaScript-based SPA is not possible.
              Furthermore, it does not always support outdated or unfamiliar
              browsers. Read Also: Why to Use Angular for Your Development What
              is React? Facebook released React.js in March 2013 as a JavaScript
              library. Because React just provides one view, it is not
              appropriate for building an MVC architecture: you must solve the
              model and controller yourself. Besides this, there are only
              advantages and lots of advantages. One of the biggest of them is
              that React.js uses a virtual DOM that only compares the previous
              HTML code differences and only loads the different parts. 
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>


        <div className="card w-full  shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">
              How does prototypical inheritance work?
            </h2>
            <p className="mt-5">
              
Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.

All JavaScript objects inherit properties and methods from a prototype:

Date objects inherit from Date.prototype.
Array objects inherit from Array.prototype.
Player objects inherit from Player.prototype.
The Object.prototype is on top of the prototype inheritance chain. ​ Date objects, Array objects, and Player objects all inherit from Object.prototype.


Revisiting an old example
Let’s walk through an example of prototypical inheritance you’re likely familiar with from grade school: all squares are rectangles, but not all rectangles are squares. If we think of this as a JS program, we could say that the rectangle is a prototype to the square: the square inherits all properties of a rectangle (i.e. four-sides and closed), while also adding a new feature (i.e. all sides are the same length).

We could not, however, construct this same concept using the square as a prototype, because there are properties of a square that do not apply to rectangles (i.e. all sides are the same length).

We can see how prototypal inheritance works on the basis of specifying categories within a group from least specific to most – from rectangle to square. In code, this concept can sometimes be lost in the syntax. If you find this happens, speak the relations between objects and listen to where you draw distinctions. If you hear, “all ___ are , but…not all ___ are”, that is where a new prototypical relationship should be added.

Cons of Prototypal Inheritance
Prototypical inheritance clearly has a lot of benefits for JavaScript programmings, but, like all tools, it does have limitations. Let’s take a look at the key downsides to look out for as you write a prototype-based program.

            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
