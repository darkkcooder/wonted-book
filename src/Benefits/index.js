import React from "react";
import "./styles.css"
import { redirect } from "react-router-dom";
const Benifits = () => {
    return(
        <div className="container">
            <div className="second-div">
                <h5 style={{color: "#c27b7f"}}>WHY WONTED ?</h5>
                <h2>What you'll achieve by this book</h2>
            </div>

            <div className="nest-div">
                <div className="image-container" style={{ position: "relative", width: '550px', height: '510px' }}>
                    <div className="boox"></div>
                    <img  src="https://wonted-react.vercel.app/assets/images/achive2.jpg" style={{ position: "relative",display: "block", width: '100%', height: '100%', objectFit: "cover"  }} className="imagee" alt="boy reading book img" ></img>
                </div>
                <div className="box-wrapper">
                    <div className="boxx">
                        <h4 className="text">Experience</h4>
                        <p className="text">Lorem ipsum dolor sit amet ametus conso tetur ading elitor fugit piatur iusto provid.</p>
                    </div>
                    <div className="boxx">
                        <h4 className="text">Goal</h4>
                        <p className="text">Lorem ipsum dolor sit amet ametus conso tetur ading elitor fugit piatur iusto provid.</p>
                    </div>
                </div>

                <div className="box-wrapper-second">
                    <div className="boxx">
                        <h4>Motivation</h4>
                        <p>Lorem ipsum dolor sit amet ametus conso tetur ading elitor fugit piatur iusto provid.</p>
                    </div>
                    <div className="boxx">
                        <h4>Vision</h4>
                        <p>Lorem ipsum dolor sit amet ametus conso tetur ading elitor fugit piatur iusto provid.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Benifits;