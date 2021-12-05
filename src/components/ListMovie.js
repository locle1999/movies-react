import React, { Component } from 'react'
import axios from 'axios'
import AddFilm from './AddFilm';
export default class ListMovie extends Component {
    state = {
        editFilm: {}
    }
    handleDelete = (film) => {
        console.log(" check delete: ", film)
        this.props.deleteFilm(film)
    }
    handleEditFilm = (film) => {
        let { movies } = this.props
        let { editFilm } = this.state
        let isEmptyOjb = Object.keys(editFilm).length === 0;
        if (isEmptyOjb === false && editFilm.id === film.id) {
            let moviesCopy = [...movies]
            let ojbIndex = moviesCopy.findIndex(item => item.id === film.id)
            moviesCopy[ojbIndex].title = editFilm.title
            moviesCopy[ojbIndex].releaseYear = editFilm.releaseYear
            this.setState({
                movies: moviesCopy,
                editFilm: {}
            })
            return
        }

        this.setState({
            editFilm: film
        })

    }
    handleChangeTitle = (event) => {
        let copyEditFilm = { ...this.state.editFilm }
        copyEditFilm.title = event.target.value
        this.setState({
            editFilm: copyEditFilm
        })
    }
    handleChangeYear = (event) => {
        let copyEditFilm = { ...this.state.editFilm }
        copyEditFilm.releaseYear = event.target.value
        this.setState({
            editFilm: copyEditFilm
        })
    }
    render() {
        let { editFilm } = this.state
        let { movies } = this.props
        let isEmptyOjb = Object.keys(editFilm).length === 0;
        return (
            <>
                <div className="ListFilm">
                    <table>
                        <thead>
                            <th>Film</th>
                            <th>releaseYear</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {movies.length > 0 && movies.map((film, i) => {
                                return (
                                    <tr key={film.id}>
                                        {isEmptyOjb === true ?
                                            <>
                                                <td>{film.title}</td>
                                                <td>{film.releaseYear}</td>
                                            </>
                                            :
                                            <>{
                                                editFilm.id === film.id ?
                                                    <span>
                                                        <input onChange={(event) => { this.handleChangeTitle(event) }} value={editFilm.title} />
                                                        <input onChange={(event) => { this.handleChangeYear(event) }} value={editFilm.releaseYear} />
                                                    </span>
                                                    :
                                                    <span> {film.title}</span>
                                            }
                                            </>
                                        }
                                        <td><button onClick={() => this.handleEditFilm(film)}>
                                            {isEmptyOjb === false && editFilm.id === film.id ? "Save" : "Edit"}
                                        </button></td>
                                        <td><button onClick={() => { this.handleDelete(film) }}>Delete</button></td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </>
        )
    }





}