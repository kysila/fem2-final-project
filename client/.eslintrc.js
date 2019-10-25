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
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-fragments": 0,
    "linebreak-style": "off",
    "no-unused-vars": "off",
    "react/jsx-props-no-spreading": 0,
    "no-nested-ternary": 0
  }
};