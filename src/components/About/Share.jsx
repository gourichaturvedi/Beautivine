import { NavLink } from "react-router-dom";

const Share = () => (
  <div className="flex flex-col gap-4 items-center justify-center mt-24 mb-8 xl:px-0 px-6">
    <div className="flex md:flex-row flex-col gap-6 justify-center">
      <div className="flex flex-col items-start gap-2">
        <p className="text-[#5C8692] text-center font-manrope text-[15px] font-normal leading-[154.5%] tracking-wide uppercase">
          share US
        </p>
        <h4 className="text-[#141414] font-playfair sm:text-[50px] text-[40px] font-semibold leading-[120%] tracking-tight max-w-[650px]">
          Follow us on Instagram
        </h4>
        <p className="text-[#555] font-manrope sm:text-[18px] text-[15px] font-normal leading-[170%] max-w-[458px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, buying to injected
          humour, or randomized words many desktop publishing packages.
        </p>
        <img
          src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Instagram gallery"
          className="md:pt-6 pt-2 w-[500px] lg:h-[547px] md:h-[455px] rounded-sm ss:object-cover object-contain"
        />
      </div>
      <div className="md:flex flex-col gap-4 hidden">
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Beauty treatment"
          className="w-[644px] h-[380px] rounded-sm"
        />
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Spa experience"
          className="w-[644px] h-[380px] rounded-sm"
        />
      </div>
    </div>
  </div>
);

export default Share;
