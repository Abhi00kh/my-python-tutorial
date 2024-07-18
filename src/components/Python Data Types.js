import React from 'react';

const PythonDataTypes = () => {
  return (
    <div className="content-wrapper">
      <h2>Python Data Types</h2>

      <section>
        <h3>Introduction to Python Data Types</h3>
        <p>
          In Python, data types are the classifications of data items. They specify the type of data that can be stored and manipulated within a program. Python provides several built-in data types to handle different kinds of data efficiently:
        </p>
        <ul>
          <li><strong>Numeric Types:</strong> Integers, floats, and complex numbers represent numerical data in Python.</li>
          <li><strong>Sequence Types:</strong> Lists, tuples, and range objects are used to store collections of items in a specific order.</li>
          <li><strong>Text Type:</strong> Strings represent sequences of characters, essential for working with textual data.</li>
          <li><strong>Set Types:</strong> Sets and frozen sets are unordered collections of unique items, useful for tasks like membership testing and removing duplicates.</li>
          <li><strong>Mapping Type:</strong> Dictionaries store data in key-value pairs, allowing efficient lookup and storage of information.</li>
          <li><strong>Boolean Type:</strong> Booleans represent truth values, either True or False, and are crucial for decision-making in programs.</li>
          <li><strong>None Type:</strong> NoneType represents the absence of a value, used when a variable or function returns nothing.</li>
        </ul>
      </section>

      <section>
        <h3>Numeric Types</h3>
        <p>
          Numeric types in Python handle numerical data. They include:
        </p>
        <ul>
          <li><strong>Integers:</strong> Whole numbers, such as 5, -10, 100, without any decimal points.</li>
          <li><strong>Floats:</strong> Numbers with decimal points or numbers written in exponential form, like 3.14, -0.001, 2.0.</li>
          <li><strong>Complex Numbers:</strong> Numbers in the form a + bj, where a and b are real numbers, and j is the imaginary unit.</li>
        </ul>
        <div className="code-block">
          <h4>Examples:</h4>
          <pre><code>{`# Integer example
integer_number = 5
print(integer_number)  # Output: 5

# Float example
float_number = 3.14
print(float_number)    # Output: 3.14

# Complex number example
complex_number = 2 + 3j
print(complex_number)  # Output: (2+3j)`}</code></pre>
        </div>
      </section>

      <section>
        <h3>Sequence Types</h3>
        <p>
          Sequence types are used to store collections of items. They include:
        </p>
        <ul>
          <li><strong>Lists:</strong> Ordered and mutable collections of items, enclosed in square brackets, e.g., [1, 2, 3, 'a', 'b', 'c'].</li>
          <li><strong>Tuples:</strong> Ordered and immutable collections of items, enclosed in parentheses, e.g., (1, 2, 3, 'a', 'b', 'c').</li>
          <li><strong>Range Objects:</strong> Represents a sequence of numbers and is often used for looping a specific number of times or generating a series of numbers.</li>
        </ul>
        <div className="code-block">
          <h4>Examples:</h4>
          <pre><code>{`# List example
my_list = [1, 2, 3, 'a', 'b', 'c']
print(my_list)   # Output: [1, 2, 3, 'a', 'b', 'c']

# Tuple example
my_tuple = (1, 2, 3, 'a', 'b', 'c')
print(my_tuple)  # Output: (1, 2, 3, 'a', 'b', 'c')

# Range example
my_range = range(0, 10, 2)
print(list(my_range))  # Output: [0, 2, 4, 6, 8]`}</code></pre>
        </div>
      </section>

      <section>
        <h3>Text Type</h3>
        <p>
          Strings in Python are sequences of characters enclosed in quotes (single, double, or triple). They are fundamental for handling textual data and manipulating strings in various ways.
        </p>
        <div className="code-block">
          <h4>Example:</h4>
          <pre><code>{`# String example
my_string = "Hello, World!"
print(my_string)  # Output: Hello, World!`}</code></pre>
        </div>
      </section>

      <section>
        <h3>Set Types</h3>
        <p>
          Sets in Python are unordered collections of unique items. They are useful for tasks that involve membership testing and eliminating duplicate entries. Frozen sets are immutable versions of sets.
        </p>
        <div className="code-block">
          <h4>Examples:</h4>
          <pre><code>{`# Set example
my_set = {1, 2, 3, 3, 4}
print(my_set)          # Output: {1, 2, 3, 4}

# Frozen set example
my_frozen_set = frozenset({1, 2, 3, 3, 4})
print(my_frozen_set)   # Output: frozenset({1, 2, 3, 4})`}</code></pre>
        </div>
      </section>

      <section>
        <h3>Mapping Type</h3>
        <p>
          Dictionaries in Python store data in key-value pairs. They allow for fast lookup and efficient storage of information where each key must be unique.
        </p>
        <div className="code-block">
          <h4>Example:</h4>
          <pre><code>{`# Dictionary example
my_dict = {'name': 'Alice', 'age': 30}
print(my_dict['name'])  # Output: Alice
print(my_dict['age'])   # Output: 30`}</code></pre>
        </div>
      </section>

      <section>
        <h3>Boolean Type</h3>
        <p>
          Booleans in Python represent truth values. They are used for logical operations and control flow in programs, where True and False are the only possible values.
        </p>
        <div className="code-block">
          <h4>Examples:</h4>
          <pre><code>{`# Boolean examples
is_python_fun = True
is_learning = False

print(is_python_fun)    # Output: True
print(is_learning)      # Output: False`}</code></pre>
        </div>
      </section>

      <section>
        <h3>None Type</h3>
        <p>
          The None type in Python represents the absence of a value. It is often used to denote that a variable or function does not return anything.
        </p>
        <div className="code-block">
          <h4>Example:</h4>
          <pre><code>{`# None example
my_var = None
print(my_var)   # Output: None`}</code></pre>
        </div>
      </section>

      <section>
        <h3>Conclusion</h3>
        <p>
          Understanding Python's data types is crucial for writing efficient and clear programs. By choosing the appropriate data type for your variables and data structures, you can optimize performance and ensure robust functionality.
        </p>
      </section>
    </div>
  );
};

export default PythonDataTypes;
