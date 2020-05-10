import React from 'react';

const bgStyle = {
  backgroundPosition: 'center 25%',
  backgroundImage: 'url(https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1391&amp;q=80)'
}

const Home = () => (
  <>
    <div class="background" style={bgStyle}>
      <div class="bg-cf-indigo-teal min-vh-50">
        <div class="hv-center text-white text-center text-shadow">
          <p class="h1 font-weight-lighter">Explore · Design · Create</p>
        </div>
      </div>
    </div>
  </>
);

export default Home;