import React, {Component} from "react";
import "./search-panel.css"

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
    }

    onUpdateSearch(e) {
        const term = e.target.value;
        // this.setState({term: term})       //old
        this.setState({term})           //new
        this.props.onUpdateSearch(term.toLowerCase())
    }

    render() {
        const searchIn = `Search in ${this.props.searchIn}`

        return (
            <div className="search-panel d-flex">
                <input
                    className="form-control search-input"
                    type="text"
                    placeholder={searchIn}
                    onChange={this.onUpdateSearch}/>
            </div>
        )
    }
}

