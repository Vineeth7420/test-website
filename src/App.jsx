import React from 'react'
import Cards from './Components/cards'
import data from './data'
import Features from './Components/features'
import svg from './svg-section'
import Pages from './Components/pages'
import Navbar from './Components/navbar'
import Footer from './Components/footer'

export default function App() {

    const cards = data.map(item => {
        return(
            
            <Cards 
            key={item.id}
            img={item.img}
            header={item.header}
            author={item.author}
            />
        )
    })

    const features = svg.map(feature => {
        return (
            <Features 
            key={feature.id}
            svg={feature.svg}
            title={feature.title}
            description={feature.description}
            
            />
        )
    })

  return (
      
    <div>
        <Navbar />
        <Pages />
       <section className="cards-list">
            {cards}
        </section>
        <section className='features-list'>
            {features}
        </section>
        <Footer />
        
    </div>
  )
}

