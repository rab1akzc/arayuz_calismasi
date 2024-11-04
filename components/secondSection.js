import React, { useState, useEffect } from 'react'

const secondSection = () => {
    const [isMobile, setIsMobile] = useState(false);


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
                <section className="heroSecondSec">
                    <div className='containerSecondSec mb-4'>
                        <div className='row w-100'>
                            <div className='col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12'>
                                <h2 className='titleSecondSec'>The Best Of The Best</h2>
                            </div>
                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 d-flex justify-content-center '>
                                <button type='button' className='buttonSignSecondSec'>Sign up now</button>
                            </div>
                        </div>

                        <div className='containerCardBackground mt-4'>
                            <div className='row w-100'>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className='secondSecCards'>
                                        <img src='/assets/images/cards1.svg' className='secondSecCardsImage' />
                                        <div>
                                            <h6 className='cardsTitle'>Title</h6>
                                            <label className='cardsText' >
                                                Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                                            </label>
                                        </div>
                                        <div>
                                            <button type='button' className='buyNowButton w-100'>
                                                <img src='/assets/icons/shopping-cart.svg' style={{ width: 24, height: 24 }} />Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className='secondSecCards'>
                                        <img src='/assets/images/cards2.svg' className='secondSecCardsImage' />
                                        <div>
                                            <h6 className='cardsTitle'>Title</h6>
                                            <label className='cardsText' >
                                                Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                                            </label>
                                        </div>
                                        <div>
                                            <button type='button' className='buyNowButton w-100'>
                                                <img src='/assets/icons/shopping-cart.svg' style={{ width: 24, height: 24 }} />Buy Now</button>

                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className='secondSecCards'>
                                        <img src='/assets/images/cards3.svg' className='secondSecCardsImage' />
                                        <div>
                                            <h6 className='cardsTitle'>Title</h6>
                                            <label className='cardsText'>
                                                Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                                            </label>
                                        </div>
                                        <div>
                                            <button type='button' className='buyNowButton w-100'>
                                                <img src='/assets/icons/shopping-cart.svg' style={{ width: 24, height: 24 }} /> Buy Now</button>

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
export default secondSection