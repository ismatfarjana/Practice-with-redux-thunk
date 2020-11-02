import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <div className="author">
              <UserHeader userId={post.userId} />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        <div>
          <h1>Post List</h1>
          <div className="list">{this.renderList()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPosts })(PostList);
