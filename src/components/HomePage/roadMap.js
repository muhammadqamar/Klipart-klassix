import React from "react"
import { Accordion } from "react-bootstrap"

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
            <h4>December 2021 </h4>
          </Accordion.Header>
          <Accordion.Body>
            <div className="collapse-content">
              <ul>
                <li className="px-2">Create the Klipart Klassix collection</li>
                <li className="px-2">Create Discord and Twitter accounts</li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h4>January 2022</h4>
          </Accordion.Header>
          <Accordion.Body>
            <div className="collapse-content">
              <ul>
                <li className="px-2">Klipart Klassix website launch</li>
                <li className="px-2">Reveal Roadmap</li>
                <li className="px-2">Start marketing campaign</li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h4>February 2022</h4>
          </Accordion.Header>
          <Accordion.Body>
            <div className="collapse-content">
              <ul>
                <li className="px-2">
                  Ramp up marketing on Discord and Twitter
                </li>
                <li className="px-2">
                  Secure final list of Whitelist addresses
                </li>
                <li className="px-2">
                  Add Traits and finalised Klipart Klassix NFTs to Candy Machine
                </li>
                <li className="px-2">LAUNCH!</li>
                <li className="px-2">
                  Get verified on marketplaces (Magic Eden being primary
                  exchange)
                </li>
                <li className="px-2">
                  Confirm official rarities with Moonrank / Howrare
                </li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h4>March 2022</h4>
          </Accordion.Header>
          <Accordion.Body>
            <div className="collapse-content">
              <ul>
                <li className="px-2">
                  Implement Discord verification of Klipart Klassix holders
                </li>
                <li className="px-2">Launch giveaways!</li>
                <li className="px-2">Floor sniping giveaways!</li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h4>Q2 2022</h4>
          </Accordion.Header>
          <Accordion.Body>
            <div className="collapse-content">
              <ul>
                <li className="px-2">
                  Complete and send out physical artwork for anyone who collects
                  a full collection of Klipart Klassix NFTs before the end of
                  June 2022.
                </li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Faq
