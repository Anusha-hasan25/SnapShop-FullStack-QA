import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext'; 
import './Footer.css';

const Footer = () => {
  const { lang, setLang } = useLanguage();

  const content = {
    en: {
      about: "About SnapShop",
      
      sizeGuide: "Size Guide",
      stores: "Flagship Stores",
      legal: "LEGAL",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
      refund: "Refund Policy",
      visit: "Visit Karachi Store"
    },
    ur: {
      about: "اسنیپ شاپ کے بارے میں",
      
      sizeGuide: "سائز گائیڈ",
      stores: "فلیگ شپ اسٹورز",
      legal: "قانونی معلومات",
      terms: "استعمال کی شرائط",
      privacy: "پرائیویسی پالیسی",
      refund: "واپسی کی پالیسی",
      visit: "کراچی اسٹور دیکھیں"
    }
  };

  return (
    <footer className="footer-wrapper" dir={lang === 'ur' ? 'rtl' : 'ltr'}>
      <div className="footer-grid">
        <div className="footer-sec">
          <h2 className="footer-logo">SNAPSHOP 💎</h2>
        </div>

        <div className="footer-sec">
          <h4 className="footer-heading">{lang === 'en' ? 'CUSTOMER CARE' : 'کسٹمر کیئر'}</h4>
          <ul className="footer-links-list">
            <li><Link to="/about">{content[lang].about}</Link></li>
            <li><Link to="/size-guide">{content[lang].sizeGuide}</Link></li>
            <li><Link to="/stores">{content[lang].stores}</Link></li>
            <li><Link to="/customize">{content[lang].customize}</Link></li>
          </ul>
        </div>

        <div className="footer-sec">
          <h4 className="footer-heading">{content[lang].legal}</h4>
          <ul className="footer-links-list">
            <li><Link to="/terms">{content[lang].terms}</Link></li>
            <li><Link to="/privacy-policy">{content[lang].privacy}</Link></li>
            <li><Link to="/refund-policy">{content[lang].refund}</Link></li>
          </ul>
        </div>

        <div className="footer-sec">
          <div className="language-selector">
            <span className={lang === 'en' ? 'lang-active' : ''} onClick={() => setLang('en')}>English</span>
            <span className={lang === 'ur' ? 'lang-active' : ''} onClick={() => setLang('ur')}>اردو</span>
          </div>
          <a href="https://maps.google.com/?q=Zamzama+Karachi" target="_blank" rel="noopener noreferrer" className="maps-link">
            {content[lang].visit}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;