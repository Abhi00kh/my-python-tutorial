import React from 'react';

const PythonDictionaries = () => {
  return (
    <div className="content-wrapper">
      <h2>Python Dictionaries</h2>

      <section>
        <h3>Introduction to Python Dictionaries</h3>
        <p>Dictionaries in Python are unordered collections of items. Each item in a dictionary is a key-value pair. Dictionaries are mutable, meaning they can be changed after creation.</p>
      </section>

      <section>
        <h3>Basic Operations</h3>
        <ul>
          <li><strong>Creating Dictionaries:</strong> Dictionaries are created by enclosing key-value pairs in curly braces <code>{`{ }`}</code>.
            <pre><code>{`
my_dict = {'name': 'Alice', 'age': 30}
print(my_dict)  # Output: {'name': 'Alice', 'age': 30}
            `}</code></pre>
          </li>
          <li><strong>Accessing Elements:</strong> Elements in a dictionary are accessed using keys.
            <pre><code>{`
print(my_dict['name'])  # Output: Alice
print(my_dict['age'])   # Output: 30
            `}</code></pre>
          </li>
          <li><strong>Adding and Updating Elements:</strong> Elements can be added or updated in a dictionary by assigning a value to a new or existing key.
            <pre><code>{`
my_dict['city'] = 'New York'
print(my_dict)  # Output: {'name': 'Alice', 'age': 30, 'city': 'New York'}

my_dict['age'] = 31  # Update existing key
print(my_dict)  # Output: {'name': 'Alice', 'age': 31, 'city': 'New York'}
`} </code></pre>
          </li>
          <li><strong>Removing Elements:</strong> Elements can be removed from a dictionary using the <code>del</code> keyword.
            <pre><code>{`
del my_dict['city']
print(my_dict)  # Output: {'name': 'Alice', 'age': 31}
          `}  </code></pre>
          </li>
        </ul>
      </section>

      <section>
        <h3>Notes</h3>
        <p>Dictionaries are versatile and used to store data in the form of key-value pairs. They are commonly used for data modeling, fast lookups, and mapping relationships between items.</p>
      </section>

      <section>
        <h3>Uses</h3>
        <p>Use dictionaries when you need to associate unique keys with values, such as storing user information, configuring settings, or mapping data relationships.</p>
      </section>

      <section>
        <h3>Example Codes</h3>
        <pre><code>{`
# Example of dictionary operations
my_dict = {'name': 'Alice', 'age': 30, 'city': 'New York'}

# Accessing elements
print(my_dict['name'])  # Output: Alice

# Adding an element
my_dict['occupation'] = 'Engineer'
print(my_dict)  # Output: {'name': 'Alice', 'age': 30, 'city': 'New York', 'occupation': 'Engineer'}

# Removing an element
del my_dict['age']
print(my_dict)  # Output: {'name': 'Alice', 'city': 'New York', 'occupation': 'Engineer'} `}
        </code></pre>
      </section>

    </div>
  );
};

export default PythonDictionaries;
