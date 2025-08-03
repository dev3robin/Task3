import './App.css'
import { useTranslation } from 'react-i18next'

import { useEffect, useRef, useState } from 'react';
import {applySavedTheme,toggleTheme} from '../public/utils/theme'
import gsap from "gsap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


function App() {
  const { t, i18n}=useTranslation();
  const changeLanguage = (lang:string) => {
    i18n.changeLanguage(lang);
    setlangOpen(!langOpen)
    switch (lang) {
      case 'en':
        setactiveLang(0);
        break;
      case 'bn':
        setactiveLang(1);
        break;
      case 'fr':
        setactiveLang(2);
        break;
      case 'ar':
        setactiveLang(3);
        break;
      default:
        console.warn('Unsupported language:', lang);
    }

  };
  const lang=[
    {lang:"English",code:'en'},
    {lang:"Bangla",code:'bn'},
    {lang:"France",code:'fr'},
    {lang:"Arabic",code:'ar'},]
  const [langOpen, setlangOpen] = useState<boolean>(false)
  const [activeLang, setactiveLang] =useState<number>(0)
  const handleLangOpen=()=>{
    setlangOpen(!langOpen)
  }
  useEffect(() => {
    applySavedTheme()
  }, []);

  const navRef = useRef(null);
  const sectionRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const h3Ref = useRef(null);
  const pRef = useRef(null);
  const sRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
      );
    }
    if (h1Ref.current) {
      gsap.fromTo(
        h1Ref.current,
        { opacity: 0, x: 300 },
        { opacity: 1, x: 0, duration: 1.5, ease: 'power2.out' }
      );
    }
    if (h2Ref.current) {
      gsap.fromTo(
        h2Ref.current,
        { opacity: 0, x: -300 },
        { opacity: 1, x: 0, duration: 1.5, ease: 'power2.out' }
      );
    }
    if (h3Ref.current) {
      gsap.fromTo(
        h3Ref.current,
        { opacity: 0, x: 300 },
        { opacity: 1, x: 0, duration: 1.5, ease: 'power2.out' }
      );
    }
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 300 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
      );
    }
    if (pRef.current) {
      gsap.fromTo(
        pRef.current,
        { opacity: 0, y: 300 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
      );
    }
    if (sRef.current) {
      gsap.fromTo(
        sRef.current,
        { opacity: 0, y: 300 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
      );
    }
  }, []);
  return (
    <div className='max-w-[1440px] mx-auto '>
      <main className='bg-[var(--background)] text-[var(--text)]'>
        <nav ref={navRef} className='px-5 z-100 py-3 flex items-center justify-between border-b-2 border-gray-600 rounded-b-2xl bg-transparent backdrop-blur-2xl top-0 w-full'>
          <h1 className='text-2xl font-extrabold'>{t("nav.intro")}</h1>
          <div className='flex'>
            <div className='relative group'>
              <button className='flex items-center gap-.5 p-1 pl-2 rounded hover:bg-gray-200' onClick={()=>toggleTheme()}>
                <div className='flex flex-col gap-[2px]'>
                  <div className='flex gap-[2px]'>
                    <div className='bg-purple-600 h-[6px] w-[6px] rounded-xs'></div>
                    <div className='bg-blue-600 h-[6px] w-[6px] rounded-xs'></div>
                  </div>
                  <div className='flex gap-[2px]'>
                    <div className='bg-orange-400 h-[6px] w-[6px] rounded-xs'></div>
                    <div className='bg-green-600 h-[6px] w-[6px] rounded-xs'></div>
                  </div>
                </div>
                <img src="../public/chevron.svg" alt="" />
              </button>
              <span className='absolute text-xs bg-[var(--btnHC)] text-nowrap p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-150'>{t("nav.Themespan")}</span>
            </div>
            <div className='relative group'>
              <button 
                onClick={handleLangOpen}
                className='flex items-center gap-.5 p-1 pl-2 rounded hover:bg-gray-200'>
                  <img src="../public/globe .svg" alt="" />
                  <img src="../public/chevron.svg" alt="" />
              </button>
              <ul className={`absolute bg-[var(--btnHC)] z-100 px-2 py-1 right-1 rounded top-6 ${langOpen?"":"hidden"}`}>
                {lang.map((lng,index)=>
                  <li  className={`px-1 cursor-pointer rounded 
                    ${index === activeLang ? "bg-purple-400" : "hover:bg-amber-200"
                  }`} onClick={() => changeLanguage(lng.code)}>{lng.lang}</li>)}
              </ul>
              <span
                className={`absolute text-xs bg-[var(--btnHC)] text-nowrap p-1 rounded transition-opacity duration-150 ${
                  langOpen ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                {t("nav.Lang")}
              </span>          
            </div>
          </div>
        </nav>
        <section className='px-5'>
          <div className=".rajdhani-semibold flex text-center  flex-col items-center justify-center gap-5
            mt-[20%] mb-[15%]">
            <h2 ref={h1Ref}  className="text-[clamp(1.5rem,6vw,4rem)]">Hello,</h2>
            <h1 ref={h2Ref} className="text-[clamp(3rem,10vw,6rem)]">I'm Rabin Molla</h1>
            <h1 ref={h3Ref} className="text-[clamp(2rem,5vw,5rem)]">
              A <span className="text-[#FF004F]">Web Developer</span>
            </h1>
            <p ref={pRef}  className="text-md">{t("section0.p")}</p>

            <div ref={sectionRef}  >
              <a href="https://portfolio-green-mu-85.vercel.app/">
                <button className="bg-[#ff0051c8] w-fit px-6 py-3 rounded-2xl flex items-center gap-2">
                  {t("section0.btn")}<ArrowRightAltIcon />
                </button>
              </a>
            </div>
          </div>
        </section>
        <section  className='flex flex-col items-center'>
          <div ref={sRef} className='h-[400px] max-w-[1260px] overflow-hidden'>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500 }}
              spaceBetween={30}
              slidesPerView={1}
            >
              <SwiperSlide><img className="w-full max-h-[400px] object-cover"src="/images/kid.png" alt="Slide 3" /></SwiperSlide>
              <SwiperSlide><img className="w-full max-h-[400px] object-cover"  src="/images/plane.jpg" alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img className="w-full max-h-[400px] object-cover" src="/images/boat.jpg" alt="Slide 3" /></SwiperSlide>
              <SwiperSlide><img className="w-full max-h-[400px] object-cover" src="/images/car.jpg" alt="Slide 1" /></SwiperSlide>
              <SwiperSlide><img className="w-full max-h-[400px] object-cover"src="/images/fan.png" alt="Slide 3" /></SwiperSlide>
            </Swiper>
          </div>
          <header className='px-5 font-bold text-2xl mt-12 mb-5'>{t("section1.BulletLine")}</header>
          <p className='px-5'>
            {t("section1.p")}
          </p>
        </section>
        <section className='px-5 my-10'>
          <div className='flex flex-col md:flex-row gap-5'>
            <header className='font-extrabold text-3xl flex text-center items-center'>{t("section2.qoute1")}</header>
            <img  src="/images/web.jpg" className='max-h-[400px] max-w-[500px] ' alt="" />
          </div>
          <div className='flex flex-col md:flex-row mt-15 gap-5'>
            <img  src="/images/art.jpg" className='max-h-[400px] ' alt="" />
            <header className='text-2xl font-bold text-center flex items-center'>{t("section2.qoute2")}</header>
          </div>
          <header className='font-bold text-2xl mt-12 mb-5'>{t("section2.bulletline")}</header>
          <p className=''>{t("section2.p")}</p>
        </section>
        <section className='px-5'>
          <div className='flex flex-col md:flex-row gap-5'>
            <header className='text-2xl font-bold flex text-center items-center'>{t("section3.qoute1")}</header>
            <div className='flex flex-col w-[1200px]' >
              <div className='flex'>
                <img src="./images/football.jpg" className='w-[16%] md:w-[400px] max-h-[200px]' alt="" />
                <img src="./images/cricket.jpg"  className='w-[18%] md:w-[400px] max-h-[200px]' alt="" />
              </div>
              <div className='flex'>
                <img src="./images/cycling.jpg"  className='w-[16%] md:w-[400px] max-h-[200px]' alt="" />
                <img src="./images/badminton.jpg"  className='w-[18%] md:w-[400px] max-h-[200px]' alt="" />
              </div>
            </div>
          </div>
          <header className='font-bold text-2xl mt-12 mb-5'>{t("section3.bulletline")}</header>
          <p className='mb-20'>{t("section3.p")}</p>
        </section>
      </main>
    </div>
  )
}

export default App
