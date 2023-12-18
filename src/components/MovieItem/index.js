import Popup from 'reactjs-popup'
import './index.css'

const Item = props => {
  const {item} = props
  const pop = () => {}
  console.log('entered')
  console.log(item)
  return (
    <Popup trigger=<img src={item.thumbnailUrl} onClick={pop} />>
      <h1>hello</h1>
    </Popup>
  )
}
export default Item
