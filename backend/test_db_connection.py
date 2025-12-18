import mysql.connector
from mysql.connector import Error

def test_mysql_connection():
    """Test connection to MySQL database"""
    connection = None
    try:
        print("Attempting to connect to MySQL database...")
        print("Host: 167.88.43.168")
        print("Database: MagnumOpusDatabridge")
        print("User: magnumopus")
        print("-" * 50)

        # Create connection
        connection = mysql.connector.connect(
            host='167.88.43.168',
            database='MagnumOpusDatabridge',
            user='magnumopus',
            password='MagnumOpus123',
            port=3306
        )

        if connection.is_connected():
            db_info = connection.server_info
            print(f"[OK] Successfully connected to MySQL Server version {db_info}")

            # Create cursor
            cursor = connection.cursor()

            # Get current database
            cursor.execute("SELECT DATABASE();")
            record = cursor.fetchone()
            print(f"[OK] Connected to database: {record[0]}")

            # Check if users table exists
            cursor.execute("""
                SELECT COUNT(*)
                FROM information_schema.tables
                WHERE table_schema = 'MagnumOpusDatabridge'
                AND table_name = 'users'
            """)
            table_exists = cursor.fetchone()[0]

            if table_exists:
                print("[OK] Users table exists")

                # Get user count
                cursor.execute("SELECT COUNT(*) FROM users")
                user_count = cursor.fetchone()[0]
                print(f"[OK] Total users in database: {user_count}")

                # Get table structure
                cursor.execute("DESCRIBE users")
                columns = cursor.fetchall()
                print("\n[OK] Users table structure:")
                for column in columns:
                    print(f"  - {column[0]}: {column[1]}")
            else:
                print("[WARNING] Users table does not exist yet")

            cursor.close()
            print("\n" + "=" * 50)
            print("[SUCCESS] Database connection test SUCCESSFUL!")
            print("=" * 50)

    except Error as e:
        print(f"\n[ERROR] Error connecting to MySQL: {e}")
        print("=" * 50)
        print("[FAILED] Database connection test FAILED!")
        print("=" * 50)

    finally:
        if connection and connection.is_connected():
            connection.close()
            print("\nConnection closed.")

if __name__ == "__main__":
    test_mysql_connection()
