import React from 'react';
import P from './PIX/P';
import I from './PIX/I';
import X from './PIX/X';
/*p = (9 * 8)  + (4*4) = 72 + 16 = 88*/
/*I= 4*4 + 4*7 =  16 + 28 = 44*/
/*X = (4*4 )*5 = 16 * 5 = 80 */
/*Total = 212 photos */

const pix = {
    P : {
        rounded : [],
        straight: [],
    },
    I : {
        dot     : [],
        straight: []
    },
    X : {
        square1 : [],
        square2 : [],
        square3 : [],
        square4 : [],
        square5 : [],
    }
};

for(var i=0 ; i < 212; i++ ) {

    var srcPhoto = (i) => {
        try {return require('../../public/photos/'+i+'.webp') ? 'photos/'+i+'.webp' :'';}
        catch (err) {return 'default.webp'}
    }
    var src = srcPhoto(i);
    var elm =  
        <div style={ {maxWidth: '190px', maxHeight: '190px', overflow: 'hidden', position:'relative'}}>
            <div className={(src !== 'default.webp') ? 'imgWrapper' : ''} style={ (src !== 'default.webp')? {overflow: 'initial', backgroundColor: 'transparent'/* , border: '14px solid #12F6EF' */} : {} }>
                <img className={'imgPix'} style={ (src !== 'default.webp')? { opacity: '0', maxWidth: '85%', maxHeight: '85%'} :{} } src={src} alt={""}  key={i} />
            </div>
        </div>
    ;
    if(i < 72)                   pix.P.rounded.push(elm);
    else if(i >= 72 && i < 88)   pix.P.straight.push(elm);
    else if(i >= 88 && i < 104)  pix.I.dot.push(elm);
    else if(i >= 104 && i < 132) pix.I.straight.push(elm);
    else if(i >= 132 && i < 148) pix.X.square1.push(elm);
    else if(i >= 148 && i < 164) pix.X.square2.push(elm);
    else if(i >= 164 && i < 180) pix.X.square3.push(elm);
    else if(i >= 180 && i < 196) pix.X.square4.push(elm);
    else if(i >= 196 && i < 212) pix.X.square5.push(elm);
}



function Logo(){

    return (
        <>
            <P
                rounded={pix.P.rounded}
                straight={pix.P.straight}
            />
            <I
                dot={pix.I.dot}
                straight={pix.I.straight}
            />
            <X
                square1={pix.X.square1}
                square2={pix.X.square2}
                square3={pix.X.square3}
                square4={pix.X.square4}
                square5={pix.X.square5}
            />
        </>
    )
}

export default Logo;