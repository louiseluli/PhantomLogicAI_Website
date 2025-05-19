# PhantomLogic AI - Website Project

## 🚀 Description

PhantomLogic AI is a fictional startup website project designed to showcase skills in front-end web development using **HTML5, CSS3, and JavaScript (ES6+)**. The project embodies a unique **cyberpunk noir** aesthetic, drawing inspiration from classic sci-fi, thriller films, narrative-driven video games, and atmospheric music.

The website serves as an institutional portal for "PhantomLogic AI," a company specializing in innovative artificial intelligence solutions. It aims to be visually engaging, interactive, and fully responsive across various devices.

## ✨ Key Features

- **Thematic Design:** A distinct cyberpunk noir visual style with a carefully chosen color palette (deep purples, dark blues, neon accents) and typography.
- **Responsive Layout:** Adapts seamlessly to different screen sizes (desktop, tablet, mobile) using CSS Flexbox and Grid.
- **Interactive Elements:**
  - Mobile-friendly navigation menu (hamburger toggle).
  - Smooth scrolling for anchor links.
  - "Glitch" text effect for titles.
  - Subtle fade-in animations on scroll for content sections.
- **Semantic HTML5:** Clean, well-structured, and accessible markup.
- **Modular CSS:** Styles organized into a main `styles.css` and a dedicated `responsive.css` for media queries.
- **Vanilla JavaScript:** Used for DOM manipulation and enhancing user experience without relying on external libraries for core functionalities.
- **Multiple Pages:**
  - **Home (`index.html`):** Introduces the company and its core offerings.
  - **About (`about.html`):** Details the company's mission, vision, and team.
  - **Services (`services.html`):** Showcases the AI solutions provided by PhantomLogic AI.

## 📁 Project Structure

/PhantomLogicAI_Website
|-- index.html # Main landing page
|-- about.html # About Us page
|-- services.html # Services page
|-- css/
| |-- styles.css # Main stylesheets
| |-- responsive.css # Styles for responsive design
|-- js/
| |-- main.js # Core JavaScript for interactivity
|-- assets/
| |-- images/
| | |-- phantomlogic-logo.png
| | |-- hero-cyberpunk-city.png
| | |-- bg-digital-noir-pattern.jpg
| | |-- icon-cassandra-loop.png
| | |-- icon-ghostnet-shield.png
| | |-- icon-clockwork-gear.jpg
| | |-- avatar-dr-stein.png
| | |-- avatar-placeholder.png (if used)
| | |-- (other images...)
|-- README.md

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
  - Flexbox
  - Grid
  - Custom Properties (Variables)
  - Media Queries
- **JavaScript (ES6+)**
  - DOM Manipulation
  - Event Listeners
  - Intersection Observer API

## 🌐 Setup and Usage

1.  Clone or download the repository/project files.
2.  Navigate to the project directory.
3.  Open the `index.html` file in your preferred web browser.

No special build steps or dependencies are required for this project as it's built with vanilla HTML, CSS, and JavaScript.

---

## 🐙 Setting up a GitHub Repository and Pushing Your Project

Here's how to create a new GitHub repository and push your existing "PhantomLogic AI" project to it.

**Prerequisites:**

- **Git installed:** If you don't have Git, download and install it from [git-scm.com](https://git-scm.com/).
- **GitHub account:** If you don't have one, sign up at [github.com](https://github.com/).

**Steps:**

1.  **Create a New Repository on GitHub:**

    - Log in to your GitHub account.
    - Click the **"+"** icon in the top-right corner and select **"New repository"**.
    - **Repository name:** Choose a name (e.g., `PhantomLogicAI-Website` or `phantomlogic-ai`).
    - **Description:** (Optional) Add a brief description.
    - **Public/Private:** Choose whether you want the repository to be public or private.
    - **DO NOT** initialize with a README, .gitignore, or license if you already have these files locally (especially the README you are creating now). You'll add your existing files.
    - Click **"Create repository"**.

2.  **Initialize Git in Your Local Project Directory:**

    - Open your terminal or command prompt.
    - Navigate to the root directory of your `PhantomLogicAI_Website` project (the folder containing `index.html`, `css/`, `js/`, etc.).
    - Run the following command to initialize a new Git repository:
      ```bash
      git init
      ```

3.  **Add Your Project Files to Staging:**

    - To add all files and folders in your project to the staging area (preparing them for a commit), run:
      ```bash
      git add .
      ```
      _(The `.` means "all files and folders in the current directory and its subdirectories".)_

4.  **Commit Your Files:**

    - Commit the staged files to your local repository with a descriptive message:
      ```bash
      git commit -m "Initial commit: Add PhantomLogic AI website project files"
      ```

5.  **Rename the Default Branch (Optional but Recommended):**

    - GitHub's default branch name is now `main`. If your local Git initialized with `master`, you might want to rename it:
      ```bash
      git branch -M main
      ```

6.  **Link Your Local Repository to the GitHub Repository:**

    - On the GitHub repository page you created in Step 1, you'll see a section titled "...or push an existing repository from the command line". Copy the remote repository URL. It will look something like `https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git`.
    - In your terminal, run the following command, replacing the URL with your repository's URL:
      ```bash
      git remote add origin [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)
      ```
      _(This tells Git that `origin` is the nickname for your remote GitHub repository.)_

7.  **Verify the Remote:**

    - You can check if the remote was added correctly:
      ```bash
      git remote -v
      ```
      _(You should see `origin` listed with your repository's URL for fetch and push.)_

8.  **Push Your Local Commits to GitHub:**
    - Now, push your committed files from your local `main` branch to the `main` branch on GitHub (`origin`):
      ```bash
      git push -u origin main
      ```
      - The `-u` flag (or `--set-upstream`) links your local `main` branch with the remote `main` branch. After this first push with `-u`, you can simply use `git push` for subsequent pushes from this branch.

**That's it!** Your "PhantomLogic AI" website project files, including this `README.md` (once you save it in your project's root directory), should now be on your GitHub repository.
