import React, { useState, useEffect } from 'react'

function Footer() {
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
            {isMobile !== true ? <>
                <div className='footer'>
                    <div className='container'>
                        <div className='footerContainer'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='row'>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <label className='footerTitle'>Product</label>
                                        <ul className='footerList'>
                                            <li><a className='link' href='/pricing'>Pricing</a></li>
                                            <li><a className='link' href='/overview'>Overview</a></li>
                                            <li><a className='link' href='/browse'>Browse</a></li>
                                            <li><a className='link' href='/accessibility'>Accessibility</a></li>
                                            <li><a className='link' href='/five'>Five</a></li>
                                        </ul>
                                    </div>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <label className='footerTitle'>Solutions</label>
                                        <ul className='footerList'>
                                            <li><a className='link' href='/brainstorming'>Brainstorming</a></li>
                                            <li><a className='link' href='/ideation'>Ideation</a></li>
                                            <li><a className='link' href='/wireframing'>Wirefrraming</a></li>
                                            <li><a className='link' href='/research'>Research</a></li>
                                            <li><a className='link' href='/design'>Design</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='row'>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <label className='footerTitle'>Support</label>
                                        <ul className='footerList'>
                                            <li> <a className='link' href='/contact-us'>Contact Us</a></li>
                                            <li> <a className='link' href='/developers'>Developers</a></li>
                                            <li> <a className='link' href='/documentation'>Documetation</a></li>
                                            <li> <a className='link' href='/integration'>Integrations</a></li>
                                            <li> <a className='link' href='/report'>Report</a></li>
                                        </ul>
                                    </div>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <label className='footerTitle'>Get the App</label>
                                        <ul className='footerList'>
                                            <li>
                                                <a href='https://www.apple.com/tr/app-store/' target='_blank'>
                                                    <img src="/assets/images/footer/appStore.svg" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href='https://play.google.com/store' target='_blank'>
                                                    <img src="/assets/images/footer/googlePlay.svg" />
                                                </a>
                                            </li>
                                            <li>
                                                Follow Us
                                            </li>
                                            <li>
                                                <a target='_blank' href='https://www.youtube.com'><img src='/assets/icons/footer/Vector.svg' /></a>
                                                <a target='_blank' href='https://www.facebook.com'><img src='/assets/icons/footer/facebook.svg' /></a>
                                                <a target='_blank' href='https://www.twitter.com'><img src='/assets/icons/footer/twitter.svg' /></a>
                                                <a target='_blank' href='https://www.instagram.com'><img src='/assets/icons/footer/instagram.svg' /></a>
                                                <a target='_blank' href='https://www.linkedin.com'><img src='/assets/icons/footer/linkedin.svg' /></a>

                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-6">
                                <label className='footerText'>Collers @ 2023. All rights reserved.</label>
                            </div>
                            <div className='col-6 d-flex justify-content-end'>
                                <ul className='footerContainerList'>
                                    <li><a className='link' href='/terms' target='_blank'>Terms</a></li>
                                    <li><a className='link' href='/privacy' target='_blank'>Privacy</a></li>
                                    <li><a className='link' href='/contact' target='_blank'>Contact</a></li>
                                    <li><a className='link' href='/'>  <img src="/assets/icons/footer/world.svg" />EN</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </> : <>  <div className='footer'>
                <div className='container container-sm'>
                    <div className='footerContainer'>
                        <div className='row w-100'>
                            <div className='col-12'>
                                <label className='footerTitle'>Product</label>
                                <ul className='footerList'>
                                    <li><a className='link' href='/pricing'>Pricing</a></li>
                                    <li><a className='link' href='/overview'>Overview</a></li>
                                    <li><a className='link' href='/browse'>Browse</a></li>
                                    <li><a className='link' href='/accessibility'>Accessibility</a></li>
                                    <li><a className='link' href='/five'>Five</a></li>

                                    <label className='footerTitle'>Solutions</label>
                                    <li><a className='link' href='/brainstorming'>Brainstorming</a></li>
                                    <li><a className='link' href='/ideation'>Ideation</a></li>
                                    <li><a className='link' href='/wireframing'>Wirefrraming</a></li>
                                    <li><a className='link' href='/research'>Research</a></li>
                                    <li><a className='link' href='/design'>Design</a></li>

                                    <label className='footerTitle'>Support</label>
                                    <li> <a className='link' href='/contact-us'>Contact Us</a></li>
                                    <li> <a className='link' href='/developers'>Developers</a></li>
                                    <li> <a className='link' href='/documentation'>Documetation</a></li>
                                    <li> <a className='link' href='/integration'>Integrations</a></li>
                                    <li> <a className='link' href='/report'>Report</a></li>
                                    <label className='footerTitle'>Get the App</label>
                                    <li>
                                        <a href='https://www.apple.com/tr/app-store/' target='_blank'>
                                            <img src="/assets/images/footer/appStore.svg" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://play.google.com/store' target='_blank'>
                                            <img src="/assets/images/footer/googlePlay.svg" />
                                        </a>
                                    </li>
                                    <li>
                                        Follow Us
                                    </li>
                                    <li>
                                        <a target='_blank' href='https://www.youtube.com'><img src='/assets/icons/footer/Vector.svg' /></a>
                                        <a target='_blank' href='https://www.facebook.com'><img src='/assets/icons/footer/facebook.svg' /></a>
                                        <a target='_blank' href='https://www.twitter.com'><img src='/assets/icons/footer/twitter.svg' /></a>
                                        <a target='_blank' href='https://www.instagram.com'><img src='/assets/icons/footer/instagram.svg' /></a>
                                        <a target='_blank' href='https://www.linkedin.com'><img src='/assets/icons/footer/linkedin.svg' /></a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                    <div className='row w-100'>
                        <div className='col-12 mb-4'>
                            <label className='footerText justify-content-center'>Collers @ 2023. All rights reserved.</label>
                        </div>
                        <div className='col-3'>
                            <a className='link' href='/terms' target='_blank'>Terms</a>
                        </div>
                        <div className='col-3'>
                            <a className='link' href='/privacy' target='_blank'>Privacy</a>
                        </div>
                        <div className='col-3'>
                            <a className='link' href='/contact' target='_blank'>Contact</a>
                        </div>
                        <div className='col-3'>
                            <a className='link' href='/'>  <img src="/assets/icons/footer/world.svg" />EN</a>
                        </div>
                    </div>
                </div>

            </div>
            </>}


        </>
    )
}
export default Footer