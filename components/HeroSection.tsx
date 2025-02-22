import Image from 'next/image'
import Link from 'next/link';
import TextFade from './TextFade';


const HeroSection = () => {

  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extra-bold mb-4">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I&apos;m{" "}</span>
            <br />
            <TextFade />
          </h1>
          <p className='text-gray-300 mb-6 text-base sm:text-lg lg:text-xl'>
            I&apos;m a self taught frontend web developer looking for job/internship opportunities.
          </p>
          <div>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                <Link href="/images/nati_cv.pdf">Download CV</Link>
              </span>
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full w-[200px] md:w-[300px] h-[200px] md:h-[300px] overflow-hidden mt-0 lg:mt-8'>
            <Image 
              src="/images/cvpic.jpg"
              alt='hero'
              height={300}
              width={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection