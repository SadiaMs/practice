import React from 'react'
import Heading from  "./Heading";
import Card from "./Card";
const data= [
    {
        id:0,
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ipsum non dui tincidunt ultricies.',
        img: '/project1.jpg',

        tags: ["React", "Node", "Typescript","Html","Css"],

    },
  
  {
    id:1,
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ipsum non dui tincidunt ultricies.',
    img: '/project2.jpg',
   
    tags: ["React", "Node", "Typescript","Html","Css"],
  },
  {
    id:2,
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ipsum non dui tincidunt ultricies.',
    img: '/project3.jpg',

    tags: ["React", "Node", "Typescript","Html","Css"],

  },
  {
    id:3,
    title: 'Project 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ipsum non dui tincidunt ultricies.',
    img: '/project4.jpg',
  
    tags: ["React", "Node", "Typescript","Html","Css"],
  },
  {
    id:4,
    title: 'Project 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ipsum non dui tincidunt ultricies.',
    img: '/project5.jpg',

    tags: ["React", "Node", "Typescript","Html","Css"],
  },
  {
    id:5,
    title: 'Project 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ipsum non dui tincidunt ultricies.',
    img: '/project6.jpg',
  
    tags: ["React", "Node", "Typescript","Html","Css"],
  },
];
const Projects = () => {
  return (
    <div id="projects" className='container pt-32'>
      <Heading  title="My Works"/> 
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 palce-items-center">
        {data.map((el)=> (<Card  
        key={el.id}
        title={el.title}
        description={el.description}
        img={el.img}
      
        tags={el.tags}
        
        />))}</div> </div>
 
  )
}

export default Projects
