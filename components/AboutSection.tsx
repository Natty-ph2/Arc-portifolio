import Image from "next/image"

const AboutSection = () => {


      


    const skills = [
        { skill: "SKETCH UP"},
        { skill: "ARCHICAD"},
        { skill: "AUTOCAD"},
        { skill: "Revit"},
        { skill: "3d max"},
        { skill: "Rhinoceros"},
        { skill: "ADOBE ILLUSTRATOR"},
        { skill: "ADOBE PHOTOSHOP"},
        { skill: "TWINMOTION"},
        { skill: "LUMION"},


    ]
    return (

         
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center text-bold text-4xl">About Me
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>

                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10 ">
                    <div className="md:w-1/2">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Get to Know me</h1>
                        <p>
                            {" "}
                            Hi, my name is Ayalkbet and I am{" "}
                            <span className="font-bold">{"highly ambitious, "}</span>
                            <span className="font-bold">{"self-motivated "}</span> and
                            <span className="font-bold">{" driven"}</span> Architect and  interior designer based in AA, Ethiopia
            
                        </p>
                        <br />

                        <p>
                        I graduated from Wachemo University in 2022 with BSC in Architecture and have been working in the field ever since.
                        </p>
                        <br />

                        <p>
                        I have also have lovely hobbies like reading, playing sports and playing Guitar and listening music,
                         I am always seeking new experience and love to keep myself engaged and learning new things

                        </p>
                        <br />
                        <p>
                        Persistence in learning is indeed a key to success. It refers to the act of consistently putting effort into you learning journey 
                        despite obstacles or setbacks. When you persistent in the learning path, you are more likely to achieve your goals and make progress.
                        </p>
                        <br />
                        <p>
                            
                            I believe that you should {" "}
                            <span className="font-bold text-teal-500">
                                never stop growing
                            </span>{" "}
                         and that&#39;s what i strive to do, I have passion for technology
                         and a desire to always push the limits of what is possible. I am excited
                         to see where my career takes me and am always open to new opportunities.
                        </p>

                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            My Skills
                        </h1>
                        <div className="flex flex-wrap flex-row justify-center md:justify-start">
                            {skills.map((item, idx) => {
                                return <p key={idx} className="bg-gray-200 px-4 pt-2 pb-4 mr-2 mt-2 text-gray-500 rounded font-semibold" >{item.skill}</p>
                            })}
                        </div>
                         <Image 
                            className="hidden aspect-square rounded-full object-fill border-none md:block md:relative md:bottom-4 md:left-32  md:mt-12 md:z-0 dark:bg-gray-400"
                            src="/arc2.png" 
                            alt=""
                            width={400}
                            height={400}
                         />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;