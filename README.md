Playing around with generators.

Look in new-school.js to see how to use BB with generators with the help of co.

old-school.js implements the same code

benchmark.js compares the speed (old-school is 3x faster on node v0.12.5

run.js runs both with console outputs

to run a file after installing with [nvm](https://github.com/creationix/nvm)

```shell
nvm install v0.12.5
nvm use v0.12.5
node --harmony file.js
```