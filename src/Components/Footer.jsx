import logo from "../Assets/light-logo.svg";
import discordIcon from "../Assets/discord-icon.svg";
import twitterIcon from "../Assets/twitter-icon.svg";
import youtubeIcon from "../Assets/youtube-icon.svg";
import tiktokIcon from "../Assets/tiktok-icon.svg";

function Footer() {
  return (
    <>
      <div className="flex justify-between items-center gap-6 flex-wrap bg-black pt-[50px] md:pt-[254px] pb-20 px-4 md:px-6 xl:px-24">
        <div className="flex flex-col gap-16 justify-start items-start max-w-[518px]">
          <div className="flex flex-col gap-8 justify-start items-start">
            <img src={logo} alt="_logo" />
            <p className="text-[#C5C5C5] text-lg leading-normal">
              Fiabilité, expertise, simplicité: notre approche pour la
              transition énergétique. Nous utilisons des données de confiance
              pour des solutions techniques simples,
            </p>
          </div>
          <p className="text-[#C5C5C5] text-base leading-normal">
            @2022 <span className="text-[#7DDA6F]">QLEER</span> All rights
            reserved.
          </p>
        </div>
        <div className="flex gap-32 flex-wrap">
          <div className="flex flex-wrap gap-24 justify-start items-start">
            <div className="flex flex-col gap-12 justify-start items-start">
              <p className="text-[#7DDA6F] text-xl font-bold leading-normal">
                QUICK LINKS
              </p>
              <div className="flex flex-col gap-2 justify-start items-start">
                <p className="text-[#C5C5C5] text-lg leading-normal">
                  Get Support
                </p>
                <p className="text-[#C5C5C5] text-lg leading-normal">Staking</p>
                <p className="text-[#C5C5C5] text-lg leading-normal">
                  Accelerator
                </p>
                <p className="text-[#C5C5C5] text-lg leading-normal">
                  Buy Axion
                </p>
                <p className="text-[#C5C5C5] text-lg leading-normal">Vote</p>
                <p className="text-[#C5C5C5] text-lg leading-normal">
                  Contact Us
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-12 justify-start items-start">
              <p className="text-[#7DDA6F] text-xl font-bold leading-normal">
                RESOURCES
              </p>
              <div className="flex flex-col gap-2 justify-start items-start">
                <p className="text-[#C5C5C5] text-lg leading-normal">
                  Whitepaper
                </p>
                <p className="text-[#C5C5C5] text-lg leading-normal">
                  Brand Guide
                </p>
                <p className="text-[#C5C5C5] text-lg leading-normal">
                  Knowledge Base
                </p>
                <p className="text-[#C5C5C5] text-lg leading-normal">
                  Dextools Chart
                </p>
                <p className="text-[#C5C5C5] text-lg leading-normal">
                  CoinGecko Chart
                </p>
                <p className="text-[#C5C5C5] text-lg leading-normal">
                  Github Code
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12 justify-start items-start">
            <p className="text-[#7DDA6F] text-xl font-bold leading-normal">
              FOLLOW US
            </p>
            <div className="flex flex-wrap gap-2 justify-start items-start">
              <img src={discordIcon} alt="_socialmedia" />
              <img src={twitterIcon} alt="_socialmedia" />
              <img src={youtubeIcon} alt="_socialmedia" />
              <img src={tiktokIcon} alt="_socialmedia" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
