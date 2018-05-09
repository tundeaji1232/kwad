# kwad
Visit website...not fully ready for commercial use

### Kwadium is an online learning and earning platform built for individual that want to be online entrepreneurs. <br />
### The platform educate, help optimise , empower with opportunities and create a earning system for users.

  [![kwadium.gif](https://s1.gifyu.com/images/kwadium.gif)](https://gifyu.com/image/xEhg)
## Tech Stack
React: front end component <br />
Styled Component : styling <br />
Redux : state management <br />
Expressjs :server rendering <br />
Postgresql : database <br />
JWT and Passport : authentication <br />



### Running our project locally
Kwadium is [hosted on Heroku](), but if you would like to run it locally please follow these instructions:

**Requirements**

PostgreSQL, Node

**Installation**
```
git clone https://github.com/tundeaji1232/kwad.git  && cd kwad && npm i
```

And then:
```
cd client && npm i
```
Create a `.env` file in the root directory with the following environment variables:
- `DATABASE_URL = ` [a url to a PostgreSQL Database, setup with our `db_build.sql`]
- `SECRET = ` [a secret sequence of letters / numbers for signing JWT tokens]

**Run a Dev Server**

```
npm run dev
```
