import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import Ki from './style'
import './index.css'

const Item = props => {
  const {item} = props
  const {thumbnailUrl, videoUrl} = item

  console.log(item)
  return (
    <Popup modal trigger={<img src={thumbnailUrl} alt="thumbnail" />}>
      {close => (
        <div>
          <button type="button" data-testid="closeButton" onClick={close}>
            c <IoMdClose />
          </button>

          <ReactPlayer url={videoUrl} controls />
        </div>
      )}
    </Popup>
  )
}
export default Item
