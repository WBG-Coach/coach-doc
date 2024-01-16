---
sidebar_position: 0
---

# Starting the first Doc

## Building

In the same logic as the administrative panel, the Coach's documentation is also a React application; however, we use an open-source framework called Docussauros. Our documentation can be easily updated with content and started on any user's machine. However, like all other applications, it also has points of attention to ensure smooth operation, both in development mode and on a server.

To accomplish this, we will explain the step-by-step process of modifying the documentation and how to start it in both development and production modes. Feel free to interact with our repository and suggest improvements!

Assuming you have already viewed the topic on starting the administrative panel, you should by now have the entire local environment set up to begin. If not, please refer to the Admin startup documentation to see our standard dependencies for starting a NodeJS application.

1. Clone the Application:

Begin by cloning the application to the desired location. Access the repository and clone it or download it using either SSH or HTTPS.

2. Install Dependencies:

After cloning the application, install its dependencies using Yarn. It is recommended to use NodeJS version 18.18.2. Navigate to the project's root and execute yarn install to install the required libraries.

3. Define Environment Variables:

Once the libraries are installed, the penultimate step is to define the environment variables. Create a .env file at the root of the application and set the following variables:

```bash
COUNTRY=
```

4. Run the Application:

Save the file and execute yarn start. Congratulations! Your application should now be running on port 3000.

## New Documentations

After cloning the project and successfully starting it on your machine, you are now ready to create new documentations. However, you should first understand how this process works.

Inside the Docs folder, you will find all available topics in the documentation, all in MD style, where any changes are automatically reflected in the development environment.

In addition to the Docs folder, we have the SRC folder where all pages rendered in TSX (the default language of React) are located. We do not recommend altering the files inside SRC unless you have knowledge of ReactJS.

If you wanna, access the [Docussauros Official Docs](https://docusaurus.io/) to know more about Docussauros
