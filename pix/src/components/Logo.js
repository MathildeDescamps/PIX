import React from 'react';

function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
   const images = importAll(require.context('../../public/photos', false, /\.(webp|jpe?g)$/));

   let photos = Object.keys(images);
   console.log('photos here ->', photos);


function Logo() {

    let photosIndex = 1;

    return (
        <>
            <div className="p-letter">
                {/* 152 photos max */}
                <div className="round-part">
                    { 
                        photos.map((photo, index) => {
                            if(photo && photosIndex < 153) {
                                photosIndex++;
                                return <img src={'/photos/' + photo} key={index} />
                            } else {
                                return <img src="" />
                            }
                            /* At the end photosIndex = 152 */
                        }) 
                    }
                </div>
                {/* 42 photos */}
                <div className="straight-part">
                    { 
                        photos.map((photo, index) => {
                            if((index > photosIndex) && (index < 195)) {
                                photosIndex++;
                                return <img src={'/photos/' + photo} key={index} />
                            }
                             /* At the end photosIndex = 194 */
                        }) 
                    }
                </div>
            </div>
            <div className="i-letter">
                {/* 36 photos */}
                <div className="point-part">
                    { 
                        photos.map((photo, index) => {
                            if((index > photosIndex) && (index < 231)) {
                                photosIndex++;
                                return <img src={'/photos/' + photo} key={index} />
                            }
                            /* At the end photosIndex = 230 */
                        }) 
                    }
                </div>
                {/* 60 photos */}
                <div className="straight-part">
                    { 
                        photos.map((photo, index) => {
                            if((index > photosIndex) && (index < 291)) {
                                photosIndex++;
                                return <img src={'/photos/' + photo} key={index} />
                            }
                            /* At the end photosIndex = 290 */
                        }) 
                    }
                </div>
            </div>
            <div className="x-letter">
                <div className="col col-1">
                    {/* 36 photos */}
                    <div className="square">
                        { 
                            photos.map((photo, index) => {
                                if((index > photosIndex) && (index < 327)) {
                                    photosIndex++;
                                    return <img src={'/photos/' + photo} key={index} />
                                }
                                /* At the end photosIndex = 326 */
                            }) 
                        }
                    </div>
                    <div className="square hidden">
                    </div>
                    {/* 36 photos */}
                    <div className="square">
                        { 
                            photos.map((photo, index) => {
                                if((index > photosIndex) && (index < 364)) {
                                    photosIndex++;
                                    return <img src={'/photos/' + photo} key={index} />
                                }
                                /* At the end photosIndex = 363 */
                            }) 
                        }
                    </div>
                </div>
                <div className="col col-2">
                    <div className="square hidden">
                        
                    </div>
                    {/* 36 photos */}
                    <div className="square">
                        { 
                            photos.map((photo, index) => {
                                if((index > photosIndex) && (index < 400)) {
                                    photosIndex++;
                                    return <img src={'/photos/' + photo} key={index} />
                                }
                                /* At the end photosIndex = 399 */
                            }) 
                        }
                    </div>
                    <div className="square hidden">

                    </div>
                </div>
                <div className="col col-3">
                    {/* 36 photos */}
                    <div className="square">
                        { 
                            photos.map((photo, index) => {
                                if((index > photosIndex) && (index < 436)) {
                                    photosIndex++;
                                    return <img src={'/photos/' + photo} key={index} />
                                }
                                /* At the end photosIndex = 435 */
                            }) 
                        }
                    </div>
                    <div className="square hidden">

                    </div>
                    {/* 36 photos */}
                    <div className="square">
                        { 
                            photos.map((photo, index) => {
                                if((index > photosIndex) && (index < 472)) {
                                    photosIndex++;
                                    return <img src={'/photos/' + photo} key={index} />
                                }
                                /* At the end photosIndex = 471 */
                            }) 
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logo;