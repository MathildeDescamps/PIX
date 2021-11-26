import React, { useState }  from 'react';
/*p = (9 * 8)  + (4*4) = 72 + 16 = 88*/
/*I= 4*4 + 4*7 =  16 + 28 = 44*/
/*X = (4*4 )*5 = 16 * 5 = 80 */
/*Total = 212 photos */


function P(props){
    return (
        <>
            <div className="p-letter">
                <div className="round-part">
                    {props.pRoundPart.length > 0 &&
                        props.pRoundPart
                    }
                </div>
                <div className="straight-part">
                    {props.pStraightPart.length > 0 &&
                        props.pStraightPart
                    }
                </div>
            </div>
        </>
    )
}


function Logo(){

    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }

    const images    = importAll(require.context('../../public/photos', false, /\.(webp|jpe?g)$/));
    let photos      = Object.keys(images);


    const pRoundPart = [];
    const pStraightPart = [];
    const iPointPart = [];
    const iStraightPart = [];
    const xSquare1 = [];
    const xSquare2 = [];
    const xSquare3 = [];
    const xSquare4 = [];
    const xSquare5 = [];

    function fetchData(){
         for (var i = 0; i < 72; i++) {
            var elImg = <img className={'fadeIn fadeOut'} src={'/photos/' + photos[i]}  />;
            pRoundPart.push(elImg);
        }

        for (var i = 72; i < 88; i++) {
            var elImg = <img className={'fadeIn fadeOut'} src={'/photos/' + photos[i]}  />;
            pStraightPart.push(elImg);
        }

        for (var i = 88 ; i < 104; i++ ){
            var elImg = <img src={'/photos/' + photos[i]}  />;
            iPointPart.push(elImg);
        }

        for (var i = 104 ; i < 132; i++ ){
            var elImg = <img src={'/photos/' + photos[i]} />;
            iStraightPart.push(elImg);
        }

        for (var i = 132 ; i < 148; i++ ){
            var elImg = <img src={'/photos/' + photos[i]} key={i} />;
            xSquare1.push(elImg);
        }

        for (var i = 148 ; i < 164; i++ ){
            var elImg = <img src={'/photos/' + photos[i]} key={i} />;
            xSquare2.push(elImg);
        }

        for (var i = 164 ; i < 180; i++ ){
            var elImg = <img src={'/photos/' + photos[i]} key={i} />;
            xSquare3.push(elImg);
        }

        for (var i = 180 ; i < 196; i++ ){
            var elImg = <img src={'/photos/' + photos[i]} key={i} />;
            xSquare4.push(elImg);
        }

        for (var i = 196 ; i < 212; i++ ){
            var elImg = <img src={'/photos/' + photos[i]} key={i} />;
            xSquare5.push(elImg);
        }

    }
    fetchData()

    return (
        <>
            <P pRoundPart={pRoundPart} pStraightPart={pStraightPart} />
            <div className="i-letter">
                <div className="point-part">
                    {iPointPart.length > 0 &&
                    iPointPart
                    }
                </div>
                <div className="straight-part">
                    {iStraightPart.length > 0 &&
                    iStraightPart
                    }
                </div>
            </div>
            <div className="x-letter">
                <div className="col col-1">
                    <div className="square 1">
                        {xSquare1.length > 0 &&
                        xSquare1
                        }
                    </div>
                    <div className="square hidden">
                    </div>
                    <div className="square 2">
                        {xSquare2.length > 0 &&
                        xSquare2
                        }
                    </div>
                </div>
                <div className="col col-2">
                    <div className="square hidden">

                    </div>
                    <div className="square 3">
                        {xSquare3.length > 0 &&
                        xSquare3
                        }
                    </div>
                    <div className="square hidden">

                    </div>
                </div>
                <div className="col col-3">
                    <div className="square 4">
                        {xSquare4.length > 0 &&
                        xSquare4
                        }
                    </div>
                    <div className="square hidden">

                    </div>
                    <div className="square 5">
                        {xSquare5.length > 0 &&
                        xSquare5
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logo;