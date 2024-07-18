import React from 'react';

const PythonIfElse = () => {
  return (
    <div className="content-wrapper">
      <h2>Python If...Else Statements</h2>

      <section>
        <h3>Introduction to If...Else Statements</h3>
        <p>
          In Python, <code>if...else</code> statements are used for decision-making. They allow you to execute a certain block of code if a condition is true, and another block if it is false.
        </p>
        <p>
          The basic syntax is:
        </p>
        <pre>
          <code>
{`if condition:`}<br />
{`    statement(s)`}<br />
{`else:`}<br />
{`    statement(s)`}
          </code>
        </pre>
        <p>
          Here, the <code>else</code> block is optional.
        </p>
      </section>

      <section>
        <h3>Notes</h3>
        <ul>
          <li>Conditions in <code>if</code> statements are evaluated using boolean expressions, which can include logical operators (<code>and</code>, <code>or</code>, <code>not</code>) and comparison operators (<code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>).</li>
          <li>The <code>else</code> clause is executed if the condition in the <code>if</code> statement is false.</li>
          <li>Python allows nested <code>if</code> statements for handling more complex conditions.</li>
        </ul>
      </section>

      <section>
        <h3>Common Errors and Solutions</h3>
        <p>Understanding common errors can help in writing effective <code>if...else</code> statements:</p>
        <ul>
          <li><strong>Indentation Errors:</strong> Python uses indentation to indicate blocks of code. Make sure statements within the same block have consistent indentation.</li>
          <li><strong>Forgetting Colon:</strong> Each <code>if</code> and <code>else</code> statement must end with a colon (<code>:</code>).</li>
          <li><strong>Incorrect Logical Expression:</strong> Ensure that your condition evaluates correctly to a boolean value. For example, using assignment (<code>=</code>) instead of comparison (<code>==</code>).</li>
          <li><strong>Misplaced Conditions:</strong> Verify that conditions are logically structured and placed correctly within the flow of your program.</li>
        </ul>
        <p>Example of correcting indentation:</p>
        <pre>
          <code>
{`x = 5`}<br />
{`if x > 0:`}<br />
{`    if x % 2 == 0:`}<br />
{`        print("Positive even number")`}<br />
{`    else:`}<br />
{`    print("Positive odd number")  # Incorrect indentation`}
          </code>
        </pre>
      </section>

      <section>
        <h3>Nested Statements</h3>
        <p>Python allows you to nest <code>if</code> statements within <code>if</code> statements. This can be useful for handling more complex conditions:</p>
        <pre>
          <code>
{`x = 5`}<br />
{`if x > 0:`}<br />
{`    if x % 2 == 0:`}<br />
{`        print("Positive even number")`}<br />
{`    else:`}<br />
{`        print("Positive odd number")`}<br />
{`elif x < 0:`}<br />
{`    print("Negative number")`}<br />
{`else:`}<br />
{`    print("Zero")`}
          </code>
        </pre>
        <p>Output:</p>
        <pre>Positive odd number</pre>
      </section>

      <section>
        <h3>Advanced Examples</h3>
        <p>Using <code>elif</code> for multiple conditions:</p>
        <pre>
          <code>
{`num = int(input("Enter a number: "))`}<br />
{`if num > 0:`}<br />
{`    print("Positive number")`}<br />
{`elif num < 0:`}<br />
{`    print("Negative number")`}<br />
{`else:`}<br />
{`    print("Zero")`}
          </code>
        </pre>
        <p>Output:</p>
        <pre>Positive number</pre>
      </section>

      <section>
        <h3>More Examples</h3>
        <p>Example 1: Checking user input for a valid age range:</p>
        <pre>
          <code>
{`age = int(input("Enter your age: "))`}<br />
{`if age >= 18:`}<br />
{`    print("You are eligible to vote.")`}<br />
{`else:`}<br />
{`    print("You are not eligible to vote yet.")`}
          </code>
        </pre>

        <p>Example 2: Determining eligibility for a discount based on purchase amount:</p>
        <pre>
          <code>
{`purchase_amount = float(input("Enter your purchase amount: "))`}<br />
{`if purchase_amount >= 100:`}<br />
{`    discount = 10  # 10% discount for purchases over $100`}<br />
{`    final_amount = purchase_amount - (purchase_amount * discount / 100)`}<br />
{`    print(\`Congratulations! You get a \${discount}% discount. Final amount: \${final_amount:.2f}\`)`}<br />
{`else:`}<br />
{`    print("No discount applicable for this purchase.")`}
          </code>
        </pre>

        <p>Example 3: Determining grade based on score:</p>
        <pre>
          <code>
{`score = int(input("Enter your score: "))`}<br />
{`if score >= 90:`}<br />
{`    grade = 'A'`}<br />
{`elif score >= 80:`}<br />
{`    grade = 'B'`}<br />
{`elif score >= 70:`}<br />
{`    grade = 'C'`}<br />
{`elif score >= 60:`}<br />
{`    grade = 'D'`}<br />
{`else:`}<br />
{`    grade = 'F'`}<br />
{`print(f"Your grade is {grade}")`}
          </code>
        </pre>
      </section>

      <section>
        <h3>Conclusion</h3>
        <p>
          Mastering <code>if...else</code> statements is essential for controlling the flow of your Python programs based on conditions. By understanding their syntax, common errors, and applying them in various scenarios, you can write more flexible and robust code.
        </p>
      </section>
    </div>
  );
};

export default PythonIfElse;