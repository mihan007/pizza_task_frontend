# Pizza task, frontend
- Released at [https://pizza-task-mk-frontend.herokuapp.com/](https://pizza-task-mk-frontend.herokuapp.com/)
- Now it has list of pizza, shopping cart and draft of order page
- It doesn't slow by nature. It works slowly because I'm using free services and some of them like db are pretty slow

## Deploy at linux / macOs
```
yarn install
REACT_APP_PIZZA_BACKEND_ENPOINT=https://pizza-task-mk-backend.herokuapp.com yarn start
```
Note: you may use any REACT_APP_PIZZA_BACKEND_ENPOINT that gives API, e.g. http://127.0.0.1:8000/ if you run artisan serve for backend

## Notes
1. Used standart workflow:
    1. Split task into issues https://github.com/mihan007/pizza_task_frontend/issues. You can see finished tasks(closed) and still open
    2. Each task get it's own branch https://github.com/mihan007/pizza_task_frontend/branches
    3. After finishing each PR was checked with Travis
    4. Deploy at Heroku done using Heroku integration with Github. Each push to master lead to deploy
2. Used https://github.com/facebook/create-react-app for simplicity

## Things left to do
- All at https://github.com/mihan007/pizza_task_frontend/issues

## Task description
Let’s say you want to start a new **pizza delivery business**. Please create a web application for ordering pizza for your clients, which contains a shopping cart. Take the pizza order and the delivery address and contact details for the client. Login is not required but could be available for checking the history of orders.
### Requirements
- Your clients should be able to order pizzas from the menu
- The menu contains at least 8 pizzas
- You can decide what else you want in the menu
- Processing order/etc. with payment is NOT required. Concentrate on the interface to your pizza customer up to the point the customer confirms his order.
- The pizza order process should cover ordering single or several pizzas with definition of the quantity and calucation of a total price in Euros and US$ also adding delivery costs to the bill.
### Technology (preferred as we use them in our company)
- Frontend – ReactJS
- Backend – Laravel
- Database – MySQL
- You get extra points for adding testing (for both frontend and backend);
- Design - you are free to use any framework or library whatever you want but keep in mind we primarly judge functionality and workflow. Less is more.
###Delivery format
- Please provide the repository links separately for frontend and backend with Demo application URL (e.g. in Heroku).
- The solution has to be testable by a non-technical person
### Resources
- Deployment of the application: Heroku
- Free mysql db host (https://remotemysql.com/);
- Use Git as code source management tool (following Git Flow will be assessed) Add Readme.md file (Project explanation file) to help us in deploying your application.
- The estimated duration for the task completion is 6 days (no extension of deadline).

### Changelog
1. Now we user correct buildpack for react app (see https://github.com/mars/create-react-app-buildpack)
