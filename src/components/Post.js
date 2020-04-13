import React, { Component } from 'react';

import Comment from './Comment';

class Post extends Component {
  
  render (){

    const data = this.props.data;

    return (
      <div id="post">
        <div id="containerImgNamePostUser">
          <img id="imgUser" src={data.author['avatar']} />
          <div id="containarNameDatePostUser">
            <span id="nameUser"> {data.author['name']} </span> <br />
            <span id="datePost"> {data.date} </span> <br />
          </div>
        </div>
      <p id="postUser">{data.content}</p>
        <hr />
        {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
      </div>
    );
  }

}

export default Post;