import BlogPosts from "../helper/blogPosts.json";

const service = {
  getData: ({ from, to }) => {
    return new Promise((resolve, reject) => {
      const data = BlogPosts.slice(from, to);
      resolve({
        count: BlogPosts.length,
        data: data,
      });
    });
  },
};

export default service;
