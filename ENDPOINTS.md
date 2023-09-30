# 🖥️Projexa API - Endpoints

# News
This route is responsible for the news of projects and has the following attributes:

| Attributes  | Function                                                             |
| ----------- | -------------------------------------------------------------------- |
| Member id   | Id of the member who created the news                                |
| Project id  | Id of the project which the news belongs to                          |
| Description | Description of the news                                              |
| image       | Image of news (under development)                                    |
| Update link | Link of news (like link of the pull request or other important link) |

## 🛠️Methods
Below are the methods and their expected responses as well as possible errors:

| Method | Expected responses | Possible errors |
| ------ | ------------------------------- | -------------------- |
| GET    | (201) Project and all its news  | (500) Internal error |
| POST   | (201) News created successfully | (500) Internal error |
| PATCH  | (200) News updated successfully | (500) Internal error |
| DELETE | (200) News removed successfully | (500) Internal error |

### ⬇️GET

| Requirements | Function                       |
| ------------ | ------------------------------ |
| Params       | Contains the id of the project |

### ⬆POST

| Requirements | Function                                                        |
| ------------ | --------------------------------------------------------------- |
| Params       | Contains the id of the project                                  |
| Middleware   | Contains the id of the member                                   |
| Body         | Contains the description, image and the update link of the news |

### 🔄PATCH

| Requirements | Function                                                                        |
| ------------ | ------------------------------------------------------------------------------- |
| Body         | Contains the id of the news, description, image and the update link of the news |

### ❌DELETE

| Requirements | Function                       |
| ------------ | ------------------------------ |
| Params       | Contains the id of the project |
| Body         | Contains the id of the news    |
