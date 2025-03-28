# EmployWise Assignment

## Overview
This React application integrates with the Reqres API to perform basic user management functions such as authentication, listing users, editing user details, and deleting users.

## Features
### Level 1: Authentication Screen
- Users can log in using credentials.
- Authentication API: `POST /api/login`
  - Email: `eve.holt@reqres.in`
  - Password: `cityslicka`
- On successful login, the token is stored, and the user is redirected to the Users List page.

### Level 2: List All Users
- Displays a paginated list of users.
- Fetch users using: `GET /api/users?page=1`
- Displays first name, last name, and avatar in a structured format.
- Pagination or lazy loading is implemented.

### Level 3: Edit, Delete, and Update Users
- **Edit Users**:
  - Opens a form pre-filled with user data.
  - Allows updating first name, last name, and email.
  - Uses `PUT /api/users/{id}`.
- **Delete Users**:
  - Removes a user from the list.
  - Uses `DELETE /api/users/{id}`.
- Success and error messages are displayed accordingly.

## Technologies Used
- **Frontend**: React.js
- **State Management**: React Context API (Optional Redux)
- **HTTP Requests**: Axios / Fetch API
- **CSS Framework**: Tailwind CSS / Bootstrap / Custom CSS
- **Routing**: React Router
- **Storage**: Local Storage for token persistence

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Taniya0613/employwise-assignment.git
   cd employwise-assignment
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the application:
   ```sh
   npm start
   ```

## Project Structure
```
/employwise-assignment
│-- public/
│-- src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Login.css
│   │   ├── Users/
│   │   │   ├── UserList.jsx
│   │   │   ├── UserCard.jsx
│   │   │   ├── EditUser.jsx
│   │   │   ├── Users.css
│   │   ├── Shared/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── Alert.jsx
│   │   │   ├── Loader.jsx
│   ├── context/
│   │   ├── AuthContext.js
│   ├── services/
│   │   ├── api.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
│-- package.json
│-- README.md
```

## API Endpoints Used
- `POST /api/login` - User authentication
- `GET /api/users?page=1` - Fetch users
- `PUT /api/users/{id}` - Update user details
- `DELETE /api/users/{id}` - Remove user

## Deployment
- Hosted on [Heroku/Vercel/Netlify](your-deployment-link)

## Bonus Features Implemented
✔ Client-side search and filtering for users
✔ React Router for navigation
✔ Hosted on a free server

## Contribution
Feel free to fork the repo and submit a pull request with any improvements!

## License
This project is licensed under the MIT License.

---

### GitHub Repository Link
[EmployWise Assignment GitHub Repo](https://github.com/Taniya0613/employwise-assignment)
