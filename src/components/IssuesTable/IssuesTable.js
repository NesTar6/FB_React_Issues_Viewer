import React from 'react'
import './IssuesTable.css'
import { Link } from "react-router-dom";
import axios from 'axios'
import Pagination from '../Pagination/Pagination'

export default function IssuesTable() {

    const [issueData, setIssueData] = React.useState([])
    let [page, setPage] = React.useState(1)
    const [isLoading, setIsLoading] = React.useState(false)
    const [nextButton, setNextButton] = React.useState(<button id="next" className="next" disabled={true} onClick={()=>{setPage(++page)}}>Next</button>)
    
    let prevDisabled;

    page === 1 ?  prevDisabled = true : prevDisabled = false

    React.useEffect(() => {

            setIsLoading(true)
            setNextButton(<button id="next" className="next" disabled={false} onClick={()=>{setPage(++page)}}>Next</button>)
            axios.get(`https://api.github.com/repos/facebook/react/issues?page=${page}`)
            .then(response => {
                if(response.data.length < 30) {
                    setNextButton(<button id="next" className="next" disabled={true} onClick={()=>{setPage(++page)}}>Next</button>)
                }
                setIssueData(response.data)
                setIsLoading(false)
            })
            .catch(error => {console.log(error)});
        
    }, [page])

    if(isLoading) {
        return (
            <div className="issueTable">
                <Pagination prevDisabled={prevDisabled} page={page} setPage={setPage} nextButton={nextButton}/>
                <div style={{textAlign:'center', marginTop: '150px'}}>
                    Loading...
                </div>
            </div>
            
        )
    } else {
        return (
            <div className="issueTable">
                <Pagination prevDisabled={prevDisabled} page={page} setPage={setPage} nextButton={nextButton}/>
                <ul>
                    {issueData.map((issue) => {
        
                    let date = new Date(issue.created_at);
                    let year = date.getFullYear();
                    let month = date.getMonth()+1;
                    let dt = date.getDate();
        
                    if (dt < 10) {
                    dt = '0' + dt;
                    }
                    if (month < 10) {
                    month = '0' + month;
                    }
        
                    date = year+'-' + month + '-'+dt;
        
                    return (
                        <li key={issue.id}>
                             <div className="title_style">
                            <Link to ={{pathname: `/${issue.id}` , state:{data : issue, date : date}}} > 
                                <h4>{issue.title}</h4>
                            </Link>
                            <p>#{issue.number} Opened on {date} by {issue.user.login}</p>
                            </div>
                        </li>
                        );
                    })}
              </ul>
              <Pagination />
            </div>
        )}
    
    }