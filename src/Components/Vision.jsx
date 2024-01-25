import bg from "../Assets/vision-bg.svg";
import circleBg from "../Assets/service-bg-1.svg";

function Vision() {
  return (
    <>
      <img src={circleBg} alt="_bg" className="absolute ml-[-657px]" />
      <div className="flex flex-col justify-center items-center xl:flex-row gap-16 lg:gap-[200px] py-12 px-4 md:px-6 xl:px-24">
        <div className="xl:w-[50%] flex flex-col gap-16 justify-start items-start max-w-[580px]">
          <div className="flex flex-col gap-6 justify-start items-start">
            <p className="text-[#7DDA6F] text-2xl leading-normal">QLEER</p>
            <p className="text-[#100530] font-bold leading-[70px] text-4xl md:text-6xl">
              Notre vision
            </p>
            <p className="text-[#4C4C4C] text-2xl leading-normal">
              Fiabilité, expertise, simplicité : notre approche pour la
              transition énergétique. Nous utilisons des données de confiance
              pour des solutions techniques simples, réduisant l'empreinte
              carbone et optimisant la consommation. Des financements ciblés
              assurent la solidité et la faisabilité financière de ces actions.
            </p>
          </div>
          <button className="rounded bg-[#105244] py-4 px-6 text-white text-lg font-medium leading-normal">
            VIEW MORE
          </button>
        </div>
        <div>
          <img src={bg} alt="_bg" />
        </div>
      </div>
    </>
  );
}

export default Vision;
