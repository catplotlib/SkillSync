# SkillSync

SkillSync is a web application that helps users synchronize their skills with job descriptions. It provides an interface to input a resume and a job description, then uses machine learning to match and rank the resume's skills against those required by the job. The primary technologies used in this project are React, Chakra UI, Django, and OpenAI API.

## Link to WebApp: 
https://skillsync.netlify.app/

## Architecture

The application is structured using React for the front-end user interface and Django for the back-end. Chakra UI is used to style the React components and OpenAI API is used to enable machine learning capabilities.

The application is structured into different components:

- **Dashboard.js**: This is the main dashboard component of the application​1​.
- **Gpt.js**: This component handles the implementation of the OpenAI API​2​.
- **Home.js**: This is the home page of the application. It includes Google login functionality and the ability to fetch user data from Google's userinfo endpoint. It also interacts with the Django backend to create new job applications and store them in the database​3​.

## Getting Started

You can start the application by using the command `npm start` from the project root directory. This will start the React application. For testing, you can use `npm test`. To create a build of the application, use `npm run build`.


## Contribution

The project is open-source and contributions are welcome. You can contribute by forking the repository and creating pull requests.



