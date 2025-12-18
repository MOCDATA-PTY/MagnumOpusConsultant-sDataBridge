# Magnum Opus Consultants - Backend API

This is the backend API for the Magnum Opus Consultants Data Platform, built with Node.js, Express, and MySQL.

## Prerequisites

Before running the backend, make sure you have the following installed:

1. **Node.js** (v16 or higher)
   - Download from: https://nodejs.org/

2. **MySQL Server** (v8.0 or higher)
   - Download from: https://dev.mysql.com/downloads/mysql/
   - Or install via XAMPP: https://www.apachefriends.org/

## Setup Instructions

### 1. Install MySQL (if not already installed)

#### Option A: Using XAMPP (Recommended for Windows)
1. Download XAMPP from https://www.apachefriends.org/
2. Install XAMPP
3. Start the MySQL service from XAMPP Control Panel

#### Option B: Standalone MySQL
1. Download MySQL Installer from https://dev.mysql.com/downloads/mysql/
2. Install MySQL Server
3. Remember the root password you set during installation

### 2. Create the Database

1. Open MySQL command line or phpMyAdmin
2. Run the following command to create the database:
   ```sql
   CREATE DATABASE magnum_opus_db;
   ```

Alternatively, you can run this from command line:
```bash
mysql -u root -p -e "CREATE DATABASE magnum_opus_db;"
```

### 3. Configure Environment Variables

1. Open the `.env` file in the backend directory
2. Update the following values if needed:

```env
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=         # Enter your MySQL root password here
DB_NAME=magnum_opus_db
DB_PORT=3306

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_change_this_in_production
JWT_EXPIRES_IN=24h

# Server Configuration
PORT=5000
NODE_ENV=development
```

**Important**: Update `DB_PASSWORD` with your MySQL root password!

### 4. Install Dependencies

```bash
cd backend
npm install
```

### 5. Start the Server

```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The server will:
- Connect to MySQL database
- Automatically create the `users` table if it doesn't exist
- Start listening on http://localhost:5000

### 6. Verify the Server is Running

Open your browser and visit:
- http://localhost:5000/api/health

You should see:
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## API Endpoints

### Authentication

#### POST /api/auth/signup
Create a new user account

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Account created successfully",
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### POST /api/auth/login
Login with existing credentials

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX email_index (email)
);
```

## Troubleshooting

### "Error: connect ECONNREFUSED 127.0.0.1:3306"
- MySQL server is not running
- Start MySQL from XAMPP Control Panel or services

### "Error: Access denied for user 'root'@'localhost'"
- Incorrect MySQL password in `.env` file
- Update `DB_PASSWORD` in `.env` with your MySQL root password

### "Error: Unknown database 'magnum_opus_db'"
- Database hasn't been created
- Run: `mysql -u root -p -e "CREATE DATABASE magnum_opus_db;"`

### Port 5000 already in use
- Change the `PORT` value in `.env` to a different port (e.g., 5001)
- Update the frontend API_BASE_URL in `src/lib/api.ts` to match

## Security Notes

- Change `JWT_SECRET` in production to a strong, random string
- Never commit `.env` file to version control
- Use HTTPS in production
- Implement rate limiting for authentication endpoints
- Add input sanitization and additional validation
