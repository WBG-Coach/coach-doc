---
sidebar_position: 0
---

# System Overview

![image](https://github.com/WBG-Coach/coach-doc/assets/13595853/c7e4166d-42ea-4c60-9609-f53d8a8d62ec)

**[Coach is the World Bank’s global initiative](https://www.worldbank.org/en/topic/teachers/brief/coach-helping-countries-accelerate-learning-by-improving-in-service-teacher-professional-development) focused on helping countries improve in-service teacher professional development (TPD) programs and systems to accelerate learning.**

*Coach* encompasses support to countries to improve different forms of TPD, including one-to-one coaching, group training sessions and workshops, and other approaches, either through in-person, remote or hybrid modalities. The program has the goal of helping countries design, implement, and evaluate high-quality TPD programs and systems that align with best practice and evidence.

Our suite of Coach Digital applications allow ministries of education or other organizations to provide guided TPD appropriate for their context, together with tools for dashboarding and data analysis. The software is made available through public GitHub organization "WBG-Coach," and is open for cloning and adaptation.

The system architecture is designed and tested to run on Ubuntu Linux through a cloud provider, such as [Amazon Lightsail or EC2 with S3 object storage](https://aws.amazon.com). The system further connects with [SendGrid](https://sendgrid.com) via API for sending one-time password tokens. Developers may change or extend the code to connect with other services.

This set of documentation is intended to guide developers and system administrators in installing and building their own implementations of Coach Digital. Each application has unique aspects and independent configurations. You can find the environment variables for each in the `.env.example` files in their respective repositories.

We encourage contributions through pull requests. If you encounter any problems or have queries, please don't hesitate to open issues on GitHub. We appreciate your involvement and feedback!

# Repository Links

Find below the links to the various components of the Coach project on GitHub:

- **Main Coach Repository**: [https://github.com/WBG-Coach](https://github.com/WBG-Coach)
- **Coach App Source Code**: [https://github.com/WBG-Coach/coach-app](https://github.com/WBG-Coach/coach-app)
- **Coach Documentation Source Code**: [https://github.com/WBG-Coach/coach-doc](https://github.com/WBG-Coach/coach-doc)
- **Coach Download Page Source Code**: [https://github.com/WBG-Coach/coach-download](https://github.com/WBG-Coach/coach-download)
- **Coach Admin Page Source Code**: [https://github.com/WBG-Coach/coach-admin](https://github.com/WBG-Coach/coach-admin)

# Additional Resources

- [Building a Mobile Application for Teacher Coaching](https://thedocs.worldbank.org/en/doc/2df31ff42d8922d9c52b01f946867f67-0140022024/original/MOBILE-application-how-to-note.pdf)
- [Coach: Helping Countries Accelerate Learning by Improving In-Service Teacher Professional Development](https://www.worldbank.org/en/topic/teachers/brief/coach-helping-countries-accelerate-learning-by-improving-in-service-teacher-professional-development)
- [World Bank Strategy to Support Teachers](https://blogs.worldbank.org/education/realizing-promise-effective-teachers-every-child-global-platform-successful-teachers)
