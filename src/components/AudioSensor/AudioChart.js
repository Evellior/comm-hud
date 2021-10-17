import React from 'react';
import Wave from "@foobar404/wave";
import atmo from '../../res/atmo-chart.png';

export default function AudioChart(){
    /*/constructor(){
        let wave = new Wave();

        navigator.mediaDevices.getUserMedia({
            audio: true
        })
        .then(function (stream) {
            wave.fromStream(stream, "avfx_output", {
                type: "shine",
                colors: ["red", "white", "blue"]
            });
        })
        .catch(function (err) {
            console.log(err.message)
        });

    //}//*/

    return(
        <img src={atmo} width="250" />
    );
}