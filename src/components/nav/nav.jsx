import React, { useState } from "react";
import './nav.css';
import { BiSolidHomeAlt2 } from 'react-icons/bi';
import { BiSolidUser } from 'react-icons/bi';
import { BiCodeAlt } from 'react-icons/bi';
import { AiFillMessage } from 'react-icons/ai';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import useSound from 'use-sound';
const pathToAudio = 'src/assets/bg_music.mp3';

const Nav = () => {
    const [isOn, setIsOn] = useState(false);
    const [play, {stop}] = useSound(pathToAudio, { volume: 1 });

    function toggleVolume() {
        setIsOn(!isOn);
        if (isOn) {
            stop();
        } else {
            play();
        }
    }

    function getVolumeIcon() {
        return isOn ? <FaVolumeUp /> : <FaVolumeMute />;
    }

    return (
        <nav>
            <a href="#" className="active"><BiSolidHomeAlt2 /></a>
            <a href="#about"><BiSolidUser /></a>
            <a href="#portfolio"><BiCodeAlt /></a>
            <a href="#contact"><AiFillMessage /></a>
            {/* <a id="volButton" onClick={toggleVolume}>
                {getVolumeIcon()}
            </a> */}
        </nav>
    )
}

export default Nav;
