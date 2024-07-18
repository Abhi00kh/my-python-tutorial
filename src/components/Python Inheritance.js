// PythonOOPsInheritance.jsx
import React from 'react';

const PythonOOPsInheritance = () => {
  return (
    <div className="content-wrapper">
      <h2>Inheritance</h2>

      <section>
        <h3>Introduction to Inheritance</h3>
        <p>
          Inheritance allows one class (subclass or derived class) to inherit the attributes and methods of another class (superclass or base class). It promotes code reusability and facilitates building relationships between classes.
        </p>
        <p>
          Example: Creating a derived class in Python:
        </p>
        <pre>
          <code>
{`class Vehicle:`}<br />
{`    def __init__(self, make, model):`}<br />
{`        self.make = make`}<br />
{`        self.model = model`}<br />
{``}<br />
{`    def display_info(self):`}<br />
{`        print(f"Vehicle: {self.make} {self.model}")`}<br />
{``}<br />
{`class Car(Vehicle):`}<br />
{`    def __init__(self, make, model, year):`}<br />
{`        super().__init__(make, model)`}<br />
{`        self.year = year`}<br />
{``}<br />
{`my_car = Car("Toyota", "Camry", 2022)`}<br />
{`my_car.display_info()`}
          </code>
        </pre>
        <p>
          This page will cover how inheritance works in Python, including method overriding, super() function, and multiple inheritance.
        </p>
      </section>
    </div>
  );
};

export default PythonOOPsInheritance;
