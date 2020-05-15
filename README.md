# CSC690-Graduate-CapstoneProject-

Abstract

As a node of connectivity to the Internet has plotted a trend of the exponential growth over the past decade personal communication over these nodes has due the connectivity over the internet has also increased. The emergence of computer network and telecommunication technologies bears the same objective that is allow people to communicate. A logical extension to mere connectivity is secure connectivity as the number of users and the relationship among the users of the internet has changed. This application is an example of a chat server and to start chatting our client should be connected to the server and can perform a private chatting feature. The purpose of this application is to have a real time chat application which would enable a user to chat or with another user effectively.
Keywords: Servers, Chat application, Node.js, Internet, User Interfaces, Real-time systems, Database, Multi-platform


Introduction

As a node of connectivity to the Internet has plotted a trend of the exponential growth over the past decade personal communication over these nodes has due the connectivity over the internet has also increased. The emergence of computer network and telecommunication technologies bears the same objective that is allow people to communicate. A logical extension to mere connectivity is secure connectivity as the number of users and the relationship amongst the users of the internet has changed. Our project is an example of a chat server and to start chatting our client should be connected to the server and can perform a private chatting feature. For future additions we might add the group chat functionality.


Literature Review

As times moves forward, parallelly technology is moving ahead with an even faster speed. With upgrading technology, communication has become faster and more efficient regardless of one’s location. Various chat applications are developed for Android platform, but this project aims to provide with best user experience. There are various applications available online which provides the features of chatting such as Yahoo Chat, Skype, WeChat, Snapchat which is supported on Windows as well as MAC platforms.
Yahoo Chat is a free online software developed for Yahoo users which provides a chat service for Yahoo users. This was first launched in 1997 and provides the functionality of creating chat rooms and chat using text messages.
Snapchat is also a messaging application used globally for communication. Snapchat was developed by Snap Inc and was first released in 2011. Snapchat allows to talk with friends, view live stories and person to person photo sharing.
Chat applications has connected everyone anytime and anywhere around the globe. As mentioned above there are tremendous applications available now online for serving chatting purpose. MYChat application allows the functionality of chatting through a secured platform, where the administrator also cannot view the messages and content of users. Thus, security provided to the users as they use the chat application along with authentication.


Proposed System

Chat applications are very popular digital communication tools and are being used for serving various purposes such as socializing, education, business, creating new connections and networks. This application offers to connect with various people registered with application, user selects the person he/she is willing to communicate and further by using their communication code both the users can start conversation. The basic functionality of this application is providing a text-based message to be transmitted to the user. This is a client server architecture-based application where the main advantage provided is low cost for maintenance and is more scalable as increasing capacity of clients is served efficiently.
Node.js and Socket.io is used in the backend for database administration, authentication and user creation. JavaScript framework will be used on the client side (Front end). The aim of this project is to create a lightweight real time chat environment the same way an application like WhatsApp works where users with the same interests can connect.
It is important that the sender of each message be authenticated, rather than just being able to determine that the message came from a valid member. Additionally, individual identification becomes desirable merely to facilitate the understanding of the chat flow. This can assure the message integrity. Forward and reverse secrecy of messages must be maintained, this means that’s the user who joins a group at the time must not be able to read any messages he captured sent to the group before time. Similarly, a user who leaves the group should not be able to read the messages after the time. Every user must be distinct and must login via the login page and must be authenticated via the distinct google credentials.
Initially all the functionalities must be installed to support various functionalities and set up a framework to develop the application. As we have been using agile methodology our first iteration was collecting required resources and establishing client server connections. Firebase database is being used to store all the user information who registers online on the application and the chats are also being stored in the firebase database. Once the user logs in he can view various users who he can chat with and using a unique code number he is able to connect with the user. Also, other users can join a chat room and hence group chat is also supported. Users are required to sing in with a valid email address, some dummy email address does not allow to login into the application. For the chat feature, our goal is to capture the data sent from user to user via their email in real time via a timestamp.
Privacy for the chats is also implemented in this application as the administrator is also not able to view the chat of users, also all the messages are being transmitted in an encrypted format to maintain privacy. For the authentication of users i.e adding, updating and deleting users we used google firebase in house authentication method via Email and password. For added security measures. We also changed the database security privileges so that no user gets root or admin privileges and no user gets access to the database with read, write or update privileges unless the admin. For the database administration, our key target was for the users to be created, added, updated or deleted in the database and to be recognized by the unique user Id and their email. For added security measures, we used the Firebase AUTH token method, so that when the user logs in with valid credentials, he receives a token and can further be authenticated. Used the Postman application to validate user requests.
We have four levels of encryption. First is very basic but very important that a user cannot access the dashboard without being an actual user. Second level of encryption is that the user needs to sign up. Also, when the user logs in with his valid credentials the database issues the user a token to check the user with valid credentials based on his User handle and uId. Third level of encryption is that no user except the admin should have read or write privileges. We made changes to the Database rules. Fourth is that the admin should not have write privileges over the messages. For the token authorization we used the FB auto service provided by fire base. It is used as a middleware between the client and database to provide authentication
Therefore, our application aims to connect users from any location, anytime with guarantee authentication and privacy provided.


Functional Requirements

