# MyShop

## My Shop API

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Manage Server](#manage-server)
4. [Vue Project](#vue-project)
    - [Compile and Hot-Reload for Development](#compile-and-hot-reload-for-development)

### Prerequisites

- Docker and Docker Compose
- You need to clone the repo with https://github.com/guillaumebozec/myshop.git

### Installation

1. First, go into the "*docker*" folder and run "*docker-compose up -d --build*" to install the environment.
2. Ensure all 4 containers are running (it may take up to 1 minute before containers are loaded; if you see the Symfony default page on http://localhost/, everything has loaded correctly). Now go inside the PHP container and follow the next steps.
3. Inside your PHP container, run "*bin/console doctrine:database:create*" (you should see a success message).
4. Run "*bin/console doctrine:migrations:migrate*" to update your database.
5. To use the auth system, run "*bin/console lexik:jwt:generate-keypair*".
6. The last thing to do is run "*bin/console app:add-user*" and follow the process to create your first user on the project.

### Manage Server

Here are the two commands to start and stop your Docker environment:

- *docker-compose up -d* -> run Docker containers
- *docker-compose down* -> stop Docker containers

You can find the API documentation at the following URL: *http://localhost/api/docs*


### Project Setup

In the terminal, at the root of your repository, run the following command to install all your dependencies:

```sh
npm install
```

### Compile and Hot-Reload for Development

In the folder my-shop-api, in myShop do this command to start the projet.

```sh
npm run dev
```

Please ensure to replace the token in the mentioned files with your actual token for the application to function correctly.

Ensure to right the same information of the admin user for the email and the password as you did during the docker installation.