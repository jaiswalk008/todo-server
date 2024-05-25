
## Todo Server

This is the backend server for the Todo app. It provides APIs to manage todo tasks.

## Setup

Follow these steps to set up the server locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/todo-server.git
    ```

2. **Change into the project directory**:
    ```bash
    cd todo-server
    ```

3. **Install the required dependencies**:
    ```bash
    npm install
    ```
4. Compile TypeScript files:
    ```bash
      tsc
    ```
5. **Start the server**:
    ```bash
    npm start
    ```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

- `DATABASE_NAME`: Name of the database used by the server.
- `DATABASE_USER`: Username to access the database.
- `DATABASE_PASSWORD`: Password for the database user.
- `DATABASE_HOST`: Hostname where the database is located.
- `SALT_ROUNDS`: Number of salt rounds used for password hashing.
- `JWT_SECRET_KEY`: Secret key used for JWT token generation.
- `ORIGIN`: Allowed origin for CORS (Cross-Origin Resource Sharing).
- `PORT`: Port number on which the server will run.

Ensure you replace the placeholder values with your actual configuration.

