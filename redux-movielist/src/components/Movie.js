import React from 'react'
import { useDispatch } from 'react-redux'
import {Constants} from '../Constants'

const movieList  = [
    {title: "harry porter", releaseData: '12-3-90', rating: 8.9},
    {title: "krish", releaseData: '15-3-01', rating: 8},
    {title: "scam 1992", releaseData: '17-6-20', rating: 8.3},
    {title: "ff9", releaseData: '10-9-21', rating: 7.9},
    {title: "bhoot police", releaseData: '1-9-21', rating: 7}
]

export default function Movie() {
    const dispatch = useDispatch()
    return (
        <div>
            <ul>
                {movieList.map((movie)=>{
                    return <React.Fragment key={movie.title}>
                        <h4>{movie.title} &nbsp;
                        <button onClick={()=>{dispatch({type: Constants.getMovieDetails, movieDetail: movie})}}>Get Details</button></h4>
                        <hr />
                    </React.Fragment>
                })}
            </ul>
        </div>
    )
}
