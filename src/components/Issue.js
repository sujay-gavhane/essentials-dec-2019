import React from 'react';
import '../styles/common.css';

function Issue(props){
  const issue = props

  return(
    <div id='issue'>
      <div><strong>{issue.title}</strong></div>
      <div>#{issue.number}, {issue.created_at}</div>
    </div>
  );
}

export default Issue;
