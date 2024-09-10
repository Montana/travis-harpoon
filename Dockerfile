FROM node:16 # Any reason we can't update this?
WORKDIR ./
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
