// PythonOOPsAbstraction.jsx
import React from 'react';

const PythonOOPsAbstraction = () => {
  return (
    <div className="content-wrapper">
      <h2>Abstraction</h2>

      <section>
        <h3>Introduction to Abstraction</h3>
        <p>
          Abstraction focuses on hiding the complex implementation details of a class or object and exposing only the necessary features. It helps in reducing complexity and increasing efficiency.
        </p>
        <p>
          Example: Implementing abstraction in Python:
        </p>
        <pre>
          <code>
{`from abc import ABC, abstractmethod`}<br />
{``}<br />
{`class Shape(ABC):`}<br />
{`    @abstractmethod`}<br />
{`    def area(self):`}<br />
{`        pass`}<br />
{``}<br />
{`class Circle(Shape):`}<br />
{`    def __init__(self, radius):`}<br />
{`        self.radius = radius`}<br />
{``}<br />
{`    def area(self):`}<br />
{`        return 3.14 * self.radius * self.radius`}<br />
{``}<br />
{`circle = Circle(5)`}<br />
{`print("Area of circle:", circle.area())`}
          </code>
        </pre>
        <p>
          This page will cover how abstraction is achieved using abstract classes and methods in Python, and its significance in software design.
        </p>
      </section>
    </div>
  );
};

export default PythonOOPsAbstraction;
