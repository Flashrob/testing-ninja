import React from 'react';
import './Header.css';

export default function Header({ title }) {
  return (
    <>
      <h1 className='header'>{title}</h1>
      <h3 className='header'>Stuff</h3>
      <h3 className='header' title="Header">Stuff</h3>
      <h3 className='header' data-testid="Header-4">Stuff</h3>
    </>
  );
}
