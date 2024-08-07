const roadMaps = [
  {
    year: "2024",
    quarter: "Q1",
    description:
      "<p > LUX LAB EXPANSION & CROSS COLLABORATIONS <br /> <br /> NFT REWARD BOOSTER SYSTEM FOR PURCHASES <br /> <br /> AI INTEGRATION FOR LUX LIONS & TDN <br /> <br />  GROW SOCIAL MEDIA TO 5,000 <br /> <br />  GROW UNIQUE NFT HOLDERS TO 300 </p>",
  },
  {
    year: "2024",
    quarter: "Q2",
    description: `<p >
      IRL LUX LION MERCH
& DIGITAL INTEGRATION
<br /> <br />
BUILD NFT INTEGRATED
ONLINE GAMES
<br /> <br />
BUILD WEB3
INTEGRATED ONLINE
GAMES
<br /> <br />

EXPANSION INTO
ADDITIONAL METAVERSES
<br /> <br />

BUILD ADDITIONAL P2E GAMES
<br /> <br />

BRAND PARTNERSHIPS
<br /> <br />

GROW SOCIAL MEDIA TO
7,500
<br /> <br />
GROW UNIQUE NFT HOLDERS
TO 500 </p>`,
  },
  {
    year: "2024",
    quarter: "Q3",
    description: `<p >
      TLN EXCHANGE LISTING
<br /> <br />
NFT QUESTING PLATFORM
FOR COMMUNITY ENGAGEMENT
<br /> <br />
NFT STAKING PLATFORM
<br /> <br />
COREUM MINTING SITE & VIEWER
<br /> <br />
BUILD ADDITIONAL P2E GAMES AND 
NFT INTEGRATED WEB3 ONLINE GAMES
<br /> <br />
CROSS CHAIN FOR LUX LIONS NFTS
<br /> <br />
NFT PACK OPENINGS & PACK BREAKS FOR LUX LABS
<br /> <br />
NFT MINTING SITE ON XRPL
<br /> <br />
GROW SOCIAL MEDIA TO 10,000
<br /> <br />
GROW UNIQUE NFT HOLDERS
TO 750
      </p>`,
  },
  {
    year: "2024",
    quarter: "Q4",
    description: `<p >
      TLN TOKEN INTEGRATION 
      & AUTOMATION INTO P2E GAMES
<br /> <br />

TLN SELF SUSTAINING NFT 
SYSTEM FOR HOLDERS
<br /> <br />

TLN MARKETPLACE FOR ALL 
METAVERSE NEEDS
<br /> <br />

DYNAMIC MARKETPLACE 
& AI INTEGRATION
<br /> <br />

TLN MARKETPLACE 
INTEROPABILITY & ABILITY 
TO USE METAVERSE ITEMS CROSS 
PLATFORM
<br /> <br />

GROW SOCIAL MEDIA TO 15,000
<br /> <br />
GROW UNIQUE NFT HOLDERS
TO 1000

      </p>`,
  },
  {
    year: "2025",
    quarter: "Q1",
    description: `<p >
      AI ADVANCED DATA
TRAINING AND LONG TERM
MEMORY ENHANCEMENT
<br /> <br />

AI CRYPTO INTEGRATION &
SMART CONTRACT EXECUTION
<br /> <br />

AI AUTONOMOUS FUNCTIONAL
EXPANSION, IMPROVEMENT
& SCALABILITY
<br /> <br />
ADDITIONAL EXCHANGE 
LISTINGS FOR TLN TOKEN
<br /> <br />

BROW SOCIAL MEDIA TO 20,000
<br /> <br />
GROW UNIQUE NFT HOLDERS
TO 1250

      </p>`,
  },
];

const RoadMapCards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 mx-auto mt-8 md:grid-cols-2 lg:h-auto lg:mx-0 lg:max-w-none lg:grid-cols-5">
        {roadMaps.map((item, key) => {
          const { year, quarter, description } = item;
          return (
            <div key={key} style={{ opacity: 1, transform: "none" }}>
              <article className="relative block h-full px-8 overflow-hidden bg-purple-900 max-w-max md:max-w-md isolate rounded-2xl">
                <div className="flex items-center justify-center pt-6">
                  <div className=" max-w-max shrink-0">
                    <p className="text-4xl font-extrabold text-white">
                      {year} <span className="text-pink-400">{quarter}</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between my-6">
                  <div className="flex flex-wrap items-center overflow-hidden text-base leading-normal text-white gap-y-1">
                    <div className="flex items-center gap-x-4">
                      <div
                        className="flex text-center text-white"
                        dangerouslySetInnerHTML={{ __html: description }}
                      ></div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoadMapCards;
