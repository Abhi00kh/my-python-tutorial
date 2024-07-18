import React from 'react';

const PythonStrings = () => {
  return (
    <div className="content-wrapper">
      <h2>Python Strings</h2>

      <section>
        <h3>Introduction to Python Strings</h3>
        <p>
          Strings in Python are sequences of characters, represented in quotes (single, double, or triple quotes). They are immutable, meaning once defined, their content cannot be changed.
        </p>
        <p>
          Python provides powerful capabilities for working with strings, including indexing, slicing, formatting, and various built-in methods to manipulate and analyze string data.
        </p>
      </section>

      <section>
        <h3>Creating Strings</h3>
        <p>
          Strings can be created using single quotes (''), double quotes ("") or triple quotes (''' or """). Triple quotes are used for creating multi-line strings or for including quotes and special characters within a string.
        </p>
        <div className="code-block">
          <h4>Example:</h4>
          <pre><code>{`# Single quotes
single_quoted = 'Python Programming'
print(single_quoted)  # Output: Python Programming`}</code></pre>
<pre><code>{`
# Double quotes
double_quoted = "String Operations"
print(double_quoted)  # Output: String Operations`}</code></pre>
<pre><code>{`
# Triple quotes for multi-line strings
multi_line = '''This is a multi-line
string example in Python'''
print(multi_line)`}</code></pre>
        </div>
      </section>

      <section>
        <h3>Important Notes</h3>
        <ul>
          <li>Python strings are immutable, meaning operations like concatenation and slicing produce new strings.</li>
          <li>Indexing starts at 0 in Python, and negative indexing can be used to access characters from the end of the string.</li>
          <li>String methods often return modified copies of the original string.</li>
          <li>When formatting strings, be mindful of using the appropriate method or approach based on Python version and use case.</li>
        </ul>
      </section>


      <section>
        <h3>String Indexing and Slicing</h3>
        <p>
          Python strings support indexing and slicing operations to access specific characters or substrings:
        </p>
        <div className="code-block">
          <h4>Example:</h4>
          <pre><code>{`# Indexing
my_string = "Python"
first_char = my_string[0]
print("First character:", first_char)  # Output: First character: P

# Slicing
substring = my_string[2:5]
print("Substring:", substring)  # Output: Substring: tho`}</code></pre>
        </div>
      </section>

      <section>
        <h3>String Length</h3>
        <p>
          Python strings have a built-in function <code>len()</code> to get the length of the string.
        </p>
        <div className="code-block">
          <h4>Example:</h4>
          <pre><code>{`# String length
my_string = "Python Programming"
length = len(my_string)
print("Length:", length)  # Output: Length: 18`}</code></pre>
        </div>
      </section>

      <section>
        <h3>String Concatenation</h3>
        <p>
          Concatenation in Python is done using the <code>+</code> operator to combine two or more strings into one.
        </p>
        <div className="code-block">
          <h4>Example:</h4>
          <pre><code>{`# String concatenation
str1 = "Hello"
str2 = "Python"
concatenated_string = str1 + " " + str2
print("Concatenated:", concatenated_string)  # Output: Concatenated: Hello Python`}</code></pre>
        </div>
      </section>

      <section>
        <h3>String Repetition</h3>
        <p>
          Repetition in Python strings is achieved using the <code>*</code> operator to repeat a string multiple times.
        </p>
        <div className="code-block">
          <h4>Example:</h4>
          <pre><code>{`# String repetition
str1 = "Python "
repeated_string = str1 * 3
print("Repeated:", repeated_string)  # Output: Repeated: Python Python Python `}</code></pre>
        </div>
      </section>

      <section>
        <h3>String Formatting</h3>
        <p>
          Python allows for flexible string formatting to create formatted output using the <code>.format()</code> method or f-strings (formatted string literals).
        </p>
        <div className="code-block">
          <h4>Examples:</h4>
          <pre><code>{`# String formatting with .format()
name = "Alice"
age = 30
formatted_string = "My name is {} and I am {} years old.".format(name, age)
print("Formatted:", formatted_string)  # Output: Formatted: My name is Alice and I am 30 years old.

# String formatting with f-strings (Python 3.6+)
formatted_string_f = f"My name is {name} and I am {age} years old."
print("Formatted (f-string):", formatted_string_f)  # Output: Formatted (f-string): My name is Alice and I am 30 years old.`}</code></pre>
        </div>
      </section>

      <section>
        <h3>String Methods</h3>
        <p>
          Python strings have numerous built-in methods for various operations like converting cases, stripping whitespace, splitting, joining, etc.
        </p>
      </section>

      <section>
        <h3>Convert Case</h3>
        <div className="code-block">
          <h4>Example:</h4>
          <pre><code>{`# Convert case
my_string = "Python Programming"
print("Original String:", my_string)  # Output: Original String: Python Programming

lowercased_string = my_string.lower()
print("Lowercased:", lowercased_string)  # Output: Lowercased: python programming

uppercased_string = my_string.upper()
print("Uppercased:", uppercased_string)  # Output: Uppercased: PYTHON PROGRAMMING`}</code></pre>
        </div>
      </section>

      <section>
        <h3>Strip Whitespace</h3>
        <div className="code-block">
          <h4>Example:</h4>
          <pre><code>{`# Strip whitespace
my_string_with_spaces = "   Python Programming   "
print("Original String with spaces:", my_string_with_spaces)  # Output: Original String with spaces:    Python Programming   

trimmed_string = my_string_with_spaces.strip()
print("Trimmed:", trimmed_string)  # Output: Trimmed: Python Programming`}</code></pre>
        </div>
      </section>

      <section>
        <h3>Split and Join</h3>
        <div className="code-block">
          <h4>Examples:</h4>
          <pre><code>{`# Split and Join
my_string_to_split = "Python,is,awesome"
print("Original String to split:", my_string_to_split)  # Output: Original String to split: Python,is,awesome

splitted_string = my_string_to_split.split(",")
print("Splitted:", splitted_string)  # Output: Splitted: ['Python', 'is', 'awesome']

joined_string = "-".join(splitted_string)
print("Joined:", joined_string)  # Output: Joined: Python-is-awesome`}</code></pre>
        </div>
      </section>

      <section>
        <h3>Find Substring</h3>
        <div className="code-block">
          <h4>Example:</h4>
          <pre><code>{`# Finding substring
my_string_to_find = "Python is easy to learn"
print("Original String to find substring:", my_string_to_find)  # Output: Original String to find substring: Python is easy to learn

substring_index = my_string_to_find.find("easy")
print("Index of 'easy':", substring_index)  # Output: Index of 'easy': 10`}</code></pre>
        </div>
      </section>

      <section>
        <h3>Replace Substring</h3>
        <div className="code-block">
          <h4>Example:</h4>
          <pre><code>{`# Replace substring
my_string_to_replace = "Python is easy to learn"
print("Original String to replace substring:", my_string_to_replace)  # Output: Original String to replace substring: Python is easy to learn

replaced_string = my_string_to_replace.replace("easy", "fun")
print("Replaced String:", replaced_string)  # Output: Replaced String: Python is fun to learn`}</code></pre>
        </div>
      </section>

     

      <section>
        <h3>Conclusion</h3>
        <p>
          Python strings are versatile and powerful for handling textual data. By understanding their properties, methods, and operations, you can manipulate strings effectively in your Python programs.
        </p>
      </section>
    </div>
  );
};

export default PythonStrings;
