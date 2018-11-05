import React, { Component } from 'react';
import './index.css';

const TranslateInput = ({ name, translates, locale }) => {
  return (
    <div>
      <p>{name}</p>
      <textarea value={translates[locale]}></textarea>
    </div>
  )
}

export default TranslateInput;
