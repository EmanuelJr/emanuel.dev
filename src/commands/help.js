import React from 'react';

import HelpList from '../components/HelpList';

const help = {
  description: 'Show command list with description',
  hidden: false,
  call: (terminal, args) => {
    const {
      commands,
      println,
    } = terminal;

    if (args[0] === 'help') {
      println(<p>Do you really need help with 'help'?</p>);
      return;
    }

    const list = Object.keys(commands)
      .filter(name => !commands[name].hidden)
      .map(name => ({
        name: name,
        description: commands[name].description,
       }));

    println(
      <>
        <p>Emanuel terminal</p><br />
        <p>Command list:</p>
        <HelpList list={list} />
        <p>You can use "command help" for help</p>
      </>
    );
  },
}

export default help;
