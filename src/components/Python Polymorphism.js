import React from 'react';

const PythonOOPsPolymorphism = () => {
  return (
    <div className="content-wrapper">
      <h2>Polymorphism in Python</h2>

      <section>
        <h3>Introduction to Polymorphism</h3>
        <p>
          Polymorphism is a fundamental concept in object-oriented programming (OOP) that allows objects of different classes to be treated as objects of a common superclass. This enables flexibility in method implementation and promotes code reusability.
        </p>
        <p>
          At its core, polymorphism allows for method overriding, where a subclass provides a specific implementation of a method that is already provided by its superclass. This feature enables different objects to be processed uniformly based on a common interface.
        </p>
      </section>

      <section>
        <h3>Where to Use Polymorphism</h3>
        <p>
          Polymorphism is particularly useful in scenarios where you want to write code that can work with objects of various types but still maintain a consistent interface. Some common use cases include:
        </p>
        <ul>
          <li><strong>Frameworks and Libraries:</strong> Polymorphism facilitates the creation of flexible and extensible frameworks where different components can be customized or extended.</li>
          <li><strong>Object-Oriented Design:</strong> It promotes cleaner and more modular code by allowing related classes to share behaviors through inheritance and method overriding.</li>
          <li><strong>Code Reusability:</strong> By defining methods in a superclass and allowing subclasses to override them, polymorphism reduces redundancy and promotes code reuse.</li>
        </ul>
      </section>

      <section>
        <h3>Examples of Polymorphism</h3>
        <p>
          Example 1: Demonstrating polymorphism with shapes:
        </p>
        <pre>
          <code>
{`class Shape:`}<br />
{`    def area(self):`}<br />
{`        pass`}<br />
{``}<br />
{`class Rectangle(Shape):`}<br />
{`    def __init__(self, width, height):`}<br />
{`        self.width = width`}<br />
{`        self.height = height`}<br />
{`    def area(self):`}<br />
{`        return self.width * self.height`}<br />
{``}<br />
{`class Circle(Shape):`}<br />
{`    def __init__(self, radius):`}<br />
{`        self.radius = radius`}<br />
{`    def area(self):`}<br />
{`        return 3.14 * self.radius * self.radius`}<br />
{``}<br />
{`def print_area(shape):`}<br />
{`    print("Area:", shape.area())`}<br />
{``}<br />
{`rectangle = Rectangle(5, 10)`}<br />
{`circle = Circle(7)`}<br />
{`print_area(rectangle)   # Output: Area: 50`}<br />
{`print_area(circle)      # Output: Area: 153.86`}
          </code>
        </pre>
        <p>
          This example demonstrates polymorphism with shapes (`Rectangle` and `Circle`) where both classes inherit from `Shape` and override its `area()` method to calculate their respective areas.
        </p>
        
        <p>
          Example 2: Polymorphism with database connections:
        </p>
        <pre>
          <code>
{`class Database:`}<br />
{`    def connect(self):`}<br />
{`        pass`}<br />
{``}<br />
{`class MySQL(Database):`}<br />
{`    def connect(self):`}<br />
{`        return "Connected to MySQL database"`}<br />
{``}<br />
{`class PostgreSQL(Database):`}<br />
{`    def connect(self):`}<br />
{`        return "Connected to PostgreSQL database"`}<br />
{``}<br />
{`def connect_to_db(database):`}<br />
{`    print(database.connect())`}<br />
{``}<br />
{`mysql_db = MySQL()`}<br />
{`postgresql_db = PostgreSQL()`}<br />
{`connect_to_db(mysql_db)      # Output: Connected to MySQL database`}<br />
{`connect_to_db(postgresql_db) # Output: Connected to PostgreSQL database`}
          </code>
        </pre>
        <p>
          In this example, `MySQL` and `PostgreSQL` classes inherit from `Database` and override its `connect()` method to establish connections specific to their respective databases. The `connect_to_db()` function demonstrates polymorphism by treating both `mysql_db` and `postgresql_db` objects uniformly.
        </p>
      </section>

      <section>
        <h3>Benefits of Polymorphism</h3>
        <p>
        <p><strong>Flexibility:</strong>It enables dynamic method dispatch, allowing different objects to be treated uniformly based on a common interface.</p>
        <p><strong>Code Reusability:</strong> By leveraging inheritance and method overriding, polymorphism promotes code reuse and reduces redundancy.</p>
        <p><strong>Extensibility:</strong>It supports the development of flexible and scalable software components that can be easily extended or modified.</p>
        </p>
      </section>

      <section>
        <h3>Conclusion</h3>
        <p>
          Polymorphism is a powerful concept in Python's object-oriented programming paradigm, facilitating code that is more flexible, reusable, and maintainable. By embracing polymorphism, developers can design robust software systems that efficiently manage complexity and support future enhancements.
        </p>
      </section>
    </div>
  );
};

export default PythonOOPsPolymorphism;
