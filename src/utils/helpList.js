import React from 'react';

const generateList = (commands) => (
  <div className="helpTable">
    {
      Object.keys(commands)
        .filter(command => !commands[command].hidden)
        .map(command => (
          <div className="helpRow" key={command}>
            <div>{command}</div>
            <div>{commands[command].description}</div>
          </div>
        ))
    }
  </div>
);

export default generateList;
