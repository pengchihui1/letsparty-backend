import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import { add } from 'lodash'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      partys: [],
      isLoaded: false
    }
  }

  // componentDidMount () {
  //   const _this = this
  //   axios.get('http://localhost:4000/api/get_parties')
  //     .then(function (response) {
  //       _this.setState({
  //         partys: response.data,
  //         isLoaded: true
  //       })
  //     })
  //     .catch(function (error) {
  //       console.log(error)
  //     })
  // }

  add () {
    //   const _this = this
    axios.get('http://localhost:4000/api/get_parties')
      .then(function (response) {
        const _this = this
        _this.setState({
          partys: response.data,
          isLoaded: true
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    console.log(this.state.partys)
    return (
      <div className='container'>
        <button onClick={() => { add() }}>新增</button>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th className='text-center'>id</th>
              <th className='text-center'>createdAt</th>
              <th className='text-center'>token</th>
              <th className='text-center'>name</th>
              <th className='text-center'>joy</th>
              <th className='text-center'>sad</th>
              <th className='text-center'>happy</th>
            </tr>
          </thead>
          <tbody>
            {this.state.partys.map((party) => {
              return (
                <tr key={party.id}>
                  <th className='text-center'>{party.id}</th>
                  <th className='text-center'>{party.createdAt}</th>
                  <th className='text-center'>{party.id}</th>
                  <th className='text-center'>{party.name}</th>
                  <th className='text-center'>{party.joy}</th>
                  <th className='text-center'>{party.sad}</th>
                  <th className='text-center'>{party.happy}</th>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Home
