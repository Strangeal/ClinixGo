<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [Kanban Board](#kanban-board)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run Test](#run-tests)
  - [Run Linters](#run-tests)
  - [Run Endpoints](#Api-Endpoint-Documentation)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 [ClinixGo] <a name="about-project"></a>

> The project is based on an app to book an appointment with a health specialist(Doctor). The doctor appointment booking app permits healthcare providers to manage their appointments with increased efficiency while giving reliable management. However, it displays all details of the patients, complete history of appointment, analyses the doctors, saving time, etc.

**[ClinixGo]** is an appointment booking app

### ERD Diagram for Project

<img src="https://res.cloudinary.com/dxsom7jmx/image/upload/v1678138506/drawSQL-final-capstoneclinixgo-export-2023-03-06_1_wxo60f.png" width="1000px" alt="ERD Diagram">

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

> Blog App is backend project

<details>
<summary>Front-End</summary>
  <ul>
    <li><a href="https://redux.js.org/">Redux</a></li>
    <li><a href="https://reactjs.org/">ReactJs</a></li>
    <li><a href="https://webpack.js.org/">Webpack</a></li>
    <li><a href="https://getbootstrap.com/">Bootstrap</a></li>
    <li><a href="https://react-icons.github.io/react-icons/">ReactIcon</a></li>
    <li><a href="https://reactjs.org/">PrimeReact</a></li>
    <li><a href="https://reactjs.org/">ReactRouter</a></li>
  </ul>
</details>
<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://jwt.io/">Jwt</a></li>
    <li><a href="https://github.com/rswag/rswag">rswag</a></li>
    <li><a href="https://github.com/CanCanCommunity/cancancan">Cancancan</a></li>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
    <li><a href="https://swagger.io/tools/swagger-ui/">Swagger-Ui</a></li>
    <li><a href="https://rubyonrails.org/">Ruby On Rails</a></li>

  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

> We can do CRUD operations on following things:

- **Doctors**
- **Appoitnments**
- **Users**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [ClinixGo Live Demo🎈](https://clinixgo-production.up.railway.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## :notebook_with_decorative_cover: Kanban Board
- Link to our [kanban-board](https://github.com/users/Strangeal/projects/3)
- Link to initial [kanban-board-screenshot](https://user-images.githubusercontent.com/20049193/220385323-6515c1e1-0fc1-454c-af09-45e3ab48e94c.png)
- We are **four** in the group.

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

> In order to start with this project do as follows :

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- Mac OS or Linux/Debian **(strongly recommended)**
  > If you are running on Windows, you can use WSL to install Ubuntu.
- Latest version of Node installed
- Latest version of Yarn installed
- Latest version of Ruby installed
- Latest version of Rails installed
- Latest version of PostgreSQL installed

```sh
 gem install rails
```

### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone https://github.com/Strangeal/ClinixGo.git
```

### Install

Install this project dependencies with:


```sh
  cd ClinixGo
  bundle install
  npm install
```

Create the app database:

```sh
  rails db:create
  rails db:migrate
  rails db:seed
```

### Usage
To run the application, run the following command:

```sh
  ./bin/dev
```

### Run Test

To run app test. run the following commad:

```sh
  rspec
```

### Run Linters

To run tests, run the following command:

```sh
  rubocop
```

OR

```sh
  rubocop -A
```

**it will automatically correct the errors**

## 🔖 Api-Endpoint-Documentation <a name="#Api-Endpoint-Documentation"></a>

Run the below commands to generate API documentation routes:

`rails g rswag:api:install`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👨‍💻 **Justice Bajeri**

- GitHub: [Justice Bajeri](https://github.com/Strangeal)
- LinkedIn: [Justice Bajeri](https://www.linkedin.com/in/justice-bajeri-0b7211243/)

👨‍💻 **Kwasi Baayeh**

- GitHub: [Kwasi Baayeh](https://github.com/Baayeh/)
- LinkedIn: [Kwasi Baayeh](https://www.linkedin.com/in/kabaayeh)

👨‍💻 **Felicia G. Awuah**

- GitHub: [Felicia G. Awuah](https://github.com/NahnahAJ)
- LinkedIn: [Felicia G. Awuah](https://www.linkedin.com/in/felicia-awuah-gyedua/)

👨‍💻 **Hesbon Onchera**

- GitHub: [Hesbon Onchera](https://github.com/Paul-js-hub)
- LinkedIn: [Hesbon Onchera](https://www.linkedin.com/in/paul-onchera/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

In upcoming weeks, we will add some features as mentioned below

- [ ] **Add a search feature to allow users to search for doctors.**
- [ ] **Improve the app UI.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project then please give a ⭐️ and also share your feedback using github_issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- ❤️ [Murat Korkmaz](https://www.behance.net/muratk)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is <a href="https://creativecommons.org/licenses/by-nc/4.0/">[Creative Commons]</a> licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
