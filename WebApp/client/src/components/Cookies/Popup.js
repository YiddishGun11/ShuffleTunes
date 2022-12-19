import "./Popup.scss"

import { createPortal } from "react-dom";

import {ReactComponent as CookieIcon} from "../../assets/cookie-icon.svg";

function Popup(props){
    return createPortal(
        <div className="cookie-main-div">
            <div className="cookie-container">
                <div className="cookie-main-div-header">
                    <span><CookieIcon id="cookie-icon" /></span>
                    <p>mmmmmh....</p>
                </div>
                <div className="cookie-main-div-body">
                    <h1>Cookies</h1>
                    <p>This website use only essential cookies to ensure you get the best user experience</p>
                    <button onClick={() => props.setDisplay(false)}>Got it, thanks</button>
                </div>
            </div>
        </div>, document.body
    )
}

export default Popup;