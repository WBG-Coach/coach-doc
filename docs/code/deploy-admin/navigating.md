---
sidebar_position: 0
---

# Readme and deploy

## Building

Currently, the Coach application operates with three major functionalities, each serving its own purpose. In this topic, we will focus on the administrative panel, discussing it in technical terms and providing clear instructions on deploying the application end-to-end.

The Coach administrative panel is entirely developed in ReactJs and can be initiated either locally or on a cloud server. However, certain precautions must be taken when starting this application. To assist with this, we recommend following the step-by-step guide below:

1. First, you need to clone the application where you want to start it. To do this, access the repository and clone it or download it via SSH or HTTPS.

2. After cloning the application, you should install its dependencies using Yarn. We recommend using NodeJS 18.18.2. Navigate to the project's root and execute Yarn Install to install the libraries.

3. After installing the libraries, the penultimate step is to define the environment variables. To do this, create a .ENV file at the root of the application with the following variables:

```bash
   VITE_API_URL=[EX: http://localhost:3000/np/api]
   VITE_COUNTRY=[EX: np]
   VITE_MAX_REGION_LEVEL=[EX: 2]
```

4. Save your file and execute Yarn Start. Congratulations! Your application should now be running on port 3000.

## Deploy

Assuming you already have a virtual machine with Ubuntu 22.04, you should also have certain dependencies installed, such as git, pm2, and NodeJS. If you have any doubts about the installation process, refer to the Troubleshooting section.

There are various methods for publishing a NODEJS application. In this guide, we will explain how to make it public and accessible through a server running Ubuntu 22.04.

The first step to make it public is to ensure that it is running as described in the previous section. If your Yarn start command has been successfully executed, cancel the command by pressing Ctrl + C or Command + C. Now, we will use another library to start our application.

Similar to how we executed the application with Yarn, we will now run it with PM2. This library is responsible for running applications in the background on the server, ensuring vitality and load management without occupying the main thread.

Enter the following command:

```bash
pm2 start yarn --interpreter bash --name coach-admin -- start
```

After this, your application should have been started on port 3000 and should be available for public access.

## Troubleshooting

### PM2 Installation

If, when attempting to start your application with PM2, you receive an error stating that Linux does not recognize this command, you likely do not have an instance of PM2 installed on your virtual machine. To install PM2, execute the following command:

```bash
sudo npm install pm2@latest -g
```

### GIT Installation

the general process for installing Git on Ubuntu should remain the same or be very similar across different versions. Here are the steps to install Git on Ubuntu:

Open a terminal window. You can do this by pressing Ctrl + Alt + T or searching for "Terminal" in the applications menu.

Update the package list to ensure you have the latest information about available packages. Type the following command and press Enter:

```bash
sudo apt update
```

Install Git by running the following command:

```bash
sudo apt install git
```

Confirm the installation when prompted by typing Y and pressing Enter.

Once the installation is complete, you can check the Git version to verify that it was installed successfully. Run the following command:

```bash
git --version
```

This should display the installed Git version.

### NodeJS Installation

Here are the steps to install Node.js 18.18.2 using NVM:

Install NVM:

Open a terminal and run the following command to install NVM:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

Close and reopen the terminal to start using NVM.

Install Node.js 18.18.2:

Once NVM is installed, you can use it to install Node.js 18.18.2:

```bash
nvm install 18.18.2
```

Use Node.js 18.18.2:

After the installation is complete, set Node.js 18.18.2 as the default version:

```bash
nvm use 18.18.2
```

If you want to make Node.js 18.18.2 the default version every time you open a new terminal, you can set it as the default:

```bash
nvm alias default 18.18.2
```

This will automatically use Node.js 18.18.2 whenever you open a new terminal.

You can verify the installation and check the Node.js version by running:

```bash
node -v
```
