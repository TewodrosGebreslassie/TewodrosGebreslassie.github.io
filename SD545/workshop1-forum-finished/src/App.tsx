import { ChangeEvent, useRef, useState } from "react";
import classNames from "classnames";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

import "./App.scss";
import avatar from "./images/bozai.png";
import { defaultList, Comment, tabs, user } from "./allData";

const App = () => {
  const [commentList, setCommentList] = useState<Comment[]>(_.orderBy(defaultList, "like", "desc"));
  const [activeType, setActiveType] = useState("hot");

  const [inputValue, setInputValue] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const deleteComment = (rpid: number | string) => {
    setCommentList(commentList.filter((item) => item.rpid !== rpid));
  };

  const changeActiveType = (type: string) => {
    setActiveType(type);

    if (type === "hot") {
      setCommentList(_.orderBy(commentList, "like", "desc"));
    } else {
      setCommentList(_.orderBy(commentList, "ctime", "desc"));
    }
  };

  const handleInputValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);

    console.log(e.target.value);
  };

  const makePost = () => {
    // console.log(textareaRef.current?.value);
    // do another version: controlled component
    const newComment = {
      rpid: uuidv4(),
      user,
      // content:textareaRef.current!.value, //uncontrolled component
      content: inputValue, //controlled component
      ctime: dayjs(Date.now()).format("MM-DD HH:mm"),
      like: 0,
    };

    setCommentList([...commentList, newComment]);
    // textareaRef.current!.value = '';
    setInputValue("");
    //textareaRef.current!.focus();
  };

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
            {tabs.map((tab) => (
              <span
                key={tab.type}
                className={classNames("nav-item", { active: tab.type === activeType })}
                onClick={() => changeActiveType(tab.type)}
              >
                {tab.text}
              </span>
            ))}
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
              ref={textareaRef}
              onChange={handleInputValue}
              value={inputValue}
              className="reply-box-textarea"
              placeholder="tell something..."
            />
            {/* post button */}
            <div className="reply-box-send" onClick={makePost}>
              <div className="send-text">post</div>
            </div>
          </div>
        </div>
        {/* comment list */}
        <div className="reply-list">
          {/* comment item */}
          {commentList.map((item) => (
            <div className="reply-item" key={item.rpid}>
              {/* profile */}
              <div className="root-reply-avatar">
                <div className="bili-avatar">
                  <img className="bili-avatar-img" alt="" />
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
                    <span className="reply-time">Like:{item.like}</span>

                    {item.user.uid === user.uid && (
                      <span className="delete-btn" onClick={() => deleteComment(item.rpid)}>
                        Delete
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