Functional requirements describe what the project must be able to do. Each functional requirement has an identifier, a description, prioritization, and a milestone designator. The prioritizations include:
Statements
Must/ Want/ Could/ Won’t
This website must have Privacy for the user
Must
This website must have a Friend List
Must
The sender of each message must be authenticated
Must
Forward and reverse secrecy of messages must be maintained
Must
User should be able to send instant message
Must
Group chat functionality
Want
The user should only chat with the admin of the group he has signed up with.
Must
Emoji Functionality inside the chat box
Could
Date, timestamp on the messages sent
Could
User needs to be able to log out when he/she is done using the platform
Must
The text messages sent by a user will be displayed to other users in the group or room in real time
Must
The application could have access to public API for its build
Want
The user need to be able to change the status Such as (online, offline, etc.)
Could
Deployment of the application
Could



Non -Functional Requirements

Statements
Must/ Want/ Could/ Won’t
Message integrity must be maintained
Must
All data must be backed up
Must
The chat application must be secure from hackers.
Must
Robustness of the application
Must
Performance.
Must
1. Performance Requirements
• A good network provider should be subscribed.
• Internet
2. Safety Requirements
• User should not try to modify the folder and file names.
• User should avoid the rooted device installation.
• User should try to maintain the integrity of software.
3. Security Requirements
• User should not try to modify the folder and file names.
• User should avoid the rooted device installation.
• User should try to maintain the integrity of software
4. Software Quality Attributes
i. Usability: This application will be used by people of any age group who wish to connect with new people.
ii. Testability: This application will be easy to test. Testing data will be provided to make testing easy.
Reliability: This application can be expected to perform well by reducing false acceptance and false rejection rate.


Methodology
The project will be build using the agile development methodology. Agile methods break tasks into smaller iterations, or parts do not directly involve long term planning. The project scope and requirements are laid down at the beginning of the development process. Plans regarding the number of iterations, the duration and the scope of each iteration are clearly defined in advance (Java Point).
The agile process flow can be defined as follow:
1. Concept: Project concept is finalized. We finalized the concept of developing a chat application which will help users to connect with each other. Our main aim is to develop a real time chat application just like the way WhatsApp works.
2. Inception: Inception is defined as finalizing the team and requirements for the project. This application is developed by a team of two. Initially we finalized the functional and non-functional requirements and categorized the priorities using MOSCOW methodology.
3. Iteration: this is the construction phase of the project. Considering the functional and non-functional requirements, we categorized building each module in every iteration. Each iteration took 10-12 days to be completed and further test the module which took approximately 2 days. Our application was developed within four iterations and in every iteration 5-6 modules were built. Further every iteration is discussed in detail.
4. Retirement: This is the last stage where project is fully developed and deployed. Our project was fully developed in a span of 90 days.


Technologies Used
JavaScript:
JavaScript is a programming language suitable for web development. It is a client-side scripting language. It comes on the third layer of the programming done for the web pages that includes HTML and CSS as the first two layers. With JavaScript we can have dynamic content on the web page such as timely news, videos, images, dynamic ads, posts, etc. With java-script we can add various validations to the html document forms and inputs to secure it from various possible attacks on the server as well as database. With JavaScript we get the advantage of various features like increased speed, lower overhead on server-side, versatility, Interoperability, rich interfaces for designing web pages etc.
NodeJS:
NodeJS is an opensource server environment which runs JavaScript code beneath. NodeJS gives you the power to create dynamic web pages, access various files on the sever and create, read, update and delete those files. NodeJS allows you to set the settings for the ports of the web application thorough the settings of the JavaScript files. It can collect form data from the html pages.
React:
React is a web user interface development tool developed for various single page or multipage mobile or web applications. Facebook has created and developed React. It has a development server that compiles React, JSX, auto-prefix CSS. It is helpful in building the web application code and has enhanced the reading aspect of the code. It replaces the View from the Model View Architecture from various frameworks.
External Dependencies:
1. Express v-(4.17.1): It is a web application server framework helps in establishing various connections and is a part of MEAN stack used in the backend of the NodeJS. It has various functionalities on the top of NodeJS for developing dynamic web pages without obscuring the famous NodeJS features.
2. CORS v-(2.8.5): It is a Cross Origin Resource Sharing. It means that by default the javascript can only access the resources or URLs that are on the same location of the machine where the script is running and can’t access other URLs from different origin or domains. We can use CORS package which enables to access URLs and resources from different origins and use various APIs in the Application.
3. Nodemon v-(2.0.2): Nodemon is used for continuous development in the javascript NodeJS framework. We can use it run the application and when we make the changes to existing code the application server will restart again automatically with the updated code.

4. Socket.IO v-(2.3.0): This library is used for communication between the client and server with uni-directional or bi-directional features. It has two set of libraries, each stored in the client side in browser and server side in the JavaScript NodeJS folder.

5.  Google Firebase -  A NoSQL cloud database provided by google which we used for for authentication of user and database administration.


Screen Shots

Figure 1: Home Page

Figure 2: Sign up authentication to add a new user in the database.

Figure 3: Login authentication

Figure 4: Login authentication with wrong user credentials

Figure 5: Signing up with a new user to the chat application

Figure 6: Sending a new message to user2

Figure 7: Data transfer between two users.

Figure 8: Receiving end

Figure 9: Contact form where users can contact the admin whenever necessary.

Figure 10: For the Authentication and Database administration we used Google firebase. A NoSql database.

Figure 11: When logging in with wrong credentials

Figure 12: When logging in with valid credentials: -
