import React from 'react';
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
      <ul>
        {suggestionList.map((i: ProductList) => {
          return (
            <li
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
