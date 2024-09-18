# Happye - API

## :card_file_box: Nest Js Server Side Application :card_file_box:

As this project runs in a node environment, you must have Node Js installed on your machine, or docker desktop installed. Is up to you! In the next sections this documentation will guide you to execute the project with both:

### :whale: [Docker](#using-docker)
### :computer: [NPM - Node](#using-npm)

- You can download Node here: [download Node](https://nodejs.org/en/download/prebuilt-installer)
- And Docker Desktop right here : [download Docker](https://www.docker.com/products/docker-desktop/)

---

# :rocket: Launching :rocket:

## Using Docker

### #1 Step:

#### Download project to yout local machine

To launch the application, copy the url link, go to your terminal, select a folder (create a new folder if you want) and use the command:

    git clone https://github.com/JrAiruf/happye-api.git

**Note**: You must have git installed in your machine, in order to execute **git clone** and any other **'git'** command. You can download it here: [download git](https://git-scm.com/downloads). Follow the git instructions, and let's go!


---


### #2 Step:

#### Install project dependencies

Navigate to project folder and install all project dependencies and dev dependencies using:

    npm instal

---

### #3 Step:

#### Create .env file

You must create a .env file, or use the env.example file as base, to provide the following variables:

    HOST=
    APPLICATION_PORT=
    NODE_ENV=
    DBPORT=
    USERNAME=
    PASSWORD=
    DATABASE=
    DATABASE_SYNC=

**Note**: Dotenv package will look up for '.env' file by default. For .env files with diferent name paths you must specify it in `path` option of config method from dotenv as below:
    
      dotenv.config({path: path: process.cwd() + './yourenvfile'});

The `process.cwd()` just gets the path of the current directory in your machine, and concatenates it to your file name.

---

### Test the application

Once the project is installed with it's dependencies, you can go to the project's source folder in your terminal and execute:

    docker compose up --build

You'll be able to access the application in the port specified in `APPLICATION_PORT`.

    http://localhost:{{APPLICATION_PORT}}/endpoint_name


## Using NPM

### #1 Step:

#### Download project to yout local machine

To launch the application, copy the url link, go to your terminal, select a folder (create a new folder if you want) and use the command:

    git clone https://github.com/JrAiruf/happye-api.git

**Note**: You must have git installed in your machine, in order to execute **git clone** and any other **'git'** command. You can download it here: [download git](https://git-scm.com/downloads). Follow the git instructions, and let's go!


---


### #2 Step:

#### Install project dependencies

Navigate to project folder and install all project dependencies and dev dependencies using:

    npm instal

---

### #3 Step:

#### Create .env file

You must create a .env file, or use the env.example file as base, to provide the following variable:
    
    APPLICATION_PORT=

**Note**: Dotenv package will look up for '.env' file by default. For .env files with diferent name paths you must specify it in `path` option of config method from dotenv as below:
    
      dotenv.config({path: path: process.cwd() + './yourenvfile'});

The `process.cwd()` just gets the path of the current directory in your machine, and concatenates it to your file name.

---


### #4 Step:

#### Define mysql configs

Paste the following code in the `database.module.ts`. This will basically allow you to set your own config values to mysql, such as `username` and `passowd`.

```
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hevent } from '../hevent/entities/hevent.entity';

@Module({
    imports: [
    TypeOrmModule.forRoot({
            type: 'mysql',
            host: "localhost",
            port: 3306,
            username: "yourusername",
            password: "yourpassword",
            database: "yourdatabasename",
            entities: [
                Hevent
            ],
            synchronize: true/false,
            logging: true,
            logger: 'advanced-console'
        }) 
    ]
})

export class DatabaseModule { }
```

### Test the application

Once the project is installed with it's dependencies, you can go to the project's source folder in your terminal and execute:

    npm run start

You can also run `npm run start:dev` to execute in watch mode.

You'll be able to access the application in the port specified in `APPLICATION_PORT`.

    http://localhost:{{APPLICATION_PORT}}/endpoint_name