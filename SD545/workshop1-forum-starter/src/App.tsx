import { useState } from 'react';
import './App.scss'
import avatar from './images/bozai.png'
import { user,defaultList, tabs} from './data/CommentUserData';


const App = () => {
  
const [commentList, setCommentList]= useState(defaultList);

const deleteComment=(rpid: number)=>{
  setCommentList(commentList.filter(item=>item.rpid !== rpid ))
}



  return (
    <div className="app">
    {/* Nav Tab */}
    <div className="reply-navigation">
      <ul className="nav-bar">
        <li className="nav-title">
          <span className="nav-title-text">Comments</span>
          {/* Like */}
          <span className="total-reply">{10}</span>
        </li>
        <li className="nav-sort">
          {/* highlight class name： active */}
          <span className='nav-item'>Top</span>
          <span className='nav-item'>Newest</span>
        </li>
      </ul>
    </div>

    <div className="reply-wrap">
      {/* comments */}
      <div className="box-normal">
        {/* current logged in user profile */}
        <div className="reply-box-avatar">
          <div className="bili-avatar">
            <img className="bili-avatar-img" src={avatar} alt="Profile" />
          </div>
        </div>
        <div className="reply-box-wrap">
          {/* comment */}
          <textarea
            className="reply-box-textarea"
            placeholder="tell something..."
          />
          {/* post button */}
          <div className="reply-box-send">
            <div className="send-text">post</div>
          </div>
        </div>
      </div>
      {/* comment list */}
      <div className="reply-list">
        {/* comment item */}
        {defaultList.map((item) => (
          <div className="reply-item" key={item.rpid}>
            {/* profile */}
            <div className="root-reply-avatar">
              <div className="bili-avatar">
                <img
                  className="bili-avatar-img"
                  src=''
                  alt=""
                />
              </div>
            </div>

            <div className="content-wrap">
              {/* username */}
              <div className="user-info">
                <div className="user-name">{item.user.uname}</div>
              </div>
              {/* comment content */}
              <div className="root-reply">
                <span className="reply-content">{item.content}</span>
                <div className="reply-info">
                  {/* comment created time */}
                  <span className="reply-time">{item.ctime}</span>
                  {/* total likes */}
                  <span className="reply-time">{item.like}</span>


                  {
                    item.user.uid === user.uid && (
                      <span className="delete-btn" onClick={() => deleteComment(item.rpid)}>
                        Delete
                      </span>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
  
}

export default App