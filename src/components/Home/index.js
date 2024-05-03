import {Component} from 'react'

import Login from '../Login/index'

import LogOut from '../Logout/index'

import Message from '../Message/index'

import './index.css'

class Home extends Component {
  state = {isTrue: true}

  loginBtn = () => {
    this.setState({isTrue: false})
  }

  logOutBtn = () => {
    this.setState({isTrue: true})
  }

  render() {
    const {isTrue} = this.state

    return (
      <div className="bg-container">
        <div>
          {<Message isTrue={isTrue} />}
          {isTrue ? (
            <Login loginBtn={this.loginBtn} />
          ) : (
            <LogOut logOutBtn={this.logOutBtn} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
