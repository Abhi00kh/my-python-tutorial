import React from 'react';

const PythonCasting = () => {
  return (
    <div className="content-wrapper">
      <h2>Python Type Casting</h2>

      <section>
        <h3>Introduction to Type Casting in Python</h3>
        <p>
          Type casting, or type conversion, in Python refers to changing the data type of a variable or value from one type to another. It allows you to manipulate data and perform operations that require different types to work together.
        </p>
        <p>
          Python provides several built-in functions and methods for type casting, allowing you to convert between numeric types, sequences, and other data types seamlessly.
        </p>
      </section>

      <section>
        <h3>Numeric Type Casting</h3>
        <p>
          Python allows you to convert between numeric types, such as:
        </p>
        <ul>
          <li><strong>int(x):</strong> Converts x to an integer.</li>
          <li><strong>float(x):</strong> Converts x to a floating-point number.</li>
          <li><strong>complex(x):</strong> Converts x to a complex number with real part x and imaginary part 0.</li>
        </ul>
        <div className="code-block">
          <h4>Examples:</h4>
          <pre><code>{`# Integer conversion
x = int(3.14)
print(x)   # Output: 3

# Float conversion
y = float(5)
print(y)   # Output: 5.0

# Complex conversion
z = complex(2)
print(z)   # Output: (2+0j)`}</code></pre>
        </div>
      </section>

      <section>
        <h3>String Type Casting</h3>
        <p>
          You can also convert strings to numeric types and vice versa using built-in functions:
        </p>
        <ul>
          <li><strong>str(x):</strong> Converts x to a string representation.</li>
          <li><strong>int(str):</strong> Converts a string containing digits to an integer.</li>
          <li><strong>float(str):</strong> Converts a string representation of a number to a floating-point number.</li>
        </ul>
        <div className="code-block">
          <h4>Examples:</h4>
          <pre><code>{`# String to integer conversion
num_str = "123"
num_int = int(num_str)
print(num_int)   # Output: 123

# String to float conversion
float_str = "3.14"
float_num = float(float_str)
print(float_num)   # Output: 3.14`}</code></pre>
        </div>
      </section>

      <section>
        <h3>Boolean Type Casting</h3>
        <p>
          Python also allows you to convert values to boolean types using boolean() function:
        </p>
        <ul>
          <li><strong>bool(x):</strong> Returns True if x is true-like (non-zero, non-empty, etc.), otherwise returns False.</li>
        </ul>
        <div className="code-block">
          <h4>Examples:</h4>
          <pre><code>{`# Boolean conversion
print(bool(0))     # Output: False
print(bool(42))    # Output: True
print(bool(""))    # Output: False
print(bool("abc")) # Output: True`}</code></pre>
        </div>
      </section>

      <section>
        <h3>Custom Type Casting</h3>
        <p>
          In Python, you can define custom functions or methods to perform more complex type conversions tailored to your specific needs.
        </p>
        <div className="code-block">
          <h4>Example:</h4>
          <pre><code>{`# Custom type conversion
def string_to_custom_type(s):
    # Define your custom logic here
    return custom_type_value

# Usage
value = string_to_custom_type("123")
print(value)`}</code></pre>
        </div>
      </section>

      <section>
        <h3>Conclusion</h3>
        <p>
          Understanding type casting in Python is essential for manipulating data effectively. Whether converting between numeric types, strings, or boolean values, mastering type casting allows you to write more flexible and robust programs.
        </p>
      </section>
    </div>
  );
};

export default PythonCasting;
