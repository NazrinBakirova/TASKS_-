import React, { useState } from 'react';
import QuizLoader from './QuizLoader';
import './styles/MainPage.css'
const categories = [
  { label: 'HTML',          value: 'html' },
  { label: 'CSS',           value: 'css' },
  { label: 'JavaScript',    value: 'javascript' },
  { label: 'Accessibility', value: 'accessibility' },
];



export default function MainPage() {
  const [selected, setSelected] = useState<string | null>(null);

  if (!selected) {
    return (
      <div className='main_page'>
        <div className='main_page_titles'>
        <p className='first_line'>Welcome to the</p>
        <h1>Frontend Quiz!</h1>

        <p className='last_line'>Pick a subject to get started.</p>
        </div>
        <div className='categories'>
        {categories.map(c => (
          <button className='categories_category' key={c.value} onClick={() => setSelected(c.value)}>
            {c.label}
          </button>
        ))}
        </div>
      </div>
    );
  }

  return <QuizLoader category={selected} />;
}
