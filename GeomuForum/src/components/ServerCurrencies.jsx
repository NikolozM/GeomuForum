import React, { useState } from 'react';
import './GeneralInformation.css';
const ServerCurrencies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const gameHistory = [{ title: 'dwqdqwwq', content: 'wqdwqdqqw' }]; // replace with actual game history data

  // // Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = gameHistory.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='infoContainer'>
      <h3>Launching new Dream x100</h3>

      <h5>
        Dear friends, we've fixed a lot of bugs and finalized the Dream x100 server. n now we are ready to welcome old
        and new players in Mu Online Classic PvP. n we've changed attitudes, and we've worked out a lot of things about
        player communication.{' '}
      </h5>

      <h3>Important dates! </h3>

      <h5>
        Server Launch: February 11 at 20:00 Kiev time First Castle Siege: February 25 at 20:00 Kiev time - 2 weeks after
        the official start of the server{' '}
      </h5>

      <h3>Basic information!</h3>

      <h5>
        Server Version: Season 6 Episode 3 Server Ratings: x100 Master Level Ratings: x10 (Swamp of Calmness location)
        Available characters: DW | DK | ELF | MG | DL | SUM | RF Zen Formula: 100*Monster Level + Item Zen Drop
      </h5>

      <h3>Restrictions! </h3>

      <h5>
        Blood Castle Entry Restriction: 4 entries per day per character (reset at 11:00 server time) Chaos Castle Entry
        Restriction: 4 entries per day per character (reset at 11:00 server time) Devil Square Entry Restriction: 4
        entries per day per character (reset at 11:00 server time) Maximum number of Excellent options: 3 Maximum number
        of Socket options: 5 Maximum server reset: 5 Maximum stats on server: 32 767 Maximum Master Level on the server:
        400 Maximum number of open windows: 3
      </h5>

      
      <h5>
        Blood Castle Entry Restriction: 4 entries per day per character (reset at 11:00 server time) Chaos Castle Entry
        Restriction: 4 entries per day per character (reset at 11:00 server time) Devil Square Entry Restriction: 4
        entries per day per character (reset at 11:00 server time) Maximum number of Excellent options: 3 Maximum number
        of Socket options: 5 Maximum server reset: 5 Maximum stats on server: 32 767 Maximum Master Level on the server:
        400 Maximum number of open windows: 3
      </h5>

      
      <h5>
        Blood Castle Entry Restriction: 4 entries per day per character (reset at 11:00 server time) Chaos Castle Entry
        Restriction: 4 entries per day per character (reset at 11:00 server time) Devil Square Entry Restriction: 4
        entries per day per character (reset at 11:00 server time) Maximum number of Excellent options: 3 Maximum number
        of Socket options: 5 Maximum server reset: 5 Maximum stats on server: 32 767 Maximum Master Level on the server:
        400 Maximum number of open windows: 3
      </h5>

      
      <h5>
        Blood Castle Entry Restriction: 4 entries per day per character (reset at 11:00 server time) Chaos Castle Entry
        Restriction: 4 entries per day per character (reset at 11:00 server time) Devil Square Entry Restriction: 4
        entries per day per character (reset at 11:00 server time) Maximum number of Excellent options: 3 Maximum number
        of Socket options: 5 Maximum server reset: 5 Maximum stats on server: 32 767 Maximum Master Level on the server:
        400 Maximum number of open windows: 3
      </h5>
      
      <h5>
        Blood Castle Entry Restriction: 4 entries per day per character (reset at 11:00 server time) Chaos Castle Entry
        Restriction: 4 entries per day per character (reset at 11:00 server time) Devil Square Entry Restriction: 4
        entries per day per character (reset at 11:00 server time) Maximum number of Excellent options: 3 Maximum number
        of Socket options: 5 Maximum server reset: 5 Maximum stats on server: 32 767 Maximum Master Level on the server:
        400 Maximum number of open windows: 3
      </h5>
      
      <h5>
        Blood Castle Entry Restriction: 4 entries per day per character (reset at 11:00 server time) Chaos Castle Entry
        Restriction: 4 entries per day per character (reset at 11:00 server time) Devil Square Entry Restriction: 4
        entries per day per character (reset at 11:00 server time) Maximum number of Excellent options: 3 Maximum number
        of Socket options: 5 Maximum server reset: 5 Maximum stats on server: 32 767 Maximum Master Level on the server:
        400 Maximum number of open windows: 3
      </h5>
      
      <h5>
        Blood Castle Entry Restriction: 4 entries per day per character (reset at 11:00 server time) Chaos Castle Entry
        Restriction: 4 entries per day per character (reset at 11:00 server time) Devil Square Entry Restriction: 4
        entries per day per character (reset at 11:00 server time) Maximum number of Excellent options: 3 Maximum number
        of Socket options: 5 Maximum server reset: 5 Maximum stats on server: 32 767 Maximum Master Level on the server:
        400 Maximum number of open windows: 3
      </h5>
    </div>
  );
};

export default ServerCurrencies;

// const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
//   const pageNumbers = [];

{
  /* {currentPosts.map((post) => (
        // replace with code to display each game history post
        <div className='game-history ' key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={gameHistory.length}
        paginate={paginate}
        currentPage={currentPage}
      /> */
}

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className='pagination'>
//         {pageNumbers.map((number) => (
//           <li key={number} className='page-item'>
//             <a onClick={() => paginate(number)} href='!#' className='page-link'>
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };
