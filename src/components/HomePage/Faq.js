import React from "react"

const RoadMap = () => {
  return (
    <div id="faqs" className=" spacing-cont" style={{ color: "#ccc" }}>
      <h1 className="main-heading">FAQs</h1>

      <div className="">
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl tracking-tight">
          How do I get a Pesky Penguin?
        </h3>
        <div className="mt-2">
          <p className="my-2">
            Our initial mint is over, but that doesn't mean you can't get a
            Pesky Penguin! Penguin lovers like you are trading their noots on
            the open market.
          </p>
          <p className="my-2">
            Head to one of these marketplaces to pick up a Pesky Penguin of your
            very own:
          </p>
          <p className="my-2">
            <ul className="list-inside ml-4">
              <li className="list-disc">
                <a
                  style={{ color: "#e2be6f" }}
                  href="https://www.magiceden.io/marketplace?collection_symbol=pesky_penguins"
                  className="text-sky-600 hover:text-sky-700 cursor-pointer font-semibold"
                  target="_blank"
                  rel="noreferrer"
                >
                  Magic Eden
                </a>
              </li>
              <li className="list-disc">
                <a
                  style={{ color: "#e2be6f" }}
                  href="https://digitaleyes.market/collections/Pesky%20Penguins"
                  className="text-sky-600 hover:text-sky-700 cursor-pointer font-semibold"
                  target="_blank"
                  rel="noreferrer"
                >
                  DigitalEyes
                </a>
              </li>
              <li className="list-disc">
                <a
                  style={{ color: "#e2be6f" }}
                  href="https://alpha.art/collection/pesky-penguins"
                  className="text-sky-600 hover:text-sky-700 cursor-pointer font-semibold"
                  target="_blank"
                  rel="noreferrer"
                >
                  Alpha Art
                </a>
              </li>
              <li className="list-disc">
                <a
                  style={{ color: "#e2be6f" }}
                  href="https://ftx.us/nfts/issuer/Pesky%20Penguins"
                  className="text-sky-600 hover:text-sky-700 cursor-pointer font-semibold"
                  target="_blank"
                  rel="noreferrer"
                >
                  FTX
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="flex flex-col my-4 w-full ">
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl tracking-tight">
          How many Pesky Penguins are there?
        </h3>
        <div className="mt-2">
          <p className="my-2">
            There were 8888 Pesky Penguins when our initial mint completed.
            Since then, the Snowball has started rolling, and some Penguins are
            no longer with us 😔
          </p>
          <p className="my-2">
            <p>
              To remember our fallen bretheren, head on over to our{" "}
              <span className="text-sky-700 cursor-pointer" href="/graveyard">
                Graveyard
              </span>{" "}
              page.
            </p>
          </p>
        </div>
      </div>
      <div className="flex flex-col my-4 w-full ">
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl tracking-tight">
          How does The Snowball work?
        </h3>
        <div className="mt-2">
          <p className="my-2">
            The Snowball is the account with which the Pesky Penguins Candy
            Machine is signed. It has the authority to burn any Penguins it
            owns.
          </p>
          <p className="my-2">
            Periodically, we will head over to verified marketplaces and "sweep
            the floor" (buy the cheapest penguins available) using the Snowball
            account.
          </p>
          <p className="my-2">
            <p>
              Every penguin The Snowball takes posession of will be burned,
              taking it out of circulation. To see which noots have been removed
              from the total supply, visit our{" "}
              <span className="text-sky-700 cursor-pointer" href="/graveyard">
                Graveyard
              </span>{" "}
              page.
            </p>
          </p>
        </div>
      </div>
      <div className="flex flex-col my-4 w-full ">
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl tracking-tight">
          Is there an aftermarket sales royalty?
        </h3>
        <div className="mt-2">
          <p className="my-2">
            Yes; royalties enable The Snowball! Every Pesky Penguin traded on
            the open market is subject to a 5% royalty, which is divided as
            follows:
          </p>
          <p className="my-2">
            <ul className="list-inside">
              <li className="list-disc">2% to The Snowball</li>
              <li className="list-disc">3% to the dev team</li>
            </ul>
          </p>
          <p>
            The dev team royalties are used to cover recurring fees such as web
            hosting and domain registration, to cover income tax for both the
            Snowball and team wallets, and are used to support the ongoing
            development of the project. Snowball funds are used ONLY for
            reducing the overall supply of Penguins.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RoadMap
