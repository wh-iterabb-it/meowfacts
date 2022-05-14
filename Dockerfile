FROM node:16.15.0-buster-slim

# copy files to working directory
COPY . /usr/src/app/

# change working directory
WORKDIR /usr/src/app

# install node dependencies
RUN npm install

# expose server port
EXPOSE 3000-5001

# launch application
CMD ["npm","start"]
