import React from "react";
import PostListItem from "../post-list-item/post-list-item";
import "./post-list.css"

const PostList = ({posts, deletePost, onToggleImportant, onToggleLiked}) => {
    const elements = posts.map(item => {
        return (
            <li key={item.id} className="list-group-item">
                <PostListItem {...item} // --> new fich
                              onDelete={() => deletePost(item.id)}
                              onToggleImportant={() => onToggleImportant(item.id)}
                              onToggleLiked={() => onToggleLiked(item.id)}
                    // label={item.label}           // --> old, common way
                    // important={item.important}
                />
            </li>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;