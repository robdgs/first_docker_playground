FROM mhart/alpine-node:latest
RUN apk update && apk add bash

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

WORKDIR /playground

COPY ./package*.json /playground
COPY ./package-lock.json /playground

EXPOSE 80
# Run the app when the container launches
CMD ["npm", "start"]
