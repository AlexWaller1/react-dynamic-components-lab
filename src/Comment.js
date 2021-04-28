//your code here
import React, { Component } from 'react'

export default class Comment extends Component {

    render() {
        return( 
          <div className="comment">
              {this.props.commentText}
          </div>
        )
       }
}

// This is the child Component of BlogPost
// commentText is called is called along with Comment Component
// in the BlogPost component