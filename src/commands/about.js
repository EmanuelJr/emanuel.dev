import React from 'react';

const about = {
  description: 'All about me',
  hidden: false,
  call: (terminal, args) => {
    const { println } = terminal;

    switch (args[0]) {
      default:
        println(<p>Invalid parameter</p>)
    }
  },
};

export default about;
