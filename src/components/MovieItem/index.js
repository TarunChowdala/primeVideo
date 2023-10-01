// Write your code here
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {eachItem} = props
  return (
    <Popup
      modal
      trigger={
        <img
          src={eachItem.thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-img"
        />
      }
      className="popup"
    >
      {close => (
        <div className="video-content">
          <button
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
            className="close-button"
          >
            <IoMdClose />
          </button>
          <ReactPlayer
            url={eachItem.videoUrl}
            width="100%"
            height="90%"
            controls="true"
          />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
