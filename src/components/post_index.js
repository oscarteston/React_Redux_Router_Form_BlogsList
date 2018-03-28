import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostIndex extends Component {
    componentDidMount () {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <h1>Post Index</h1>
            </div>
        )
    }
}

export default connect(null, { fetchPosts } )(PostIndex);