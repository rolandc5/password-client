import React, { Component } from 'react';
import axios from 'axios';
import './Generator.css';
import Create from './Create';

class Generator extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      website: '',
      username: '',
      password: '',
      direction: ''
    };
    this.handleRetrieve = this.handleRetrieve.bind(this);
  }

  handleRetrieve(e) {
    let name = e.target.name;
    this.setState({ [name]: e.target.value}, () => {
      return axios.post('https://password-db.herokuapp.com/sendOne', { website: this.state.search })
        .then(received => {
          this.setState({ 
            direction: received.data.direction,
            website: received.data.data.website,
            username: received.data.data.username,
            password: received.data.data.password,
          })
        })
        .catch(err => {
          this.setState({ direction: err.response.data.direction })
      })
    });
  };

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <div>
            <div className="main">
                <input placeholder="Search" name="search" onChange={ this.handleRetrieve }/>
                <Create/>
            </div>
            { 
              this.state.direction === "Success" ?
                <div className="SBody">
                  <div><div className="firstLine">{ this.state.website }</div>
                  <div className="firstLine">{ this.state.username }</div>
                  <div className="firstLine">{ this.state.password }</div>
                </div>
              </div> : this.state.direction === "Failed" ? <div> No results </div> : null 
            }
          </div>
        </div>
      </div>
    )
  }
}

/*
 { this.state.reveal === 0 ? <button onClick={ this.handleShowPassword }> Show Password </button> : <button onClick={ this.handleShowPassword }> Hide Password </button>  }
           <div className="centered">
            <ul className="body">
              <div>
              { this.state.saved.website }
              </div>
              <div>
              { this.state.saved.username }
              </div>
              <div>
              { this.state.saved.password }
              </div>
            </ul>
          </div>
          <div>
            { this.state.reveal === 1 ? <Password/> : null }
          </div>


            <div className="listBorder">
              <div className="listBody">
                <Password/>
              </div>
            </div>
          </div>

           <div className="pageBorder">
            <div className="rowInContainer">
              <div className="formBorder">
                <form className="formBody" onSubmit={ this.handleSubmit }>
                  <input placeholder="Website" type="text" name="website" value={ this.state.website } onChange={ this.handleChange }/>
                  <input placeholder="Username" type="text" name="username" value={ this.state.username } onChange={ this.handleChange }/>
                  <input placeholder="Tripple tap to Generate Password" name="password" type="text" value={ this.state.password } onChange={ this.handleChange } onClick={ this.handleGenerate }/>
                  <input type="submit" value="Save"/>
                  { this.state.saveConfirmed === "Success" ? <div> Saved! </div> : null }
                </form>
              </div>
              <div className="listBorder">
                <div className="listBody">
                  <Password/>
                </div>
              </div>
            </div> 
          </div>

           <form className="formBody" onSubmit={ this.handleSubmit }>
              <input placeholder="Website" type="text" name="website" value={ this.state.website } onChange={ this.handleChange }/>
              <input placeholder="Username" type="text" name="username" value={ this.state.username } onChange={ this.handleChange }/>
              <input placeholder="Tripple tap to Generate Password" name="password" type="text" value={ this.state.password } onChange={ this.handleChange } onClick={ this.handleGenerate }/>
              <input type="submit" value="Save"/>
              { this.state.saveConfirmed === "Success" ? <div> Saved! </div> : null }
          </form>
          <div className="listBorder">
            <Password/>
          </div>


                    <form>
              <div className="formBody">
                <div className="formLength">
                  <input className="inputLength" placeholder="website"/>
                  <div className="space"/>
                  <input className="inputLength" placeholder="username"/>
                  <div className="space"/>
                  <input className="inputLength" placeholder="password"/>
                </div>
                <button className="buttonLength"> + Add </button>
              </div>
            </form>


            
  handleGenerate() {
    clicked++
    if (clicked === 3) {
      const randomPassword = Math.floor(Math.random() * (999999 - 111111) + 111111);
      const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
      const symbols = ['.', '!', '@', '#', '&'];
      const array1 = [];
      const array2 = [];
      const random = () => {
        const chooseRandom = Math.floor(Math.random() * (7 - 0) + 0);
        return chooseRandom;
      }
      while (array1.length !== 5) {
        array1.push(letters[random()]);
      }
      while (array2.length !== 4) {
        if (random() <= symbols.length - 1) {
          array2.push(symbols[random()]);
        }
      }
      const combineArray = array2.concat(array1).join('').toString();
      const completedPassword = randomPassword + combineArray;
      this.setState({ password: completedPassword });
      clicked = 0;
    }
  };

  handleChange(e) {
    let name = e.target.name;
    this.setState({ [name]: e.target.value});
  };
*/
export default Generator;
