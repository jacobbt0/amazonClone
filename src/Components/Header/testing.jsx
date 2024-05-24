import React, { useState } from 'react';
import './testing.css'; // Import CSS file for styling

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // Default language

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // You can add additional logic here to handle language change
  };

  return (
    <div className="language-dropdown">
      <button className="dropdown-toggle" onClick={toggleMenu}>
        {selectedLanguage}
        <i className={`arrow-icon ${isOpen ? 'open' : ''}`} />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => handleLanguageSelect('English')}>English</li>
          <li onClick={() => handleLanguageSelect('Hindi')}>Hindi</li>
          {/* Add more languages as needed */}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
