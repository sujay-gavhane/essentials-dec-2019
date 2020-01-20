import React from 'react';
import Issue from './Issue';
import '../styles/common.css';

function IssuesList(props){
  return(
    <div id='issues-list'>
      {props.issues.map(issue => <Issue {...issue}/>)}
    </div>
  );
}

export default IssuesList;
