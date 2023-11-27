import React from 'react';
import Nikhil from '../assets/images/blogImagesMegaMenu/Nikhil_Gopalakrishnan_5ed09deed4.webp'
import Aboobacker from '../assets/images/blogImagesMegaMenu/Aboobacker_thumbnail_bde1b40179.webp'
import Manjit from '../assets/images/blogImagesMegaMenu/Mr_Manjith_thumpnail_b7b6c0264c.webp'
import Mohammed from '../assets/images/blogImagesMegaMenu/Mohammed_Shameer_9bd58d46d1.webp'
import Merijayana from '../assets/images/blogImagesMegaMenu/Zapare_technology_0b32a2d038.webp'
import Naser from '../assets/images/blogImagesMegaMenu/abdul_nazer_d25b013a12.webp'
const MegaMenuTestimonialsItem = () => {
    const data = [
        {
          imageURL: Nikhil,
          title: "Pentad Securities",
          name:'Nikhil Gopalakrishnan',
          post:'Chief Executive Officer'
        },
        {
          imageURL:Aboobacker,
          title: "Unicoin DCX",
          name:'Aboobacker Mohammed Ali',
          post:'Chief Executive Officer'
        },
        {
          imageURL: Manjit,
          title: "Mar Sleeva Medicity Palai",
          name:'Manjit Cherian',
          post:'Chief Branding Officer'
        },
        {
            imageURL: Mohammed,
            title: "Design Solutions Inc.",
          name:'Mohammed Shameer',
          post:'Co-founder | Partner'
          },{
            imageURL: Merijayana,
            title: "Zapare Technologies",
            name:'Merijayana Winston',
            post:'Chief Executive Officer'
          },{
            imageURL: Naser,
            title: "Lana Life Care",
            name:'Naser Abdulaziz N Alsorayai',
            post:'Chief Executive Officer'
          },
      ];



  return (
    <div className='row'>
    {data.map((item)=>{
         return(
          <div className="col-md-4">
          <div className="megaMenuTestimonials_item_wrapper__piU2b opacity-100 col-3">
         <div className="megaMenuTestimonials_image_wrapper__kiu21 col-3">
           <img
             objectFit="cover"
             alt="Nikhil Gopalakrishnan.png"
             fetchpriority="high"
             decoding="async"
             data-nimg="fill"
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 10vw"
             srcSet={item.imageURL}
             src={item.imageURL}
             style={{
               position: 'absolute',
               height: '100%',
               width: '100%',
               inset: '0px',
               color: 'transparent',
             }}
           />
           <div className="megaMenuTestimonials_video_icon__KAZUH">
             <div className="w-100 h-100 d-flex videoPopUp_play_overlay__Z_JLw">
               <button className="videoPopUp_play_btn__1JOXu ">
                 <span className="videoPopUp_icon__el0XM">
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     height="40"
                     viewBox="0 -960 960 960"
                     width="40"
                   >
                     <path d="M340.001-237.644v-487.687l383.073 243.844-383.073 243.843Z"></path>
                   </svg>
                 </span>
               </button>
             </div>
           </div>
         </div>
         <div className="megaMenuTestimonials_content_wrapper__Yz1On">
           <h3 className="megaMenuTestimonials_text__5FQqU">{item.title}</h3>
           <h4 className="megaMenuTestimonials_user__tnOMg">{item.name}</h4>
           <p className="megaMenuTestimonials_pos__7DJ5s">{item.post}</p>
         </div>
       </div>
       </div>
         )
    })}
    </div>
 
  );
};

export default MegaMenuTestimonialsItem;
