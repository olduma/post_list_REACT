import React, {Component} from "react";
import "./post-status-filter.css"
import {Button} from "reactstrap";

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: "all", label: "All"},
            {name: "liked", label: "Liked"}
        ]
    }

    render() {
        const {filter, onFilterSelect} = this.props
        const buttons = this.buttons.map(({name, label}) => {
            const active = filter === name;
            const type = active ? 'info' : 'secondary'
            return (
                <Button
                    key={name}
                    color={type}
                    outline
                    onClick={() => onFilterSelect(name)}>
                    {label}
                </Button>
            )
        })
        return (
            <div className="btn-group d-flex">
                {buttons}
            </div>
        )
    }
}