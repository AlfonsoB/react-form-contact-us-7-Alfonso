import * as React from 'react';
import './homePage.scss';
import Contact from './contactPage';

export default function HomePage() {
  return (
    <div className="contact-page">
      <div className="card">
        <Contact />
      </div>
    </div>
  );
}
