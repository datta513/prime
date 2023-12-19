import {Sldea, Sldec} from '../MoviesSlider/index'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const action = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedy = moviesList.filter(each => each.categoryId === 'COMEDY')
  console.log(action)
  return (
    <div className="por">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt=" prime video"
      />
      <div>
        <div className="cons">
          <h1>Action Movies</h1>
          <Sldea moviesList={action} />
        </div>
        <div className="cons">
          <h1>Comedy Movies</h1>
          <Sldec moviesList={comedy} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
