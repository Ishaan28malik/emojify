import React, { useState } from 'react';
import emojiList from './emojiList.json';
import './App.css';

const EmojiFilter = ({ data, setData, checkInput, setCheckInput }) => {
  const [filterEmoji, setFilterEmoji] = useState({
    searchText: '',
    maxResults: 20
  });

  const emojiFilterChange = (event) => {
    setCheckInput(true);
    setFilterEmoji({
      searchText: event.target.value,
      maxResults: 50
    });

    if (event.target.value === '' || null) {
      setCheckInput(false);
    }

    setData(
      emojiList
        .filter((emoji) => {
          if (
            emoji.title
              .toLowerCase()
              .includes(filterEmoji.searchText.toLowerCase())
          ) {
            return true;
          }
          if (emoji.keywords.includes(filterEmoji.searchText)) {
            return true;
          }
          return false;
        })
        .slice(0, filterEmoji.maxResults)
    );

    // return emojiList
    //   .filter((emoji) => {
    //     if (
    //       emoji.title
    //         .toLowerCase()
    //         .includes(filterEmoji.searchText.toLowerCase())
    //     ) {
    //       return true;
    //     }
    //     if (emoji.keywords.includes(filterEmoji.searchText)) {
    //       return true;
    //     }
    //     return false;
    //   })
    //   .slice(0, filterEmoji.maxResults);
  };

  return (
    <div className='searchInputContainer'>
      <input
        placeholder='Search your emoji...........'
        onChange={(event) => emojiFilterChange(event)}
        className='searchInput'
      />
    </div>
  );
};

export default EmojiFilter;
