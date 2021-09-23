import React from 'react'
import { useSelector } from 'react-redux'

export default function MoviesDetail() {
    const movieDetail = useSelector(state => state.movieDetail)
    return (
        <div>
            {!movieDetail && <h1>click on get Details</h1>}
            {movieDetail && <React.Fragment><h1>Movie Name: {movieDetail.title}</h1>
            <h1>Release Date:{movieDetail.releaseData}</h1>
            <h1>Rating: {movieDetail.rating}</h1></React.Fragment>}
        </div>
    )
}
