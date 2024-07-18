import React from 'react';

const PythonBasics = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  };

  const headingStyle = {
    color: '#333',
    borderBottom: '2px solid #ddd',
    paddingBottom: '10px'
  };

  const paragraphStyle = {
    color: '#555',
    lineHeight: '1.6'
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '20px'
  };

  const listItemStyle = {
    marginBottom: '10px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Python Basics</h2>
      <p style={paragraphStyle}>Python is a high-level, interpreted programming language known for its readability and simplicity. Here are some basic concepts:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}><strong>Variables:</strong> Used to store data values. Python has no command for declaring a variable.</li>
        <li style={listItemStyle}><strong>Data Types:</strong> Common data types include integers, floats, strings, and booleans.</li>
        <li style={listItemStyle}><strong>Operators:</strong> Used to perform operations on variables and values. Includes arithmetic, comparison, logical, and assignment operators.</li>
        <li style={listItemStyle}><strong>Control Flow:</strong> Includes if-else statements, for loops, and while loops to control the flow of the program.</li>
        <li style={listItemStyle}><strong>Functions:</strong> Blocks of reusable code that perform a specific task. Defined using the <code>def</code> keyword.</li>
        <li style={listItemStyle}><strong>Lists:</strong> Ordered collections of items which are changeable and allow duplicate members.</li>
        <li style={listItemStyle}><strong>Tuples:</strong> Ordered collections of items which are unchangeable and allow duplicate members.</li>
        <li style={listItemStyle}><strong>Dictionaries:</strong> Unordered collections of key-value pairs.</li>
        <li style={listItemStyle}><strong>Modules:</strong> Files containing Python code that can be imported and used in other Python programs.</li>
        <li style={listItemStyle}><strong>Exceptions:</strong> Errors detected during execution that can be handled using try-except blocks.</li>
      </ul>
    </div>
  );
};

export default PythonBasics;