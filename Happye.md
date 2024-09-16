# Happye - API

## :card_file_box: Nest Js Server Side Application :card_file_box:

As this project runs in a node environment, you must have Node Js installed on your machine, or docker desktop installed, to run it as a container, what is better, since the project is configured to run as a docker container.

- You can download Node here: [download Node](https://nodejs.org/en/download/prebuilt-installer)
- And Docker Desktop right here : [download Docker](https://www.docker.com/products/docker-desktop/)

---

## :rocket: Launch :rocket:

## #1 Step:

#### Download project to yout local machine

To launch the application, copy the url link, go to your terminal, select a folder (create a new folder if you want) and use the command:

    git clone https://github.com/JrAiruf/happye-api.git

**Note**: You must have git installed in your machine, in order to execute **git clone** and any other **'git'** command. You can download it here: [download git](https://git-scm.com/downloads). Follow the git instructions, and let's go!


---


## #2 Step:

#### Install project dependencies

Navigate to project folder and install all project dependencies and dev dependencies using:

    npm instal

---

## #3 Step:

#### Create .env file

You must create a .env file and use to populate the followings variables:

PASSWORD
USERNAME
DATABASE
HOST
DBPORT
APPLICATION_PORT
NODE_ENV

**Note**: Each variable and value are separeted with '=' signal, and no space.
Example:

    VARIABLE=value

---

## #4 Step:

#### Run with docker

Once the project is installed with it's dependencies, you can go to the source folder
