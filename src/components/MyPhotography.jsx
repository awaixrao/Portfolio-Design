import LightGallery from "lightgallery/react";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

function MyPhotography() {
  return (
    <>
      <section id="Photography">
        <h1 className="text-center my-5 py-5"> My Photography</h1>
        <div className="container ">
            <div className="row">
            <div className="col-md-4 imgHover ">
             
        <LightGallery
          onInit={() => {}}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
        >
         
            


               
              <a href="https://themewagon.github.io/credo/images/img_1.jpg">
                <img
                 className="img-fluid  my-3"
                  alt=""
                  src="https://themewagon.github.io/credo/images/img_1.jpg"
                />
              </a>
              <a href="https://themewagon.github.io/credo/images/img_2.jpg">
                <img
                  className="img-fluid  my-3"
                  alt="img2"
                  src="https://themewagon.github.io/credo/images/img_2.jpg"
                />
              </a>
              <a href="https://themewagon.github.io/credo/images/img_3.jpg">
                <img
                  className="img-fluid  my-3"
                  alt="img2"
                  src="https://themewagon.github.io/credo/images/img_3.jpg"
                />
              </a>
              <a href="https://themewagon.github.io/credo/images/img_10.jpg">
                <img
                  className="img-fluid  my-3"
                  alt="img2"
                  src="https://themewagon.github.io/credo/images/img_10.jpg"
                />
              </a>
            
              


             
        </LightGallery>
        </div>


        <div className="col-md-4 imgHover">
             
             <LightGallery
               onInit={() => {}}
               speed={500}
               plugins={[lgThumbnail, lgZoom]}
             >
              
                 
     
     
                    
                   <a href="https://themewagon.github.io/credo/images/img_4.jpg">
                     <img
                      className="img-fluid  my-3"
                       alt=""
                       src="https://themewagon.github.io/credo/images/img_4.jpg"
                     />
                   </a>
                   <a href="https://themewagon.github.io/credo/images/img_5.jpg">
                     <img
                       className="img-fluid  my-3"
                       alt="img2"
                       src="https://themewagon.github.io/credo/images/img_5.jpg"
                     />
                   </a>
                   <a href="https://themewagon.github.io/credo/images/img_8.jpg">
                     <img
                       className="img-fluid  my-3"
                       alt="img2"
                       src="https://themewagon.github.io/credo/images/img_8.jpg"
                     />
                   </a>
                 
                 
                   
     
     
                  
             </LightGallery>
             </div>



             <div className="col-md-4 imgHover ">
             
             <LightGallery
               onInit={() => {}}
               speed={500}
               plugins={[lgThumbnail, lgZoom]}
             >
              
                 
     
     
                    
                   <a href="https://themewagon.github.io/credo/images/img_6.jpg">
                     <img
                      className="img-fluid  my-3"
                       alt=""
                       src="https://themewagon.github.io/credo/images/img_6.jpg"
                     />
                   </a>
                   <a href="https://themewagon.github.io/credo/images/img_7.jpg">
                     <img
                       className="img-fluid  my-3"
                       alt="img2"
                       src="https://themewagon.github.io/credo/images/img_7.jpg"
                     />
                   </a>
                   <a href="https://themewagon.github.io/credo/images/img_9.jpg">
                     <img
                       className="img-fluid  my-3"
                       alt="img2"
                       src="https://themewagon.github.io/credo/images/img_9.jpg"
                     />
                   </a>
                   
                 
                   
     
     
                  
             </LightGallery>
             </div>
        </div>
          </div>
       
       
      </section>
    </>
  );
}

export default MyPhotography;
