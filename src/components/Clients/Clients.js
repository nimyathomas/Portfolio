import React from 'react'
import "./Clients.css"
import adobe from "../../assets/adobe.png"
import microsoft from "../../assets/microsoft.png"
import walmart from "../../assets/walmart.png"

function Clients() {
  const clients = [
    {
      id: 1,
      image: adobe,
      name: "Adobe",
      description: "Worked on enterprise-level web applications"
    },
    {
      id: 2,
      image: microsoft,
      name: "Microsoft",
      description: "Developed cloud-based solutions and APIs"
    },
    {
      id: 3,
      image: walmart,
      name: "Walmart",
      description: "Built scalable e-commerce platforms"
    }
  ]

  return (
    <section id="clients">
      <span className="clientsTitle">Clients</span>
      <span className="clientsDesc">I've had the privilege of working with some amazing companies</span>
      
      <div className="clientsImgs">
        {clients.map((client) => (
          <div key={client.id} className="clientImg">
            <img src={client.image} alt={client.name} className="clientImage" />
            <div className="clientText">
              <h2>{client.name}</h2>
              <p>{client.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients





