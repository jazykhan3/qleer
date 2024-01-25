import img2 from "../Assets/hero-img-1.png";
import img1 from "../Assets/hero-img-2.svg";

function Hero() {
  return (
    <>
      <div className="flex flex-col gap-24 md:gap-6 md:flex-row justify-center items-center bg-[#070707] py-8 px-4 md:px-6 xl:px-24">
        <div className="flex flex-col gap-20 justify-start items-start">
          <h2 className="text-white text-xl font-semibold text-start">Qleer</h2>
          <p className="text-white max-w-[468px] text-lg">
            Avec une expertise solide dans la maitrise de l’energie et la
            comformite technique, notre entreprise s’engage a offirir une
            experience de qualite superieure et une transparence inegalee a nos
            clients. Forts de notre partenariat avec des eladers de l’industrie
            energetique, noun nous efforcous de fournir des solutions de
            renovation ernergetique de pointe, precises et adaptes
          </p>
          <img src={img1} alt="_bg" />
        </div>
        <div className="flex flex-col-reverse md:flex-col gap-8 justify-start items-center">
          <img src={img2} alt="_bg" />
          <p className="max-w-[550px] text-white font-bold sm:text-right text-4xl">
            ANALYSE APPROFONDIE PREVISIONS DE PERFORMANCE SCENARIOS
            PERSONNALISES ACCOMPANEMENT EXPERT VISIBLE COMPLETE
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
