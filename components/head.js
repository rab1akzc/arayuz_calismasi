import React, { useEffect, useState } from 'react';


const Header = () => {
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
                <div className='container'>
                    <header className="header">
                        <div className='row w-100'>
                        <div className='col-6'>
                            <div className="titlePage">Collers</div>
                        </div>
                        <div className='col-6'>
                            <nav className="nav">
                                <div className='btn-group' role='group'>
                                    <a href='/products' type='button' className='btn btn-nav-group'>Products</a>
                                    <a href='/solutions' type='button' className='btn btn-nav-group'>Solutions</a>
                                    <a href='/pricing' type='button' className='btn btn-nav-group'>Pricing</a>
                                    <a href='/resources' type='button' className='btn btn-nav-group'>Resources</a>
                                    <a href='/login' type='button' className='btn btn-nav-group'>Login</a>
                                    <a href='/sign-up' type='button' className='btn btn-nav-group-sign'> Sign up now</a>
                                </div>
                            </nav>
                        </div>
                        </div>
                      
                    </header>
                </div>
            </> : <nav class="navbar">
                <div class="container">
                    <a class=" titlePage" href="#">Collers</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <img src='/assets/icons/menu-scale.svg' />
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title titlePage" id="offcanvasNavbarLabel">
                                Collers
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/products" className='btn btn-nav-group'>Products</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/solutions" className='btn btn-nav-group'>
                                        Solutions
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/pricing" className='btn btn-nav-group'>
                                        Pricing
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/resources" className='btn btn-nav-group'>
                                        Resources
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/login" className='btn btn-nav-group'>Login
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/sign-up" className='btn btn-nav-group-sign'> Sign up now
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            }
        </>
    )

}
export default Header