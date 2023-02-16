import React, { useState } from 'react';

const GameHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const gameHistory = [{title:"dwqdqwwq", content:"wqdwqdqqw"},
  {title:"dwqdqwwq", content:"wqdwqdqqw"},
  {title:"dwqdqwwq", content:"wqdwqdqqw"},
  {title:"dwqdqwwq", content:"wqdwqdqqw"},
  {title:"dwqdqwwq", content:"wqdwqdqqw"},
  {title:"dwqdqwwq", content:"wqdwqdqqw"},
  {title:"dwqdqwwq", content:"wqdwqdqqw"},
  {title:"dwqdqwwq", content:"wqdwqdqqw"},
  {title:"dwqdqwwq", content:"wqdwqdqqw"},
  {title:"dwqdqwwq", content:"wqdwqdqqw"},
  {title:"dwqdqwwq", content:"wqdwqdqqw"}]; // replace with actual game history data

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = gameHistory.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {currentPosts.map((post) => (
        // replace with code to display each game history post
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={gameHistory.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default GameHistory;

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className='pagination'>
          {pageNumbers.map((number) => (
            <li key={number} className='page-item'>
              <a onClick={() => paginate(number)} href='!#' className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };





  
