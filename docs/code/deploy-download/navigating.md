---
sidebar_position: 0
---

# Readme and deploy

## Building

Before starting this topic, make sure you have set up your local environment as explained in the installation of the [administrative panel](../deploy-admin/navigating.md).

In the download application where we provide the CoachApp download, we also adhere to the principles of NodeJS; however, this application is entirely built in NextJS. This is because not every user will have a good enough bandwidth to load the download page, so why worsen its performance with unnecessary JavaScript? Keeping this in mind, this application has a considerably low size so that it can be loaded even on 2G connections.

Here in this topic, as we did with the others, we will show you the step-by-step process of starting this application on your machine or a server so that you can also have your Coach mobile application up and running.

However, we emphasize that, unlike other topics, we will need an additional tool in our toolkit here, a Bucket. This bucket can be created on AWS or DigitalOcean. Other services not derived for downloads will need to go through a configuration in the download application to fit.

Keeping that in mind, let's go! To start the Coach download application locally, follow the steps below:

1. Clone the Application:

Begin by cloning the application to the desired location. Access the repository and clone it or download it using either SSH or HTTPS.

2. Install Dependencies:

After cloning the application, install its dependencies using Yarn. It is recommended to use NodeJS version 18.18.2. Navigate to the project's root and execute yarn install to install the required libraries.

3. Define Environment Variables:

Once the libraries are installed, the penultimate step is to define the environment variables. Create a .env file at the root of the application and set the following variables:

```bash
COUNTRY=
APP_NAME=
APP_LINK=
```

4. Run the Application:

Save the file and execute yarn start. Congratulations! Your application should now be running on port 3000.

## Deploy

This application also adheres to the principles of NodeJS. In other words, we will use the same deployment pattern on a Ubuntu 22.04 server.

Assuming you already have a virtual machine with Ubuntu 22.04, you should also have certain dependencies installed, such as git, pm2, and NodeJS. If you have any doubts about the installation process, refer to the Troubleshooting section.

There are various methods for publishing a NODEJS application. In this guide, we will explain how to make it public and accessible through a server running Ubuntu 22.04.

The first step to make it public is to ensure that it is running as described in the previous section. If your Yarn start command has been successfully executed, cancel the command by pressing Ctrl + C or Command + C. Now, we will use another library to start our application.

Similar to how we executed the application with Yarn, we will now run it with PM2. This library is responsible for running applications in the background on the server, ensuring vitality and load management without occupying the main thread.

Enter the following command:

```bash
pm2 start yarn --interpreter bash --name coach-admin -- start
```

After this, your application should have been started on port 3000 and should be available for public access.
You need to know the Static IPV4 of your VirtualMachine to access this application, like: 00.00.00.00:3000
