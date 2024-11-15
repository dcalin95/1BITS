import React, { useEffect } from "react";

import "./DarkMode.css";

const DarkMode = () => {
  const clickedClass = "clicked";

  const switchTheme = (e) => {
    const body = document.body;
    const Nav_1 = document.getElementById("Nav_1");
    const Footer_1 = document.getElementById("Footer_1");
    const Section_1_1 = document.getElementById("Section_1_1");
    const Section_4_1 = document.getElementById("Section_4_1");
    const Section_4_2 = document.getElementById("Section_4_2");
    const Section_4_3 = document.getElementById("Section_4_3");
    const Section_4_B = document.getElementById("Section_4_B");
    const Section_4_B_2 = document.getElementById("Section_4_B_2");
    const Section_4_B_3 = document.getElementById("Section_4_B_3");
    const Section_4_B_4 = document.getElementById("Section_4_B_4");
    const Logo_1 = document.getElementById("Logo_1");
    const Logo_2 = document.getElementById("Logo_2");
    const Logo_3 = document.getElementById("Logo_3");
    const Logo_4 = document.getElementById("Logo_4");
    const Logo_8 = document.getElementById("Logo_8");
    const Logo_10 = document.getElementById("Logo_10");



  

   // const Burger_Menu = document.getElementById("burger-menu");

   // const Burger_Menu_2 = document.getElementById("burger-menu-2");

    const Footer_2 = document.getElementById("Footer_Socials_Box_1");

    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if (localStorage) {
      theme = localStorage.getItem("theme");
    }

    if (theme === lightTheme || theme === darkTheme) {
      body?.classList.add(theme);
      Nav_1?.classList.add(theme);
      Footer_1?.classList.add(theme);
      Footer_2?.classList.add(theme);
      Section_1_1?.classList.add(theme);
      Section_4_1?.classList.add(theme);
      Section_4_2?.classList.add(theme);
      Section_4_3?.classList.add(theme);
      Section_4_B?.classList.add(theme);
      Section_4_B_2?.classList.add(theme);
      Section_4_B_3?.classList.add(theme);
      Section_4_B_4?.classList.add(theme);
      Logo_1?.classList.add(theme);
      Logo_2?.classList.add(theme);
      Logo_3?.classList.add(theme);
      Logo_4?.classList.add(theme);
      Logo_8?.classList.add(theme);
      Logo_10?.classList.add(theme);


     // Burger_Menu.classList.add(theme);
     // Burger_Menu_2.classList.add(theme);
    } else {
      body?.classList.add(lightTheme);
      Nav_1?.classList.add(lightTheme);
      Footer_1?.classList.add(lightTheme);
      Footer_2?.classList.add(lightTheme);
      Section_1_1?.classList.add(lightTheme);
      Section_4_1?.classList.add(lightTheme);
      Section_4_2?.classList.add(lightTheme);
      Section_4_3?.classList.add(lightTheme);
      Section_4_B?.classList.add(lightTheme);
      Section_4_B_2?.classList.add(lightTheme);
      Section_4_B_3?.classList.add(lightTheme);
      Section_4_B_4?.classList.add(lightTheme);
      Logo_1?.classList.add(lightTheme);
      Logo_2?.classList.add(lightTheme);
      Logo_3?.classList.add(lightTheme);
      Logo_4?.classList.add(lightTheme);
      Logo_8?.classList.add(lightTheme);
      Logo_10?.classList.add(lightTheme);

    //  Burger_Menu.classList.add(lightTheme);
     // Burger_Menu_2.classList.add(lightTheme);
    }

    if (theme === darkTheme) {
      body?.classList.replace(darkTheme, lightTheme);
      Nav_1?.classList.replace(darkTheme, lightTheme);
      Footer_1?.classList.replace(darkTheme, lightTheme);
      Footer_2?.classList.replace(darkTheme, lightTheme);
      Section_1_1?.classList.replace(darkTheme, lightTheme);
      Section_4_1?.classList.replace(darkTheme, lightTheme);
      Section_4_2?.classList.replace(darkTheme, lightTheme);
      Section_4_3?.classList.replace(darkTheme, lightTheme);
      Section_4_B?.classList.replace(darkTheme, lightTheme);
      Section_4_B_2?.classList.replace(darkTheme, lightTheme);
      Section_4_B_3?.classList.replace(darkTheme, lightTheme);
      Section_4_B_4?.classList.replace(darkTheme, lightTheme);
      Logo_1?.classList.replace(darkTheme, lightTheme);
      Logo_2?.classList.replace(darkTheme, lightTheme);
      Logo_3?.classList.replace(darkTheme, lightTheme);
      Logo_4?.classList.replace(darkTheme, lightTheme);
      Logo_8?.classList.replace(darkTheme, lightTheme);
      Logo_10?.classList.replace(darkTheme, lightTheme);

     // Burger_Menu.classList.replace(darkTheme, lightTheme);
     // Burger_Menu_2.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body?.classList.replace(lightTheme, darkTheme);
      Nav_1?.classList.replace(lightTheme, darkTheme);
      Footer_2?.classList.replace(lightTheme, darkTheme);
      Footer_1?.classList.replace(lightTheme, darkTheme);
      Section_1_1?.classList.replace(lightTheme, darkTheme);
      Section_4_1?.classList.replace(lightTheme, darkTheme);
      Section_4_2?.classList.replace(lightTheme, darkTheme);
      Section_4_3?.classList.replace(lightTheme, darkTheme);
      Section_4_B?.classList.replace(lightTheme, darkTheme);
      Section_4_B_2?.classList.replace(lightTheme, darkTheme);
      Section_4_B_3?.classList.replace(lightTheme, darkTheme);
      Section_4_B_4?.classList.replace(lightTheme, darkTheme);
      Logo_1?.classList.replace(lightTheme, darkTheme);
      Logo_2?.classList.replace(lightTheme, darkTheme);
      Logo_3?.classList.replace(lightTheme, darkTheme);
      Logo_4?.classList.replace(lightTheme, darkTheme);
      Logo_8?.classList.replace(lightTheme, darkTheme);
      Logo_10?.classList.replace(lightTheme, darkTheme);

     // Burger_Menu.classList.replace(lightTheme, darkTheme);
     // Burger_Menu_2.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  useEffect(() => {
    const button = document.getElementById("darkMode");
    button.addEventListener("click", switchTheme);

    return () => {
      button.removeEventListener("click", switchTheme);
    };
  }, []);

  
  const theme = localStorage.getItem("theme");
  return (

    <label className="toggle-switch">
       <input type="checkbox"  className={theme === "dark" ? clickedClass : ""}
      id="darkMode"/>
    <span className="slider"></span>
  </label>
  );
};

export default DarkMode;
