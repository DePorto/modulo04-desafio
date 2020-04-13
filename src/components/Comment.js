import React, { Component } from 'react';

//import imgComment from '../assets/images/comment_user.jpeg';

class Comment extends Component {
  
  render (){
    const data = this.props.data
    
    return (
      <div id="containerComment">
        <img id="imgComment" src={data.author['avatar']} />
        <div id="comment">
          <p id="textComment"> <span id="nameComment"> {data.author['name']} </span> {data.content}</p>
        </div>
      </div>
    );
  }

}

export default Comment;