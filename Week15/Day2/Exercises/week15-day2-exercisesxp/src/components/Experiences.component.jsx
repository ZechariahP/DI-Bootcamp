import React from 'react';
import data from "./../data/data.json";

export class ExperiencesComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const experiences = data.Experiences.map((xp) => 
            <>
            <p>{xp.companyName}</p>
            <img src={xp.logo} width="100" height="100" />
            {xp.roles.map((role) => (
                <>
                    <p>{role.title}</p>
                    <span>{role.startDate}</span>, <span>{role.location}</span>
                    <p>{role.description}</p>
                </>
            ))}
            </>
    );
            return experiences;
    }

}