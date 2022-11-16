module.exports = {
  'env': {
    'browser': false,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'max-len': ['error', {
      'code': 120,
    }],
    'id-length': ['error', {
      'min': 3,
    }],
  },
};
