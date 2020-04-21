import path from 'path'

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

const main = () => {
  let maybePackageJsonPath = maybePopKwOption(
      process.argv, 'package-json-path')
  if (maybePackageJsonPath !== null) {
    process.env['VUE_CLI_CONTEXT'] = path.resolve(
        maybePackageJsonPath)
  }
}

main()

import '@vue/cli-service/bin/vue-cli-service.js'
