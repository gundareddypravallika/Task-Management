Technical Test – Frontend Developer (React.js, Chakra UI & Tailwind CSS)
Company: Coally

1. Objective
Evaluate your skills in building React.js interfaces, managing state with hooks, applying
Chakra UI components, and leveraging Tailwind CSS for rapid styling—while following best
practices for project structure, accessibility, and responsive design.

2. Technical Requirements
● Framework: React.js (v17 or later)
● Styling Libraries:
○ Chakra UI (base components, theming)
○ Tailwind CSS (utility classes for custom styles)
● State Management: React Hooks (useState, useEffect, useContext, etc.)
● Routing (optional): React Router
● Version Control: Git (public repository on GitHub or similar)

3. General Instructions
1. Initialize a brand-new Git repository for this test.
2. Create a branch named feature/coally-test for your work.
3. When you’re done, push your branch to your public GitHub (or similar) account and
share the link.
4. Include a brief README explaining:
○ How to install and run the app.
○ Your architecture and design decisions.

○ Any further improvements you’d implement if you had more time.

4. Exercise Description
Build a simple “Task Management” application with the following features:
4.1. Main Screen: Task List
● Display a list of tasks, each showing:
○ Title (text)
○ Short description (text)
○ Status (Pending / In Progress / Completed)
○ Creation date
● Render each task using a Chakra UI Card, with additional Tailwind utilities for
spacing and color accents.

4.2. Search and Filtering
● Add a search field to filter tasks by title in real time.
● Add a status selector (Chakra UI Select) to filter by status.
● Ensure both filters work together (title + status).

4.3. Detail Modal
● Clicking a task opens a Modal (Chakra UI) showing:
○ Full title and description.
○ A dropdown to change status (Pending → Completed, etc.).
○ A “Save Changes” button that updates the task in the main list.
● The modal must be accessible (focus trap, keyboard navigation).

4.4. Add New Task

● Include a “New Task” button at the top that opens another modal containing a form:
○ Fields: Title (required), Description (optional), Status (dropdown).
○ Basic validation: Title cannot be empty.
○ On submit, add the new task to the list with the current date.

4.5. Responsiveness
● On mobile screens, cards should stack vertically and modals should use full width
(with margin).
● Use Tailwind breakpoints (sm:, md:, lg:) to adjust sizes and spacing.

5. Submission
● Git repository with all commits.
● A clear README.md.
● Link to the pull request or a ZIP of your project.
● Please send your submission to: danielgomez@coally.com

6. Evaluation Criteria
Aspect Weigh
t

Description

Functionality 40 % Listing, filtering, modals, and creation features work as

specified.

Code & Structure 20 % Clean folder structure and reusable components.
Chakra UI Usage 15 % Proper use of components, theming, and accessibility.
Tailwind CSS
Usage

10 % Effective utility classes for responsive/custom styles.

Responsive
Design

10 % Smooth adaptation across devices.

Documentation 5 % Clear setup instructions and design notes.

7. Optional Bonuses
● Persist tasks in localStorage so data survives page reloads.
● Add sorting by creation date or alphabetically.
● Implement a dark mode toggle using Chakra UI theming.
● Set up separate routes (e.g. / for list, /tasks/:id for detail).
