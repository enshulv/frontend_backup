import React, { Component } from 'react';
import qs from 'query-string';

class Information extends Component {
    render() {
        let params = qs.parse(this.props.location.search);
        return (
            <ul>
                <li>id: {params.id}</li>
                <li>Title: {params.title}</li>
                <li>Details: {params.content}</li>
            </ul>
        );
    }
}

export default Information;
