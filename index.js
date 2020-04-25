const dargs = require('dargs')
const minimist = require('minimist')
const path = require('path')

const ARGS_START_INDEX = 2
const PACKAGE_JSON_PATH_KEY = 'package-json-path'
const DEST_KEY = 'dest'
const RESOLVE_DEST_BY_CWD_KEY = 'resolve-dest-by-cwd'

const args = minimist(process.argv.slice(ARGS_START_INDEX))

if (args.hasOwnProperty(PACKAGE_JSON_PATH_KEY)) {
  process.env['VUE_CLI_CONTEXT'] = path.dirname(
      path.resolve(args[PACKAGE_JSON_PATH_KEY]))
  delete args[PACKAGE_JSON_PATH_KEY]
}

if (args.hasOwnProperty(DEST_KEY) &&
    args.hasOwnProperty(RESOLVE_DEST_BY_CWD_KEY)) {
  args[DEST_KEY] = path.resolve(args[DEST_KEY])
  delete args[RESOLVE_DEST_BY_CWD_KEY]
}

process.argv.splice(
    ARGS_START_INDEX,
    process.argv.length - ARGS_START_INDEX,
    ...dargs(args))

require('@vue/cli-service/bin/vue-cli-service.js')
