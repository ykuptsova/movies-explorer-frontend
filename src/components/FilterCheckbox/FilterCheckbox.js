import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
  const className = ["filter-checkbox", props.className].filter(c => Boolean).join(' ')

  const handleChange = (e) => {
    props.setShortFilms(e.target.checked)
  }

  return (
    <label className={ className }>
      <input
        className={ "filter-checkbox__input" }
        type="checkbox"
        checked={ props.shortFilms }
        onChange={ handleChange }
      />
      <span className="filter-checkbox__tumbler"/>
      <span className="filter-checkbox__text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox



