import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from "./SlideUp";




const projects = [
    {
        name: "Mixed Used Complex",
        proposal: "Office complex for centeral Ethiopia Government",
        Architects: "Architects: RISER15 Architects",
        Area: "Area:  30,000 m²",
        Year: "Year:  2023",
        Render: "Render:  Ayalkbet",
        LA: "Lead Architects:  Riser Architects",
        LD: "LandScape Designer:  Riser19 Studio",
        Owner: "Owner:  centeral Government Ethiopia", 
        image: "/mixed.jpg",
        
    },
    {
        name: "Office Complex",
        proposal: "Office complex for centeral Ethiopia Government",
        Architects: "Architects: RISER15 Architects",
        Area: "Area:  30,000 m²",
        Year: "Year:  2023",
        Render: "Render:  Ayalkbet",
        LA: "Lead Architects:  Riser Architects",
        LD: "LandScape Designer:  Riser19 Studio",
        Owner: "Owner:  centeral Government Ethiopia",
        image: "/office.jpg",
      
    },

    {
        name: "STADIUM COMPLEX",
        proposal: "STADIUM AND SPORT COPLEX for WOLKITE City",
        Architects: "Architects: RISER15 Architects",
        Area: "Area: 30,000 m²",
        Year: "Year: 2023",
        Render: "Render: Ayalkbet",
        LA: "Lead Architects: Riser Architects",
        LD: "Landscape Designer: Riser19 Studio",
        Owner: "Owner: WOLKITE City",
        image: "/stadium.jpg",
    },

    {
        name: "Abraham Mixed Used Complex",
        Architects: "Architects: RISER15 Architects",
        Area: "Area: 500 m²",
        Year: "Year: 2022",
        Render: "Render: Ayalkbet",
        LA: "Lead Architects: Riser Architects",
        LD: "Landscape Designer: Riser19 Studio",
        Owner: "Owner: Abraham kalato",
        image: "/proj/ABRHAM/abirhamrender.jpg",
      
    },

    {
        name: "G++1 Residence",
        Architects: "Architects: RISER15 Architects",
        Area: "Area: 250 m²",
        Year: "Year: 2022",
        Render: "Render: Ayalkbet",
        LA: "Lead Architects: Riser Architects",
        LD: "Landscape Designer: Riser19 Studio",
        Owner: "Owner: Husen Beshir",
        image: "/proj/G++1RESIDENCE/Image1.png",
    },

    {
        name: "G++2 Residence",
        Architects: "Architects: RISER15 Architects",
        Area: "Area: 250 m²",
        Year: "Year: 2023",
        Render: "Render: Ayalkbet",
        LA: "Lead Architects: Riser Architects",
        LD: "Landscape Designer: Riser19 Studio",
        Owner: "Owner: Tesfaye ayida",
        image: "/proj/G++2RESIDECE/TRTR.jpg",
    },

    {
        name: "G+2 Residence",
        Architects: "Architects: RISER15 Architects",
        Area: "Area: 250 m²",
        Year: "Year: 2022",
        Render: "Render: Ayalkbet",
        LA: "Lead Architects: Riser Architects",
        LD: "Landscape Designer: Riser19 Studio",
        Owner: "Owner: Tesfaye ayida",
        image: "/proj/G+2RESIDECE/Image3.png",
    },

    {
        name: "GREATE COMMISION FLOOR PLANS",
        Architects: "Architects: RISER15 Architects",
        Area: "Area: 1200 m²",
        Year: "Year: 2023",
        Render: "Render: Ayalkbet",
        LA: "Lead Architects: Riser Architects",
        LD: "Landscape Designer: Riser19 Studio",
        Owner: "Owner: GREATE COMMISION",
        image: "/proj/GREATECOMMISIONFLOORPLANS/Image5.png",
    },

    {
        name: "Mixed Use",
        Architects: "Architects: RISER15 Architects",
        Area: "Area: 1200 m²",
        Year: "Year: 2023",
        Render: "Render: Ayalkbet",
        LA: "Lead Architects: Riser Architects",
        LD: "Landscape Designer: Riser19 Studio",
        Owner: "Owner: Dagna Desalegn",
        image: "/proj/mixeduse/fgfg.jpg",
    },

    {
        name: "Residence Vila",
        Architects: "Architects: RISER15 Architects",
        Area: "Area: 250 m²",
        Year: "Year: 2023",
        Render: "Render: Ayalkbet",
        LA: "Lead Architects: Riser Architects",
        LD: "Landscape Designer: Riser19 Studio",
        Owner: "Owner: Negalign Tamiru",
        image: "/proj/residence/gf.jpg",
       
    },

    {
        name: "Wondosen Mall",
        Architects: "Architects: RISER15 Architects",
        Area: "Area: 530 m²",
        Year: "Year: 2022",
        Render: "Render: Ayalkbet",
        LA: "Lead Architects: Riser Architects",
        LD: "Landscape Designer: Riser19 Studio",
        Owner: "Owner: Wondosen",
        image: "/proj/WODOSENLAKA/tyty.jpg",
        
    },

    {
        name: "Zebra Hotel",
        Architects: "Architects: RISER15 Architects",
        Area: "Area: 550 m²",
        Year: "Year: 2023",
        Render: "Render: Ayalkbet",
        LA: "Lead Architects: Riser Architects",
        LD: "Landscape Designer: Riser19 Studio",
        image: "/proj/ZEBRAHOTEL/Image5.png",
        
        
    },

    

]
const ProjectsSection = () => {
    return <section id="projects">
       <h1 className="text-center text-bold text-4xl">Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
                <div className="flex flex-col space-y-28">
                    {projects.map((project, idx) => {
                        return (
                            <div key={idx}>
                                <SlideUp offset="-300px 0px -300px 0px">

                                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                    <div className=" mt-8 md:w-1/2">
                                        <Image 
                                           src={project.image}
                                           alt=""
                                           width={1000}
                                           height={1000}
                                           className="rounded-xl shadow-xl hover:opacity-70"
                                        />
                                    </div>
                                    <div className="mt-12 md:w-1/2">
                                        <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                                        <p className="text-xl leading-7 text-neutral-600 dark:text-neutral-400">{project.proposal}</p>
                                        <p className="text-xl leading-7 text-neutral-600 dark:text-neutral-400">{project.Architects}</p>
                                        <p className="text-xl leading-7 text-neutral-600 dark:text-neutral-400">{project.Area}</p>
                                        <p className="text-xl leading-7 text-neutral-600 dark:text-neutral-400">{project.Year}</p>
                                        <p className="text-xl leading-7 text-neutral-600 dark:text-neutral-400">{project.Render}</p>
                                        <p className="text-xl leading-7 text-neutral-600 dark:text-neutral-400">{project.LA}</p>
                                        <p className="text-xl leading-7 text-neutral-600 dark:text-neutral-400">{project.LD}</p>
                                        <p className="text-xl leading-7 text-neutral-600 dark:text-neutral-400">{project.Owner}</p>
                                       
                                        <div>
                                            {/* <Link href={project.github} target="_blank">
                                                <BsGithub
                                                size={30}
                                                className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                 />
                                            </Link> */}
                                            <p></p>
                                        </div>
                                    </div>
                                </div>

                                </SlideUp>
                            </div>
                        )
                    })}
                </div>
    </section>
}

export default ProjectsSection;