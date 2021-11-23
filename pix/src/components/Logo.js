import React from 'react';

function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
   const images = importAll(require.context('../../public/photos', false, /\.(png|jpe?g|svg)$/));

   console.log('images here -> ', images);

   let photos = Object.keys(images);
   console.log('photos here ->', photos);

function Logo() {
    /* 42 photos */
    const pStraightPart = [
       "https://picsum.photos/126/126?random=73",
       "https://picsum.photos/126/126?random=74",
       "https://picsum.photos/126/126?random=75",
       "https://picsum.photos/126/126?random=76",
       "https://picsum.photos/126/126?random=77",
       "https://picsum.photos/126/126?random=78",
       "https://picsum.photos/126/126?random=79",
       "https://picsum.photos/126/126?random=80",
       "https://picsum.photos/126/126?random=81",
       "https://picsum.photos/126/126?random=82",
       "https://picsum.photos/126/126?random=83",
       "https://picsum.photos/126/126?random=84",
       "https://picsum.photos/126/126?random=85",
       "https://picsum.photos/126/126?random=86",
       "https://picsum.photos/126/126?random=87",
       "https://picsum.photos/126/126?random=88",
       "https://picsum.photos/126/126?random=89",
       "https://picsum.photos/126/126?random=90",
       "https://picsum.photos/126/126?random=91",
       "https://picsum.photos/126/126?random=92",
       "https://picsum.photos/126/126?random=93",
       "https://picsum.photos/126/126?random=94",
       "https://picsum.photos/126/126?random=95",
       "https://picsum.photos/126/126?random=96",
       "https://picsum.photos/126/126?random=97",
       "https://picsum.photos/126/126?random=98",
       "https://picsum.photos/126/126?random=99",
       "https://picsum.photos/126/126?random=100",
       "https://picsum.photos/126/126?random=101",
       "https://picsum.photos/126/126?random=102",
       "https://picsum.photos/126/126?random=103",
       "https://picsum.photos/126/126?random=104",
       "https://picsum.photos/126/126?random=105",
       "https://picsum.photos/126/126?random=106",
       "https://picsum.photos/126/126?random=107",
       "https://picsum.photos/126/126?random=108",
       "https://picsum.photos/126/126?random=73",
       "https://picsum.photos/126/126?random=74",
       "https://picsum.photos/126/126?random=75",
       "https://picsum.photos/126/126?random=76",
       "https://picsum.photos/126/126?random=77",
       "https://picsum.photos/126/126?random=78",
    ]

    /* 36 photos */
    const iPointPart = [
        "https://picsum.photos/126/126?random=94",
        "https://picsum.photos/126/126?random=95",
        "https://picsum.photos/126/126?random=96",
        "https://picsum.photos/126/126?random=97",
        "https://picsum.photos/126/126?random=98",
        "https://picsum.photos/126/126?random=99", 
        "https://picsum.photos/126/126?random=100", 
        "https://picsum.photos/126/126?random=101",
        "https://picsum.photos/126/126?random=102",
        "https://picsum.photos/126/126?random=103", 
        "https://picsum.photos/126/126?random=104",
        "https://picsum.photos/126/126?random=105", 
        "https://picsum.photos/126/126?random=106", 
        "https://picsum.photos/126/126?random=107", 
        "https://picsum.photos/126/126?random=108", 
        "https://picsum.photos/126/126?random=109", 
        "https://picsum.photos/126/126?random=110", 
        "https://picsum.photos/126/126?random=111", 
        "https://picsum.photos/126/126?random=112", 
        "https://picsum.photos/126/126?random=113", 
        "https://picsum.photos/126/126?random=114",
        "https://picsum.photos/126/126?random=115", 
        "https://picsum.photos/126/126?random=116", 
        "https://picsum.photos/126/126?random=117", 
        "https://picsum.photos/126/126?random=118",
        "https://picsum.photos/126/126?random=119", 
        "https://picsum.photos/126/126?random=120", 
        "https://picsum.photos/126/126?random=121", 
        "https://picsum.photos/126/126?random=122", 
        "https://picsum.photos/126/126?random=123", 
        "https://picsum.photos/126/126?random=124", 
        "https://picsum.photos/126/126?random=125",
        "https://picsum.photos/126/126?random=126", 
        "https://picsum.photos/126/126?random=127", 
        "https://picsum.photos/126/126?random=128", 
        "https://picsum.photos/126/126?random=129"
    ]

    /* 60 photos */
    const iStraightPart = [
        "https://picsum.photos/126/126?random=115",
        "https://picsum.photos/126/126?random=116",
        "https://picsum.photos/126/126?random=117",
        "https://picsum.photos/126/126?random=118",
        "https://picsum.photos/126/126?random=119",
        "https://picsum.photos/126/126?random=120",
        "https://picsum.photos/126/126?random=121",
        "https://picsum.photos/126/126?random=122",
        "https://picsum.photos/126/126?random=123",
        "https://picsum.photos/126/126?random=124",
        "https://picsum.photos/126/126?random=125",
        "https://picsum.photos/126/126?random=126",
        "https://picsum.photos/126/126?random=127",
        "https://picsum.photos/126/126?random=128",
        "https://picsum.photos/126/126?random=129",
        "https://picsum.photos/126/126?random=130",
        "https://picsum.photos/126/126?random=131",
        "https://picsum.photos/126/126?random=132",
        "https://picsum.photos/126/126?random=133",
        "https://picsum.photos/126/126?random=134",
        "https://picsum.photos/126/126?random=135",
        "https://picsum.photos/126/126?random=136",
        "https://picsum.photos/126/126?random=137",
        "https://picsum.photos/126/126?random=138",
        "https://picsum.photos/126/126?random=139",
        "https://picsum.photos/126/126?random=140",
        "https://picsum.photos/126/126?random=141",
        "https://picsum.photos/126/126?random=142",
        "https://picsum.photos/126/126?random=143",
        "https://picsum.photos/126/126?random=144",
        "https://picsum.photos/126/126?random=145",
        "https://picsum.photos/126/126?random=146",
        "https://picsum.photos/126/126?random=147",
        "https://picsum.photos/126/126?random=148",
        "https://picsum.photos/126/126?random=149",
        "https://picsum.photos/126/126?random=150",
        "https://picsum.photos/126/126?random=127",
        "https://picsum.photos/126/126?random=128",
        "https://picsum.photos/126/126?random=129",
        "https://picsum.photos/126/126?random=130",
        "https://picsum.photos/126/126?random=131",
        "https://picsum.photos/126/126?random=132",
        "https://picsum.photos/126/126?random=133",
        "https://picsum.photos/126/126?random=134",
        "https://picsum.photos/126/126?random=135",
        "https://picsum.photos/126/126?random=136",
        "https://picsum.photos/126/126?random=137",
        "https://picsum.photos/126/126?random=138",
        "https://picsum.photos/126/126?random=139",
        "https://picsum.photos/126/126?random=140",
        "https://picsum.photos/126/126?random=141",
        "https://picsum.photos/126/126?random=142",
        "https://picsum.photos/126/126?random=143",
        "https://picsum.photos/126/126?random=144",
        "https://picsum.photos/126/126?random=145",
        "https://picsum.photos/126/126?random=146",
        "https://picsum.photos/126/126?random=147",
        "https://picsum.photos/126/126?random=148",
        "https://picsum.photos/126/126?random=149",
        "https://picsum.photos/126/126?random=150",
        /* "https://picsum.photos/126/126?random=145",
        "https://picsum.photos/126/126?random=146",
        "https://picsum.photos/126/126?random=147",
        "https://picsum.photos/126/126?random=148",
        "https://picsum.photos/126/126?random=149",
        "https://picsum.photos/126/126?random=150" */
    ]

    /* 20 photos dont 4 coupées */
    const xSquare = [
        "https://picsum.photos/126/126?random=94",
        "https://picsum.photos/126/126?random=95",
        "https://picsum.photos/126/126?random=96",
        "https://picsum.photos/126/126?random=97",
        "https://picsum.photos/126/126?random=98",
        "https://picsum.photos/126/126?random=99", 
        "https://picsum.photos/126/126?random=100", 
        "https://picsum.photos/126/126?random=101",
        "https://picsum.photos/126/126?random=102",
        "https://picsum.photos/126/126?random=103", 
        "https://picsum.photos/126/126?random=104",
        "https://picsum.photos/126/126?random=105", 
        "https://picsum.photos/126/126?random=106", 
        "https://picsum.photos/126/126?random=107", 
        "https://picsum.photos/126/126?random=108", 
        "https://picsum.photos/126/126?random=109", 
        "https://picsum.photos/126/126?random=110", 
        "https://picsum.photos/126/126?random=111", 
        "https://picsum.photos/126/126?random=112", 
        "https://picsum.photos/126/126?random=113", 
        "https://picsum.photos/126/126?random=114",
        "https://picsum.photos/126/126?random=115", 
        "https://picsum.photos/126/126?random=116", 
        "https://picsum.photos/126/126?random=117", 
        "https://picsum.photos/126/126?random=118",
        "https://picsum.photos/126/126?random=119", 
        "https://picsum.photos/126/126?random=120", 
        "https://picsum.photos/126/126?random=121", 
        "https://picsum.photos/126/126?random=122", 
        "https://picsum.photos/126/126?random=123", 
        "https://picsum.photos/126/126?random=124", 
        "https://picsum.photos/126/126?random=125",
        "https://picsum.photos/126/126?random=126", 
        "https://picsum.photos/126/126?random=127", 
        "https://picsum.photos/126/126?random=128", 
        "https://picsum.photos/126/126?random=129"
    ]

    let imgArray = xSquare.length;
    console.log(imgArray);

    

    return (
        <>
            <div className="p-letter">
                {/* 152 photos */}
                <div className="round-part">
                    { 
                        photos.map((photo, index) => {
                        console.log('the photo : ', photo);
                        return <img src={'/photos/' + photo} key={index} />
                    }) }
                    {
                        
                    }
                </div>
                <div className="straight-part">
                    {pStraightPart.map((img, index) => {
                        return <img src={img} key={index} />
                    })}
                </div>
            </div>
            <div className="i-letter">
                <div className="point-part">
                    {iPointPart.map((img, index) => {
                        return <img src={img} key={index} />
                    })}
                </div>
                <div className="straight-part">
                    {iStraightPart.map((img, index) => {
                        return <img src={img} key={index} />
                    })}
                </div>
            </div>
            <div className="x-letter">
                <div className="col col-1">
                    <div className="square">
                        {xSquare.map((img, index) => {
                            return <img src={img} key={index} />
                        })}
                    </div>
                    <div className="square hidden">
                    </div>
                    <div className="square">
                        {xSquare.map((img, index) => {
                            return <img src={img} key={index} />
                        })}
                    </div>
                </div>
                <div className="col col-2">
                    <div className="square hidden">
                        
                    </div>
                    <div className="square">
                        {xSquare.map((img, index) => {
                            return <img src={img} key={index} />
                        })}
                    </div>
                    <div className="square hidden">

                    </div>
                </div>
                <div className="col col-3">
                    <div className="square">
                        {xSquare.map((img, index) => {
                            return <img src={img} key={index} />
                        })}
                    </div>
                    <div className="square hidden">

                    </div>
                    <div className="square">
                        {xSquare.map((img, index) => {
                            return <img src={img} key={index} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logo;