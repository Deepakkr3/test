
# Project Title

This repository contains a CRUD application for managing customers. The backend is built with Spring Boot and MySQL, featuring JWT token-based authentication. The frontend is integrated using HTML, CSS, JavaScript, React.js, and Bootstrap, allowing users to interact with the backend APIs.
![Screenshot (130)](https://github.com/Deepakkr3/test/assets/115481021/d68deb87-3332-4286-b994-9c00d796d9d5)


## Features

-  Create a customer
- Update a customer
- Get a list of customers with pagination, sorting, and searching
- Get a single customer based on ID
- Delete a customer


## Tech Stack

## Backend
### Technologies Used
- Spring Boot
- MySQL
- JWT Authentication

### Installation and Setup
1. Clone the repository
2. Configure MySQL database settings in `application.properties`
3. Run the Spring Boot application

## Frontend
### Technologies Used
- HTML
- CSS
- JavaScript
- React.js
- Bootstrap

## API Reference

#### Get all items

```http
  GET /customers
```
http://localhost:8080/customers

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string`  |

#### Get item

```http
  GET /customer/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
```http
  POST /customer/
```
http://localhost:8080/customers

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. bodey |

#### Path: https://qa.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp


Method: POST
Body:
{
"login_id" : "test@sunbasedata.com",
"password" :"Test@123"
}



## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/deepak-kumar-01b417214/)

