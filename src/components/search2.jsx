import React, { Component } from 'react'
import axios from 'axios'


export default class SearchFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Users: [],
    }
    this.node = React.createRef()
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.onChange)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onChange)
  }

  onChange = (e) => {
    if (this.node.current.contains(e.target)) {
      return
    }
    this.setState({
      Users: [],
    })
  }

  onUserChange = async (e) => {
    await axios
      .get('https://www.testjsonapi.com/users/')
      .then((res) => {
        this.setState({
          Users: res.data,
        })
      })
      .catch((err) => {
        console.log(err)
      })

    let filter = e.target.value.toLowerCase()

    let resUser = this.state.Users.filter((e) => {
      let dataFilter = e.name.toLowerCase()
      return dataFilter.indexOf(filter) !== -1
    })

    this.setState({
      Users: resUser,
    })
  }

  render() {
    return (
      <div className="filterBlock">
        <h2>React Js Search Filter Example - RemoteStack.io</h2>
        <input
          type="text"
          onClick={this.onChange}
          onChange={this.onUserChange}
          placeholder="Search ..."
          ref={this.node}
        />
        <ul>
          {this.state.Users.map((res) => {
            return <li key={res.id}>{res.name}</li>
          })}
        </ul>
      </div>
    )
  }
}