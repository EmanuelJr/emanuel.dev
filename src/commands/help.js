import React from 'react';

import generateHelp from '../utils/helpList';

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

    println(
      <>
        <p>Emanuel terminal</p><br />
        <p>Command list:</p>
        {generateHelp(commands)}
        <p>You can use "command help" for help</p>
      </>
    );
  },
}

export default help;
