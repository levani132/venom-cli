const fs = require('fs');
const path = require('path');
const ncp = require('ncp').ncp;
const ora = require('ora');
const exec = require('child_process').exec;
const npm = require('npm')

module.exports = args => {
  const spinner = ora('Initializing...').start();
  let root = '.';
  if (args._.length >= 2) {
    root += `/${args._[1]}`;
    fs.mkdir(args._[1], e => {
      if (e && e.code !== 'EEXIST') {
        spinner.stop();
        console.error(e);
        process.exit(0);
      }
    });
  }
  ncp(path.resolve(__dirname, '../template'), root, err => {
    process.chdir(root);
    spinner.stop();
    if (err) {
      return console.error(err);
    }
    const projectName = process.cwd().substr(process.cwd().lastIndexOf('/') + 1);
    console.log(`Project ${projectName} files successfully initialized!`);
    npm.load({
      loaded: false
    }, (err, resultNpm) => {
      if (err) {
        return console.error(err);
      }
      fs.readFile("./package.json", (err, data) => {
        if (err) {
          return console.error(err);
        }
        data = JSON.parse(data);
        data.name = projectName;
        fs.writeFile("./package.json", JSON.stringify(data, null, 2), err => {
          if (err) {
            return console.error(err);
          }
          resultNpm.commands.install([], er => {
            if (er) {
              return console.error(er);
            }
          });
          resultNpm.on("log", message => message && console.log(message));
        });
      })
    });
  });
}