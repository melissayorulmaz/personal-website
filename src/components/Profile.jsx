import { useTranslation } from "react-i18next";
import Ellipse2 from "../assets/Ellipse2.svg";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Profile() {
  const { darkMode } = useContext(UserContext);
  const { t } = useTranslation();
  const informationData = [
    { title: "date", content: "24.03.1996" },
    { title: "residence", content: "Ankara" },
    { title: "education", content: t("univercity") },
    { title: "role", content: "Frontend, UI" }
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <section className="w-screen h-[100vh] bg-[#F4F4F4] dark:bg-[#2A262B] overflow-hidden relative ">
        <h1 className='m-[50px] dark:text-[#FFFFFF]'>{t("profile")}</h1>
        <div className="flex justify-between items-center h-[40vh] w-[190vh] mx-28 my-36">
          <div className="w-full h-96 py-18 mx-36 my-36 rounded-lg bg-white shadow-md dark:bg-[#525252]">
            <p className="text-pink-500 px-12 py-1 text-2xl text-left mt-6 text-playfair-display">{t("information")}</p>
            {informationData.map((item, index) => (
              <div key={index} className="p-4 flex px-14 pr-4">
                <h2 className="text-xl font-semibold text-gray-800 mr-4 right-6 dark:text-[#FFFFFF]">{t(item.title)}</h2>
                <p className="mt-1 text-gray-600 dark:text-[#FFFFFF]">{item.content}</p>
              </div>
            ))}
          </div>
          <div className="text-left right-4">
            <p className="text-xl font-semibold text-gray-800 mb-10 text-playfair-display dark:text-[#FFFFFF]">{t("about")}</p>
            <p className="text-gray-600 mb-5 dark:text-[#FFFFFF]">{t("abouttext")}</p>
            <p className="text-gray-600 dark:text-[#FFFFFF]">{t("abouttext1")}</p>
          </div>
        </div>
        <img className="absolute border-[100px] border-[#EA2678] border-transparent left-[200vh] top-[10px]" src={Ellipse2}/>
      </section>
    </div>
  );
}