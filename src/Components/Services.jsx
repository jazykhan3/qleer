import icon1 from "../Assets/service-icon-1.svg";
import icon2 from "../Assets/service-icon-2.svg";
import icon3 from "../Assets/service-icon-3.svg";
import bg1 from "../Assets/service-bg-1.svg";
import bg2 from "../Assets/service-bg-2.svg";

function Services() {
  const services = [
    {
      
      icon: icon1,
      heading: "Consultation",
      description:
        "Fiabilité, expertise, simplicité: notre approche pour la transition énergétique. Nous utilisons des données de confiance pour des solutions techniques simples,",
    },
    {
      shadow:true,
      icon: icon2,
      heading: "Etude",
      description:
        "Fiabilité, expertise, simplicité: notre approche pour la transition énergétique. Nous utilisons des données de confiance pour des solutions techniques simples,",
    },
    {
      icon: icon3,
      heading: "Realisation",
      description:
        "Fiabilité, expertise, simplicité: notre approche pour la transition énergétique. Nous utilisons des données de confiance pour des solutions techniques simples,",
    },
  ];
  return (
    <>
      <div className="flex justify-end iems-end w-full">
        <img src={bg2} alt="_bg" className="absolute mt-[-689px]" />
      </div>
      <div className="flex flex-col gap-16 justify-center items-center py-12 px-4 md:px-6 xl:px-24">
        {/* <img src={bg1} alt="_bg" className="absolute mt-[569px]" /> */}
        <div className="flex flex-col justify-center items-center gap-2 z-[1] max-w-[949px]">
          <p className="text-[#7DDA6F] text-2xl leading-normal">SERVICES</p>
          <div className="flex flex-col justify-center items-center gap-3 max-w-[#949px]">
            <p className="text-[#100530] text-6xl font-bold leading-[70px] text-center">
              Nos Services
            </p>
            <p className="text-[#586487] text-[20px] leading-normal text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 z-[1]">
          {services.map((item) => (
            <div style={item?.shadow ?{ boxShadow:'0px 60px 120px 0px #77769C2E'} : {}} className="flex flex-col gap-6 justify-center items-center bg-white px-[36px] py-16 rounded-xl lg:max-w-[460px]">
              <img src={item.icon} alt="_icon" />
              <div className="flex flex-col justify-center items-center gap-5">
                <p className="text-black text-[40px] font-bold leading-normal text-center">
                  {item.heading}
                </p>
                <p className="text-[#586487] text-[20px] leading-normal text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
