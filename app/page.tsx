import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { SiGmail } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center gap-16 md:32 p-8 pt-32 lg:p-32 xl:p-64'>
      
      <section id='home'>
        <div className='flex flex-col md:flex-row items-center gap-4'>
          <div className='text-center'>
            <h1 className='font-bold text-xl md:text-2xl'>{`Hi! I'm Sear John Venturina`}</h1>
            <p className='text-md md:text-xl'>Software Engineer</p>
          </div>
          <Image
            className='rounded-full'
            src='https://lh3.googleusercontent.com/a/ACg8ocKiwO6eQdDsD5ahXVgzgAA6QjHdcYm9-V9qVoJ14Qe_nHIeoUc=s288-c-no'
            alt={`Searj's picture`}
            width={200}
            height={200}
            priority
          />
        </div>
      </section>

      <section id='aboutme'>
        <div className='grid gap-4 text-center'>
          <h1 className='font-bold text-2xl'>About Me</h1>
          <div className='grid md:grid-cols-2 md:flex-row justify-center items-center gap-4'>
            <Card className='flex flex-col items-center justify-center p-8'>
              <Image
                className='rounded-full'
                src='https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png'
                alt={`Searj's certificate`}
                width={150}
                height={150}
                priority
              />
              <h4 className='text-xl font-bold'>Certification</h4>
              <p className='text-md'>AWS Certified Associate Developer</p>
            </Card>

            <Card className='flex flex-col items-center justify-center p-8'>
              <Image
                className='rounded-full'
                src='https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png'
                alt={`Searj's technologies`}
                width={150}
                height={150}
                priority
              />
              <h4 className='text-xl font-bold'>Framework</h4>
              <p className='text-md'>6+ years ReactJS Development</p>
            </Card>
          </div>
          <p className='text-justify'>
            A senior front-end developer in ReactJS and Banking sector expert
            with 6 years of experience for writing, code reviewing and
            documenting codes using latest technologies to improve software
            quality. My job is very grounded in front and back-end development,
            but I was reasonably focused to makethesystem secure, maintainable
            and user-friendly. I have experience designing, implementing, and
            optimizing sophisticated web applications that not only satisfy
            business requirements but also comply with regulatory guidelines.
          </p>
        </div>
      </section>

      <section id='contactme'>
        <div className='grid gap-4 text-center'>
          <h1 className='font-bold text-2xl'>Contact Me</h1>
          <Card className='flex flex-col md:flex-row gap-4 p-8'>
            <div className='flex gap-2 items-center'>
              <SiGmail size={20} />
              <a href='mailto:venturinasearjohn@gmail.com'>
                venturinasearjohn@gmail.com
              </a>
            </div>

            <div className='flex md:flex-row gap-2 items-center'>
              <FaLinkedin size={20} />
              <a href='https://www.linkedin.com/in/sear-john-venturina-6b411813a/'>
                Sear John Venturina
              </a>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
