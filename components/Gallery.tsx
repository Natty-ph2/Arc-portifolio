import Image from "next/image";


const stadGallery = [
    {
        id: 1,
        image: "/gallery/stad1.jpeg"
        
    },
    {
        id: 2,
        image: "/gallery/stad2.jpeg"
        
    },
    {
        id: 3,
        image: "/gallery/stad3.jpeg"
        
    },
    {
        id: 4,
        image: "/gallery/stad4.jpeg"
        
    },
    {
        id: 5,
        image: "/gallery/stad5.jpeg"
        
    },
    {
        id: 6,
        image: "/gallery/stad6.jpeg"
        
    },
    {
        id: 7,
        image: "/gallery/stad7.jpeg"
        
    },
    {
        id: 8,
        image: "/gallery/stad8.jpeg"
        
    },
    {
        id: 9,
        image: "/gallery/stad9.jpeg"
        
    },
    {
        id: 10,
        image: "/gallery/stad10.jpeg"
        
    },
    
   

];

const officeGallery = [
    {
        id: 1,
        image: "/gallery/office1.jpeg",
      
    },
    {
        id: 2,
        image: "/gallery/office2.jpeg",
      
    },
    {
        id: 3,
        image: "/gallery/office3.jpeg",
      
    },
    {
        id: 4,
        image: "/gallery/office4.jpeg",
      
    },
    {
        id: 5,
        image: "/gallery/office5.jpeg",
      
    },
    {
        id: 6,
        image: "/gallery/office6.jpeg",
      
    },

];

const interiorDesign = [
    {
        id: 1,
        image: "/interiorDesign/1.jpg",
      
    },
    {
        id: 2,
        image: "/interiorDesign/2.jpg",
      
    },
    {
        id: 3,
        image: "/interiorDesign/3.jpg",
      
    },
    {
        id: 4,
        image: "/interiorDesign/5.jpg",
      
    },
    {
        id: 5,
        image: "/interiorDesign/6.jpg",
      
    },
    {
        id: 6,
        image: "/interiorDesign/7.jpg",
      
    },
    {
        id: 7,
        image: "/interiorDesign/8.jpg",
      
    },

    {
        id: 8,
        image: "/interiorDesign/9.jpg",
      
    },

];

const mixGallery = [
    {
        id: 1,
        image: "/gallery/mix1.jpeg",
      
    },
    {
        id: 2,
        image: "/gallery/mix2.jpeg",
      
    },
    {
        id: 3,
        image: "/gallery/mix3.jpeg",
      
    },
    {
        id: 4,
        image: "/gallery/mix4.jpeg",
      
    },
    {
        id: 5,
        image: "/gallery/mix5.jpeg",
      
    },
    {
        id: 6,
        image: "/gallery/mix6.jpeg",
      
    },
    {
        id: 7,
        image: "/gallery/mix7.jpeg",
      
    },

];


const CoffeHouseDesign = [
    {
        id: 1,
        image: "/COFFE/1.jpg",
      
    },
    {
        id: 2,
        image: "/COFFE/2.jpg",
      
    },
    {
        id: 3,
        image: "/COFFE/3.jpg",
      
    },
    {
        id: 4,
        image: "/COFFE/5.jpg",
      
    },
    {
        id: 5,
        image: "/COFFE/5.jpg",
      
    },
    {
        id: 6,
        image: "/COFFE/6.jpg",
      
    },
    {
        id: 7,
        image: "/COFFE/7.jpg",
      
    },
    {
        id: 8,
        image: "/COFFE/8.jpg",
      
    },

    {
        id: 9,
        image: "/COFFE/9.jpg",
      
    },
    {
        id: 10,
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
                          key={stadgallery.id}
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
                          key={officegallery.id}
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
                          key={mixgallery.id}
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
                          key={coffeeH.id}
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
                          key={design.id}
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