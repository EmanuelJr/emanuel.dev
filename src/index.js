import React from 'react';
import ReactDOM from 'react-dom';

import Terminal from './components/Terminal';
import * as commands from './commands';
import './index.css';

const header = `                                           .__           .___
  ____   _____ _____    ____  __ __   ____ |  |        __| _/_______  __
_/ __ \\ /      \\__  \\  /    \\|  |  \\_/ __ \\|  |       / __ |/ __ \\  \\/ /
\\  ___/|  Y Y  \\/ __ \\|   |  \\  |  /\\  ___/|  |__    / /_/ \\  ___/\\   /
 \\___  >__|_|  (____  /___|  /____/  \\___  >____/ /\\ \\____ |\\___  >\\_/
     \\/      \\/     \\/     \\/            \\/       \\/      \\/    \\/

Type 'help' to get help`;

ReactDOM.render(<Terminal messages={header.split('\n')} commands={commands} />, document.getElementById('root'));
