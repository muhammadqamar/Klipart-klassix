import React from "react"
import { Accordion, Item, Header } from "react-bootstrap"

const Faq = () => {
  return (
    <div id="roadmap" className="container">
      <h1 className="main-heading">Roadmap</h1>
      <Accordion
        defaultActiveKey={["0"]}
        alwaysOpen
        style={{ marginBottom: "40px" }}
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <p>2021 September (Complete!)</p>
            <p>(4/4)</p>
          </Accordion.Header>
          <Accordion.Body>
            <div class="collapse-content">
              <ul>
                <li class="px-2">✅ Create the Penguins!</li>
                <li class="px-2">✅ Create Twitter account</li>
                <li class="px-2">✅ Stand up Discord</li>
                <li class="px-2">✅ Discord Giveaways!</li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2021 October (Complete!)</Accordion.Header>
          <Accordion.Body>
            <div class="collapse-content">
              <ul>
                <li class="px-2">✅ Pesky Penguins website</li>
                <li class="px-2">✅ Reveal roadmap</li>
                <li class="px-2">✅ Add Penguins to Candy Machine</li>
                <li class="px-2">✅ Initial Penguin sale!</li>
                <li class="px-2">✅ Get verified on marketplaces</li>
                <li class="px-2">✅ The Snowball starts rolling</li>
                <li class="px-2">✅ Discord bot for marketplace sales</li>
                <li class="px-2">✅ Launch giveaways!</li>
                <li class="px-2">✅ Build the Penguin Graveyard</li>
                <li class="px-2">
                  ✅ Implement Discord verification for Pengu holders
                </li>
                <li class="px-2">✅ Build Official Rarity Tool</li>
                <li class="px-2">✅ Halloween Giveaway!</li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>2021 November (Complete!)</Accordion.Header>
          <Accordion.Body>
            <div class="collapse-content">
              <ul>
                <li class="px-2">✅ Snowball Scripting</li>
                <li class="px-2">✅ Pesky Penguin Lore</li>
                <li class="px-2">✅ Thanksgiving giveaways!</li>
                <li class="px-2">✅ NOOTVEMBER SPECIAL EVENT</li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>2021 December (Complete!)</Accordion.Header>
          <Accordion.Body>
            <div class="collapse-content">
              <ul>
                <li class="px-2">✅ Implement Devblog</li>
                <li class="px-2">✅ Hire Mysterious Dev</li>
                <li class="px-2">✅ High-res artwork update (metadata v4)</li>
                <li class="px-2">✅ Winter Solstice Giveaways</li>
                <li class="px-2">✅ Matrica.io Discord integration</li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>2022 January (In-Progress)</Accordion.Header>
          <Accordion.Body>
            <div class="collapse-content">
              <ul>
                <li class="px-2">✅ NootDAO Discord integration</li>
                <li class="px-2">✅ Metadata v5 update</li>
                <li class="px-2">✅ Website roadmap refresh</li>
                <li class="px-2">🟦 Incorporation</li>
                <li class="px-2">🟦 Nootopia staking program: Devnet</li>
                <li class="px-2">⬛️ Audit Nootopia staking program</li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>2022 February (TODO)</Accordion.Header>
          <Accordion.Body>
            <div class="collapse-content">
              <ul>
                <li class="px-2">⬛️ Nootopia staking UI: Devnet</li>
                <li class="px-2">⬛️ Address program audit feedback</li>
                <li class="px-2">⬛️ Nootopia Whitepaper v1</li>
                <li class="px-2">⬛️ DEPLOY PENGUIN STAKING TO MAINNET</li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>2022 March (TODO)</Accordion.Header>
          <Accordion.Body>
            <div class="collapse-content">
              <ul>
                <li class="px-2">⬛️ Release first Nootopia land NFTs</li>
                <li class="px-2">⬛️ Release first property upgrades</li>
                <li class="px-2">⬛️ Allow users to mint land with $PESKY</li>
                <li class="px-2">⬛️ Allow users to upgrade land</li>
                <li class="px-2">⬛️ REVEAL SECRET</li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>FUTURE (TODO)</Accordion.Header>
          <Accordion.Body>
            <div class="collapse-content">
              <ul>
                <li class="px-2">⬛️ Release first Nootopia land NFTs</li>
                <li class="px-2">⬛️ Release first property upgrades</li>
                <li class="px-2">⬛️ Allow users to mint land with $PESKY</li>
                <li class="px-2">⬛️ Allow users to upgrade land</li>
                <li class="px-2">⬛️ REVEAL SECRET</li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Faq
