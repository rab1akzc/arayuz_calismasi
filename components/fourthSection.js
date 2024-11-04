import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const FourthSection = () => {
    const [isMobile, setIsMobile] = useState(false);
    const carouselRef = useRef(null);

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.onClickNext();
        }
    };

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.onClickPrev();
        }
    };
    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            setIsMobile(windowWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
            <div className={isMobile !== true ? "container" : ""}>
                <section className="heroFourthSec">
                    <div className={isMobile !== true ? "container" : "containerFourthSec"}>
                        <div className="row w-100 mt-4">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                <h2 className="headerThirdSecTitle">Because they love us </h2>
                            </div>
                            {isMobile !== true ?
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex justify-content-end">
                                    <img src="/assets/icons/prevButton.svg" onClick={handlePrev} style={{ width: 40, height: 40, cursor: "pointer" }} />
                                    <img src="/assets/icons/nextButton.svg" onClick={handleNext} style={{ width: 40, height: 40, cursor: "pointer" }} />
                                </div> :
                                <></>}
                        </div>
                        <div className="fourthContainer">
                            <Carousel
                                ref={carouselRef}
                                showIndicators={false}
                                showStatus={false}
                                infiniteLoop
                                selectedItem={1}
                                showThumbs={false}
                                width='100%'
                                transitionTime={2000}
                                showArrows={false}
                                swipeable={false}
                                emulateTouch={true}
                                centerMode={true}
                                onClickThumb={false}
                                autoPlay={isMobile !== true ? false : true}
                                centerSlidePercentage={isMobile === true ? 99 : 28}
                                axis="horizontal"
                            >
                                 <div className="fourthCards">
                                    <div className="fourthCardsHeader">
                                        <h6 className="fourthCardTitle"><img src="/assets/icons/artVenue.svg" style={{ width: 30.4, height: 32, marginRight: 6 }} />ArtVenue</h6>
                                    </div>
                                    <div className="fourthCardsContent">
                                        <label className="fourthCardsText">
                                            Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.
                                        </label>
                                    </div>
                                    <div className="fourthCardsFooter">

                                        <div className="d-flex align-items-center ">
                                            <div className="me-3">
                                                <Image
                                                    src="/assets/images/users/hellen.svg"
                                                    alt="Hellen Jummy"
                                                    width={64}
                                                    height={64}
                                                    className="userThumb"
                                                />
                                            </div>
                                            <div>
                                                <h6 className="mb-0">Hellen Jummy</h6>
                                                <p className="text-muted mb-0">Tem Lead</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fourthCards">
                                    <div className="fourthCardsHeader">
                                        <h6 className="fourthCardTitle"><img src="/assets/icons/shells.svg" style={{ width: 30.4, height: 32, marginRight: 6 }} />SHELLS</h6>
                                    </div>
                                    <div className="fourthCardsContent">
                                        <label className="fourthCardsText">
                                            Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.
                                        </label>
                                    </div>
                                    <div className="fourthCardsFooter">

                                        <div className="d-flex align-items-center">
                                            <div className="me-3">
                                                <Image
                                                    src="/assets/images/users/hellena.svg"
                                                    alt="Hellena Jhon"
                                                    width={64}
                                                    height={64}
                                                    className="userThumb"
                                                />
                                            </div>
                                            <div>
                                                <h6 className="mb-0">Hellena Jhon</h6>
                                                <p className="text-muted mb-0">Co-founder</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="fourthCards">
                                    <div className="fourthCardsHeader">
                                        <h6 className="fourthCardTitle"><img src="/assets/icons/artVenue.svg" style={{ width: 30.4, height: 32, marginRight: 6 }} />ArtVenue</h6>
                                    </div>
                                    <div className="fourthCardsContent">
                                        <label className="fourthCardsText">
                                            Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.
                                        </label>
                                    </div>
                                    <div className="fourthCardsFooter">

                                        <div className="d-flex align-items-center ">
                                            <div className="me-3">
                                                <Image
                                                    src="/assets/images/users/david.svg"
                                                    alt="David Oshodi"
                                                    width={64}
                                                    height={64}
                                                    className="userThumb"
                                                />
                                            </div>
                                            <div>
                                                <h6 className="mb-0">David Oshodi</h6>
                                                <p className="text-muted mb-0">Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fourthCards">
                                    <div className="fourthCardsHeader">
                                        <h6 className="fourthCardTitle"><img src="/assets/icons/vawes.svg" style={{ width: 30.4, height: 32, marginRight: 6 }} />Vawes</h6>
                                    </div>
                                    <div className="fourthCardsContent">
                                        <label className="fourthCardsText">
                                            Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.
                                        </label>
                                    </div>
                                    <div className="fourthCardsFooter">
                                        <div className="d-flex align-items-center">
                                            <div className="me-3">
                                                <Image
                                                    src="/assets/images/users/charlotte.svg"
                                                    alt="Charolette Hanlin"
                                                    width={64}
                                                    height={64}
                                                    className="userThumb"
                                                />
                                            </div>
                                            <div>
                                                <h6 className="mb-0">Charolette Hanlin</h6>
                                                <p className="text-muted mb-0">CEO</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fourthCards">
                                    <div className="fourthCardsHeader">
                                        <h6 className="fourthCardTitle"><img src="/assets/icons/vawes.svg" style={{ width: 30.4, height: 32, marginRight: 6 }} />Vawes</h6>
                                    </div>
                                    <div className="fourthCardsContent">
                                        <label className="fourthCardsText">
                                            Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.
                                        </label>
                                    </div>
                                    <div className="fourthCardsFooter">
                                        <div className="d-flex align-items-center">
                                            <div className="me-3">
                                                <Image
                                                    src="/assets/images/users/charlotte.svg"
                                                    alt="Charolette Hanlin"
                                                    width={64}
                                                    height={64}
                                                    className="userThumb"
                                                />
                                            </div>
                                            <div>
                                                <h6 className="mb-0">Charolette Hanlin</h6>
                                                <p className="text-muted mb-0">CEO</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>


                    </div>

                </section>
            </div>

        </>
    )
}
export default FourthSection