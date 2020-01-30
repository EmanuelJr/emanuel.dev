function processor(terminal, text) {
  const textSplited = text.split(' ');
  const commandName = textSplited[0];

  const command = terminal.commands[commandName];

  if (!command) {
    terminal.println(`command not found: ${commandName}`);
    return;
  }

  command.call(terminal, textSplited.slice(1));
}

export default processor;
