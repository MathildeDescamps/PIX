import React from 'react';

function Logo() {

    /* 156 photos dont 10 coupées */
    const pRoundPart = [
        "https://picsum.photos/126/126?random=1",
        "https://picsum.photos/126/126?random=2",
        "https://picsum.photos/126/126?random=3",
        "https://picsum.photos/126/126?random=4",
        "https://picsum.photos/126/126?random=5",
        "https://picsum.photos/126/126?random=6",
        "https://picsum.photos/126/126?random=7",
        "https://picsum.photos/126/126?random=8",
        "https://picsum.photos/126/126?random=9",
        "https://picsum.photos/126/126?random=10",
        "https://picsum.photos/126/126?random=11",
        "https://picsum.photos/126/126?random=12",
        "https://picsum.photos/126/126?random=13",
        "https://picsum.photos/126/126?random=14",
        "https://picsum.photos/126/126?random=15",
        "https://picsum.photos/126/126?random=16",
        "https://picsum.photos/126/126?random=17",
        "https://picsum.photos/126/126?random=18",
        "https://picsum.photos/126/126?random=19",
        "https://picsum.photos/126/126?random=20",
        "https://picsum.photos/126/126?random=21",
        "https://picsum.photos/126/126?random=22",
        "https://picsum.photos/126/126?random=23",
        "https://picsum.photos/126/126?random=24",
        "https://picsum.photos/126/126?random=25",
        "https://picsum.photos/126/126?random=26",
        "https://picsum.photos/126/126?random=27",
        "https://picsum.photos/126/126?random=28",
        "https://picsum.photos/126/126?random=29",
        "https://picsum.photos/126/126?random=30",
        "https://picsum.photos/126/126?random=31",
        "https://picsum.photos/126/126?random=32",
        "https://picsum.photos/126/126?random=33",
        "https://picsum.photos/126/126?random=34",
        "https://picsum.photos/126/126?random=35",
        "https://picsum.photos/126/126?random=36",
        "https://picsum.photos/126/126?random=37",
        "https://picsum.photos/126/126?random=38",
        "https://picsum.photos/126/126?random=39",
        "https://picsum.photos/126/126?random=40",
        "https://picsum.photos/126/126?random=41",
        "https://picsum.photos/126/126?random=42",
        "https://picsum.photos/126/126?random=43",
        "https://picsum.photos/126/126?random=44",
        "https://picsum.photos/126/126?random=45",
        "https://picsum.photos/126/126?random=46",
        "https://picsum.photos/126/126?random=47",
        "https://picsum.photos/126/126?random=48",
        "https://picsum.photos/126/126?random=49",
        "https://picsum.photos/126/126?random=50",
        "https://picsum.photos/126/126?random=51",
        "https://picsum.photos/126/126?random=52",
        "https://picsum.photos/126/126?random=53",
        "https://picsum.photos/126/126?random=54",
        "https://picsum.photos/126/126?random=55",
        "https://picsum.photos/126/126?random=56",
        "https://picsum.photos/126/126?random=57",
        "https://picsum.photos/126/126?random=58",
        "https://picsum.photos/126/126?random=59",
        "https://picsum.photos/126/126?random=60",
        "https://picsum.photos/126/126?random=61",
        "https://picsum.photos/126/126?random=62",
        "https://picsum.photos/126/126?random=63",
        "https://picsum.photos/126/126?random=64",
        "https://picsum.photos/126/126?random=65",
        "https://picsum.photos/126/126?random=66",
        "https://picsum.photos/126/126?random=67",
        "https://picsum.photos/126/126?random=68",
        "https://picsum.photos/126/126?random=69",
        "https://picsum.photos/126/126?random=70",
        "https://picsum.photos/126/126?random=71",
        "https://picsum.photos/126/126?random=72",
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
        "https://picsum.photos/126/126?random=1",
        "https://picsum.photos/126/126?random=2",
        "https://picsum.photos/126/126?random=3",
        "https://picsum.photos/126/126?random=4",
        "https://picsum.photos/126/126?random=5",
        "https://picsum.photos/126/126?random=6",
        "https://picsum.photos/126/126?random=7",
        "https://picsum.photos/126/126?random=8",
        "https://picsum.photos/126/126?random=9",
        "https://picsum.photos/126/126?random=10",
        "https://picsum.photos/126/126?random=11",
        "https://picsum.photos/126/126?random=12",
        "https://picsum.photos/126/126?random=13",
        "https://picsum.photos/126/126?random=14",
        "https://picsum.photos/126/126?random=15",
        "https://picsum.photos/126/126?random=16",
        "https://picsum.photos/126/126?random=51",
        "https://picsum.photos/126/126?random=52",
        "https://picsum.photos/126/126?random=53",
        "https://picsum.photos/126/126?random=54",
        "https://picsum.photos/126/126?random=55",
        "https://picsum.photos/126/126?random=56"
    ]

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

    /* 35 photos */
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

    /* 56 photos */
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
        "https://picsum.photos/126/126?random=145",
        "https://picsum.photos/126/126?random=146",
        "https://picsum.photos/126/126?random=147",
        "https://picsum.photos/126/126?random=148",
        "https://picsum.photos/126/126?random=149",
        "https://picsum.photos/126/126?random=150"
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
            {/* <img src="/pix.png" /> */}
            <div class="p-letter">
                {/* 72 images de 30x30 !! 10 photos sont coupées à cause des arrondis !! */}
                <div className="round-part">
                    {pRoundPart.map((img) => {
                        return <img src={img} />
                    })}
                </div>
                <div className="straight-part">
                    {pStraightPart.map((img) => {
                        return <img src={img} />
                    })}
                </div>
            </div>
            <div className="i-letter">
                <div className="point-part">
                    {iPointPart.map((img) => {
                        return <img src={img} />
                    })}
                </div>
                <div className="straight-part">
                    {iStraightPart.map((img) => {
                        return <img src={img} />
                    })}
                </div>
            </div>
            <div className="x-letter">
                <div className="col col-1">
                    <div className="square">
                        {xSquare.map((img) => {
                            return <img src={img} />
                        })}
                    </div>
                    <div className="square hidden">
                    </div>
                    <div className="square">
                        {xSquare.map((img) => {
                            return <img src={img} />
                        })}
                    </div>
                </div>
                <div className="col col-2">
                    <div className="square hidden">
                        
                    </div>
                    <div className="square">
                        {xSquare.map((img) => {
                            return <img src={img} />
                        })}
                    </div>
                    <div className="square hidden">

                    </div>
                </div>
                <div className="col col-3">
                    <div className="square">
                        {xSquare.map((img) => {
                            return <img src={img} />
                        })}
                    </div>
                    <div className="square hidden">

                    </div>
                    <div className="square">
                        {xSquare.map((img) => {
                            return <img src={img} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logo;