import React from "react";

const ThirdSection = () => {
    return (
        <>
        <div className="container">
        <section className="hero">
                <div className="container">
                    <div className="containerThirdSecContent">
                        <div className="row w-100">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                <div className="contentThirdSec">
                                    <h2 className="headerThirdSecTitle">Why join us</h2>
                                    <ul className="contentList">
                                        <li>Est et in pharetra magna adipiscing ornare aliquam.</li>
                                        <li>Tellus arcu sed consequat ac velit ut eu blandit.</li>
                                        <li>Ullamcorper ornare in et egestas dolor orci.</li>
                                    </ul>
                                    <div className="d-flex justify-content-center">
                                    <button type='button' className='buttonSignThird'> Sign up now</button>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className=" decoVideoBack">
                                    <div className="screenDesktop">
                                        <div className="screenDesktopHeader">
                                            <img src="/assets/icons/circles.svg"/>
                                        </div>
                                        <div className="imageContainer">
                                            <img src="/assets/images/Video.svg"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
        </>
    )
}
export default ThirdSection