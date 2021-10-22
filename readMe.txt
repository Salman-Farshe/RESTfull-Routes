|   NAME   |     PATH       |   HTTP VERB     |            PURPOSE                   |
|----------|----------------|-----------------|--------------------------------------| 
| Index    | /blog          |      GET        | Displays all blog post               |
| New      | /blog/new      |      GET        | Shows new form for new blog entry    |
| Create   | /blog          |      POST       | Creates a new blog post              |
| Show     | /blog/:id      |      GET        | Shows one specified blog post        |
| Edit     | /blog/:id/edit |      GET        | Shows edit form for one blog post    |
| Update   | /blog/:id      |      PUT        | Updates a particular blog post       |
| Destroy  | /blog/:id      |      DELETE     | Deletes a particular blog post       |