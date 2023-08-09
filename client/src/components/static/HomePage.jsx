import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';

function HomePage() {
  const loggedIn = useSelector(state => state.user.loggedIn)
  const artwork = useSelector(state => state.user.entities.artworks)
  
  const showArt = artwork.map(artwork => (
    <Carousel.Item key={artwork.id}>
      <img 
      className='Artwork-Card'
      alt={artwork.id}
      src={artwork.image}
      />
    </Carousel.Item>
  ))

  return (
        <div>
          {loggedIn && artwork[0] ? 
          <Carousel>
            {showArt}
          </Carousel>
          :
          <div>
          <h1>Galla</h1>
          <img alt='Home-image' src='https://media.istockphoto.com/id/1218961153/photo/art-museum.jpg?s=612x612&w=0&k=20&c=9fK54fu1mjzFjDOSqg_jfrMy4Hkp8vsmImB7rLrbhJs='></img>
          <p>Welcome to Galla! Galla is a site to store information about your favorite artists and their art pieces. After signup, use the Artists tab to find and save artists with an artwork that other users have added. Use the My Artists tab to see artists and their artwork that you have saved. All artwork saved will be loaded onto this homepage. Enjoy!</p>
          </div>
          
          }
        </div>
  )
}

export default HomePage