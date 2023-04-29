FROM node:lts

RUN apt update && apt upgrade -y 
RUN chown node -R /home/node
USER node