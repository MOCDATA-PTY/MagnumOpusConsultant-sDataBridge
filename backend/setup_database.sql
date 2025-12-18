-- Setup Script for Magnum Opus Consultants Database
-- Run this in SQL Server Management Studio

-- Use the existing DataBridgeDB database
USE DataBridgeDB;
GO

-- Create users table if it doesn't exist
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='users' AND xtype='U')
BEGIN
    CREATE TABLE users (
        id INT IDENTITY(1,1) PRIMARY KEY,
        name NVARCHAR(255) NOT NULL,
        email NVARCHAR(255) UNIQUE NOT NULL,
        password NVARCHAR(255) NOT NULL,
        created_at DATETIME DEFAULT GETDATE(),
        updated_at DATETIME DEFAULT GETDATE()
    );
    CREATE INDEX idx_email ON users(email);
    PRINT 'Users table created successfully';
END
ELSE
BEGIN
    PRINT 'Users table already exists';
END
GO

-- Insert test user "Ethan" with password "test123"
-- Password hash for "test123" using bcrypt
DECLARE @hashedPassword NVARCHAR(255) = '$2a$10$alQWo8H1BdiADtTcu3LxTuf2/aN1Z172iBfuZnsjK5BIydOl75fpW';

IF NOT EXISTS (SELECT * FROM users WHERE email = 'ethan@magnumopus.com')
BEGIN
    INSERT INTO users (name, email, password)
    VALUES ('Ethan', 'ethan@magnumopus.com', @hashedPassword);
    PRINT 'Test user "Ethan" created successfully';
    PRINT 'Email: ethan@magnumopus.com';
    PRINT 'Password: test123';
END
ELSE
BEGIN
    PRINT 'User "Ethan" already exists';
END
GO

-- Display all users
SELECT id, name, email, created_at FROM users;
GO
