import React, {Component} from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import "./app.css"
// import style from "./App.module.css"
import styled from "styled-components";

const AppBlock = styled.div`     // CSS in JS
  margin: 0 auto;
  max-width: 800px;
`

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, label: "Understanding React's Architecture", important: true, liked: false},
                {id: 2, label: "Proficiency in JSX", important: false, liked: false},
                {id: 3, label: "Knowledge of State and Props", important: true, liked: false},
                {id: 4, label: "Believe in yourself", important: false, liked: true},
            ],
            term: "",
            filter: "all"
        }
        this.deletePost = this.deletePost.bind(this)
        this.addPost = this.addPost.bind(this)
        this.onToggleLiked = this.onToggleLiked.bind(this)
        this.onToggleImportant = this.onToggleImportant.bind(this)
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
        this.filterPost = this.filterPost.bind(this)
        this.onFilterSelect = this.onFilterSelect.bind(this)
        this.maxId = 6
    }

    deletePost(id) {
        this.setState(({data}) => {
            const newData = data.filter(elem => elem.id !== id);

            return {
                data: newData
            }
        })
    }

    addPost(body) {
        this.setState(({data}) => {
            const newPost = {
                id: this.maxId++,
                label: body,
                important: false,
                liked: false
            }
            const newData = [...data, newPost]
            return {
                data: newData
            }
        })
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index]
            const newItem = {...old, important: !old.important}

            const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newData
            }
        })
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index]
            const newItem = {...old, liked: !old.liked}

            const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newData
            }
        })
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    filterPost(items, filter) {
        if (filter === "liked") {
            return items.filter(item => item.liked)
        } else {
            return items
        }
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state
        const liked = data.filter(elem => elem.liked).length
        const allPosts = data.length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter)

        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                        searchIn = {filter}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList
                    posts={visiblePosts}
                    deletePost={this.deletePost}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm addPost={this.addPost}/>
            </AppBlock>
        )
    }
}
