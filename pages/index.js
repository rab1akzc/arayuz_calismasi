import Head from 'next/head';
import Header from '../components/head';
import FirstSection from '@/components/firstSection';
import SecondSection from '@/components/secondSection';
import ThirdSection from '@/components/thirdSection';
import FourthSection from '@/components/fourthSection';
import FifthSection from '@/components/fifthSection';

export default function Home() {
  return (
    <div>
       <Head>
          <title>Collectible Sneakers</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
     
        <Header />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection/>
    </div>


  )
}