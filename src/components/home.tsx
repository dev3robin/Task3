
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Home = () => {
  return (
    <div className=".rajdhani-semibold flex text-center  flex-col items-center justify-center gap-5
    mt-[20%] mb-[15%]">
      <h2 className="text-[clamp(1.5rem,6vw,4rem)]">Hello</h2>
      <h1 className="text-[clamp(3rem,10vw,6rem)]">I'm Rabin Molla</h1>
      <h1 className="text-[clamp(2rem,5vw,5rem)]">
        A <span className="text-[#FF004F]">Web Developer</span>
      </h1>
      <p className="text-md">
       I’m a passionate Web Developer focused on building responsive, 
       user-friendly websites and applications using modern 
       technologies like HTML, CSS, JavaScript, React, and Tailwind CSS.
        I enjoy turning complex problems into clean, efficient, and 
        interactive web experiences. With a strong foundation in 
        frontend development and a growing interest in backend and API 
        integration, I’m committed to writing maintainable code and 
        continuously learning to stay up-to-date in this fast-evolving 
        field.
      </p>

      <div>
        <button className="bg-[#FF004F] w-fit px-6 py-3 rounded-2xl flex items-center gap-2">
          View Portfolio <ArrowRightAltIcon />
        </button>
      </div>
    </div>
  );
};

export default Home;
