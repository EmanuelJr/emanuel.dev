import React from 'react';
import ReactDOM from 'react-dom';

import Terminal from './components/Terminal';
import './index.css';

const header = `                                           .__           .___
  ____   _____ _____    ____  __ __   ____ |  |        __| _/_______  __
_/ __ \\ /      \\__  \\  /    \\|  |  \\_/ __ \\|  |       / __ |/ __ \\  \\/ /
\\  ___/|  Y Y  \\/ __ \\|   |  \\  |  /\\  ___/|  |__    / /_/ \\  ___/\\   /
 \\___  >__|_|  (____  /___|  /____/  \\___  >____/ /\\ \\____ |\\___  >\\_/
     \\/      \\/     \\/     \\/            \\/       \\/      \\/    \\/

Type 'help' to get help`;

const commands = {
  help: {
    description: 'Show command list with description',
    call: (terminal) => {
      const {
        commands,
        println,
      } = terminal;

      println(
        <>
          <p>Emanuel terminal</p><br />
          <p>Command list:</p>
          <div className="helpTable">
            {
              Object.keys(commands).map(command => (
                <React.Fragment key={command}>
                  <div>{command}</div>
                  <div>{commands[command].description}</div>
                </React.Fragment>
              ))
            }
          </div>
        </>
      );
    },
  },
};

ReactDOM.render(<Terminal messages={header.split('\n')} commands={commands} />, document.getElementById('root'));
