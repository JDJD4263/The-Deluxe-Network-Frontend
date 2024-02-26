import { nftLogoData } from "@/utils/nftlogo";

const NFTLogoSection = () => {
  return (
    <section className="bg-[#212428] relative">
      <div className="px-4 py-24 mx-auto max-w-[1440px] sm:px-6">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-0">
          {nftLogoData.map((item) => (
            <div
              key={item.id}
              className="px-11 py-8 flex justify-center items-center rounded-lg cursor-pointer bg-[#282B2F] hover:bg-opacity-5 transition duration-300 ease-in-out"
              style={{
                border: "solid 0.0625rem rgb(66 63 63 / 90%)",
                boxShadow: "1px 1px 8px 1px rgb(0 0 0 / 30%)",
              }}
            >
              <div className="flex flex-col gap-2 text-center">
                <img
                className="mx-auto"
                  src={item.imageSrc}
                  height={70}
                  width={70}
                  alt={`Image ${item.id}`}
                />
                <p className="text-white">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NFTLogoSection;