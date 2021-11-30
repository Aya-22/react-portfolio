import React, { Component } from "react";
export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio" className="s-portfolio target-section">
        <div className="row s-portfolio__header">
          <div className="column large-12">
            <h3>Recent Projects</h3>
          </div>
        </div>
        <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
          <div className="column folio-item">
            <a href="https://jmarrufo27.github.io/Brewery_Roulette/" className="folio-item__thumb">
              <img 
                src="images/128243377-33446528-ddfa-4550-b299-9f76bc2d4b1e.png"
                srcSet="images/128243377-33446528-ddfa-4550-b299-9f76bc2d4b1e.png 1x, 
                images/128243377-33446528-ddfa-4550-b299-9f76bc2d4b1e.png 2x"
                alt=""
              />
            </a>
          </div>{" "}
          {/* end folio-item */}
          <div className="column folio-item">
            <a href="https://aya-22.github.io/generate-password/" className="folio-item__thumb">
              <img
                src="images/5827efd6fe2f95eab0f28b0d6d21306b.png"
                srcSet="images/5827efd6fe2f95eab0f28b0d6d21306b.png 1x, 
                images/5827efd6fe2f95eab0f28b0d6d21306b.png 2x"
                alt=""
              />
            </a>
          </div>{" "}
          {/* end folio-item */}
          <div className="column folio-item">
            <a href="https://aya-22.github.io/work-application/" className="folio-item__thumb">
              <img
                src="images/7c790d6bffcd9332870f1632440c32fb.png"
                srcSet="images/7c790d6bffcd9332870f1632440c32fb.png 1x, 
                images/7c790d6bffcd9332870f1632440c32fb.png 2x"
                alt=""
              />
            </a>
          </div>{" "}
          {/* end folio-item */}
          <div className="column folio-item">
            <a href="https://prestiges-worldwide-project.herokuapp.com/" className="folio-item__thumb">
              <img
                src="images/Prestige World Wide copy.jpeg"
                srcSet="images/Prestige World Wide copy.jpeg 1x, 
                images/Prestige World Wide copy.jpeg 2x"
                alt=""
              />
            </a>
          </div>{" "}
          {/* end folio-item */}
          <div className="column folio-item">
            <a href="https://workout-track18.herokuapp.com/" className="folio-item__thumb">
              <img
                src="images/workout.png"
                srcSet="images/workout.png 1x, 
                images/workout.png 2x"
                alt=""
              />
            </a>
          </div>{" "}
          
          {/* <div className="column folio-item">
            <a href="#modal-06" className="folio-item__thumb">
              <img
                src="images/portfolio/skaterboy.jpg"
                srcSet="images/portfolio/skaterboy.jpg 1x, 
                images/portfolio/skaterboy@2x.jpg 2x"
                alt=""
              />
            </a>
          </div>{" "}
          
          <div className="column folio-item">
            <a href="#modal-07" className="folio-item__thumb">
              <img
                src="images/portfolio/rucksack.jpg"
                srcSet="images/portfolio/rucksack.jpg 1x, 
                                 images/portfolio/rucksack@2x.jpg 2x"
                alt=""
              />
            </a>
          </div>
          
          <div className="column folio-item">
            <a href="#modal-08" className="folio-item__thumb">
              <img
                src="images/portfolio/sanddunes.jpg"
                srcSet="images/portfolio/sanddunes.jpg 1x, 
                                 images/portfolio/sanddunes@2x.jpg 2x"
                alt=""
              />
            </a>
          </div> */}
         
        </div>
       
      </section>
    );
  }
}
