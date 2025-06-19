# Module Federation - Host

This is an example of Module Federation host application. It will use components from another application. A live version of this application can be seen [here](https://t-latest-gustavo-pereira-module-federation-host-modul-a738af-ze.zephyrcloud.app/).

## How to run locally

1. Install [Node.js](https://nodejs.org/)

2. Clone this repository

3. Go the the folder where you cloned the repository and run `npm install`

4. Wait for the installation and then run `npm run dev`

The application will run using the components `Header` and `Button` from [this](https://t-latest-gustavo-pereira-module-federation-remote-mod-6a8fef-ze.zephyrcloud.app/) application.

## How to point to a local application

This application uses components from an already published application. To use components from a local application, follow these steps:

1. Go to [this](https://github.com/gugarosp/module-federation-remote) repository and follow the instructions there

2. Go to `vite.config.js` on this application, comment the `remoteApp` that uses the published URL and uncomment the `remoteApp` that uses 'localhost'

```
//remoteApp: 'https://t-latest-gustavo-pereira-module-federation-remote-mod-6a8fef-ze.zephyrcloud.app/assets/remoteEntry.js'`
remoteApp: 'http://localhost:4173/assets/remoteEntry.js'
```

Note: `4173` is the default port from the [remote](https://github.com/gugarosp/module-federation-remote) application. If you use another port, you need to change it in the `vite.config.js` file on this application

3. Run `npm run dev`

Now the components will come from the local application.