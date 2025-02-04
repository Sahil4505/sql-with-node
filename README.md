# User Management System

## Description
This project is a simple **User Management System** built with HTML, CSS, and Node.js (Express). It allows users to:
- View a list of users.
- Add a new user.
- Edit an existing user's username.
- Delete a user entry.

## Features
- **User List Page:** Displays all users in a table with options to edit or delete.
- **Add User Page:** Form to create a new user with username, email, and password fields.
- **Edit User Page:** Form to update an existing user's username.
- **Responsive & Styled UI:** Simple and modern UI using CSS.

## Technologies Used
- **Frontend:** HTML, CSS (for styling)
- **Backend:** Node.js, Express
- **Templating Engine:** EJS
- **Database (Optional):** MongoDB or any other storage method

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/user-management.git
   cd user-management
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
4. Open your browser and go to:
   ```
   http://localhost:8080
   ```

## Project Structure
```
/user-management
│── views/
│   ├── users.ejs  (User listing page)
│   ├── newUser.ejs  (Add user page)
│   ├── editUser.ejs  (Edit user page)
│── public/
│   ├── styles.css  (Custom styling)
│── routes/
│   ├── users.js  (Handles user-related routes)
│── server.js  (Main entry point)
│── package.json
```

## API Routes
| Method | Route                 | Description          |
|--------|----------------------|----------------------|
| GET    | `/users`             | Get all users       |
| POST   | `/users`             | Add new user        |
| GET    | `/users/:id/edit`    | Edit a user         |
| PATCH  | `/users/:id`         | Update a username   |
| DELETE | `/users/:id`         | Delete a user       |

## Future Enhancements
- Implement a database for persistent storage.
- Add authentication & authorization.
- Improve UI with Bootstrap or Tailwind CSS.

## License
This project is licensed under the MIT License.

