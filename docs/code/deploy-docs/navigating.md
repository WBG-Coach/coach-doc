---
sidebar_position: 0
---

# Starting the First Documentation

## Building

Similar to the administrative panel, Coach's documentation is a React application, utilizing the open-source framework Docusaurus. This setup allows easy content updates and launching on any user's machine. However, as with all applications, certain considerations are essential for smooth operation in both development and server environments.

This guide will walk you through modifying the documentation and launching it in both development and production modes. We welcome interaction with our repository and suggestions for improvements!

If you have already set up the local environment as described in the administrative panel startup guide, you're ready to begin. If not, please refer to the Admin startup documentation for standard NodeJS application dependencies.

1. **Cloning the Application**: 
   Start by cloning the application to your preferred location. Access the repository and clone or download it using SSH or HTTPS.

2. **Installing Dependencies**: 
   After cloning, install the application's dependencies with Yarn. NodeJS version 18.18.2 is recommended. In the project root, execute `yarn install` to install all necessary libraries.

3. **Configuring Environment Variables**: 
   Following the installation of libraries, set up the environment variables. Create a `.env` file at the application's root with the following:

```bash
COUNTRY=
```

4. Run the Application:

Save the `.env` file and run `yarn start`. Your application should now be active on port 3000.

## Creaing New Documentation

Once you've cloned the project and started it on your machine, you're ready to add new documentation. Understanding this process is important:

* Docs Folder:
    Here, you'll find all existing documentation topics, formatted in Markdown. Any changes made are automatically reflected in the development environment.
* SRC Folder:
    This contains pages rendered in TSX (React's default language). Altering files in SRC is not recommended unless you're proficient in ReactJS.

For more information on Docusaurus, visit the [Docussauros Official Docs](https://docusaurus.io/).