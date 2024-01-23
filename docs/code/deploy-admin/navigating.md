---
sidebar_position: 0
---

# Readme and Deployment Instructions

## Building the Coach Application

The Coach application features three key functionalities, each with a distinct role. This guide focuses on the administrative panel, covering its technical aspects and detailed deployment instructions.

Developed in ReactJs, the Coach administrative panel can be launched either locally or on a cloud server. Follow these steps for a successful setup:

1. **Cloning the Application**: 
   Begin by cloning the application to your chosen location. Access the repository and clone or download it using SSH or HTTPS.

2. **Installing Dependencies**: 
   Post-cloning, install the application's dependencies using Yarn. NodeJS version 18.18.2 is recommended. Navigate to the project's root and execute `Yarn Install` to install the required libraries.

3. **Configuring Environment Variables**: 
   Prior to launching, create a `.ENV` file at the application's root with these variables:

   ```bash
   VITE_API_URL=[Example: http://localhost:3000/np/api]
   VITE_COUNTRY=[Example: np]
   VITE_MAX_REGION_LEVEL=[Example: 2]

```

4. **Launching the Application**:
   After saving the ``.ENV`` file, run `Yarn Start``. The application should now be operational on port 3000.

## Deployment on Ubuntu 22.04

Ensure your virtual machine running Ubuntu 22.04 has necessary dependencies like git, pm2, and NodeJS installed. Consult the Troubleshooting section for any installation queries.

Deployment involves:

1. **Verifying Local Execution**:
   Ensure the application is running as previously outlined. To halt it, press Ctrl + C or Command + C.

2. **Utilizing PM2 for Deployment**:
   Instead of Yarn, deploy the application with PM2, which runs applications in the background efficiently. Enter the command:


```bash
pm2 start yarn --interpreter bash --name coach-admin -- start
```

The application should now be running on port 3000 and publicly accessible.

## Troubleshooting

### PM2 Installation

If, when attempting to start your application with PM2, you receive an error stating that Linux does not recognize this command, you likely do not have an instance of PM2 installed on your virtual machine. To install PM2, execute the following command:

```bash
sudo npm install pm2@latest -g
```

### GIT Installation

To install Git on Ubuntu:

1. Open a terminal (Ctrl + Alt + T or through the applications menu).
2. Update the package list:

```bash
sudo apt update
```

3. Install Git:

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
