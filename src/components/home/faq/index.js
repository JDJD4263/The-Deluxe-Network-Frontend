import { useRouter } from "next/navigation";

const { Disclosure } = require("@headlessui/react");
const faqs = [
  {
    question: "What is the contract address for $TLN?",
    answer:
      "The contract address for $TLN is 0xDd1Ddd4D978ac0BaEF4bfa9C7E91853bFcE90F11",
  },
  {
    question: "Where can I buy $TLN?",
    answer:
      "$TLN is available on Bitmart, Ascendex, Lbank, Uniswap. Be sure to check official channels for any updates on new listings and platforms where $TLN will be available.",
  },
  {
    question: "Is $TLN listed on LiveCoinWatch or CoinGecko?",
    answer:
      "Yes! You can track the price, volume, and other important metrics for $TLN on{' '}
      <a href="https://www.livecoinwatch.com/price/TheLuxNetwork-_TLN" target="_blank" rel="noopener noreferrer">
        LiveCoinWatch
      </a> and{' '}
      <a href="https://www.coingecko.com/en/coins/the-lux-network" target="_blank" rel="noopener noreferrer">
        CoinGecko
      </a>. Keep an eye on these platforms for the latest market updates.",
  },
  {
    question: "Is $TLN a deflationary token?",
    answer:
      "Yes, $TLN has a deflationary mechanism in place, with a portion of each transaction burned or used to support tokenomics. This helps reduce supply over time, potentially increasing scarcity and value as demand grows.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FAQSection = () => {
  const router = useRouter()
  return (
    <section className="bg-[#212428] relative" id="faq">
      <div className="flex flex-col gap-6 px-4 mx-auto max-w-[1440px] sm:px-6">
        <h1 className="text-5xl font-bold text-center text-primary-purple">
          FAQ
        </h1>
        <p className="max-w-5xl mx-auto text-center text-white">
          Our FAQ section, is designed to provide you with quick and concise
          answers to the most common questions. We understand that you might
          have inquiries about our products/services, policies, and more. This
          curated list of frequently asked questions aims to save you time and
          provide clarity. If you can’t find the information you’re looking for
          here, feel free to reach out to our friendly support team for
          assistance.
        </p>
        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6 ">
              {({ open }) => (
                <div className={classNames(open ? "rounded-lg" : "", "p-2")}>
                  <dt className="text-lg">
                    <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-300">
                      <span className="font-medium text-primary-purple">
                        {faq.question}
                      </span>
                      <span className="flex items-center ml-6 h-7">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={classNames(
                            open ? "-rotate-180" : "rotate-0",
                            "h-6 w-6 transform"
                          )}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="pr-12 mt-2">
                    <p className="text-base text-gray-200">{faq.answer}</p>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
          <div className="w-full pt-4 text-center">
            <button className="w-2/6 py-3 mx-auto border-none rounded-lg outline-none bg-primary-purple" onClick={() => router.push("/faq-2")}>
              Show More
            </button>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default FAQSection;
