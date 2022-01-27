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
            <div key={item.Auth_Name} className="card">
              <img className="card-img" src={item.Auth_img} alt="klipart" />
              <div className="card-detail">
                <h3 className="card-name">{item.Auth_Name}</h3>
                <p className="card-cat">{item.Auth_cat}</p>
                <p className="about">{item.Auth_about}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Team
