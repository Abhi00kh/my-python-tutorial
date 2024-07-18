import React from 'react';

const PythonLists = () => {
  return (
    <div className="content-wrapper">
      <h2>Python Lists</h2>

      <section>
        <h3>Introduction to Python Lists</h3>
        <p>Lists in Python are ordered collections of items. They are mutable, which means their elements can be changed after they are created. Lists are versatile and used extensively in Python programming.</p>
      </section>

      <section>
        <h3>Basic Operations</h3>
        <ul>
          <li><strong>Creating Lists:</strong> Lists are created by enclosing elements in square brackets <code>[ ]</code>.
            <pre><code>
my_list = [1, 2, 3, 4, 5]
print(my_list)  # Output: [1, 2, 3, 4, 5]
            </code></pre>
          </li>
          <li><strong>Accessing Elements:</strong> Elements in a list can be accessed using indices.
            <pre><code>
print(my_list[0])  # Output: 1
print(my_list[-1])  # Output: 5
            </code></pre>
          </li>
          <li><strong>Adding Elements:</strong> Elements can be added to a list using the <code>append()</code> method.
            <pre><code>
my_list.append(6)
print(my_list)  # Output: [1, 2, 3, 4, 5, 6]
            </code></pre>
          </li>
          <li><strong>Modifying Elements:</strong> Elements in a list can be changed by assigning new values to them.
            <pre><code>
my_list[0] = 10
print(my_list)  # Output: [10, 2, 3, 4, 5, 6]
            </code></pre>
          </li>
        </ul>
      </section>

      <section>
        <h3>Notes</h3>
        <p>Lists can contain elements of different data types, and they are mutable, meaning you can change their content after creation.</p>
      </section>

      <section>
        <h3>Uses</h3>
        <p>Lists are used to store multiple items in a single variable, iterate over them, and modify them as needed. They are fundamental data structures in Python.</p>
      </section>

      <section>
        <h3>Example Codes</h3>
        <pre><code>
# Example of list operations
my_list = [1, 2, 3, 4, 5]
print(len(my_list))  # Output: 5
print(max(my_list))  # Output: 5
print(min(my_list))  # Output: 1
        </code></pre>
      </section>

    </div>
  );
};

export default PythonLists;
