<img src="https://blockfrost.io/images/logo.svg" width="500">



## Blockfrost demo asset explorer - https://cardano-tokens.com

Make sure you have downloaded and installed [Node.js LTS](https://nodejs.org/en/download/), [Yarn](https://yarnpkg.com/lang/en/docs/install/) and git.



###### BEFORE YOU START

Login to the https://blockfrost.io. Create a project and get your api key.

<img src="https://github.com/blockfrost/blockfrost-js/raw/master/public/screen.png">
<br/>
<br/>

###### RUN LOCALLY

Rename `.env.example` → `.env` and insert your API key.

```bash
$ yarn
$ yarn dev
```

Go to http://localhost:3000/.


###### RUN INSIDE DOCKER

Rename `.env.example` → `.env` and insert your API key.


Build the docker image.

```bash
$ docker build -t blockfrost-demo-asset-explorer .
```

Run the application container.

```bash
$ docker run -dp 3000:3000 blockfrost-demo-asset-explorer:latest
```

Go to http://localhost:3000/.
