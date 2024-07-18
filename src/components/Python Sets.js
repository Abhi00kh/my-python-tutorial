import React from 'react';

const PythonSets = () => {
  return (
    <div className="content-wrapper">
      <h2>Python Sets</h2>

      <section>
        <h3>Introduction to Python Sets</h3>
        <p>Sets in Python are unordered collections of unique items. They are mutable, meaning you can modify them after creation, but they do not allow duplicate elements.</p>
      </section>

      <section>
        <h3>Basic Operations</h3>
        <ul>
          <li><strong>Creating Sets:</strong> Sets are created by enclosing elements in curly braces <code>{`{ }`}</code>.
            <pre><code>{`
my_set = {1, 2, 3, 4, 5}
print(my_set)  # Output: {1, 2, 3, 4, 5}`}
            </code></pre>
          </li>
          <li><strong>Adding Elements:</strong> Elements can be added to a set using the <code>add()</code> method.
            <pre><code>{`
my_set.add(6)
print(my_set)  # Output: {1, 2, 3, 4, 5, 6}`}
            </code></pre>
          </li>
          <li><strong>Removing Elements:</strong> Elements can be removed from a set using the <code>remove()</code> method.
            <pre><code>{`
my_set.remove(3)
print(my_set)  # Output: {1, 2, 4, 5, 6}`}
            </code></pre>
          </li>
        </ul>
      </section>

      <section>
        <h3>Notes</h3>
        <p>Sets are useful when you need to store unique items and perform operations like union, intersection, and difference between sets.</p>
      </section>

      <section>
        <h3>Uses</h3>
        <p>Sets are commonly used in mathematical operations, removing duplicates from a sequence, and checking membership of an element.</p>
      </section>

      <section>
        <h3>Example Codes</h3>
        <pre><code>
# Example of set operations
my_set = {`{1, 2, 3, 4, 5}`}
print(len(my_set))  # Output: 5
my_set.add(6)
print(my_set)  # Output: {`{1, 2, 3, 4, 5, 6}`}
        </code></pre>
      </section>

    </div>
  );
};

export default PythonSets;
