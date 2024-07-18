import React from 'react';

const PythonBooleans = () => {
  return (
    <div className="content-wrapper">
      <h2>Python Booleans</h2>

      <section>
        <h3>Introduction to Python Booleans</h3>
        <p>
          Boolean values in Python are used to represent truth values. They are often used in control structures and logical operations to evaluate conditions.
        </p>
        <p>In programming you often need to know if an expression is True or False.</p>

<p>You can evaluate any expression in Python, and get one of two answers, True or False.</p>

<p>When you compare two values, the expression is evaluated and Python returns the Boolean answer:</p>
      </section>

      <section>
        <h3>Boolean Operations</h3>
        <p>
          Python supports three main Boolean operations: <code>and</code>, <code>or</code>, and <code>not</code>. These operations allow you to combine Boolean values and evaluate complex conditions.
        </p>
        <div className="code-block">
          <h4>Examples:</h4>
          <pre><code>{`# Complex Boolean operations
x = True
y = False
z = True

print(x and y or z)  # Output: True
print(not x or not y)   # Output: True
print(not (x and y))    # Output: True`}</code></pre>
        </div>
        <p style={{color: "purple"}}>When you run a condition in an if statement, Python returns True or False:</p>
      </section>

      <section>
        <h3>Comparison Operators</h3>
        <p>
          Comparison operators in Python return Boolean values based on the comparison of two operands. They are used to compare numbers, strings, or any other Python objects.
        </p>
        <div className="code-block">
          <h4>Examples:</h4>
          <pre><code>{`# Complex Comparison operators
a = [1, 2, 3]
b = [1, 2, 3]

print(a is b)    # Output: False
print(a == b)   # Output: True

x = [1, 2]
y = [1, 2]

print(x is not y)   # Output: True`}</code></pre>
        </div>
      </section>

      <section>
        <h3>Truthy and Falsy Values</h3>
        <p>
          Python has concepts of truthy and falsy values, which are evaluated in Boolean contexts. Understanding these values helps in writing more concise and efficient code.
        </p>
        <div className="code-block">
          <h4>Examples:</h4>
          <pre><code>{`# Complex Truthy and Falsy values
def calculate_value(n):
    return n > 0

print(calculate_value(5))   # Output: True
print(calculate_value(-1))  # Output: False`}</code></pre>
        </div>
      </section>

      <section>
        <h3>Identity Operators</h3>
        <p>
          Identity operators compare the memory locations of two objects. They are useful when working with mutable objects and understanding object references.
        </p>
        <div className="code-block">
          <h4>Examples:</h4>
          <pre><code>{`# Complex Identity operators
x = [1, 2, 3]
y = [1, 2, 3]
z = x

print(x is z)   # Output: True
print(x is y)   # Output: False`}</code></pre>
        </div>
      </section>

      <section>
        <h3>Membership Operators</h3>
        <p>
          Membership operators test for membership within sequences such as lists, tuples, or strings. They are essential for checking existence in data structures.
        </p>
        <div className="code-block">
          <h4>Examples:</h4>
          <pre><code>{`# Complex Membership operators
my_list = [1, 2, 3, 4]

print(1 in my_list)     # Output: True
print(5 not in my_list) # Output: True`}</code></pre>
        </div>
      </section>

      <section>
        <h3>Boolean Conversion</h3>
        <p>
          Any object in Python can be tested for truth value using the <code>bool()</code> function. This function returns <code>True</code> or <code>False</code> based on the truthiness of the object.
        </p>
        <div className="code-block">
          <h4>Example:</h4>
          <pre><code>{`# Complex Boolean conversion
def check_value(value):
    if value:
        return "Value is True"
    else:
        return "Value is False"

print(check_value(10))    # Output: Value is True
print(check_value(None))  # Output: Value is False`}</code></pre>
        </div>
      </section>

      <section>
        <h3>Conclusion</h3>
        <p>
          Python booleans are fundamental for logical operations and decision-making in Python programming. Mastering Boolean operations and understanding truth values is crucial for writing efficient and effective code.
        </p>
      </section>
    </div>
  );
};

export default PythonBooleans;
