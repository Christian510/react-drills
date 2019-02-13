import React from 'react';



  const Image = (props) => {

      
        return (
            <div className="container" >
                  <img src={ props.displayImage } alt="Cool-Image" />
            </div>
          
         );
     
}

export default Image;