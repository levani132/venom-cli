const minimist = require('minimist')

const args = minimist(process.argv.slice(2))
const cmd = args._[0]
if (args.version || args.v)
  cmd = 'version'
if (args.help || args.h)
  cmd = 'help'
try {
  require(`./commands/${cmd}`)(args);
} catch (e) {
  console.error(`"${cmd}" is not a valid command!`, e)
}