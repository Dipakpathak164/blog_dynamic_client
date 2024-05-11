import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-md-8">
          <div className="post_contents">
             <div className="post_img">
                <img src="https://images.pexels.com/photos/1353126/pexels-photo-1353126.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-100' />
             </div>
             <div className="post_auth d-flex align-items-center my-3">
                <div className='auth_img'>
                <img src="https://images.pexels.com/photos/1353126/pexels-photo-1353126.jpeg?auto=compress&cs=tinysrgb&w=600" className='' />
                </div>
                <div>
                    <h5>John Doe</h5>
                    <p>posted 2 days ago</p>
                </div>
                <div className='update_icons ms-3'>
                <FontAwesomeIcon className='edit' icon={faEdit} /> {/* Use the faSyncAlt icon for the "update" icon */}
                <FontAwesomeIcon className='delete' icon={faTrashAlt} /> {/* Use the faSyncAlt icon for the "update" icon */}
                </div>
             </div>
             <div className="post_desc">
                 <h1 className="post_title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsa vitae ducimus alias?
                 </h1>
                 <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio ullam, impedit natus architecto optio voluptatem saepe corporis vero labore doloribus voluptate. Nisi recusandae amet perspiciatis velit dolor, maiores vero inventore molestiae asperiores, qui ab possimus, numquam temporibus consectetur ipsa maxime provident dolorem ut nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis autem, velit odio facilis asperiores sed cum? Architecto temporibus hic laboriosam, voluptatem molestias optio! Similique vero voluptas illo odit, consectetur, temporibus animi labore fugiat nemo ex, quos amet! Error, ratione dolorum? Qui ad pariatur rerum quo quae rem veniam, earum nisi voluptate quibusdam magnam sed cum quidem exercitationem libero id ut animi dignissimos! Consectetur exercitationem culpa voluptas. Vel non accusantium atque explicabo nisi similique minima eius mollitia laudantium facere tempore numquam animi fugiat magnam, vero iusto esse repudiandae officia unde quae quam! Temporibus fugit tempora facere accusamus delectus enim magnam.
                 </p>
             </div>
          </div>
        </div>
       <Menu/>
      </div>
    </div>
  )
}

export default Single
