module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["airbnb", "airbnb/hooks", "eslint:recommended"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018
  },
  "plugins": [
    "react", "jsx-a11y", "import", "material-ui"
  ],
  "rules": {
    "linebreak-style": "off",
    "no-unused-vars": "off"
  }
};