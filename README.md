# <span style="color:orangered">**_*CoffeeDir*_**</span>

Online demo: [SSL CoffeeDir](https://coffee-dir.herokuapp.com) | [No-SSL CoffeeDir](http://www.coffeedir.ca)

![CoffeeDir Logo](readme/CoffeeDir_readme.png)

### Specialty coffee journal that lets you log the coffees you and other users have tried.

---

<br />

#### BRAINSTATION WEB DEVELOPMENT BOOTCAMP CAPSTONE PROJECT

_The problem:_
<span style="color:orangered"> I've always wanted to keep a detailed track of the coffees I tried, and started keeping coffee bags in hopes that I'll record them into a nice leather bound journal. So I've just kept all the coffee bags I've bought... but never got to the journal part. Hence, </span>the solution, <span style="color:orangered"> Coffee Dir. All the coffee, none of the baggage!</span>

<br />

<h2 style="color: yellow">Tech stack</h2>

Font-end:

Create-react-app, React Router v6, Axios, Sass
![front-end](readme/front-end.png)

Back-end:

NodeJs, JSON Web Tokens (JWT), BCrypt, MongoDB, Mongoose
![back-end](readme/back-end.png)

<br/>

<h2 style="color: yellow">Setup the project</h2>

### Installation (in root directory, use terminal/bash commands)

```bash
npm i
cd client && npm i
cd .. && cd server && npm i
```

### Set up `.env` file inside `/server/` directory

### Pick a port to use to run the server (8080 is a good one to use)

`PORT=*PORT NUMBER HERE*`

### Initialize a MongoDB database and include the connection string in `DB_CONNECTION` variable

`DB_CONNECTION=*DB CONNECTION STRING*`

### Secret for the JWT token generation (takes any string, but I suggest using `openssl rand -hex 25` in terminal to generate a quick random key key)

`TOKEN_KEY=*SECRET TOKEN*`

<br/>

<h2 style="color: yellow">Run the project</h2>

To run the project locally, write `npm run dev` in root directory of the project

<br/>

<h2 style="color: yellow">Server end-points</h2>

<h2 style="color: #EEEEEE">/user </h2>

/user/register - takes a user object

```js
{
  username: "username string",
  email: "email string",
  password: "password string"
}
```

/user/login - takes a user object and sends back a JWT token to be added to sessionStorage in the browser to be used for user authentication

```js
{
  email: "email string",
  password: "password string"
}
```

<h2 style="color: #EEEEEE">/coffee </h2>

/coffee - takes a large object with all the coffee information that includes user id, so the coffee can be tied to the user

```js
{
  name: "coffee name",
  roaster: "roaster name",
  origin: "country of origin",
  farm: "coffee farm",
  description: "a large string with description",
  flavours: ["array of strings"],
  price: number,
  link: "https url string",
  score: number,
  user_id: req.params.userId
}
```

/coffee/:id - takes a large object with all the coffee information and uses request params to identify coffee to update

```js
{
  name: "coffee name",
  roaster: "roaster name",
  origin: "country of origin",
  farm: "coffee farm",
  description: "a large string with description",
  flavours: ["array of strings"],
  price: number,
  link: "https url string",
  score: number,
}
```

<br />

---

<h3>Hope you enjoy my project and collect some amazing brew, if you have any questions you can find me on Twitter and LinkedIn</h3>

[https://twitter.com/pavelisp](https://twitter.com/pavelisp)

[https://linkedin.com/in/pavelisp](https://linkedin.com/in/pavelisp)

---

<br />

### Credits:

Background image:

<a className="About__image-link" target="_blank" rel="noreferrer" href="https://www.freepik.com/vectors/coffee-branch">Coffee branch vector created by rattanachomphoo - www.freepik.com</a>

Support and guidence (BrainStation Educators and TAs):

Patrick McCullough: [https://github.com/pgmccullough](https://github.com/pgmccullough)

Ernie Hsiung: [https://github.com/ErnieAtLYD](https://github.com/ErnieAtLYD)

Nigel D'Souza: [https://github.com/glitcher93](https://github.com/glitcher93)

Ben Wanless: [https://github.com/BenWanless](https://github.com/BenWanless)
