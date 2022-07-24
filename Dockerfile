FROM node:17

ARG VIMRC_PATH=.vimrc.example

COPY ${VIMRC_PATH} /home/node/.vimrc

RUN apt-get update && \
    apt-get install -y vim && \
    npm install -g npm

USER node

EXPOSE 3000
