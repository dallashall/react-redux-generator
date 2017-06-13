#!/usr/bin/env node
const vorpal = require('vorpal')();
// const fs = require('fs');
const makeApiUtil = require('./generators/api_util');

vorpal
  .command('rrgen [file]', 'Generates a file.')
  .option('-f, --fetch', 'Use fetch instead of XMLHttpRequest')
  .option('-u, --url <baseUrl>', 'URL for API calls. Ex. "http://localhost:3000"')
  .action(function makeFile(args, callback) {
    switch (args['file']) {
      case 'apiUtil':
      makeApiUtil(args.options, (msg) => this.log(msg));
      default:
      break;
    };

    callback();
  });

vorpal
  .delimiter('test-cli$')
  .show();
