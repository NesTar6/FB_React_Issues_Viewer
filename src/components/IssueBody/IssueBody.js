import React from 'react'
import ReactMarkdown from 'react-markdown'
import './IssueBody.css'

export default function IssueBody(props) {

    return (
        <div>
            <div className='issue_header'>
                <h2> {props.issue.title} </h2>
                <h3>{props.issue.state}</h3>
                <p>Opened by {props.issue.user.login} on {props.date} • {props.commentData.length} comments </p>
            </div>

            <div className="body_text">
                <ReactMarkdown>
                    {props.issue.body}
                </ReactMarkdown>
            </div>
        </div>
    )
}