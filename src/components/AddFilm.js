import React, { Component } from 'react'

export default class AddFilm extends Component {
    state = {
        title: "",
        releaseYear: "",
    };
    handleChangeTitle = (event) => {
        console.log('check', event)
        this.setState({
            title: event.target.value
        })
    }
    handleChangeYear = (event) => {

        this.setState({
            releaseYear: event.target.value
        })
    }
    onClickAddmovies = (film) => {
        let { title, releaseYear } = this.state
        let isEmptyOjb1 = Object.keys(title).length === 0;
        let isEmptyOjb2 = Object.keys(releaseYear).length === 0;
        console.log(" check film ", this.state)
        if (((isEmptyOjb1 || isEmptyOjb2) === false)) {
            this.props.addFilm({
                id: Math.floor(Math.random() * 100),
                title: this.state.title,
                releaseYear: this.state.releaseYear
            })
        } else {
            alert('must iput film and year')
        }
        this.setState({
            title: "",
            releaseYear: ""
        })
    }
    render() {
        return (
            <>
                <div className="addFrom">
                    <from className="from">
                        {/* <label> Id </label><br />
                    <input type="Text" /><br /> */}
                        <label> Film </label><br />
                        <input type="Text" value={this.state.title} onChange={(event) => { this.handleChangeTitle(event) }} />
                        <br />
                        <label> releaseYear </label><br />
                        <input type="Text" value={this.state.releaseYear} onChange={(event) => { this.handleChangeYear(event) }} />
                        <br />
                        <button onClick={() => { this.onClickAddmovies() }} > Add movies</button><br />
                    </from>
                </div>
            </>
        )
    }

}