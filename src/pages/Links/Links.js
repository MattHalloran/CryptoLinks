import React, { useState } from 'react';
import cardano from '../../assets/cardano-ada-logo.png';
import email from '../../assets/email.svg';
import github from '../../assets/github.svg';
import goodreads from '../../assets/goodreads.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import youtube from '../../assets/youtube.svg';
import { AddressModal } from '../../components/AddressModal/AddressModal';

function Links() {
    const [popupOpen, setPopupOpen] = useState(false);

    return (
        <div id='main-container'>
            <AddressModal open={popupOpen} onClose={() => setPopupOpen(false)} />

            <div id='main-info'>
                <img id="main-logo" class='no-select' src={cardano} alt="" />
                <h1>My Name</h1>
                <div>A little about myself. Maybe with some emojis😎</div>
                <div>Some hook or motto</div>
            </div>

            <div id='links-div' class='no-select'>
                <a href="https://longdogechallenge.com/"><div class='link-button'><span>Your most important link</span></div></a>
                <a href="https://puginarug.com/"><div class='link-button'><span>Another link</span></div></a>
                <a href="https://crouton.net/" target="_blank" rel="noreferrer"><div class='link-button'><span>Link that opens a new tab</span></div></a>
                <a href="http://corndog.io/"><div class='link-button'><span>Fourth link - possibly for donations</span></div></a>
                <div class='link-button' style={{ cursor: 'pointer' }} onClick={() => setPopupOpen(true)}><span>Donate - ADA</span></div>
            </div>

            <div class='social-icons no-select'>
                <ul>
                    <li><a href="https://twitter.com/elonmusk"><img src={twitter} alt="" /></a></li>
                    <li><a href="https://github.com/MattHalloran"><img src={github} alt="" /></a></li>
                    <li><a href="https://www.linkedin.com/in/barackobama/"><img src={linkedin} alt="" /></a></li>
                    <li><a href="mailto:youremailaddress@gmail.com"><img src={email} alt="" /></a></li>
                    <li><a href="https://www.goodreads.com/author/show/656983.J_R_R_Tolkien"><img src={goodreads} alt="" /></a></li>
                    <li><a href="https://www.youtube.com/user/charleshoskinson"><img src={youtube} alt="" /></a></li>
                </ul>
            </div>
        </div>
    );
}

export { Links };