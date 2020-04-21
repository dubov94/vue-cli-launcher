# vue-cli-launcher

> 🚀 Vue CLI with extra options

## Installation

Requires [@vue/cli-service](https://www.npmjs.com/package/@vue/cli-service) to be installed.

```bash
npm install vue-cli-launcher --save-dev
```

## Usage

Accepts exactly the same arguments as `@vue/cli-service` plus additional [options](#options).

```bash
vue-cli-launcher serve --open --package-json-path=application/package.json
```

### Bazel

As the original motivation for creating this package was to tackle issues outlined in
[bazelbuild/rules_nodejs#1776](https://github.com/bazelbuild/rules_nodejs/issues/1776)
and [vuejs/vue-cli#3152](https://github.com/vuejs/vue-cli/issues/3152), here is an example
of a Bazel target.

```
load("@npm//vue-cli-launcher:index.bzl", "vue_cli_launcher")

vue_cli_launcher(
  name = "serve",
  arguments = [
    "serve",
    "--package-json-path=$(rootpath package.json)",
  ],
  data = [
    ...
    "package.json",
  ],
)

vue_cli_launcher(
  name = "build",
  arguments = [
    "build",
    "--dest=$(@D)",
    "--package-json-path=$(execpath package.json)",
  ],
  data = [
    ...
    "package.json",
  ],
  output_dir = True,
)
```

## Options

```
--package-json-path  Path to package.json of the project. Can be either absolute
                     or relative the current directory.
```
