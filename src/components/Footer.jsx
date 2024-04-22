import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../context/UserContext";

export default function Footer() {
    const { darkMode} = useContext(UserContext);

    const { t } = useTranslation();

    return (
        <div className={darkMode ? "dark" : ""}>

            <div className="flex justify-center dark:bg-[#484148]">
                <div>
                <p className="p-20 text-4xl w-[36rem] text-right dark:text-white">{t("footer")}</p>
                </div>

                <section className="p-4">
                    <a href={`https://github.com/Hilal-Bilun-Kara`} className="text-blue-500 text-xl block mb-4">Github</a>
                    <a className="text-black text-xl block mb-4">Personal Blog</a>
                    <a href={`https://linkedin.com/in/hilal-bilun-kara`} className="text-blue-500 text-xl block mb-4">Linkedin</a>
                    <a href={`mailto:hilalbilunkara@gmail.com`} className="text-red-600 text-xl block mb-4">Email</a>
                </section>
            </div>
        </div>
    );

}