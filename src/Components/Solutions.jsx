import img from "../Assets/solution-bg.svg";

function Solutions() {
  return (
    <>
      <div className="flex flex-col xl:flex-row gap-32 justify-center items-center py-12 px-4 md:px-6 xl:px-24">
        <div>
          <img src={img} alt="_bg" />
        </div>
        <div className="xl:w-[50%] flex flex-col gap-16 justify-start items-start max-w-[580px]">
          <div className="flex flex-col gap-6 justify-start items-start">
            <p className="text-[#7DDA6F] text-2xl leading-normal">QLEER</p>
            <p className="text-[#100530] font-bold leading-[70px] text-6xl">
              Data précise, solutions sages
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
      </div>
    </>
  );
}

export default Solutions;
