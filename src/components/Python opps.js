import React from 'react';

const PythonOOPsOverview = () => {
  return (
    <div className="content-wrapper">
      <h2>Python Object-Oriented Programming (OOPs)</h2>

      <section>
        <h3>Introduction to OOPs</h3>
        <p>
          Object-Oriented Programming (OOP) is a programming paradigm that revolves around the concept of objects. Objects are instances of classes, which encapsulate data (attributes) and behaviors (methods).
        </p>
        <p>
          Key concepts of OOP include:
        </p>
        <ul>
          <li><strong>Classes and Objects:</strong> Classes are blueprints for creating objects, defining their structure and behavior. Objects are instances of classes.</li>
          <li><strong>Encapsulation:</strong> Bundling data (attributes) and methods (functions) that operate on the data into a single unit (class).</li>
          <li><strong>Inheritance:</strong> Mechanism where a class (subclass or derived class) inherits properties and behaviors from another class (superclass or base class).</li>
          <li><strong>Polymorphism:</strong> Ability of different objects to respond to the same method call in different ways. It allows methods to be implemented in various classes in different ways.</li>
          <li><strong>Abstraction:</strong> Process of hiding the complex implementation details and showing only the essential features of the object.</li>
        </ul>
      </section>

      <section>
        <h3>Benefits of OOPs</h3>
        <p>
          Object-Oriented Programming offers several benefits, including:
        </p>
        <ul>
          <li>Modularity and code reusability.</li>
          <li>Easier maintenance and scalability of code.</li>
          <li>Improved software design and organization.</li>
          <li>Encapsulation enhances security and data protection.</li>
          <li>Facilitates easier collaboration among developers.</li>
        </ul>
      </section>

      <section>
        <h3>Example: Creating a Class and Object</h3>
        <p>
          Here's an example of creating a simple class and its object in Python:
        </p>
        <pre>
          <code>{}
{`class Car:`}<br />
{`    def __init__(self, make, model):`}<br />
{`        self.make = make`}<br />
{`        self.model = model`}<br />
{``}<br />
{`    def display_info(self):`}<br />
{`        print(f"Car: {self.make} {self.model}")`}<br />
{``}<br />
{`# Creating an object of the Car class`}<br />
{`my_car = Car("Toyota", "Camry")`}<br />
{`my_car.display_info()`}
          </code>
        </pre>
        <p>
          This creates a class <code>Car</code> with attributes <code>make</code> and <code>model</code>, and a method <code>display_info</code> to print car information.
        </p>
      </section>

      <section>
        <h3>Conclusion</h3>
        <p>
          Understanding Object-Oriented Programming is essential for building modular, scalable, and maintainable software applications in Python. It enhances code organization, promotes code reuse, and facilitates collaboration in larger development teams.
        </p>
      </section>
    </div>
  );
};

export default PythonOOPsOverview;
