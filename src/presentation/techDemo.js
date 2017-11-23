import React, {Component} from 'react';
import '../App.css';
import ChuckAPI from '../apiAdapter'

const styles = {
  container : {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridTemplateColumns: '1fr',
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: '10px',
    border: '5px solid darkorange',
    width: '400px',
    margin: '0 auto',
},
  box : {
    fontSize: '1.5rem',
    padding: '5px',

  },
  button : {
    fontSize: '1.5rem',
    borderRadius: '5px',
    backgroundColor: 'darkorange',
    marginTop: '10px',
    boxShadow: '10px 10px 5px #888888',
    marginBottom: '15px'
  },
}

class TechDemo extends Component {
  state = {
    fact: ""
  }

  setFact = JuanFact => {
    let value = JuanFact.value
    let newValue = value.replace(/Chuck/mgi, 'Jajuan').replace(/Norris/mgi, 'Burton')
    return this.setState({fact: newValue})
}

  componentWillMount () {
  ChuckAPI.get()
    .then( juanFact => {
      return juanFact
    })
    .then(this.setFact)
    .catch(err => console.log(err))
}
  newFact = () => {
    ChuckAPI.get()
      .then( updateFact => {
        return updateFact
      })
      .then(this.setFact)
      .catch(err => console.log(err))
  }

render() {
return(
        <div className="fade" style={styles.container}>
          <div>
              <button style={styles.button} onClick={this.newFact}>New Fact</button>
            <div style={styles.box}>{this.state.fact}</div>
          </div>
        </div>
      )
  }
}

export default TechDemo
