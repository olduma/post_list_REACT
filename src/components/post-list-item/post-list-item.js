import React, {Component} from "react";
import "./post-list-item.css"
// import "./post-list-item.sass"

export default class PostListItem extends Component {

    render() {
        const {label, onDelete, onToggleLiked, onToggleImportant, important, liked} = this.props
        let classNames = "app-list-item d-flex justify-content-between"
        if (important) classNames += " important"
        if (liked) classNames += " like"
        return (
            <div className={classNames}>
                <span
                    className="app-list-item-label"
                    onClick={onToggleLiked}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        className="btn-star btn-sm"
                        onClick={onToggleImportant}>
                        <i className="fa-solid fa-star"></i>
                    </button>
                    <button
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fa fa-trash"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}



