import React from 'react';

const PythonComments = () => {
  return (
    <div>
      <h2>Python Comments</h2>
      <section>
        <h3>Single-line Comments</h3>
        <p>Single-line comments start with a hash symbol (#)...</p>
        <pre>
          <code>
            {`# This is a single-line comment`}
          </code>
        </pre>
      </section>
      <section>
        <h3>Multi-line Comments</h3>
        <p>Multi-line comments can be created using triple quotes...</p>
        <pre>
          <code>
            {`"""
This is a multi-line comment
"""`}
          </code>
        </pre>
      </section>
    </div>
  );
};

export default PythonComments;
