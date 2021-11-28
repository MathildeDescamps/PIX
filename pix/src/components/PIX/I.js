import React  from 'react';

function I(props){
    return (
        <>
            <div className="i-letter">
                <div className="point-part">
                    {props.dot.length > 0 &&
                        props.dot
                    }
                </div>
                <div className="straight-part">
                    {props.straight.length > 0 &&
                        props.straight
                    }
                </div>
            </div>
        </>
    )
}

export default I;