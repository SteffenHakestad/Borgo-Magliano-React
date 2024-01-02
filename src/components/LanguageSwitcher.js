import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='language-switch-container'>
      <button onClick={() => changeLanguage('eng')} className='language-button eng'>English</button>
      <button onClick={() => changeLanguage('nor')} className='language-button nor'>Norwegian</button>
      <button onClick={() => changeLanguage('ita')} className='language-button ita'>Italian</button>
    </div>
  );
}

export default LanguageSwitcher;

