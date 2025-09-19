import Stage from "./Stage";
const About = () => (
  <div className="flex md:flex-row flex-col bg-[#FFF]">
    <div className="flex flex-col justify-center items-start py-10 sm:px-28 px-12 md:w-[50%] w-[100%] gap-4">
      <p className="text-[#5C8692] font-manrope text-[15px] font-normal leading-[154.5%] tracking-wide uppercase">
        What Includes?
      </p>
      <h4 className="text-[#141414] font-playfair sm:text-[50px] text-[38px] font-semibold leading-[120%] tracking-tight ">
        About the service
      </h4>
      <p className="text-[#5C8692] font-manrope sm:text-[16px] text-[14px] font-normal leading-[154.5%] tracking-wide max-w-[530px]">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal these content
        here, making it look like readable English.
      </p>
      <p className="text-[#141414] font-playfair sm:text-[22px] text-[20px] font-semibold leading-[130%] tracking-tight">
        Our Methodology :
      </p>
      <Stage />
    </div>
    <img 
      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
      alt="About our service" 
      className="md:w-[50%] w-full md:object-cover object-contain" 
    />
  </div>
);

export default About;
