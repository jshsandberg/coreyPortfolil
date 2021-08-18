import React from "react";
import Camera from "../../utils/Equipment/2f2d86-3f7499-img-0037__1_.jpg"
import "./Equipment.css"

const Equipment = () => {


    return (
        <div>
            <div className="cameraTitle">
                <h2>Sony a7 iii</h2>
                <img src={Camera} alt="camera" />
            </div>
            <div className="pricing">
                <h3>Pricing</h3>
                <p>Daily - $85</p>
                    <p>Weekend - $130</p>
                    <p>Weekly Rate - $250</p>
            </div>
            <div className="equipmentContainer">
                <div className="equipment">
                    <h3>This Package Includes:</h3>
                    <ul>
                        <li>Sony A7iii camera body w/ port cap</li>
                        <li>Smallrig video cage</li>
                        <li>Sigma MC-11 Converter (E - EF) (similar to Metabones)</li>
                        <li>128GB SD Card (x1), 64GB SD Card</li>
                        <li>Battery (x2) </li>
                        <li>USB 3.0 SD Card Reader </li>
                        <li>Camera strap </li>
                        <li>Camera bag</li>
                    </ul>
                </div>
                <div className="specs">
                    <h3>Specs:</h3>
                        <ul>
                            <li>24MP Full-Frame Exmor R BSI CMOS Sensor</li>
                            <li>BIONZ X Image Processor & Front-End LSI </li>
                            <li>693-Point Hybrid AF System </li>
                            <li>UHD 4K30p Video with HLG & S-Log3 Gammas </li>
                            <li>2.36m-Dot Tru-Finder OLED EVF </li>
                            <li>3.0" 922k-Dot Tilting Touchscreen LCD</li>
                            <li>5-Axis SteadyShot INSIDE Stabilization </li>
                            <li>ISO 204800 and 10 fps Shooting </li>
                            <li>Built-In Wi-Fi and NFC, Dual SD Slots</li>
                            <li>USB Type-C Port, Weather-Sealed Design</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Equipment