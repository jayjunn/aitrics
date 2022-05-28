import React from 'react';
import styles from './AutoComplete.module.css';
import { ProductList } from '../../types/types';

interface IProps {
  suggestionList: ProductList[];
  searchTerm: string;
  onClick: (word: string) => void;
}
const AutoComplete = (props: IProps) => {
  const { suggestionList, onClick } = props;
  return (
    <>
      <ul className={styles.suggestion__container}>
        {suggestionList.map((i: ProductList) => {
          return (
            <li
              className={styles.suggestion}
              onClick={() => {
                onClick(i.name);
              }}
              key={i.id}
            >
              {i.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AutoComplete;
