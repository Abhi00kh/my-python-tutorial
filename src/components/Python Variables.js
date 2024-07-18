import React from 'react';



const PythonVariables = () => {
  return (
    <div className="content-wrapper">
      <h2>Python Variables</h2>

      <section>
        <h3>Introduction to Python Variables</h3>
        <p>Variables are used to store data values that can be used and manipulated in a program. In Python, variables are created when you assign a value to them. Unlike some other programming languages, Python does not require you to declare the type of the variable beforehand, making it a dynamically-typed language.</p>
      </section>

      <section>
        <h3>Variable Naming Rules</h3>
        <ul>
          <li>Variable names must start with a letter or the underscore character (<code>_</code>).</li>
          <li>Variable names cannot start with a number.</li>
          <li>Variable names can only contain alphanumeric characters and underscores (A-z, 0-9, and _).</li>
          <li>Variable names are case-sensitive (<code>age</code>, <code>Age</code>, and <code>AGE</code> are three different variables).</li>
        </ul>
        <p>Following these rules ensures that your variable names are valid and do not cause errors in your code.</p>
      </section>

      <section>
        <h3>Creating Variables</h3>
        <ul>
          <li><strong>Basic Variable Assignment:</strong> You can assign values to variables using the equals sign <code>=</code>.
            <pre>
              <code>{`x = 5
y = "Hello"
print(x)  # Output: 5
print(y)  # Output: Hello`}</code>
            
            </pre>
            <p>In this example, <code>x</code> is assigned the integer value 5, and <code>y</code> is assigned the string value "Hello".</p>
          </li>
          <li><strong>Changing Variable Values:</strong> You can change the value of a variable by assigning a new value to it.
            <pre>
              <code>{`x = 5
x = 10  # Now x is 10
print(x)  # Output: 10`}</code>
            
            </pre>
            <p>Here, the variable <code>x</code> is first assigned the value 5, and then it is changed to 10.</p>
          </li>
          <li><strong>Variable Types:</strong> The type of a variable is defined by the value assigned to it. Python automatically interprets the type based on the value.
            <pre>
              <code>{`x = 5       # x is an integer
y = "Hello" # y is a string
z = 3.14    # z is a float

print(type(x))  # Output: <class 'int'>
print(type(y))  # Output: <class 'str'>
print(type(z))  # Output: <class 'float'>`}</code>
            
            </pre>
            <p>In this example, <code>x</code> is an integer, <code>y</code> is a string, and <code>z</code> is a float.</p>
          </li>
        </ul>
      </section>

      <section>
        <h3>Global and Local Variables</h3>
        <p>Variables that are defined inside a function are called local variables, and those defined outside a function are called global variables.</p>
        <ul>
          <li><strong>Local Variable:</strong> A local variable is only accessible within the function where it is defined.
            <pre>
              <code>{`def my_function():
    x = 10  # x is a local variable
    print(x)  # Output: 10

my_function()
print(x)  # This will cause an error because x is not defined outside the function`}</code>
            
            </pre>
            <p>In this example, <code>x</code> is a local variable and is only accessible within <code>my_function</code>.</p>
          </li>
          <li><strong>Global Variable:</strong> A global variable is accessible throughout the entire program, both inside and outside of functions.
            <pre>
              <code>{`x = 10  # x is a global variable

def my_function():
    print(x)  # Output: 10

my_function()
print(x)  # Output: 10`}</code>
           
            </pre>
            <p>Here, <code>x</code> is a global variable and can be accessed both inside and outside the function <code>my_function</code>.</p>
          </li>
        </ul>
      </section>

      <section>
        <h3>Conclusion</h3>
        <p>Understanding how to work with variables is fundamental to programming in Python. Variables allow you to store and manipulate data, and following the rules for variable naming and scope ensures your code runs smoothly and is easy to read and maintain.</p>
      </section>
    </div>
  );
};

export default PythonVariables;
