import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br/>design and code<br/>React apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-invision.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
        <Card 
          title="Design System" 
          text="10 sections"
          image={require('../images/card1.jpg')} />
        <Card 
          title="React for Designers" 
          text="12 sections"
          image={require('../images/card2.jpg')} />
        <Card 
          title="Sound Design" 
          text="5 sections"
          image={require('../images/card4.jpg')} />
        <Card 
          title="ARKit 2" 
          text="10 sections"
          image={require('../images/card6.jpg')} />
      </div>
    </div>
  </div>
)

export default IndexPage
