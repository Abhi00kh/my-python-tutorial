// PythonOOPsClasses.jsx
import React from 'react';

const PythonOOPsClasses = () => {
  return (
    <div className="content-wrapper">
      <h2>Classes and Objects</h2>

      <section>
        <h3>Introduction to Classes and Objects</h3>
        <p>
          Classes are blueprints for creating objects. They define the properties (attributes) and behaviors (methods) that objects of the class will have.
        </p>
        <p>
          Example: Defining a simple class in Python:
        </p>
        <pre>
          <code>
{`class Car:`}<br />
{`    def __init__(self, make, model):`}<br />
{`        self.make = make`}<br />
{`        self.model = model`}<br />
{``}<br />
{`    def display_info(self):`}<br />
{`        print(f"Car: {self.make} {self.model}")`}<br />
{``}<br />
{`my_car = Car("Toyota", "Camry")`}<br />
{`my_car.display_info()`}
          </code>
        </pre>
        <p>
          This page will cover more details on how to define classes, create objects, and use them in Python.
        </p>
      </section>
    </div>
  );
};

export default PythonOOPsClasses;
