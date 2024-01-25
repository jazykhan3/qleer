import img1 from "../Assets/project-img-1.svg";
import img2 from "../Assets/project-img-2.svg";
import img3 from "../Assets/project-img-3.svg";
import circleBg from "../Assets/project-bg-circle.svg";

function Projects() {
  const projects = [
    {
      title: "Case Study Title",
      description:
        "Fiabilité, expertise, simplicité: notre approche pour la transition énergétique. Nous utilisons des données",
      img: img1,
    },
    {
      title: "Case Study Title",
      description:
        "Fiabilité, expertise, simplicité: notre approche pour la transition énergétique. Nous utilisons des données",
      img: img2,
    },
    {
      title: "Case Study Title",
      description:
        "Fiabilité, expertise, simplicité: notre approche pour la transition énergétique. Nous utilisons des données",
      img: img3,
    },
  ];
  return (
    <>
      <img
        src={circleBg}
        alt="_bg"
        className="absolute ml-[-417px] mt-[-222px]"
      />
      <div className="flex flex-col gap-16 justify-center items-center py-12 px-4 md:px-6 xl:px-24">
        <div className="flex flex-col justify-center items-center gap-2 z-[1] max-w-[949px]">
          <p className="text-[#7DDA6F] text-2xl leading-normal">CASE STUDY</p>
          <div className="flex flex-col justify-center items-center gap-3 max-w-[#949px]">
            <p className="text-[#100530] text-6xl font-bold leading-[70px] text-center">
              Our Projets
            </p>
            <p className="text-[#586487] text-[20px] leading-normal text-center">
              Fiabilité, expertise, simplicité: notre approche pour la
              transition énergétique. Nous utilisons des données de confiance
              pour des solutions techniques simples,
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-8 flex-col lg:flex-row z-[1]">
          {projects.map((item) => (
            <div className="flex flex-col max-w-[460px] rounded-3xl">
              <img src={item.img} alt="_projectImg" />
              <div className="flex flex-col gap-8 justify-start items-start px-6 py-8">
                <div className="flex flex-col gap-3">
                  <p className="text-[#100530] text-3xl font-bold leading-normal">
                    {item.title}
                  </p>
                  <p className="text-[#586487] text-[20px] leading-normal">
                    {item.description}
                  </p>
                </div>
                <p className="text-[#105244] text-[20px] font-bold cursor-pointer leading-normal">
                  VIEW FULL CASE STUDY
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
