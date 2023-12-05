
<body>

<h1>HalalFoods - Web Application</h1>

<p>HalalFoods is a full-stack web application built using ReactJS that provides users with a personalized experience for discovering and saving Halal recipes. It leverages the Edamam Recipe API to recommend recipes that are pork-free, alcohol-free, and enzyme-free, ensuring they align with Halal dietary guidelines. The application also includes robust user authentication and authorization features implemented with a MySQL database and PHP on the server-side. Additionally, the application is hosted and deployed using a virtual Linux machine on Microsoft Azure.</p>

<h2>Table of Contents</h2>

<ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#technologies-used">Technologies Used</a></li>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#authentication-and-authorization">Authentication and Authorization</a></li>
    <li><a href="#api-integration">API Integration</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
</ul>

<h2>Features</h2>

<h3>Recipe Recommendations</h3>

<p>HalalFoods provides users with a curated list of Halal recipes based on their dietary preferences. It uses the Edamam Recipe API to query recipes that are pork-free, alcohol-free, and enzyme-free.</p>

<h3>User Authentication</h3>

<p>The application offers secure user authentication, allowing users to create accounts, log in, and maintain their profiles. Only registered users can access specific features.</p>

<h3>Recipe Saving</h3>

<p>Users can save their favorite recipes for future reference. Saved recipes are stored securely in the database.</p>

<h3>Virtual Linux Machine Deployment</h3>

<p>The application is hosted on a virtual Linux machine on Microsoft Azure, ensuring reliable and scalable access for users.</p>

<h2>Technologies Used</h2>

<p>HalalFoods is built using various technologies and tools, including:</p>

<ul>
    <li><strong>ReactJS</strong>: The front-end of the application is developed using React for creating a user-friendly and responsive interface.</li>
    <li><strong>MySQL</strong>: The application utilizes a MySQL database to store user data and saved recipes securely.</li>
    <li><strong>Edamam Recipe API</strong>: Recipe recommendations are fetched from the Edamam Recipe API to provide users with Halal recipe options.</li>
</ul>

<h2>Prerequisites</h2>

<p>Before running HalalFoods, make sure you have the following prerequisites installed:</p>

<ul>
    <li><a href="https://nodejs.org/">Node.js</a>: Required for running the React front-end.</li>
    <li><a href="https://www.php.net/">PHP</a>: Required for server-side logic.</li>
    <li><a href="https://www.mysql.com/">MySQL</a>: Needed for database storage.</li>
</ul>

<p>API Keys: You'll need to obtain API keys from Edamam for recipe recommendations.</p>

<h2>Getting Started</h2>

<p>Follow these steps to get HalalFoods up and running:</p>

<ol>
    <li>Clone the repository:</li>

    <pre><code>git clone https://github.com/your-username/halal-foods.git</code></pre>

    <li>Navigate to the project directory:</li>

    <pre><code>cd halal-foods</code></pre>

    <li>Install the required dependencies for the front-end:</li>

    <pre><code>npm install</code></pre>

    <li>Start the React development server:</li>

    <pre><code>npm start</code></pre>

    <li>Set up the PHP and MySQL environment for the server-side. Refer to the server-side documentation for more information on setting up the back-end server.</li>

    <li>Configure the API keys for Edamam in your application. This ensures that the recipe recommendations work correctly. You can store the API keys in a <code>.env</code> file.</li>

    <li>Access the application in your web browser at <code>http://localhost:3000</code>.</li>
</ol>

<h2>Authentication and Authorization</h2>

<p>HalalFoods implements a robust authentication and authorization system. Users can:</p>

<ul>
    <li>Sign up for an account with a valid email and password.</li>
    <li>Log in with their credentials.</li>
    <li>Access their saved recipes after authentication.</li>
</ul>

<h2>API Integration</h2>

<p>The application queries the Edamam Recipe API to provide recipe recommendations. To integrate the API:</p>

<ol>
    <li>Obtain API keys from Edamam.</li>
    <li>Configure your API keys in the application for making API requests.</li>
</ol>

<h2>Deployment</h2>




<p>So far, frontend functionality can be visited at https://halalfoods.onrender.com/ </p>
<p>Enjoy using HalalFoods, and happy coding!</p>
</body>
