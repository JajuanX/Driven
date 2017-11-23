import React from 'react';
import '../App.css';
import Driven from './Driven.png';

const styles = {
  wordContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr)',
    textAlign: 'center',
    gridGap: '30px',
    width: 'auto',
    margin: 'auto 0'
  },
  wordBox: {
    fontSize: '1.25rem',
    padding: '20px',

  },
  img: {
    height: '200px',
    marginTop: '40px',
    padding: '10px',
  }
}

const Home = () => {
  return(
      <div class="fade">
        <div style={styles.wordContent}>
          <div style={styles.wordBox}>
            <h1>Welcome to Driven</h1>
              <p>
                Driven is an umbrella that covers a wide array of topics.
                Our goal is to empower, inspire, and drive people to the next level.
                Here at Driven, we understand the importance of exposure. An individual
                being exposed to passions that they may not have ever came across in there
                everyday lives.
              </p>
          </div>
            <div>
              <img style={styles.img} src={Driven} alt="Driven Logo" />
            </div>
          </div>
      </div>
        )
    }
  export default Home
