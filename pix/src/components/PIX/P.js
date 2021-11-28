import React from "react";

function P(props){
    return (
        <>
            <div className="p-letter">
                <div className="round-part">
                    {props.rounded.length > 0 &&
                        props.rounded
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

export default P;