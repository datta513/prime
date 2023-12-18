import Sldea from '../MoviesSlider/index'

const PrimeVideo = props => {
  const {moviesList} = props
  const action = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedy = moviesList.filter(each => each.categoryId === 'COMEDY')
  console.log(action)
  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt=" prime video"
      />
      <div>
        <h1>Action Movies</h1>
        <Sldea action={action} />
      </div>
    </div>
  )
}

export default PrimeVideo
