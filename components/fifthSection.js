import React, { useEffect, useState } from "react";

const FifthSection = () => {

    return (
        <>
            <div className="fifthContainerBack">
                <div className="container">
                    <section className="hero mt-4">
                        <div className="row w-100">
                            <h2 className="headerThirdSecTitle">Grow your collection</h2>
                            <div className="fifthContainerContent">
                                <label className="text">
                                    Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                                </label>
                                <label className="text">
                                    Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
                                </label>
                                <div className="fifthContainerMain">
                                    <div className="row w-100">
                                        <div className="col-12 col-md-5">
                                            <div className="navContainer">
                                                <div className="nav d-flex flex-row flex-md-column nav-tabs" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                    <a className="nav-link active" id="tab1-tab" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">
                                                        <img src="/assets/icons/fifthSection/search.svg" />Bibendum tellus
                                                        <img className="arrows" src="/assets/icons/fifthSection/arrow-right.svg" />
                                                    </a>
                                                    <a className="nav-link" id="tab2-tab" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">
                                                        <img src="/assets/icons/fifthSection/shield-check.svg" />Cras eget
                                                        <img className="arrows" src="/assets/icons/fifthSection/arrow-right.svg" />
                                                    </a>
                                                    <a className="nav-link" id="tab3-tab" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">
                                                        <img src="/assets/icons/fifthSection/rocket.svg" />Dolor pharetra
                                                        <img className="arrows" src="/assets/icons/fifthSection/arrow-right.svg" />
                                                    </a>
                                                    <a className="nav-link" id="tab4-tab" data-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false">
                                                        <img src="/assets/icons/fifthSection/screen.svg" />Amet, fringilla
                                                        <img className="arrows" src="/assets/icons/fifthSection/arrow-right.svg" />
                                                    </a>
                                                    <a className="nav-link" id="tab5-tab" data-toggle="tab" href="#tab5" role="tab" aria-controls="tab5" aria-selected="false">
                                                        <img src="/assets/icons/fifthSection/podcast.svg" />Amet nibh
                                                        <img className="arrows" src="/assets/icons/fifthSection/arrow-right.svg" />
                                                    </a>
                                                    <a className="nav-link" id="tab6-tab" data-toggle="tab" href="#tab6" role="tab" aria-controls="tab6" aria-selected="false">
                                                        <img src="/assets/icons/fifthSection/settings-alt.svg" /> Sed velit
                                                        <img className="arrows" src="/assets/icons/fifthSection/arrow-right.svg" />
                                                    </a>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-12 col-md-7">
                                            <div className="tab-content" id="v-pills-tabContent">
                                                <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                                                    <div className="tabScreens">
                                                        <div className="screenDesktopBack">
                                                            <div className="screenDesktopHeader">
                                                                <img src="/assets/icons/circles.svg" />
                                                            </div>
                                                            <div className="imageContainer">
                                                                <img src="/assets/images/Video.svg" />
                                                            </div>
                                                        </div>
                                                        <div className="screenDesktopBack newGPS" >
                                                            <div className="screenDesktopHeader">
                                                                <img src="/assets/icons/circles.svg" />
                                                            </div>
                                                            <div className="imageContainer">
                                                                <img src="/assets/images/cards2.svg" />
                                                            </div>
                                                        </div>
                                                        <img src="/assets/images/Picture.svg" className="imgScreen" />
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">

                                                </div>
                                                <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">

                                                </div>
                                                <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">

                                                </div>
                                                <div className="tab-pane fade" id="tab5" role="tabpanel" aria-labelledby="tab5-tab">

                                                </div>
                                                <div className="tab-pane fade" id="tab6" role="tabpanel" aria-labelledby="tab6-tab">

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="fifthEnd">
                <div className="container">
                    <section className="hero d-flex justify-content-center">
                        <img src="/assets/images/chart.svg" className="position-relative imgChart" />
                        <img src="/assets/images/Ellipses.svg" className="position-absolute imgEllipses" />
                        <div className="comments">
                            <img src="/assets/images/emma.svg" />
                        </div>
                        <div className="tooltipChart">
                            <p>Emma Simpson collected one pair of <span>Cool Shoes.</span>
                            </p>
                        </div>
                        <div className="d-block position-absolute">
                            <h1 className="collectionNumber">11,658,467</h1><br />
                            <h2 className="collectionText">Shoes Collected</h2>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default FifthSection