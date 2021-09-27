import React from 'react'
import ReactMarkdown from 'react-markdown'
import './Comment.css'

export default function Comment(props) {

    let commentDate = new Date(props.comment.created_at);
    let year = commentDate.getFullYear();
    let month = commentDate.getMonth()+1;
    let dt = commentDate.getDate();

    if (dt < 10) {
    dt = '0' + dt;
    }
    if (month < 10) {
    month = '0' + month;
    }

    commentDate = year+'-' + month + '-'+dt;

    return (
        <div key={props.comment.id} className="comment_body_text">
            <div className="comment-header-text">
                <p>Comment by {props.comment.user.login} on {commentDate} </p>
            </div>
            <div style={{padding: '15px'}}>
                <ReactMarkdown>
                    {props.comment.body}
                </ReactMarkdown>
            </div>
        </div>
    )

}