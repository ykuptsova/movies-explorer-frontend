import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
  const className = ["filter-checkbox", props.className].filter(c => Boolean).join(' ')
  return (
    <label className={ className }>
      <input
        className={ "filter-checkbox__input" }
        type="checkbox"
        onClick={ e => props.setShortFilms(!props.shortFilms) }
      />
      <span className="filter-checkbox__tumbler"/>
      <span className="filter-checkbox__text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox



