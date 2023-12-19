import Slider from 'react-slick'
import Item from '../MovieItem/index'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Sldea = props => {
  const {moviesList} = props
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplaySpeed: 2000,
    autoplay: true,
  }
  return (
    <Slider {...settings}>
      {moviesList.map(each1 => (
        <Item item={each1} key={each1.id} />
      ))}
    </Slider>
  )
}

export const Sldec = props => {
  const {moviesList} = props
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplaySpeed: 2000,
    autoplay: true,
  }
  return (
    <Slider {...settings}>
      {moviesList.map(each1 => (
        <Item item={each1} key={each1.id} />
      ))}
    </Slider>
  )
}
