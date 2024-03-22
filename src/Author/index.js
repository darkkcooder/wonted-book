import React from "react";
import "./styles.css"
const Author = () =>{
    return (
        <div className="first-div">
            <div className="second-divv">
                <h5>ABOUT AUTHOR</h5>
                <h2>Learn about the book writer</h2>
            </div>
            <div className="flex-div">
                <div className="video-box">
                {/* <video width="520" height="240" controls>
                    <source src="https://youtu.be/ksImBkJNQt8" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                </div>
                <div>
                    <div className="div5">
                        <span>Based on wikipedia, Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                        <span>Optio aspernatur quam in nostrum aliquam eligendi vel, modi cupiditate numquam </span>
                        <p>officiis dicta minima placeat nulla impedit voluptatum adipisci beatae. Rerum, impedit.</p>
                    </div>
                    <div className="div6">
                        <div>
                            <div className="div10">
                                <h3>Name:</h3>
                                <p>Jacob Thomas</p>
                            </div>
                            <div>
                                <h3>Country:</h3>
                                <p>US</p>
                            </div>  
                            <div>
                                <h3>Languages:</h3>
                                <p>English, French</p>
                            </div>             
                        </div>

                        <div className="div7">
                            <div className="div10">
                                <h3>Born:</h3>
                                <p>05.06.1992</p>
                            </div>
                            <div>
                                <h3>Email:</h3>
                                <p>info@wonted.com</p>
                            </div>  
                            <div>
                                <h3>Address:</h3>
                                <p>Etowan, TN 37331 United States</p>
                            </div>            
                        </div>
                    </div>                    
                </div>
                
            </div>
        </div>
    )
}
export default Author;