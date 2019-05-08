import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free Cocktail",
        info:
          "Lorem ipsum dolar sit amet consectuener adinping elit, magni mand hand."
      },
      {
        icon: <FaHiking />,
        title: "free Hiking",
        info:
          "Lorem ipsum dolar sit amet consectuener adinping elit, magni mand hand."
      },
      {
        icon: <FaShuttleVan />,
        title: "free ShuttleVan",
        info:
          "Lorem ipsum dolar sit amet consectuener adinping elit, magni mand hand."
      },
      {
        icon: <FaBeer />,
        title: "free Beer",
        info:
          "Lorem ipsum dolar sit amet consectuener adinping elit, magni mand hand."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
