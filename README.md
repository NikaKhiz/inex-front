<div style="display:flex; align-items: center">
  <h1 style="position:relative; top: -6px" >Inex Front </h1>
</div>
Inex front app. gives users acces to register,authorize and see theire current information.

#

### Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

#

### Prerequisites

- <img src="readme/assets/node.png" width="25" style="position: relative; top: 8px" /> _Node JS @12.X and up_
- <img src="readme/assets/npm.png" width="35" style="position: relative; top: 4px" /> _npm @6 and up_

#

### Tech Stack

- <img src="readme/assets/react.png" height="18" style="position: relative; top: 4px" /> [React](https://reactjs.org) - front-end framework
- <img src="readme/assets/zustand.png" height="18" style="position: relative; top: 4px" /> [Zustand](https://zustand-demo.pmnd.rs/) - State management tool
- <img src="readme/assets/i18next.png" height="25" style="position: relative; top: 5px" /> [i18next](https://react.i18next.com/) - library for translation
- <img src="readme/assets/react-hook-form.png" height="18" style="position:relative; top:4px" /> [React hook form](https://www.react-hook-form.com/) - library for managing form states
- [Yup](https://github.com/jquense/yup) - Validation schema builder
- <img src="readme/assets/axios.png" height="18" style="position:relative; top:4px" /> [Axios](https://www.react-hook-form.com/) - Http client
- <img src="readme/assets/tailwind.png" height="18" style="position: relative; top: 4px" /> [TailwindCSS](https://tailwindcss.com/) - css framework
- <img src="readme/assets/typescript.png" height="18" style="position: relative; top: 4px" /> [Typescript](https://www.typescriptlang.org/)

#

### Getting Started

1\. First of all you need to clone Inex front repository from github:

```sh
git clone https://github.com/NikaKhiz/inex-front.git
```

2\. Next step requires install all the dependencies.

```sh
npm install
```

3\. after that you can run Inex front application from terminal:

```sh
npm run dev
```

4\.Now we need to set our env file. Go to the root of your project and execute this command.

```sh
cp .env.example .env
```

after that **.env** file will be populated with necessary env variables:

#

> VITE_BASE_URL = 'http://localhost:8000'

> VITE_I18N_LOCALE= 'en'

> VITE_I18N_FALLBACK_LOCALE= 'en'

##### Now, you should be good to go!

#

### Project Structure

Project structure is fairly straitforward(at least for react developers)...

For more information about project standards, take a look at these docs:

- [ReactJs](https://react.dev/)
