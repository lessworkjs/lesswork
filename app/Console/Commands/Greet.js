const {
  Command
} = require('lesswork-cmd');

class Greet extends Command {

  static get signature() {
    return 'greet {name: Name of the user to greet}';
  }

  static get description() {
    return 'Command description';
  }

  handle({
    name
  }) {
    console.log(`Hello ${name}`);
  }
}

module.exports = Greet;