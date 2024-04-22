import React, { useContext } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import { useTranslation } from 'react-i18next';
import { UserContext } from '../context/UserContext';

import RandomJokes from "../assets/RandomJokes.svg";
import AreYouBored from "../assets/AreYouBored.svg";

export default function Project() {
    const { darkMode } = useContext(UserContext);
    const { t } = useTranslation();

    const projects = [
        {
            title: "Random Jokes",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
            tags: ["react", "vercel", "axios", "router"],
            githubLink: "https://github.com/Hilal-Bilun-Kara/redux-filmler-solution",
            appLink: "https://fsweb-s10g2-redux-filmler-solution-3cag.onrender.com",
            image: RandomJokes
        },
        {
            title: "Are you bored?",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
            tags: ["react", "redux", "axios", "router", "vercel"],
            githubLink: "https://github.com/Hilal-Bilun-Kara",
            appLink: "https://github.com/Hilal-Bilun-Kara",
            image: AreYouBored
        }
    ];

    return (
        <div className={darkMode ? 'dark' : ''}>
            <section className="w-screen overflow-hidden relative flex flex-col items-center dark:bg-[#484148]">
                <h1 className='m-[50px] dark:text-[#FFFFFF]'>{t("project")}</h1>
                <div className="flex">
                    {projects.map((project, index) => (
                        <div key={index} className={`w-104 ml-6 mr-20 ${index === 0 ? "" : "project-card"}`}>
                            <Card body inverse className="text-left mt-10 bg-blue-200 border-blue-200 rounded-lg w-10/12 ml-36 mr-20">
                                <CardBody>
                                    <CardTitle className="mb-6 font-bold text-2xl text-black font-playfair-display">{project.title}</CardTitle>
                                    <CardText className='text-[#000000]'>{project.description}</CardText>
                                    <div className="card-buttons">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="mt-5 mr-2 inline-block px-8 py-1 bg-white text-black rounded-lg cursor-pointer font-playfair-display">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="mt-12">
                                        <a href={project.githubLink} className="text-black mr-36">{t("ViewonGithub")}</a>
                                        <a href={project.appLink} className="text-black">{t("goToApp")} <span className="font-bold">&rarr;</span></a>
                                    </div>
                                    <CardImg src={project.image} top className="mt-16 w-full" />
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}