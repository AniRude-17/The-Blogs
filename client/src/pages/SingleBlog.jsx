import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
const SingleBlog = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src="https://picsum.photos/900/900"/>
        <div className="user">
          <img src="https://picsum.photos/100/100"/>
          <div className="info">
            <span>By Rude</span>
            <p>Posted 449 days ago</p>
          </div>
          <div className="edit">
            <Link to="/write?edit=2">
              Edit
            </Link>
            <Link to="/write?edit=2">
              Delete
            </Link>
          </div>
        </div>
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae lacus id massa faucibus fermentum. Aliquam id mollis nibh. Cras nec leo tellus. Nunc tortor ipsum, dictum ut lorem id, hendrerit hendrerit diam. Nulla venenatis augue at turpis porta sodales. Nulla urna leo, dapibus eget turpis eget, faucibus laoreet justo. Donec mattis augue quis luctus accumsan. Etiam posuere ligula ac efficitur aliquet. Sed tortor tellus, tincidunt sit amet ipsum id, iaculis commodo ligula.

Quisque feugiat tempus vehicula.<br/><br/> Aliquam semper quis lectus id varius. Sed libero metus, vestibulum non feugiat a, elementum ac felis. Donec nec sem lobortis, suscipit mi vitae, dignissim velit. Sed at vulputate ipsum. Pellentesque blandit dapibus imperdiet. Praesent laoreet libero ut metus tincidunt imperdiet. Duis placerat nibh non justo ultrices, vel porta justo aliquam. Duis sodales velit ut lacus posuere suscipit. Vestibulum ac tortor ut massa tristique faucibus. Vivamus eleifend ut turpis ac posuere.

In sed tortor auctor, ultricies metus sit<br/><br/> amet, finibus velit. In hac habitasse platea dictumst. Aenean aliquet porta porttitor. Etiam pellentesque lobortis sem sed blandit. Duis ac tincidunt libero. Donec efficitur turpis vel mi pharetra, eget suscipit tortor rutrum. Sed feugiat purus in gravida suscipit. Curabitur eget ligula et neque suscipit convallis sed id neque.

Class aptent taciti sociosqu<br/><br/> ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Maecenas tristique ante lorem, sit amet consectetur nulla pulvinar at. Fusce finibus consequat orci, finibus placerat tellus fringilla ac. Nunc sed ipsum eget arcu lacinia pellentesque. Proin ac felis sem. Vestibulum non elit ipsum. Etiam sodales, justo ac imperdiet convallis, libero nibh egestas nibh, id ultricies enim tellus nec diam. Ut tincidunt semper ex, ultrices imperdiet sapien venenatis ac. Praesent erat arcu, vulputate nec hendrerit ut, hendrerit vitae ipsum.

Integer tincidunt sollicitudin leo, et placerat neque sodales ac. <br/> <br/>Ut pretium tellus fringilla mi sagittis varius. Pellentesque vulputate justo sit amet magna sagittis rhoncus. Integer ut lectus semper enim hendrerit sollicitudin. Nulla ac augue lacus. Ut finibus semper sem aliquam ornare. Morbi eget tempus lacus, id scelerisque lorem. Mauris tellus odio, commodo sed lacinia in, laoreet vitae elit. Donec magna lorem, commodo eu ipsum a, hendrerit rhoncus massa. Phasellus lectus est, consectetur non dui id, dignissim dapibus velit. Nunc eget ipsum ullamcorper, blandit magna et, ultrices nisi. Proin posuere sem odio, id tincidunt leo dapibus vel. In finibus semper imperdiet. Nunc aliquam imperdiet nunc viverra tincidunt. Fusce quis malesuada orci, quis pretium mauris. Vestibulum ornare pellentesque massa non aliquet.</p>
      </div>
    <Menu/>
    </div>
  )
}

export default SingleBlog