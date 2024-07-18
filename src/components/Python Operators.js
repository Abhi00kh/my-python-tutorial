import React from 'react';
import { Table } from 'react-bootstrap';

const PythonOperators = () => {
  return (
    <div className="content-wrapper">
      <h2>Python Operators</h2>

      {/* Introduction to Python Operators */}
      <section>
        <h3>Introduction</h3>
        <p>
          Operators in Python are special symbols or keywords used to perform operations on variables and values. Python supports a wide range of operators, including arithmetic, comparison, assignment, logical, bitwise, and membership operators.
        </p>
      </section>

      {/* Arithmetic Operators */}
      <section>
        <h3>Arithmetic Operators</h3>
        <p>
          Arithmetic operators are used to perform mathematical operations between operands.
        </p>
        <div className="code-block">
          <h4>Examples:</h4>
          <pre><code>{`a = 10
b = 3

print(a + b)   # Addition: 13
print(a - b)   # Subtraction: 7
print(a * b)   # Multiplication: 30
print(a / b)   # Division: 3.333...
print(a // b)  # Floor Division: 3
print(a % b)   # Modulus: 1
print(a ** b)  # Exponentiation: 1000`}</code></pre>
        </div>
      </section>

      {/* Comparison Operators */}
      <section>
        <h3>Comparison Operators</h3>
        <p>
          Comparison operators are used to compare values and return Boolean results.
        </p>
        <div className="code-block">
          <h4>Examples:</h4>
          <pre><code>{`a = 10
b = 3

print(a == b)   # Equal to: False
print(a != b)   # Not equal to: True
print(a > b)    # Greater than: True
print(a < b)    # Less than: False
print(a >= b)   # Greater than or equal to: True
print(a <= b)   # Less than or equal to: False`}</code></pre>
        </div>
      </section>

      {/* Assignment Operators */}
      <section>
        <h3>Assignment Operators</h3>
        <p>
          Assignment operators are used to assign values to variables.
        </p>
        <div className="code-block">
          <h4>Examples:</h4>
          <pre><code>{`x = 5
y = 10

x += y   # Equivalent to: x = x + y
print(x)  # Output: 15

x -= y   # Equivalent to: x = x - y
print(x)  # Output: 5`}</code></pre>
        </div>
      </section>

      {/* Logical Operators */}
      <section>
        <h3>Logical Operators</h3>
        <p>
          Logical operators are used to combine conditional statements.
        </p>
        <div className="code-block">
          <h4>Examples:</h4>
          <pre><code>{`x = True
y = False

print(x and y)   # Logical AND: False
print(x or y)    # Logical OR: True
print(not x)     # Logical NOT: False`}</code></pre>
        </div>
      </section>

      {/* Bitwise Operators */}
      <section>
        <h3>Bitwise Operators</h3>
        <p>
          Bitwise operators perform operations on bits and are used in low-level programming.
        </p>
        <div className="code-block">
          <h4>Examples:</h4>
          <pre><code>{`a = 60    # 60 = 0011 1100
b = 13    # 13 = 0000 1101

print(a & b)    # Bitwise AND: 12  (0000 1100)
print(a | b)    # Bitwise OR: 61   (0011 1101)
print(a ^ b)    # Bitwise XOR: 49  (0011 0001)
print(~a)       # Bitwise NOT: -61 (1100 0011)
print(a << 2)   # Bitwise Left Shift: 240 (1111 0000)
print(a >> 2)   # Bitwise Right Shift: 15 (0000 1111)`}</code></pre>
        </div>
      </section>

      {/* Membership Operators */}
      <section>
        <h3>Membership Operators</h3>
        <p>
          Membership operators test for membership in a sequence (e.g., lists, tuples, strings).
        </p>
        <div className="code-block">
          <h4>Examples:</h4>
          <pre><code>{`my_list = [1, 2, 3, 4]

print(1 in my_list)     # Membership: True
print(5 not in my_list) # Membership: True`}</code></pre>
        </div>
      </section>

      {/* Identity Operators */}
      <section>
        <h3>Identity Operators</h3>
        <p>
          Identity operators compare the memory addresses of two objects.
        </p>
        <div className="code-block">
          <h4>Examples:</h4>
          <pre><code>{`x = [1, 2, 3]
y = [1, 2, 3]
z = x

print(x is z)  # Identity: True
print(x is y)  # Identity: False`}</code></pre>
        </div>
      </section>

      {/* Table of Python Operators */}
      <section>
        <h3>Table of Python Operators</h3>
        <p>
          Below is a table summarizing the different types of Python operators.
        </p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Operator Type</th>
              <th>Example</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Arithmetic</td>
              <td>a + b</td>
              <td>Addition</td>
            </tr>
            <tr>
              <td>Comparison</td>
              <td>a == b</td>
              <td>Equal to</td>
            </tr>
            <tr>
              <td>Assignment</td>
              <td>x += y</td>
              <td>Add and assign</td>
            </tr>
            <tr>
              <td>Logical</td>
              <td>x and y</td>
              <td>Logical AND</td>
            </tr>
            <tr>
              <td>Bitwise</td>
              <td>a & b</td>
              <td>Bitwise AND</td>
            </tr>
            <tr>
              <td>Membership</td>
              <td>1 in my_list</td>
              <td>Membership check</td>
            </tr>
            <tr>
              <td>Identity</td>
              <td>x is z</td>
              <td>Identity check</td>
            </tr>
          </tbody>
        </Table>
      </section>

      {/* Conclusion */}
      <section>
        <h3>Conclusion</h3>
        <p>
          Python operators provide essential tools for manipulating data and controlling program flow. Understanding their functionalities and nuances is crucial for writing efficient and effective Python code.
        </p>
      </section>
    </div>
  );
};

export default PythonOperators;

