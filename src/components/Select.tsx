import React from 'react';
import style from '../styles/Select.module.css';
import Paper from './Paper';
import Rock from './Rock';
import Scissors from './Scissors';

interface propI {
  selection: string;
}

const Select = ({ selection }: propI): JSX.Element => {
  const getColor = () => {
    if (selection === 'Rock') {
      return '0.9rem solid hsl(349, 71%, 52%)';
    }
    if (selection === 'Scissors') {
      return '0.9rem solid hsl(39, 89%, 49%)';
    }
    if (selection === 'Paper') {
      return '0.9rem solid hsl(230, 89%, 62%)';
    }
  };

  return (
    <div className={style.Select__body} style={{ border: getColor() }}>
      {selection === 'Paper' && <Paper />}
      {selection === 'Rock' && <Rock />}
      {selection === 'Scissors' && <Scissors />}
      <div></div>
    </div>
  );
};

export default Select;
