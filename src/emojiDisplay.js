import React, { useEffect, useState } from 'react';
import emojiList from './emojiList.json';
import './App.css';
import Clipboard from 'clipboard';

const EmojiDisplay = ({ data, setData, checkInput, setCheckInput }) => {
  var clipboard = new Clipboard('.copy-to-clipboard');
  clipboard.on('success', function (e) {
    console.log(e);
  });
  clipboard.on('error', function (e) {
    console.log(e);
  });

  const List1 = () => {
    return emojiList.slice(0, 100).map((val) => (
      <div key={val.title}>
        <div
          className='component-emoji-result-row copy-to-clipboard'
          data-clipboard-text={val.symbol}
          // data-clipboard-action='copy'
          // data-clipboard-target={val.symbol}
        >
          <img
            src={`//cdn.jsdelivr.net/emojione/assets/png/${val.symbol
              ?.codePointAt(0)
              .toString(16)}.png`}
          />
          <span className='title'>{val.title}</span>
          <span className='info'>Click to copy emoji</span>
        </div>
      </div>
    ));
  };

  const List2 = () => {
    return data?.slice(0, 40).map((val) => (
      <div key={val.title}>
        <div
          className='component-emoji-result-row copy-to-clipboard'
          data-clipboard-text={val.symbol}
          // data-clipboard-action='copy'
          // data-clipboard-target={val.symbol}
        >
          <img
            src={`//cdn.jsdelivr.net/emojione/assets/png/${val.symbol
              ?.codePointAt(0)
              .toString(16)}.png`}
          />
          <span className='title'>{val.title}</span>
          <span className='info'>Click to copy emoji</span>
        </div>
      </div>
    ));
  };
  return checkInput ? <List2 /> : <List1 />;
};

export default EmojiDisplay;
