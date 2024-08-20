import React from 'react';
import data from "./../data/data.json";

export class SocialMedia extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const media = data.SocialMedias.map((media) => <li>{media}</li>);
        return media;
    }

}