<h1>SIH_SERVER</h1>

A Node.js-based server application for backend. This project uses JavaScript and includes the following key components.

<h2>Table of Contents</h2>
<ul>
  <li><a href="#project-overview">Project Overview</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#dependencies">Dependencies</a></li>
  <li><a href="#environment-variables">Environment Variables</a></li>
  <li><a href="#contributing">Contributing</a></li>
</ul>

<h2 id="project-overview">Project Overview</h2>
<p>SIH_SERVER is a backend server to manage API requests and handle data storage for the Smart Learning path and Dashboard System. It is built using <strong>Node.js</strong> and utilizes various packages to provide a smooth and secure experience for managing server-side operations.</p>

<h2>Files</h2>
<ul>
  <li><code>server.js</code>: The main entry point of the application where the server is initialized.</li>
  <li><code>.env</code>: Environment variables configuration (not committed for security reasons).</li>
  <li><code>package.json</code>: Lists the project's dependencies and scripts for building/running the server.</li>
  <li><code>package-lock.json</code>: Tracks the exact versions of dependencies.</li>
  <li><code>.gitignore</code>: Defines the files and directories to be ignored in version control.</li>
</ul>

<h2 id="installation">Installation</h2>
<ol>
  <li>Clone this repository:</li>
  <pre><code>git clone https://github.com/sih1615/SIH_SERVER.git
cd SIH_SERVER
  </code></pre>

  <li>Install dependencies:</li>
  <pre><code>npm install
  </code></pre>

  <h2 id="dependencies">Dependencies</h2>
<p>The following are key dependencies used in this project. They can be installed using <code>npm install</code>:</p>

<ul>
  <li><strong>Express</strong>: A web framework for Node.js.</li>
  <pre><code>npm install express
  </code></pre>

  <li><strong>Mongoose</strong>: An ODM (Object Data Modeling) library for MongoDB and Node.js.</li>
  <pre><code>npm install mongoose
  </code></pre>

  <li><strong>Dotenv</strong>: A module to load environment variables from a <code>.env</code> file.</li>
  <pre><code>npm install dotenv
  </code></pre>
</ul>

<p>Check your <code>package.json</code> for more dependencies, and make sure to install any others as needed.</p>

<h2 id="usage">Usage</h2>
<ol>
  <li>Set up environment variables by creating a <code>.env</code> file in the root directory. The required variables may include:</li>
  <pre><code>PORT=3000
MONGO_URL=mongodb://localhost:27017/sih_server
  </code></pre>

  <li>Start the server:</li>
  <pre><code>npm start
  </code></pre>

  <p>The server will start running at <code>http://localhost:3000</code>.</p>
</ol>

<h2 id="environment-variables">Environment Variables</h2>
<p>The following environment variables need to be configured in your <code>.env</code> file:</p>
<ul>
  <li><code>PORT</code>: The port number on which the server listens.</li>
  <li><code>MONRO_URL</code>: Connection string for the MongoDB database.</li>
</ul>

<h2 id="contributing">Contributing</h2>
<p>Please follow these steps to contribute:</p>
<ol>
  <li>Fork this repository.</li>
  <li>Links the local repository to the remote one on GitHub :(<code>git remote add origin https://github.com/sih1615/SIH_SERVER.git</code>).</li>
  <li>Ensures the local branch is named "main." :(<code>git branch -M main</code>).</li>
  <li>Commit your changes :(<code>git commit -m 'Add some feature'</code>).</li>
  <li>Pushes the changes to the remote repository :(<code>git push -u origin main</code>).</li>
  <li>Create a Pull Request.</li>
</ol>
