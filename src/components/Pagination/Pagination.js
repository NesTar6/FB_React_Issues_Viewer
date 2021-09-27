import React from 'react'


export default function Pagination(props) {
    return (
        <div className="pagination_station">
            <button id="previous" className="previous" disabled={props.prevDisabled} onClick={()=>{props.setPage(--props.page)}}>Previous</button>
                <p id="page" className="page">{props.page}</p>
            {props.nextButton}
        </div>
    )
}