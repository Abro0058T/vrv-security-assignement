### NOTE:- 
For this project I have used localStorage to storedata instead of a database . The UI is minimalist but responsive which make it easy to use on any device. The folder structure is also very basic. I have skipped few feature like using useRef to close modal on clicking outside the box . This project demonstrate my problem solving skills and my frontend skills to implement complex features with ease.

Thank you . Build by Abhishek Naula  

Currently there are no default role and user . So the roles and user table will be empty

## Role-Based Access Control (RBAC) User Interface
This project is a React.js application that provides an interface for managing users and roles with Role-Based Access Control (RBAC). It allows administrators to perform CRUD (Create, Read, Update, Delete) operations on users and roles, assign roles to users, and manage permissions. The application uses localStorage to persist data between sessions.

# Table of Contents
* Features
* Getting Started
* How CRUD Operations Work
  * User Management
  * Role Management
* Data Persistence with localStorage
# Features
* User Management:
  * View a list of users.
  * Add new users.
  * Edit existing users.
  * Delete users.
  * Assign roles to users.
  * Manage user status (Active/Inactive).
* Role Management:

  * View a list of roles.
  * Add new roles.
  * Edit existing roles.
  * Delete roles.
  * Define permissions for roles (Read, Write, Delete).
* Dynamic Permissions:

  * Assign permissions to roles.
  * Modify permissions for existing roles.
* Data Persistence:

  * Use localStorage to store users and roles.
  * Persist data between browser sessions.
* Responsive Design:

  * Adaptable UI for different screen sizes.
## Getting Started
# How CRUD Operations Work
User Management
* Viewing Users:

  * Users are displayed in a table with their Name, Role, Status, and Actions.
* Adding a User:

  * Click the Add User button to open the user form modal.
  * Fill in the user's Name, select a Role from the dropdown, and choose a Status.
  * Click Save to add the user.
* Editing a User:

  * Click the Edit icon next to the user you wish to edit.
  * The user form modal will open with the user's current information.
  * Modify the details and click Save to update the user.
* Deleting a User:

  * Click the Delete icon next to the user you wish to delete.
  * The user will be removed from the list.
# Role Management
* Viewing Roles:

  * Roles are displayed in a table with their Role Name, Permissions, and Actions.
* Adding a Role:

  * Click the Add Role button to open the role form modal.
  * Enter the Role Name and select Permissions (Read, Write, Delete).
  * Click Save to add the role.
* Editing a Role:

  * Click the Edit icon next to the role you wish to edit.
  * The role form modal will open with the role's current information.
  * Modify the details and click Save to update the role.
* Deleting a Role:

  * Click the Delete icon next to the role you wish to delete.
  * The role will be removed from the list.
  * Note: When a role is deleted, users assigned to that role will have their role set to an empty value.
# Data Persistence with localStorage
* Storing Data:

  * Users and roles are stored in the browser's localStorage.
  * When a user or role is added, edited, or deleted, the corresponding data in localStorage is updated.
* Loading Data:

  * On application load, users and roles are loaded from localStorage.
  * This ensures that data persists between browser sessions.
* Implementation Details:

  * The useState hook is used with a function to initialize state from localStorage.
```
const [users, setUsers] = useState(() => {
  const savedUsers = localStorage.getItem('users');
  return savedUsers ? JSON.parse(savedUsers) : [];
});
```
  * The useEffect hook is used to update localStorage whenever users or roles change.
```
useEffect(() => {
  localStorage.setItem('users', JSON.stringify(users));
}, [users]);
```
