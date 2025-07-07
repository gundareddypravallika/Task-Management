##  Task Management App  ##

1. Objective
Evaluate your skills in building React.js interfaces, managing state with hooks, applying
Chakra UI components, and leveraging Tailwind CSS for rapid styling—while following best
practices for project structure, accessibility, and responsive design.

2. Technical Requirements
● React.js | JavaScript library for building UI 
● Chakra UI | Component library for styling 
● Tailwind CSS | Utility-first CSS framework 
● React Hooks | Used for state and effect handling 
● Vite | Next-generation frontend tooling 
● Version Control: Git (public repository on GitHub or similar)

3. Features:
1. Add new tasks with title, description, and status
2. Edit or delete existing tasks
3. Filter tasks based on status (To Do, In Progress, Completed)
4. Fully responsive design for desktop and mobile
5. Built using Vite for fast development


○ How to install and run the app.
- Node.js (v18 or above)
- npm (comes with Node.js)
- Git (optional, if cloning via terminal)
  
○ Your architecture and design decisions.
--- Component-Based Design:
The application uses React components to separate concerns — each feature (TaskCard, AddTaskModal, etc.) is self-contained for reusability and easier maintenance.
--- Hooks for State Management:
React's useState hook is used to manage tasks in memory. State is lifted to the parent (App.jsx) so components can communicate through props.
--- Modal-Based Forms:
Chakra UI modals are used to add and edit tasks, improving UX by not navigating away from the main view.
--- Tailwind + Chakra UI:
Chakra provides accessibility and pre-styled components. Tailwind is used for utility-based customization and fine-tuned layout/styling control.
--- Vite:
Used instead of Create React App for faster dev experience and modern tooling.

○ Any further improvements you’d implement if you had more time.
-- Add due dates or reminders
--> Implement drag-and-drop task ordering
--> Add user authentication


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



