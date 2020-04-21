const path = require('path')
const minimist = require('minimist')

const PACKAGE_JSON_PATH_NAME = 'package-json-path'

const args = minimist(process.argv.slice(2))

if (args.hasOwnProperty(PACKAGE_JSON_PATH_NAME)) {
  process.env['VUE_CLI_CONTEXT'] = path.dirname(
      path.resolve(args[PACKAGE_JSON_PATH_NAME]))
}

require('@vue/cli-service/bin/vue-cli-service.js')
