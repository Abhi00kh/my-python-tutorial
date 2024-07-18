import React from 'react';

const PythonSyntax = () => {
  return (
    <div className="content-wrapper">
      <h2>Python Syntax</h2>

      <section>
        <h3>Introduction to Python Syntax</h3>
        <p>Python syntax refers to the set of rules that defines how a Python program is written and interpreted. Python's syntax is known for its simplicity and readability, making it a popular choice for beginners and experienced developers alike.</p>
        <p>Python emphasizes code readability with its notable use of significant whitespace. The language's syntax allows programmers to express concepts in fewer lines of code compared to other languages like C++ or Java.</p>
      </section>

      <section>
        <h3>Basic Syntax</h3>
        <ul>
          <li><strong>Indentation:</strong> Python uses indentation to define blocks of code. Each level of indentation should be consistent, typically using four spaces. For example:
            <pre><code>
if True:
    print("Hello, World!")
            </code></pre>
            <p>Indentation is crucial in Python as it replaces the use of braces ({}) to define code blocks. Incorrect indentation can lead to <code>IndentationError</code>.</p>
          </li>
          <li><strong>Comments:</strong> Use the <code>#</code> symbol to add a comment. Everything after the <code>#</code> symbol on that line is ignored by the interpreter. For example:
            <pre><code>
# This is a comment
print("Hello, World!")  # This is also a comment
            </code></pre>
            <p>Comments are essential for explaining code and making it more readable. They are ignored by the Python interpreter.</p>
          </li>
          <li><strong>Variables:</strong> Variables do not need explicit declaration to reserve memory space. The declaration happens automatically when you assign a value to a variable. For example:
            <pre><code>
x = 5
y = "Hello"
print(x)
print(y)
            </code></pre>
            <p>Python is dynamically typed, meaning you don't have to declare the type of a variable. The type is inferred at runtime.</p>
          </li>
        </ul>
      </section>

      <section>
        <h3>Common Syntax Errors and Solutions</h3>
        <p>Here are some common syntax errors in Python and how to resolve them:</p>
        <ul>
          <li><strong>IndentationError:</strong> This error occurs when the indentation levels are inconsistent.
            <pre><code>
if True:
print("Hello, World!")  # Incorrect indentation
            </code></pre>
            <p><strong>Solution:</strong> Ensure all code blocks are indented consistently:
            <pre><code>
if True:
    print("Hello, World!")  # Correct indentation
            </code></pre>
            </p>
          </li>
          <li><strong>SyntaxError:</strong> This error occurs when the code violates Python's syntax rules.
            <pre><code>
print "Hello, World!"  # Missing parentheses in Python 3
            </code></pre>
            <p><strong>Solution:</strong> Use parentheses in Python 3:
            <pre><code>
print("Hello, World!")
            </code></pre>
            </p>
          </li>
          <li><strong>NameError:</strong> This error occurs when you try to use a variable that has not been defined.
            <pre><code>
print(x)  # x is not defined
            </code></pre>
            <p><strong>Solution:</strong> Ensure the variable is defined before using it:
            <pre><code>
x = 5
print(x)
            </code></pre>
            </p>
          </li>
          <li><strong>TypeError:</strong> This error occurs when an operation or function is applied to an object of an inappropriate type.
            <pre><code>
x = 5 + "Hello"  # Cannot add an integer and a string
            </code></pre>
            <p><strong>Solution:</strong> Ensure that operations are performed on compatible types:
            <pre><code>
x = 5 + 5
y = "Hello" + " World"
print(x)
print(y)
            </code></pre>
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h3>Python Code Structure</h3>
        <p>A typical Python program consists of the following structure:</p>
        <ol>
          <li><strong>Module Import:</strong> Importing necessary modules at the beginning of the program.
            <pre><code>
import math
import os
import sys
            </code></pre>
            <p>Modules are imported using the <code>import</code> statement. This allows you to use functions and classes defined in those modules.</p>
          </li>
          <li><strong>Function Definition:</strong> Defining functions that are used later in the program.
            <pre><code>
def greet(name):
    print(f"Hello, name!")
            </code></pre>
            <p>Functions are defined using the <code>def</code> keyword. They help in organizing code into reusable blocks.</p>
          </li>
          <li><strong>Main Program:</strong> The main logic of the program, often protected by an <code>if __name__ == "__main__":</code> block to ensure it runs only when the script is executed directly.
            <pre><code>
if __name__ == "__main__":
    greet("World")
            </code></pre>
            <p>The <code>if __name__ == "__main__":</code> construct ensures that the code block runs only if the script is executed directly, not when imported as a module.</p>
          </li>
        </ol>
      </section>

      <section>
        <h3>Conclusion</h3>
        <p>Understanding Python's syntax is essential for writing clean and efficient code. By following the rules and guidelines outlined above, you can avoid common errors and create programs that are easy to read and maintain. As you advance, exploring more complex topics will further enhance your Python programming skills.</p>
        <p>Python's simplicity and readability make it an excellent choice for both beginners and experienced developers. Its extensive standard library and active community support further contribute to its popularity.</p>
      </section>
    </div>
  );
};

export default PythonSyntax;