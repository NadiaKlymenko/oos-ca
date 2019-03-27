FROM cypress/base:10

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn --pure-lockfile
COPY ./fixtures ./fixtures
COPY ./integration ./integration
COPY ./support ./support
COPY cypress.json selectors.js ./

ENTRYPOINT ["yarn", "e2e:run"]
