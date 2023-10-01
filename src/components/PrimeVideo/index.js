// Write your code here

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'
import './index.css'

const settings = {
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
}

const PrimeVideo = props => {
  const {moviesList} = props
  return (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-img"
      />
      <div className="movies-container">
        <h1 className="heading">Action Movies</h1>
        <Slider {...settings}>
          {moviesList.map(eachItem => {
            if (eachItem.categoryId === 'ACTION') {
              return <MovieItem key={eachItem.id} eachItem={eachItem} />
            }
            return ''
          })}
        </Slider>
      </div>
      <div className="movies-container">
        <h1 className="heading">Comedy Movies</h1>
        <Slider {...settings}>
          {moviesList.map(eachItem => {
            if (eachItem.categoryId === 'COMEDY') {
              return <MovieItem key={eachItem.id} eachItem={eachItem} />
            }
            return ''
          })}
        </Slider>
      </div>
    </div>
  )
}

export default PrimeVideo
