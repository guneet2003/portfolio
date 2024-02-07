import "./Projects.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import { useRef } from "react";


const items=[
    {
    id:1,
    title:"Mindspace",
    img:"./mindspace.jpg",
    desc:"	An app that provides spiritual solutions to mentally ill people to cure their mental illness.It takes a survey to predict what are you suffering from and provides you necessary resources. Also contains a chat bot and a chat space to talk to spiritual GURU’s.Database for a personalised view",
    } ,
    {
    id:2,
    link:"https://coderspoint.in/",
    title:"Coders Point",
    img:"./coderspoint.jpg",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, esse perferendis, saepe voluptate voluptatem eaque nulla illo tempore similique, aut quas odit fugiat! Id dolor, eos maxime labore odit similique.",
    },
    {
    id:3,
    title:"mindspace",
    img:"./logo.png",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, esse perferendis, saepe voluptate voluptatem eaque nulla illo tempore similique, aut quas odit fugiat! Id dolor, eos maxime labore odit similique.",
    },
    {
    id:4,
    title:"mindspace",
    img:"./logo.png",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, esse perferendis, saepe voluptate voluptatem eaque nulla illo tempore similique, aut quas odit fugiat! Id dolor, eos maxime labore odit similique.",
    },
    ];

const Single =({items}) =>{

const ref = useRef()

const {scrollYProgress} = useScroll({target:ref,
// offset:["start start","end end"]
});

const y= useTransform(scrollYProgress, [0,1],[-400,400])
    return(
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                    <img src={items.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{items.title}</h2>
                        <p>{items.desc}</p>
                       <a href={items.link} target="blank"> <button>See Demo</button></a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


export const Projects = () => {

const ref= useRef()

const {scrollYProgress} = useScroll({target:ref, offset:["end end",  "start start"]});

const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
})

  return (
    <div className="projects" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style ={{scaleX}}className="progressBar"></motion.div>
        </div>

        {items.map(items =>
            <Single items={items} key={items.id}/>    
        )}
    </div>
  )
}
