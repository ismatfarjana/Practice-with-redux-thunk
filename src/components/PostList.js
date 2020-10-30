import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

export default connect(null, { fetchPosts })(
  class PostList extends Component {
    componentDidMount() {
      this.props.fetchPosts();
    }
    render() {
      return (
        <div>
          <div>
            <h1>Post List</h1>
          </div>
        </div>
      );
    }
  }
);
