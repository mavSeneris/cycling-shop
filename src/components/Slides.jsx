import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000',
  backgroundColor: 'transparent',
  color: 'white',
  fontSize: '2.5rem',
  fontWeight: '800',
  letterSpacing: '3px',
  fontStyle: 'italic',
  position: 'absolute',
  bottom: '50px',
  left: '0px',
  width: 'fit-content'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '80vh',
  position: 'relative'
}


const slideImages = [
  {
    url: 'https://images.prismic.io/maap/a22b8f56-0585-4142-b675-883adc1e66eb_OnBike_Man_Base_Layers.jpg?auto=compress,format',
    caption: '//New Arrivals>>'
  },
  {
    url: 'https://images.prismic.io/maap/91ef534b-cb7a-49b3-9408-4405b6b37217_OnBike_Woman_Base_Layers.jpg?auto=compress,format',
    caption: '//Shop Women>>'
  },
  {
    url: 'https://images.prismic.io/maap/9089c7c2-596e-42ee-bac8-5abbdf3c98ed_W_ContentBlock_LSJerseys.jpg?auto=compress,format',
    caption: '//Archive Sale>>'
  },
  {
    url: 'https://images.prismic.io/maap/29d5d8b3-6c87-491d-9928-51680f84b127_M_ContentBlock_Jerseys.jpg?auto=compress,format',
    caption: '//shop men>>'
  },
  {
    url: 'https://images.prismic.io/maap/a64bf36d-3f1e-4f22-b595-935557c3e167_OnBike_Man_LS_Tees.jpg?auto=compress,format',
    caption: '//our story>>'
  }
];

const Slides = () => {
  return (
    <div className="slide-container" >
      <Slide className='slide'>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div className='slide-image' style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              <span style={spanStyle} className='slide-caption'>{slideImage.caption.toUpperCase()}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}


export default Slides
