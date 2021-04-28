import React, { Component } from 'react';
import Comment from './Comment.js'
// are we missing an import?

export default class BlogPost extends Component {
  render() {
    
    const comments = [
      "Bodhi! You gotta wake up man, I am an FBI agent! - Johnny Utah",
      "I don't fit their new employee profile... what that's... Compotence. - Terry Crabtree",
      "Pre-Med, I guess he got discouraged. - Fletcher"
    ]
    
    return (
      <div id="blog-post" className="wrapper">
        I know, I cannot be the only one,<br/>
        In love, with doing nothing all night long,<br/>
        No fun, that's the only fun,<br/>
       I know, I know<br/>
        -Anna Sofia<br/>

        
        <Comment commentText={comments[0]} />
        <Comment commentText={comments[0]} />
        <Comment commentText={comments[0]} />
       
      </div>
    );
  }
}
