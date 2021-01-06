# Contributing

We are open to, and grateful for, any contributions made by the community. By contributing to axios, you agree to abide by the [code of conduct](https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md).

## Code Style

Please follow the [Airbnb Style Guide](https://github.com/airbnb/javascript).

## Commit Messages

Commit messages should be verb based, using the following pattern:

- `FIX: ...`
- `ADD: ...`
- `UPDATE: ...`
- `REMOVE: ...`

## Testing

Please update the tests to reflect your code changes. Pull requests will not be accepted if they are failing on [Travis CI](https://travis-ci.org/luxcium/questrade-ts).

## Documentation

Please update the [docs](README.md) accordingly so that there are no discrepancies between the API and the documentation.

## Developing

- `yarn run test` run the jest tests
- `yarn run  build` run tests and compile/transpile the source to JavaScript into `./build`

Please don't include changes to `dist/` in your pull request. This should only be updated when releasing a new version.

## Releasing

For now the releasing is made manually, you can should update [CHANGELOG](https://github.com/Luxcium/questrade-ts/blob/master/CHANGELOG.md) as it requires being updated manually. Once this has been done run the build command to build and test locally on your machine. Versions should follow [semantic versioning](http://semver.org/) you can update manualy the version into package.json the changes will be reviewed before we post the rlease.
