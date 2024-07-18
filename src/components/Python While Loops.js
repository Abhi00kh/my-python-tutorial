import React from 'react';

const PythonWhileLoops = () => {
  return (
    <div className="content-wrapper">
      <h2>Python While Loops</h2>

      <section>
        <h3>Introduction to While Loops</h3>
        <p>
          In Python, <code>while</code> loops are used to repeatedly execute a block of statements as long as a condition is true.
        </p>
        <p>
          The basic syntax is:
        </p>
        <pre>
          <code>
{`while condition:`}<br />
{`    statement(s)`}
          </code>
        </pre>
      </section>

      <section>
        <h3>Usage and Examples</h3>
        <p>
          <code>while</code> loops are ideal in situations where you need to perform an action repeatedly based on a condition that may change over time. Here are some common scenarios:
        </p>

        <ul>
          <li><strong>Iterating Until a Condition is Met:</strong> Use a while loop when you want to perform an action repeatedly until a specific condition becomes false or true.</li>

          <li><strong>Handling User Input:</strong> For interactive programs, like the summing example where you continuously prompt the user for input until they enter a specific value (e.g., 0).</li>

          <li><strong>Processing Data Structures:</strong> While loops are useful for traversing elements in a list, dictionary, or any iterable where you need to perform actions on each item until a certain condition is met.</li>

          <li><strong>Event-driven Programming:</strong> In applications that respond to events or conditions outside a predetermined sequence, while loops can help manage such events dynamically.</li>
        </ul>
      </section>

      <section>
        <h3>Common Errors and Solutions</h3>
        <ul>
          <li><strong>Infinite Loops:</strong> Ensure the loop condition changes or includes a break statement to exit the loop when necessary.</li>
          <li><strong>Indentation Issues:</strong> Maintain consistent indentation for statements within the loop to avoid syntax errors.</li>
          <li><strong>Incorrect Condition:</strong> Double-check that the condition correctly evaluates to a boolean value, otherwise, the loop may not behave as expected.</li>
        </ul>
      </section>

      <section>
        <h3>Examples</h3>
        <p>Example 1: Counting from 1 to 5 using a while loop:</p>
        <pre>
          <code>
{`num = 1`}<br />
{`while num <= 5:`}<br />
{`    print(num)`}<br />
{`    num += 1`}
          </code>
        </pre>

        <p>Example 2: Summing numbers entered by the user (enter 0 to stop):</p>
        <pre>
          <code>
{`sum = 0`}<br />
{`while True:`}<br />
{`    num = int(input("Enter a number (0 to stop): "))`}<br />
{`    if num == 0:`}<br />
{`        break`}<br />
{`    sum += num`}<br />
{`print(f"Sum: {sum}")`}
          </code>
        </pre>

        <p>Example 3: Printing even numbers from 1 to 10:</p>
        <pre>
          <code>
{`num = 1`}<br />
{`while num <= 10:`}<br />
{`    if num % 2 == 0:`}<br />
{`        print(num)`}<br />
{`    num += 1`}
          </code>
        </pre>
      </section>

      <section>
        <h3>Conclusion</h3>
        <p>
          Mastering <code>while</code> loops allows for flexible and dynamic control flow in Python programs. By understanding their usage scenarios, handling common errors, and applying them effectively, you can create more responsive and efficient code.
        </p>
      </section>
    </div>
  );
};

export default PythonWhileLoops;
