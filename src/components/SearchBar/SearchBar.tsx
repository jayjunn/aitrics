import React from 'react';
import styles from './SearchBar.module.css';
import { ProductList } from '../../types/types';

interface IProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  productList: ProductList[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar(props: IProps) {
  const { onChange, searchTerm } = props;

  return (
    <div>
      <input
        className="search__input"
        type="text"
        name="search"
        placeholder="검색어를 입력해주세요"
        onChange={onChange}
        value={searchTerm}
      />
    </div>
  );
}

export default SearchBar;
