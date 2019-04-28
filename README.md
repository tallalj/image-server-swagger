# image-server-swagger

This is a image file server written in nodejs using swagger and expressjs.

# Requirements
- install Nodejs 10.15.3 LTS
- You can install using [nvm](https://github.com/nvm-sh/nvm). Command for installing the latest lts using nvm is: ```nvm install --lts```
- Go to the directory and install  all dependencies using ```npm install```
- Open port 10010

# Running
- The server uses port 10010 so make sure the port is open
- Run the script using ``` npm start ```
- Ensure the server is running by going to the servers url 'http://url:port/hellow?IBTIDAH'

The server supports running via npm forever module. So you can install forever using 'npm install forever' and then run the 'npm start' script using ```forever start -c "npm start"``` in the proejct directory


# Running as a service
We will be following [this guide](http://pm2.keymetrics.io/docs/usage/startup/) for creating a startup service for our server
- We can run the server as a service using [pm2](http://pm2.keymetrics.io/docs/usage/quick-start/)
- Install pm2 using ```npm install -g pm2```
- Go into the directory of image server and perform ```pm2 startup```
- Copy the console output and execute the command
- Run ```pm2 start app.js```
- On successfull start of the image server, run the command ```pm2 save```
- Now you have successfully setup pm2 to start the image-server on every restart of the server
