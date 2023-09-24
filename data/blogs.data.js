export const blogsDB = [
  {
    blogID: '1',
    name: 'Render Reconciliation React',
    date: 'Mar 10, 2022',
    readTime: '4 min read',
    teaser:
      "One of the reasons React is so popular is that it's blazing fast. This speed is achieved by updating only part of the real DOM that has changed. But, updating the real DOM is a slow process.So, how does React achieve this? React achieves this using virtual DOM.",
    live: 'https://blog.sudipkundu.com/render-reconciliation-react',
    previewImage:
      'https://res.cloudinary.com/ddvxuu7ml/image/upload/v1695576457/sudipkundu.com/blogs/blog1_xntbsh.webp',
  },
  {
    blogID: '2',
    name: 'Debouncing and Throttling',
    date: 'May 11, 2022',
    readTime: '4 min read',
    teaser:
      "Javascript is a single-threaded interpreted language with a non-blocking event loop. What this means is that everything runs on a single main thread so it's important to use the thread only when required.Blocking this main thread means subsequent operations have to wait till the main thread is clear, this may result in performance issues.",
    live: 'https://blog.sudipkundu.com/debouncing-and-throttling',
    previewImage:
      'https://res.cloudinary.com/ddvxuu7ml/image/upload/v1695576456/sudipkundu.com/blogs/blog2_bjrbgt.webp',
  },
  {
    blogID: '3',
    name: 'Event Propagation in JavaScript',
    date: 'May 12, 2022',
    readTime: '5 min read',
    teaser:
      'An event travels or propagates through the DOM tree, this is called Event propagation.This can happen in 2 ways - Top to bottom or Bottom to Top. We will discuss when to use what and how to optimize performance using these techniques.',
    live: 'https://blog.sudipkundu.com/event-propagation-in-javascript',
    previewImage:
      'https://res.cloudinary.com/ddvxuu7ml/image/upload/v1695576457/sudipkundu.com/blogs/blog3_inbeyc.webp',
  },
];
