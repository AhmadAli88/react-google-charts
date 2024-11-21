import { useState, useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { css } from '@emotion/css';

const ROOT_CSS = css({
  height: 500, // Fixed height for the container
  width: 400,  // Fixed width for the container
  overflowY: 'auto', // Enable vertical scrolling
  border: '1px solid #ddd', // Border for styling
});

const SocialFeed = () => {
  const [posts, setPosts] = useState([
    'Just posted a new photo!',
    'Had a great day at the beach!',
    'Feeling awesome today!',
    'New blog post is live! Check it out.',
    'Loving my new shoes!',
  ]);

  useEffect(() => {
    // Simulate receiving new posts after a delay
    const interval = setInterval(() => {
      setPosts((prevPosts) => [
        ...prevPosts,
        `New post #${prevPosts.length + 1}: I just joined the social feed!`,
      ]);
    }, 1000); // Add a new post every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval when component unmounts
  }, []);

  return (
    <div>
      <h2>Social Feed</h2>
      {/* ScrollToBottom with styling */}
      <ScrollToBottom className={ROOT_CSS}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {posts.map((post, index) => (
            <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              {post}
            </li>
          ))}
        </ul>
      </ScrollToBottom>
    </div>
  );
};

export default SocialFeed;
