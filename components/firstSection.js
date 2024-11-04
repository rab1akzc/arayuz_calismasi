import React from 'react';
import Image from 'next/image';


const FirstSection = () => {
  return (
    <>
    <div className='container'>
    <section className="hero">
        <div className='row w-100'>
        <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12'>
          <div className="hero-content">
            <h1>Collectible Sneakers</h1>
            <label className='hero-text'>
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
              amet.
            </label>
            <div className="buttons">
              <button>
                Sign up now</button>
              <button>
                <img src='/assets/icons/play-circle.svg' className='me-1 mb-1' />Watch Demo</button>
            </div>
          </div>
        </div>
        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12'>
        <div className="hero-image">
            <Image
              src="/assets/images/sneaker.svg"
              alt="Sneaker"
              width={485}
              height={1}></Image>
          </div>
        </div>
        </div>
      </section>
      <section className='hero'>
        <div className='row w-100'>
        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12'>
          <div className='p-4'>
            <div className='iconGroup'>
            <img src='/assets/icons/RectangleIcon.svg' className=' iconBackFirstSec' />
            <img src='/assets/icons/Icon.svg' className='position-relative iconFirstSec' />
            </div>
            <div>
              <p className='subtitle m-2 ms-0'>Nibh viverra</p>
              <p className='text'>
                Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
              </p>
            </div>
          </div>

        </div>
        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12'>
          <div className='p-4'>
            <div className='iconGroup'>
            <img src='/assets/icons/RectangleTunel.svg' className='iconBackFirstSec' />
            <img src='/assets/icons/tunnel.svg' className='position-relative iconFirstSec' />
            </div>
            
            <div>
              <p className='subtitle m-2 ms-0'>Cursus amet</p>
              <p className='text'>
                Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
              </p>
            </div>
          </div>

        </div>
        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12'>
          <div className='p-4'>
            <div className='iconGroup'>
            <img src='/assets/icons/RectangleTv.svg' className='iconBackFirstSec'/>
            <img src='/assets/icons/tv.svg' className='position-relative iconFirstSec' />
            </div>           
            <div>
              <p className='subtitle m-2 ms-0'>Ipsum fermentum</p>
              <p className='text'>
                Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
              </p>
            </div>
          </div>

        </div>
        </div>
        
      </section>

    </div>

   

    </>
  )
}
export default FirstSection;