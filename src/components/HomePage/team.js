import React from "react"
import "./style/styles.scss"
import { cards } from "../dummyData"

const Team = () => {
  return (
    <div id="team" className="team-cantaner container">
      <h1 className="main-heading">Team</h1>
      <div className="team-card">
        {cards.map(item => {
          return (
            <div className="card">
              <img className="card-img" src={item.Auth_img} alt="klipart" />
              <div className="card-detail">
                <h4 className="card-name">{item.Auth_Name}</h4>
                <h6 className="card-cat">{item.Auth_cat}</h6>
                <p className="about">
                  Runs the Discord. Runs the Twitter. Runs the contests. Writes
                  the Lore. Draws Island Boiz pengus and posts them online
                  (sorry not sorry).
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Team
