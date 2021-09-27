import React from "react";
import { useLocation  } from "react-router-dom";
import axios from 'axios'

import Comment from '../Comment/Comment'
import IssueBody from '../IssueBody/IssueBody'

import './Issues.css'

const Issue = () => {
const location = useLocation()
const { data, date} = location.state
const [commentData, setCommentData] = React.useState([])
let issue = data
let issueData;

React.useEffect(() => {
    axios.get(issue.comments_url)
    .then(response => setCommentData(response.data))
    .catch(error => console.log(error));
},[issue.comments_url])

  if (issue) {
    issueData = (
    <div>
      <div className='issue_body'>
        <IssueBody issue={issue} commentData={commentData} date={date}/>
      </div>
      
      <div  className='issue_body'>
        <h2>Comments</h2>
        {commentData.map((comment) => {
            return (
                <Comment comment={comment} />
            )
        })}
      </div>
    </div> 
    );
  } else {
    issueData = <h2> Sorry. Issue doesn't exist </h2>;
  }

  return (
    <div>
      <div>{issueData}</div>
    </div>
  );
};

export default Issue;