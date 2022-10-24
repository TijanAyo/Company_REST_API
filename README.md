# Task 7
### Introduction
This task was assigned to me by devCareer as a part of my work. The objective of this work is to carry out a CRUD operation that enables users to CREATE, READ, UPDATE, and DELETE information about IT companies.

### Installation Guide
* Clone this repository [here](https://github.com/TijanAyo/tech-companies.git).
* The main branch is the most stable branch at any given time, ensure you're working from it.
* Run npm install to install all dependencies
* You can work with your locally installed MongoDB. Do configure to your choice in the application entry file.
* Create an .env file in your project root folder and add your variables. See .env.example for assistance.
### Usage
* Run npm watch:dev to start the application.
* Connect to the API using Postman on port 8081.
### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /api/v1/explore | To get all available companies on the platform |
| GET | /api/v1/explore/:companyId | To get specific company by ID |
| POST | /api/v1/new | To add a new company |
| PATCH | /api/v1/update/:companyId | To update company information by ID |
| GET | /api/v1/remove | To retrieve a company information |
### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
* [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.
### Author
* [Tijan Ayomide](https://github.com/TijanAyo)
### License
This project is available for use under the MIT License.