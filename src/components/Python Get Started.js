import React from 'react';


const PythonGetStarted = () => {
  return (
    <div className="content-wrapper">
      <h2>Python Get Started</h2>

      <section>
        <h3>Installing Python</h3>
        <p>To start coding in Python, you first need to install Python on your computer. Follow these steps to download and install Python:</p>
        <ol>
          <li>Go to the official Python website: <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Python Downloads</a></li>
          <li>Select the appropriate version for your operating system (Windows, macOS, or Linux).</li>
          <li>Download the installer and run it.</li>
          <li>During installation, make sure to check the option to add Python to your PATH.</li>
        </ol>
      </section>

      <section>
        <h3>Verifying the Installation</h3>
        <p>After installing Python, you need to verify that it is installed correctly:</p>
        <ol>
          <li>Open your command prompt (Windows) or terminal (macOS/Linux).</li>
          <li>Type the following command and press Enter:
            <pre><code>python --version</code></pre>
          </li>
          <li>You should see the version of Python that you installed. If you see an error, make sure Python is added to your PATH.</li>
        </ol>
      </section>

      <section>
        <h3>Running Python Code</h3>
        <p>You can run Python code directly from the command line or by using an Integrated Development Environment (IDE) such as Visual Studio Code (VS Code). Here’s how you can set up and run Python in VS Code:</p>

        <h4>Installing VS Code</h4>
        <ol>
          <li>Download VS Code from the official website: <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code</a></li>
          <li>Run the installer and follow the setup instructions.</li>
        </ol>

        <h4>Setting Up Python in VS Code</h4>
        <ol>
          <li>Open VS Code.</li>
          <li>Install the Python extension for VS Code by going to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing <code>Ctrl+Shift+X</code> (Windows) or <code>Cmd+Shift+X</code> (macOS).</li>
          <li>Search for "Python" and install the extension provided by Microsoft.</li>
        </ol>

        <h4>Running Your First Python Program in VS Code</h4>
        <ol>
          <li>Create a new file and save it with a <code>.py</code> extension, for example, <code>hello.py</code>.</li>
          <li>Write the following code in the file:
            <pre><code>print("Hello, World!")</code></pre>
          </li>
          <li>To run the code, you can either:
            <ul>
              <li>Right-click the editor and select "Run Python File in Terminal".</li>
              <li>Or, open the terminal in VS Code and type:
                <pre><code>python hello.py</code></pre>
              </li>
            </ul>
          </li>
          <li>You should see the output <code>Hello, World!</code> in the terminal.</li>
        </ol>
      </section>

      <section>
        <h3>Conclusion</h3>
        <p>With Python installed and set up in VS Code, you are ready to start coding. Python’s simplicity and readability make it an excellent choice for beginners and experienced programmers alike. Happy coding!</p>
      </section>
    </div>
  );
};

export default PythonGetStarted;
