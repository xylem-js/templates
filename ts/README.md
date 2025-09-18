## Usage

### Development

To run the application in development mode:

```
npm run dev
```

This starts a server at https://localhost:5173 .

Any changes in code is reflected in the browser after saving the file.

### Production

To build the application to be used in production:

```
npm run build
```

This generates files inside `dist` folder.

You can deploy the `dist` folder to host provider.

To preview the production build of application:

```
npm run preview
```

This starts a server at https://localhost:4173 .

## Notice

You may see warning in browser saying "invalid certifcate".
Since self-signed certificate is used to enable HTTPS, it is normal for browser to show such warning.
You can safely continue by clicking "Accept the Risk and Continue" button.
