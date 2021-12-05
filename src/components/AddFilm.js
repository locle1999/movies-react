import React, { Component } from 'react'

export default class AddFilm extends Component {
    state = {
        title: "",
        releaseYear: "",
    };
    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeYear = (event) => {
        // let { title, releaseYear } = this.props
        // console.log("chek year", releaseYear)
        // if (releaseYear !== Number && releaseYear !== "") {
        //     alert('releaseYear must is Number ')
        //     return
        // }
        this.setState({
            releaseYear: event.target.value
        })
    }
    onClickAddmovies = (film) => {
        console.log(" check film ", this.state)
        this.props.addFilm({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            releaseYear: this.state.releaseYear
        })
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