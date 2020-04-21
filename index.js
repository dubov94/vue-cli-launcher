const path = require('path')

const maybePopKwOption = (argv, optionName) => {
  const optionPrefix = `--${optionName}=`
  for (let index = 2; index < argv.length; ++index) {
    const argument = argv[index]
    if (argument.startsWith(optionPrefix)) {
      argv.splice(index, 1)
      return argument.slice(optionPrefix.length)
    }
  }
  return null
}

const main = (argv, env) => {
  let maybePackageJsonPath = maybePopKwOption(
      argv, 'package-json-path')
  if (maybePackageJsonPath !== null) {
    env['VUE_CLI_CONTEXT'] = path.dirname(
        path.resolve(maybePackageJsonPath))
  }
}

main(process.argv, process.env)

require('@vue/cli-service/bin/vue-cli-service.js')
