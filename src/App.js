import React, { useEffect, useState } from 'react';
import EmojiDisplay from './emojiDisplay.js';
import EmojiFilter from './emojiFilter';

export default function App() {
  const [data, setData] = useState();
  const [checkInput, setCheckInput] = useState(false);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>🔥 Search Your Favourite Emoji </h2>
      </div>
      <div>
        <EmojiFilter
          data={data}
          setData={setData}
          checkInput={checkInput}
          setCheckInput={setCheckInput}
        />
      </div>
      <div>
        <EmojiDisplay
          data={data}
          setData={setData}
          checkInput={checkInput}
          setCheckInput={setCheckInput}
        />
      </div>
    </div>
  );
}
