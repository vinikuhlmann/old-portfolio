import React from 'react';

export default function TextCard(props) {
  return (
    <div id="about-me">
      <h2 class="decorated"><span>{props.title}</span></h2>
      <div class="text-card">
        {props.text}
      </div>
    </div >
  );
}