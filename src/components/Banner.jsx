import BannerFoto from "../assets/bannerfoto.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Ellipse from "../assets/Ellipse.svg";
import RectangleFoto from "../assets/Rectangle.svg";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import DarkMode from "./DarkMode";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const socialMediaLinks = [
  {
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/hilal-bilun-kara/"
  },
  {
    icon: faGithub,
    link: "https://github.com/Hilal-Bilun-Kara"
  }
];

export default function Banner() {
  const { darkMode, setDarkMode } = useContext(UserContext);
  const { t, i18n } = useTranslation();

  const clickHandle = lng => {
    if (lng === 'tr') {
      i18n.changeLanguage('tr');
    } else if (lng === 'en') {
      i18n.changeLanguage('en');
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <section className={`w-screen bg-[#F4F4F4] dark:bg-[#2A262B] h-screen overflow-hidden relative px-0`}>
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Link className="text-[#EA2678] ml-[150vh]" to={i18n.lng === '/en' ? '/tr' : '/en'} onClick={() => clickHandle(i18n.language === 'en' ? 'tr' : 'en')}>
          {i18n.language === 'en' ? 'Türkçe\'ye Geç' : 'Switch to English'}
        </Link>
        <div className="w-8/12 flex justify-between items-center mx-auto">
          <div className="flex flex-col w-[610px] mt-[125px]">
            <span className="absolute border-[55px] border-[#D9D9D9]  rounded-full left-[471px] top-[-40px]"></span>
            <img className="absolute w-[270px] bottom-[175px] left-[57rem]" src={RectangleFoto} /> 
            <img className="absolute w-[270px] top-[175px] left-[925px] z-10" src={BannerFoto}/>
            <div className="flex flex-col items-start text-start">
              <h2 className="text-[20px] text-[#000000] dark:text-[#FFFFFF]">{t('greeting')}</h2>
              <h1 className="text-[25px] text-[#0A0A14] font medium mt-3 relative z-50 dark:text-[#FFFFFF]">{t('mainText')}</h1>
              <span className="absolute rounded-md w-[108px] h-[18px] bg-[#E92577] left-[220px] top-[212px]"></span>
            </div>
            <footer className="flex flex-col items-start my-10">
              <div className="flex gap-5">
                {socialMediaLinks.map((item, index) => (
                  <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="w-[30px] h-[33px] text-black dark:text-[#FFFFFF]" icon={item.icon}/>
                  </a>
                ))}
              </div>
              <p className="text-[15px] text-start w-9/12 mt-3 my-10 dark:text-[#FFFFFF]">
                {t('freelancingText')} <span className="text-[#AF0C48]">{t('freelancingText1')}</span> {t('freelancingText2')} <span className="text-[#AF0C48]">{t('freelancingText3')} </span>{t('freelancingText4')}<a className="text-[#AF0C48]">{t('email')}</a>
              </p>
            </footer>
          </div>
          <img className="absolute border-[20px] border-[#D9D9D9] dark:border-[#525252] border-transparent rounded-full left-[1000px] top-[525px]" src={Ellipse}/>
        </div>
      </section>
    </div>
  );
}