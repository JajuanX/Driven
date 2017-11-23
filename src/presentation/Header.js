import React from 'react'
import { Link }  from 'react-router-dom'
import '../App.css'


const styles = {
  button : {
    backgroundColor: 'orange',
    borderRadius: '5px',
    textAlign: 'center',
    fontSize: '20px',
    padding: '10px',
    marginTop: '5px',
    boxShadow: '0 3px 0px 0 darkorange',
},
  navBar : {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr)',
    gridGap: '5px',
    marginLeft: '2px',
    marginRight: '2px',
  }
}

const Header = () => {
  return (

        <div className="header" style={styles.navBar}>
            <Link to="/home"><div style={styles.button}>Home</div></Link>
            <Link to="/about"><div style={styles.button}>About</div></Link>
            <Link to="/business"><div style={styles.button}>Business</div></Link>
            <Link to="/contact"><div style={styles.button}>Contact Us</div></Link>
            <Link to="/techdemo"><div style={styles.button}>Tech Demo</div></Link>
        </div>

      )
    }

  export default Header
