import React from "react";

export default function ProjectCard(props) {
  return (
    <li class="project-card" key={props.id}>
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <img src={process.env.PUBLIC_URL + props.image} alt={props.title} />
        <h3 class="project-card-title">{props.title}</h3>
      </a>
      <p>{props.description}</p>
    </li >
  );
}