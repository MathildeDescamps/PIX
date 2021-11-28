import React from "react";


function Square(props) {
    return (
        <>
            <div className="square">
                {props.square.length > 0 &&
                    props.square
                }
            </div>
        </>
    )
}

function X(props){
    return (
        <>
            <div className="x-letter">
                <div className="col col-1">
                    <Square square={props.square1} />
                    <div className="square hidden"></div>
                    <Square square={props.square2} />
                </div>
                <div className="col col-2">
                    <div className="square hidden"></div>
                    <Square square={props.square3} />
                    <div className="square hidden"></div>
                </div>
                <div className="col col-3">
                    <Square square={props.square4} />
                    <div className="square hidden"></div>
                    <Square square={props.square5} />
                </div>
            </div>
        </>
    )
}

export default X;