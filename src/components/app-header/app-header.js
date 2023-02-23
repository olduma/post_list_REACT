import React from "react";
// import "./app-header.css"
import styled from "styled-components";
import {Badge} from "reactstrap";

const Header = styled.div`             // CSS in JS
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  h1 {
    font-size: 26px;
    color: ${props => props.colored ? "white" : " #f91880"};

    :hover {
      color: #f91880;
    }
  }

  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`

//const ChildHeader = styled(Header)`     // same like Header + background-color
//  background-color: blue;
//`

const AppHeader = ({allPosts, liked}) => {

    return (
        // <Header as='a'>              turn our div to href
        <Header colored>
            <a className="git_link" href="https://github.com/olduma">
                <h1>Oleh Duma</h1>
            </a>

            {/*<h2>{allPosts} tweets, {liked} liked</h2>*/}
            <h2>
                <Badge color="none">
                    Total: {allPosts}
                </Badge>
                <Badge color="none">
                    Likes: {liked}
                </Badge>
            </h2>


        </Header>
    )
}

export default AppHeader;
