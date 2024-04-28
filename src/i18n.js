import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      lang:"Türkçe",
      greeting: "Hi! 👋",
      mainText: "I’m Melissa. I’m a front-end developer. I can craft solid and scalable frontend products. Let’s meet!",
      freelancingText: "Currently",
      freelancingText1:"Freelancing",
      freelancingText2:"for",
      freelancingText3:"UX, UI, & Web Design",
      freelancingText4:"Project. Invite me to join your team->",
      email:"melissayorulmazz@outlook.com",
      skills:"SKILLS",
      profile:"PROFILE",
      project:"PROJECTS",
      information:"Basic Information",
      date:"Date of birth",
      residence:"Residence",
      education:"Education",
      univercity:"Akdeniz University, Gastronomy and Culinary Arts, 2023",
      role:"Preferred Role",
      about:"About me",
      abouttext:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat tellus ut ligula scelerisque, nec faucibus eros viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      abouttext1:"Mauris vitae lacinia leo. In interdum sagittis nisl, at fermentum ante vestibulum eget. Aliquam vel nisl diam.",
      ViewonGithub:"View on Github",
      goToApp:"Go to App",
      footer:"Let’s work together on your next product."


    }
  },
  tr: {
    translation: {
      lang:"İngilizce",
      greeting: "Merhaba! 👋",
      mainText: "Ben Melissa. Front-end geliştiriciyim. Sağlam ve ölçeklenebilir ön uç ürünleri oluşturabilirim. Tanışalım!",
      freelancingText: "Şu anda",
      freelancingText1: "serbest çalışıyorum",
      freelancingText2: "",
      freelancingText3: "UX, UI ve Web Tasarımı",
      freelancingText4: "Ekibinize katılmak için davet edin ->",
      email: "melissayorulmazz@outlook.com",
      skills:"YETENEKLER",
      profile:"PROFİLİM",
      project:"PROJELERİM",
      information: "Temel Bilgiler",
date: "Doğum Tarihi",
residence: "İkamet",
education: "Eğitim",
univercity:"Akdeniz Üniversitesi, Gastronomi ve Mutfak Sanatları, 2023",
role: "Tercih Edilen Rol",
about:"Hakkımda",
abouttext:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat tellus ut ligula scelerisque, nec faucibus eros viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
abouttext1:"Mauris vitae lacinia leo. In interdum sagittis nisl, at fermentum ante vestibulum eget. Aliquam vel nisl diam.",
ViewonGithub:"Github'da Görüntüle",
goToApp:"Uygulamaya Git",
footer:"Bir sonraki ürününüz üzerinde birlikte çalışalım."

    }
  }
};

//burada başlangıç dilini seçtim
i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;

