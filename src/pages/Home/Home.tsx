import React, { useEffect, useRef, useState } from 'react';
import AutoComplete from '../../components/AutoComplete/AutoComplete';
import SearchBar from '../../components/SearchBar/SearchBar';
import data from '../../data.json';
import styles from './Home.module.css';
import { ProductList } from '../../types/types';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestionList, setSuggestionList] = useState<ProductList[]>([]);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  const onClick = (word: string) => {
    if (searchTerm === '') {
      return alert('검색어를 입력후 클릭해주세요');
    }
    window.open('//' + 'google.com/search?q=' + word, '_blank');
  };

  const updateSuggestions = () => {
    if (searchTerm === '') {
      return;
    }
    const suggestions = data.filter((item: ProductList) => {
      if (item.name.includes(searchTerm)) {
        return item;
      }
    });
    setSuggestionList(suggestions);
  };

  useEffect(() => {
    updateSuggestions();
  }, [searchTerm]);

  return (
    <section className={styles.container}>
      <div className={styles.search__container}>
        <SearchBar searchTerm={searchTerm} onChange={(e) => onChange(e)} />
        <button
          className={styles.button}
          onClick={() => {
            onClick(searchTerm);
          }}
        >
          검색
        </button>
      </div>
      <AutoComplete
        suggestionList={suggestionList}
        searchTerm={searchTerm}
        onClick={onClick}
      />
    </section>
  );
};

export default Home;
