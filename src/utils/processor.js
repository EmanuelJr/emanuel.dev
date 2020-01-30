const parseArgs = /('.*?')|"(.*?)"|(\S+)/g;

const getArgs = (text) => {
  const values = [];

  let match = parseArgs.exec(text);
  while (match !== null) {
    const find = match.reverse().find(v => !!v);
    values.push(find);
    match = parseArgs.exec(text);
  }
  parseArgs.lastIndex = 0;

  return values;
};

const processor = (terminal, text) => {
  const args = getArgs(text);
  const commandName = args.shift();

  const command = terminal.commands[commandName];

  if (!command) {
    terminal.println(`command not found: ${commandName}`);
    return null;
  }

  return command.call(terminal, args);
};

export default processor;
