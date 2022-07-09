let posts = [
  {
    id: 1,
    title: 'The Awakening',
    author: 'Kate Chopin',
    comment: 'Comment 1',
  },
  {
    id: 2,
    title: 'City of Glass',
    author: 'Paul Auster',
    comment: 'Comment 2',
  },
];

const resolvers = {
  Query: {
    posts: () => posts,

    onePost: (_, { id }) => {
      return posts.filter(post => post.id === id);
    },
  },

  Mutation: {
    createPost: (_, { id, title, author, comment }) => {
      const newPost = { id, title, author, comment };
      posts.push(newPost);
      return newPost;
    },

    // go back to it:
    updatePost: (_, { id, title, author, comment }) => {
      const updatedPost = { id, title, author, comment };
      const updatedPosts = posts.map(post =>
        post.id == id ? (post = updatedPost) : post
      );

      posts = updatedPosts;
      return updatedPost;
    },

    deletePost: (_, { id }) => {
      posts = posts.filter(post => post.id !== id);
      return posts;
    },
  },
};

module.exports = resolvers;
