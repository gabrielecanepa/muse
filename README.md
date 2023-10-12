## Usage

Clone the repository on your computer. You must have [Node.js](https://nodejs.org) (> v4) and [Yarn](https://yarnpkg.com/lang/en/docs/install) installed:

```bash
git clone git@github.com:gabrielecanepa/muse.git
cd muse
rm -rf .git
yarn # or npm install
```

Make sure to have `./node_modules/.bin` in your `$PATH`. This way you can run your server with:

```bash
webpack-dev-server
```

### Scripts

Some scripts are provided in `package.json`.

To start a local server on port `8080`:

```bash
yarn start
```

To lint all JavaScript, CSS and SCSS files:

```bash
yarn lint
```

To build the static files:

```bash
yarn build
```

To push the built files to the `gh-pages` branch and deploy to [GitHub Pages](https://pages.github.com):

```bash
yarn deploy
```
