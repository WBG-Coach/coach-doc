---
sidebar_position: 0
---

# System Overview

 <img width="1138" alt="Coach System Architecture" src="https://github.com/WBG-Coach/coach-doc/assets/13595853/1b835a90-75c0-4478-9ad4-608077d2f22c" />

Our suite of applications, hosted under the public GitHub organization "WBG-Coach," is open for cloning via SSH. Each application has its unique aspects, and you can find the environment variables for each in the `.env.example` files in their respective repositories.

The system architecture is designed and tested to run on Ubuntu Linux through a cloud provider, such as [Amazon Lightsail or EC2 with S3 object storage](https://aws.amazon.com). The system further connects with [SendGrid](https://sendgrid.com) via API for sending One-Time Password tokens. Developers may change or extend the code to connect with other services.

We encourage contributions through Pull Requests. If you encounter any issues or have queries, please don't hesitate to open Issues on GitHub. We appreciate your involvement and feedback!

# Repository Links

Find below the links to the various components of the Coach project on GitHub:

- **Main Coach Repository**: [https://github.com/WBG-Coach](https://github.com/WBG-Coach)
- **Coach App Source Code**: [https://github.com/WBG-Coach/coach-app](https://github.com/WBG-Coach/coach-app)
- **Coach Documentation Source Code**: [https://github.com/WBG-Coach/coach-doc](https://github.com/WBG-Coach/coach-doc)
- **Coach Download Page Source Code**: [https://github.com/WBG-Coach/coach-download](https://github.com/WBG-Coach/coach-download)
- **Coach Admin Page Source Code**: [https://github.com/WBG-Coach/coach-admin](https://github.com/WBG-Coach/coach-admin)