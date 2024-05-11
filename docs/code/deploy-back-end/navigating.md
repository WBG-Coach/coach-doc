---
sidebar_position: 0
---

# Deployment Instructions

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

4. Execute database migrations:

After setting all environment variables, especially the database keys, you will be ready to execute the migrations. Running the migration installation is crucial and cannot be avoided under any circumstances.

To install, you should simply execute the following command in the root folder of the application:

If you have chosen to use npm:

```bash
npm run migration:run
```

Or using yarn:

```bash
yarn migration:run
```

After this command, wait for the terminal to confirm that everything has been executed, and to ensure, access your database with a viewer and verify if various tables have been created.

5. Launching the Application:

Save the `.env` file and run `yarn start`. Your application should now be operational on port 3001.

## Email Authentication Configuration

This document outlines the necessary steps to configure DMARC (Domain-based Message Authentication, Reporting, and Conformance), DKIM (DomainKeys Identified Mail), and SPF (Sender Policy Framework) for email authentication.

### Prerequisites

Before proceeding with the configuration, ensure the following:

- Access to your domain's DNS settings.
- Understanding of DMARC, DKIM, and SPF concepts.
- Permissions to make changes to your domain's DNS records.

### Configuration Steps

#### DMARC Configuration

1. **Access DNS Settings**: Log in to your domain registrar or DNS hosting provider's website.

2. **Add DMARC Record**: Create a new DNS TXT record with the following values:

   ```
   Name: _dmarc.yourdomain.com
   Value: "v=DMARC1; p=none; rua=mailto:your@email.com; ruf=mailto:your@email.com; sp=none; fo=1;"
   ```

   Replace `yourdomain.com` with your actual domain and `your@email.com` with your email address for receiving DMARC reports.

3. **Publish Changes**: Save the changes to publish the DMARC record.

#### DKIM Configuration

1. **Generate DKIM Keys**: Follow your email service provider's instructions to generate DKIM keys for your domain.

2. **Add DKIM Record**: Once you have the DKIM keys, add a new DNS TXT record with the following values:

   ```
   Name: selector._domainkey.yourdomain.com
   Value: "v=DKIM1; k=rsa; p=<public_key>"
   ```

   Replace `yourdomain.com` with your actual domain and `<public_key>` with your DKIM public key.

3. **Publish Changes**: Save the changes to publish the DKIM record.

#### SPF Configuration

1. **Access DNS Settings**: Log in to your domain registrar or DNS hosting provider's website.

2. **Add SPF Record**: Create a new DNS TXT record with the following values:

   ```
   Name: yourdomain.com
   Value: "v=spf1 include:_spf.your-email-provider.com ~all"
   ```

   Replace `yourdomain.com` with your actual domain and `_spf.your-email-provider.com` with the SPF record provided by your email service provider.

3. **Publish Changes**: Save the changes to publish the SPF record.

### Verification

After configuring DMARC, DKIM, and SPF, verify the configurations using the following methods:

- **DMARC**: Use DMARC reporting tools to monitor DMARC authentication results and adjust the policy as needed.
- **DKIM**: Send test emails and check the DKIM signature in the email headers using email authentication tools or services.
- **SPF**: Send test emails and analyze the email headers to confirm SPF authentication using email authentication tools or services.

### Conclusion

By following the steps outlined in this document, you can configure DMARC, DKIM, and SPF for email authentication, ensuring improved email deliverability and security for your domain.
