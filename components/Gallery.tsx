import Image from "next/image";


const stadGallery = [
    {
        
        image: "/gallery/stad1.jpeg"
        
    },
    {
        
        image: "/gallery/stad2.jpeg"
        
    },
    {
        
        image: "/gallery/stad3.jpeg"
        
    },
    {
        
        image: "/gallery/stad4.jpeg"
        
    },
    {
        
        image: "/gallery/stad5.jpeg"
        
    },
    {
        
        image: "/gallery/stad6.jpeg"
        
    },
    {
        
        image: "/gallery/stad7.jpeg"
        
    },
    {
        
        image: "/gallery/stad8.jpeg"
        
    },
    {
        
        image: "/gallery/stad9.jpeg"
        
    },
    {
        
        image: "/gallery/stad10.jpeg"
        
    },
    
   

];

const officeGallery = [
    {
        
        image: "/gallery/office1.jpeg",
      
    },
    {
        
        image: "/gallery/office2.jpeg",
      
    },
    {
        
        image: "/gallery/office3.jpeg",
      
    },
    {
        
        image: "/gallery/office4.jpeg",
      
    },
    {
        
        image: "/gallery/office5.jpeg",
      
    },
    {
        
        image: "/gallery/office6.jpeg",
      
    },

];

const interiorDesign = [
    {
        
        image: "/interiorDesign/1.jpg",
      
    },
    {
        
        image: "/interiorDesign/2.jpg",
      
    },
    {
        
        image: "/interiorDesign/3.jpg",
      
    },
    {
        
        image: "/interiorDesign/5.jpg",
      
    },
    {
        
        image: "/interiorDesign/6.jpg",
      
    },
    {
        
        image: "/interiorDesign/7.jpg",
      
    },
    {
        
        image: "/interiorDesign/8.jpg",
      
    },

    {
        
        image: "/interiorDesign/9.jpg",
      
    },

];

const mixGallery = [
    {
        
        image: "/gallery/mix1.jpeg",
      
    },
    {
        
        image: "/gallery/mix2.jpeg",
      
    },
    {
        
        image: "/gallery/mix3.jpeg",
      
    },
    {
        
        image: "/gallery/mix4.jpeg",
      
    },
    {
        
        image: "/gallery/mix5.jpeg",
      
    },
    {
        
        image: "/gallery/mix6.jpeg",
      
    },
    {
        
        image: "/gallery/mix7.jpeg",
      
    },

];


const CoffeHouseDesign = [
    {
        
        image: "/COFFE/1.jpg",
      
    },
    {
        
        image: "/COFFE/2.jpg",
      
    },
    {
        
        image: "/COFFE/3.jpg",
      
    },
    {
        
        image: "/COFFE/5.jpg",
      
    },
    {
        
        image: "/COFFE/5.jpg",
      
    },
    {
        
        image: "/COFFE/6.jpg",
      
    },
    {
        
        image: "/COFFE/7.jpg",
      
    },
    {
        
        image: "/COFFE/8.jpg",
      
    },

    {
        
        image: "/COFFE/9.jpg",
      
    },
    {
        
        image: "/COFFE/10.jpg",
      
    },

];





const Gallery = () => {

    return(
        <section id="my-gallery">

        
        <div className="mt-28 pt-6">
             <h1 className="text-center text-bold text-4xl mt-4 py-6">My Gallery
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
        
            <div className='container mx-auto lg:px-0'>
                {/* <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none'>
                    {officeGallery.map((officegallery) => {
            
                       return <Image src={officegallery.image} alt=""
                          width={400}
                          height={400}
                              />
                        })}
               </div> */}

                    
               <h1 className="text-center text-bold text-2xl mt-4 py-6">Stadium Gallery
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
               <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none'>
                    {stadGallery.map((stadgallery) => {
            
                       return <Image src={stadgallery.image} alt=""
                          width={400}
                          height={400}
                              />
                        })}
               </div>


               <h1 className="text-center text-bold text-2xl mt-4 py-6">office Gallery
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
               <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none'>
                    {officeGallery.map((officegallery) => {
            
                       return <Image src={officegallery.image} alt=""
                          width={400}
                          height={400}
                              />
                        })}
               </div>


               <h1 className="text-center text-bold text-2xl mt-4 py-6">Mix complex Gallery
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
               <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none'>
                    {mixGallery.map((mixgallery) => {
            
                       return <Image src={mixgallery.image} alt=""
                          width={400}
                          height={400}
                              />
                        })}
               </div>

               <h1 className="text-center text-bold text-2xl mt-4 py-6">Coffee House Design
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
               <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none'>
                    {CoffeHouseDesign.map((coffeeH) => {
            
                       return <Image src={coffeeH.image} alt=""
                          width={400}
                          height={400}
                              />
                        })}
               </div>

               <h1 className="text-center text-bold text-2xl mt-4 py-6">Some Interior Designs
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
               <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none'>
                    {interiorDesign.map((design) => {
            
                       return <Image src={design.image} alt=""
                          width={400}
                          height={400}
                              />
                        })}
               </div>

             </div>

         </div>
        
     </section>
        
    )
}

export default Gallery;