[![Build Status](https://travis-ci.com/nomestyle/spitfire.svg?branch=main)](https://travis-ci.com/nomestyle/spitfire)
[![Build status](https://ci.appveyor.com/api/projects/status/msu69waywte7i2uu?svg=true)](https://ci.appveyor.com/project/nomestyle/spitfire)
[![Coverage Status](https://coveralls.io/repos/github/nomestyle/spitfire/badge.svg)](https://coveralls.io/github/nomestyle/spitfire)
[![Maintainability](https://api.codeclimate.com/v1/badges/21a179a2987400f7befb/maintainability)](https://codeclimate.com/github/nomestyle/spitfire/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/21a179a2987400f7befb/test_coverage)](https://codeclimate.com/github/nomestyle/spitfire/test_coverage)
## Developer Technical Test - Spitfire API ##

The Spitfire API is composed of a postgreSQL backend and an express API.
The API lets you add, edit, delete a customer as well as managing notes for customers.

### Requirements ###
Docker
node.js

### To Run: ###
At the root of the project (where docker-compose.yml is located) open a powershell instance and type:
'docker-compose build'
'docker-compose up'

### to Run the front end separately (It still depends on the backend DB however) ###
run the docker-compose instructions above.
Stop the spitfire-api-1 container.
'docker stop container spitfire_api_1'
navigate to the api folder and type into powershell:
'npm run start'

### To Completely remove this project from docker ###
At the root of the project (where docker-compose.yml is located) open a powershell instance and type:
'docker-compose down'
then type:
'docker volume rm spitfire_datastore'

Both these methods are included in separate scripts.

### Time Spent ###
Backend (PostgreSQL DB) 2.5 hours - this is slightly longer due to the fact Windows 10 has a few issues with postgres on docker persisting:
https://dotnetninja.net/2020/02/running-postgresql-in-a-container-on-windows-10/
In production circumstances, the database would be hosted either on the cloud (Azure/aws) or onsite servers.
API (expressJS) 13 hours - This included docker setup, initial express, getting sequelize behaving properly, finally being able to create the endpoints and the tests.

### Notes about time ###
With more time I would have researched my stack choice, I normally do my APIs in PHP (symfony) which has the whole ORM entinty on point.
I didn't realize the options I had for expressJS ORM were as problematic as I found it was. ExpressJS was chosen for speed and ease to write but, honestly it's been anything but easy.
I still need to fix a docker-compose CI network issue, as it won't build on git actions.
I also still need all the propertests, right now its only to test the end points work.
Swagger is missing parameters (what I thought was correct was not).

