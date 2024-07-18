import React from 'react';

const PythonTuples = () => {
  return (
    <div className="content-wrapper">
      <h2>Python Tuples</h2>

      <section>
        <h3>Introduction to Python Tuples</h3>
        <p>Tuples in Python are ordered collections of items similar to lists. However, unlike lists, tuples are immutable, meaning their elements cannot be changed after they are created.</p>
      </section>

      <section>
        <h3>Basic Operations</h3>
        <ul>
          <li><strong>Creating Tuples:</strong> Tuples are created by enclosing elements in parentheses <code>( )</code>.
            <pre><code>
my_tuple = (1, 2, 3, 4, 5)
print(my_tuple)  # Output: (1, 2, 3, 4, 5)
            </code></pre>
          </li>
          <li><strong>Accessing Elements:</strong> Elements in a tuple can be accessed using indices, similar to lists.
            <pre><code>
print(my_tuple[0])  # Output: 1
print(my_tuple[-1])  # Output: 5
            </code></pre>
          </li>
          <li><strong>Immutable Nature:</strong> Once created, the elements of a tuple cannot be changed.
            <pre><code>
my_tuple[0] = 10  # This will cause an error
            </code></pre>
          </li>
        </ul>
      </section>

      <section>
        <h3>Notes</h3>
        <p>Tuples are used to store multiple items in a single variable, similar to lists. However, their immutability ensures data integrity in situations where the data should not be changed.</p>
      </section>

      <section>
        <h3>Uses</h3>
        <p>Tuples are commonly used to represent fixed collections of items, such as coordinates, database records, or any set of related data that should not change.</p>
      </section>

      <section>
        <h3>Example Codes</h3>
        <pre><code>
# Example of tuple operations
my_tuple = (1, 2, 3, 4, 5)
print(len(my_tuple))  # Output: 5
print(max(my_tuple))  # Output: 5
print(min(my_tuple))  # Output: 1
        </code></pre>
      </section>

    </div>
  );
};

export default PythonTuples;
