# 🖥️ Projexa API - Endpoints

# News
This route is responsible for the news of projects and has the following attributes:

| Attributes   | Function                                                             |
| -----------  | -------------------------------------------------------------------- |
| Member id    | Id of the member who created the news                                |
| Project id   | Id of the project which the news belongs to                          |
| Description  | Description of the news                                              |
| image        | Image of news (under development)                                    |
| Update link  | Link of news (like link of the pull request or other important link) |

## 🛠️ Methods
Below are the methods and their expected responses as well as possible errors:

| Method | Expected responses | Possible errors |
| ------ | ------------------------------- | -------------------- |
| GET    | (201) Project and all its news  | (500) Internal error |
| POST   | (201) News created successfully | (500) Internal error |
| PATCH  | (200) News updated successfully | (500) Internal error |
| DELETE | (200) News removed successfully | (500) Internal error |

### ⬇️ GET

| Requirements | Function                       |
| ------------ | ------------------------------ |
| Params       | Contains the id of the project |

### ⬆ POST

| Requirements | Function                                                        |
| ------------ | --------------------------------------------------------------- |
| Params       | Contains the id of the project                                  |
| Middleware   | Contains the id of the member                                   |
| Body         | Contains the description, image and the update link of the news |

### 🔄 PATCH

| Requirements | Function                                                                        |
| ------------ | ------------------------------------------------------------------------------- |
| Body         | Contains the id of the news, description, image and the update link of the news |

### ❌ DELETE

| Requirements | Function                       |
| ------------ | ------------------------------ |
| Params       | Contains the id of the project |
| Body         | Contains the id of the news    |

# Link
This route is responsible for the junior company links and has the following attributes:

| Attributes   | Function                                                             |
| ----------   | -------------------------------------------------------------------- |
| Name         | Name that identifies what the link is about                          |
| Url          | Uniform Resource Locator - the destination address of the link       |
| Tags         | Tags that direct to the area that the link relates to                |
| Ej           | The junior company that added the link                               |
| Departments  | Departments to which the link is important to know (or most related) |
| Observations | Observation about added link                                         |

## 🛠️ Methods
Below are the methods and their expected responses as well as possible errors:

| Method | Expected responses | Possible errors |
| ------ | ------------------------------- | -------------------- |
| GET    | (201) Ej and all its links      | (500) Internal error |
| POST   | (201) Link created successfully | (500) Internal error |
| PATCH  | (200) Link updated successfully | (500) Internal error |
| DELETE | (200) Link removed successfully | (500) Internal error |

### ⬇️ GET

| Requirements | Function                       |
| ------------ | ------------------------------ |
| Middleware   | Contains the id of the ej      |

### ⬆ POST

| Requirements | Function                                                                   |
| ------------ | -------------------------------------------------------------------------- |
| Middleware   | Contains the id of the ej                                                  |
| Body         | Contains the name, url, tags, departments and the observations of the link |

### 🔄 PATCH

| Requirements | Function                                                                        |
| ------------ | ------------------------------------------------------------------------------- |
| Params       | Contais the id of the link                                                      |
| Body         | Contains the new data of the link                                               |

### ❌ DELETE

| Requirements | Function                       |
| ------------ | ------------------------------ |
| Params       | Contains the id of the link    |

# Projects

This route is responsible for the junior company projects and has the following attributes:

| Attributes   | Function                                                             |
| ----------   | -------------------------------------------------------------------- |
| Name         | Name that identifies what the project is about                       |
| Description  | A brief description about the project                                |
| Tags         | Categories associed with the project                                 |
| Ej           | Name referring to the junior company                                 |
| Team         | Team members associated with the project                             |
| StartDate    | The planned start date for the project                               |
| FinishDate   | The planned end date for the project                                 |
| ContractLink | The link to the contract associated with the project                 |
| Customer     | The name of the client or organization requesting the project        |
| Email        | The customer contact email address                                   |
| Contact      | The customer contact information (phone, address, etc.)              |
| Name         | Customer name                                                        |
| News         | Relevant updates about the project                                   |

## 🛠️ Methods
Below are the methods and their expected responses as well as possible errors:

| Method |        Expected responses       |             Possible errors                   |
| ------ | ------------------------------- | --------------------------------------------- |
| GET    | (201) All Ej projects                                    | (500) Internal error |
| POST   | (201) Project created                                    | (500) Internal error |
| PATCH  | (200) Project updated end "Project updated successfully" | (500) Internal error |
| DELETE | (200) Project removed end "Project removed successfully" | (500) Internal error |

### ⬇️ GET

| Requirements | Function                                                            |
| ------------ | ------------------------------------------------------------------- |
| Middleware   | Contains the id of the ej                                           |

### ⬆ POST

| Requirements | Function                                                                   
| ------------ | ------------------------------------------------------------------- |
| Middleware   | Contains the id of the ej                                           |
| Body         | Contains project name, description, tags, team, startDate, finishDate, contractLink, customer end news |

### 🔄 PATCH

| Requirements | Function                                                            |
| ------------ | ------------------------------------------------------------------- |
| Params       | Contais the id of the project                                       |
| Body         | Contains the new data to be updated for the project                 |

### ❌ DELETE

| Requirements | Function                                                            |
| ------------ | ------------------------------------------------------------------- |
| Params       | Contains the id of the removed project                              |