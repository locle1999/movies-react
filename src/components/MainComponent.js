import React, { Component } from 'react'
import axios from 'axios'
import AddFilm from './AddFilm';
import ListMovie from './ListMovie';
export default class MainComponent extends Component {
    state = {
        loading: true,
        films: []
    };

    async componentDidMount() {
        const res = await axios.get("https://reactnative.dev/movies.json")
        console.log('check res :', res.data.movies)
        this.setState({
            films: res.data.movies,
            loading: false
        })
    }
    addFilm = (film) => {
        console.log('check film', film)
        this.setState({
            films: [...this.state.films, film]
        })
    }
    deleteFilm = (film) => {
        let getMovie = this.state.films
        getMovie = getMovie.filter(item => item.id !== film.id)
        this.setState({
            films: getMovie
        })
    }

    render() {
        console.log('check state', this.state)
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.films.length) {
            return <div>can't get film</div>;
        }

        return (
            <>
                <div>
                    Start Movies
                    <AddFilm addFilm={this.addFilm} />
                    <ListMovie
                        movies={this.state.films}
                        deleteFilm={this.deleteFilm}
                    />
                    <button onClick={() => { this.componentDidMount() }}> refresh</button>
                </div>
            </>
        );
    }





}