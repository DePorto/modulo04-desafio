import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component {
  
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Rui Barbosa",
          avatar: "https://i.pravatar.cc/50?img=51"
        },
        date: "12 Abr 2020",
        content: "Aliquam erat volutpat. Vivamus facilisis lorem velit.",
        comments: [
          {
            id: 1,
            author: {
              name: "Rodrigues Alves",
              avatar: "https://i.pravatar.cc/50?img=53"
            },
            content: "Ut efficitur consequat ultrices. Nunc nec laoreet nisl. Duis bibendum vestibulum rhoncus. Nam sed felis tempus, malesuada tellus in, molestie nunc. Ut elit nunc, luctus eu nisi eu, suscipit tincidunt."
          },
          {
            id: 2,
            author: {
              name: "Afonso Pena",
              avatar: "https://i.pravatar.cc/50?img=55"
            },
            content: "Etiam sed urna eu tortor feugiat tempor eu quis leo. Nam lobortis id nunc id rhoncus. Quisque nisi urna, euismod vel bibendum lobortis, viverra id justo. Etiam in magna leo. Donec at ex arcu. Mauris porttitor eget leo vitae sodales. Integer dignissim nisi in gravida tincidunt. Phasellus faucibus auctor nunc non rutrum. Vestibulum porta placerat."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Venceslau Brás",
          avatar: "https://i.pravatar.cc/50?img=60"
        },
        date: "13 Abr 2020",
        content: "Nulla ut eros elit. Fusce ornare mi ut eros placerat?",
        comments: [
          {
            id: 1,
            author: {
              name: "Floriano Peixoto",
              avatar: "https://i.pravatar.cc/50?img=32"
            },
            content: "Praesent facilisis nisi sagittis dapibus elementum. In hac habitasse platea dictumst. Vivamus tempus euismod mattis. Donec eget ultrices est, vel porttitor dolor. Suspendisse at accumsan nunc, suscipit pretium lacus. Nulla pellentesque arcu eu massa aliquam, a aliquet ante fringilla. Praesent pulvinar orci id elementum viverra. In at nibh ullamcorper, imperdiet tellus eu, fringilla libero. Morbi sed iaculis nulla. Vivamus tristique."
          },
          {
            id: 2,
            author: {
              name: "Afonso Pena",
              avatar: "https://i.pravatar.cc/50?img=55"
            },
            content: "Suspendisse neque nibh, vulputate et est non, iaculis accumsan odio. Mauris sit amet lacus fermentum quam sodales convallis at sit amet lectus. Nullam feugiat dui vel auctor suscipit. Nunc venenatis pellentesque ante, nec tristique odio facilisis ut. Aenean diam metus, ultricies tempus fringilla non, ullamcorper sed est. Nulla euismod tellus nulla, scelerisque ultrices nisi vulputate non. Sed ac justo quis tortor placerat dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum odio ac urna tincidunt imperdiet. Pellentesque vel massa metus. Pellentesque vel vehicula sem, vel porta."
          },
          {
            id: 3,
            author: {
              name: "Epitácio Pessoa",
              avatar: "https://i.pravatar.cc/50?img=49"
            },
            content: "Aenean enim ante, commodo id imperdiet et, lacinia sit amet mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse vitae mauris diam. Curabitur id nunc a nisi faucibus sagittis."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Getúlio Vargas",
          avatar: "https://i.pravatar.cc/50?img=68"
        },
        date: "14 Abr 2020",
        content: "Donec egestas ex ac felis pharetra ultrices vitae blandit magna. Aliquam nec sollicitudin neque, sed ullamcorper mauris. Nullam.",
        comments: [
          {
            id: 1,
            author: {
              name: "Epitácio Pessoa",
              avatar: "https://i.pravatar.cc/50?img=49"
            },
            content: "Aenean sollicitudin semper neque ac bibendum. Phasellus ultricies viverra dapibus. Ut ipsum mi, tincidunt vitae ultricies ac, porttitor sed nibh. Duis euismod lorem id pharetra feugiat. Suspendisse non lectus vestibulum risus mattis varius. Ut enim felis, aliquet non mattis a, ornare vel lacus. Duis malesuada felis vel dui suscipit, ut lobortis libero molestie. Vivamus dictum, elit in sodales tempor, est purus tincidunt ante, in imperdiet sem leo eget est. Duis facilisis ac tellus a finibus."
          }
        ]
      },
    ]
  };

  render (){

    return (
      <div id="post-list">
        {this.state.posts.map(post => <Post key={post.id} data={post} />)} <br />
      </div>
    );
  }

}

export default PostList;