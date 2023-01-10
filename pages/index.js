import React from "react";

export default function home() {
  const projects = [
    {
      name: "Liste Cadeaux",
      description: "Application de création de liste de cadeaux ",
      link: "https://keystone-6-frontend.vercel.app/",
    },
    {
      name: "Gatsby Eat",
      description:
        "Petit projet de carte de restaurant avec Gatsby et Sanity JS",
      link: "https://github.com/thibault60000/gatsby-eat",
      blank: true,
    },
    {
      name: "LeveL Up",
      description: "Application (blog) d'actu gaming et high tech",
      link: "https://github.com/thibault60000/level-up-v2",
      blank: true,
    },
    {
      name: "Bouges toi !",
      description: "Application pour sortir en groupe et rencontrer des gens",
      link: "https://github.com/thibault60000/bouges-toi",
      blank: true,
    },
  ];

  const experiences = [
    {
      name: "Jeu 3D",
      link: "https://r3f-first-game.vercel.app/",
      description: "Jeu vidéo réalisté avec React Three Fiber",
    },
    {
      name: "Mon bureau en 3D",
      link: "https://my-desk-threejs.vercel.app/",
      description: "Mon bureau réalisé sur Blender avec ThreeJS vanilla",
    },
    {
      name: "Physics 3D",
      link: "https://r3f-physics-6e53.vercel.app/",
      description: "Gestion de la physique avec R3F et Rapier",
    },
    {
      name: "Scène portail en 3D",
      link: "https://importing-and-optimizing-the-scene.vercel.app/",
      description:
        "Scène portail réalisé avec Blender et ThreeJS vanilla en Low Poly",
    },
    {
      name: "Homepilot - Text 3D",
      link: "https://piou-3d.vercel.app/",
      description:
        "Utilisation de Drei dans R3F - Logo et Nom entreprise actuelle",
    },
    {
      name: "Raging Sea - Shader",
      link: "https://raging-sea-two.vercel.app/",
      description: "Shader vanilla GSLS - Vagues ",
    },
    {
      name: "LandingPage ThreeJS",
      link: "https://three-js-journey-inky.vercel.app/",
      description: "LandingPage réalisé avec ThreeJS vanilla",
    },
  ];

  const enterprises = [
    {
      name: "Homepilot",
      color: "blue",
      period: "2020 - actuel",
      link: "https://homepilot.fr",
    },
    {
      name: "CGI",
      color: "red",
      period: "2018 - 2022",
      link: "https://www.cgi.com/france/fr-fr",
    },
    {
      name: "Atos Worldline",
      color: "Cyan",
      period: "2016 - 2017",
      link: "https://fr.worldline.com/fr/home.html",
    },
  ];
  return (
    <>
      <div className='w-full h-full p-8 flex flex-col gap-4 pr-20'>
        <h1 className='text-5xl text-sky-600 font-semibold'> Portfolio </h1>

        <h2 className='text-3xl text-sky-600 font-semibold'> Mes projets </h2>

        <ul>
          {experiences.map((experience, index) => (
            <li key={index}>
              <a href={experience.link} aria-label={experience.description}>
                {experience.name}
              </a>
            </li>
          ))}
        </ul>

        <h2 className='text-3xl text-sky-600 font-semibold'> Mes projets </h2>
        <div className='w-full flex flex-col gap-2'>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <a
                  target={project.blank ? "_blank" : "_self"}
                  href={project.link}
                  aria-label={project.description}
                >
                  {project.name}
                </a>
              </li>
            ))}
          </ul>

          <h2 className='text-2xl text-sky-600 font-semibold'>
            Mes entreprises{" "}
          </h2>
          <ul>
            {enterprises.map((enterprise, index) => (
              <li key={index}>
                <a
                  target='_blank'
                  href={enterprise.link}
                  aria-label={enterprise.description}
                >
                  {enterprise.name} ({enterprise.period})
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
