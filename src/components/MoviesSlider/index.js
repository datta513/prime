import Slider from 'react-slick'
import Item from '../MovieItem/index'

const Sldea = props => {
  const {action} = props
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  }
  return (
    <Slider {...settings}>
      {action.map(each1 => (
        <Item item={each1} key={each1.id} />
      ))}
    </Slider>
  )
}

export default Sldea
