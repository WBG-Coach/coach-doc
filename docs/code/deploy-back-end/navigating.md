---
sidebar_position: 0
---

# Readme and deploy

## Building

Assuming you already have a server configured with PM2 installed, as explained in the admin panel installation topic, you now need to follow a very similar process for installing the API. Follow the step-by-step guide below:

1. Clone the Application:

Begin by cloning the application to the desired location. Access the repository and clone it or download it using either SSH or HTTPS.

2. Install Dependencies:

After cloning the application, install its dependencies using Yarn. It is recommended to use NodeJS version 18.18.2. Navigate to the project's root and execute yarn install to install the required libraries.

3. Define Environment Variables:

Once the libraries are installed, the penultimate step is to define the environment variables. Create a .env file at the root of the application and set the following variables:

```bash
COUNTRY=

DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=

PASSWORD_SALT=
JWT_SECRET=

SENDGRID_API_KEY=

APP_NAME=कोच डिजिटल एनपी
```

4. Run the Application:

Save the file and execute yarn start. Congratulations! Your application should now be running on port 3001.
