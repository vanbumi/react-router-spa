import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserPage(props) {
  // Set initial state
  const initialUserState = {
    user: {},
    loading: true
  }

  // getter and setter for user state
  const [user, setUser] = useState(initialUserState);

  useEffect(() => {
    const getUser = async () => {
      // pass params
      const { data } = await axios(`https://api.github.com/users/${props.match.params.id}`)

      // update state
      setUser(data)
    }

    // invoke async function
    getUser()
  }, [])

  // Return a table with some data from API.
  return user.loading ? (
    <div>Loading...</div>
  ) : (
      <div className="container">
        <h1>{props.match.params.id}</h1>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Website</th>
              <th>Follower</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.location}</td>
              <td>
                <a href="{user.blog}">{user.blog}</a>
              </td>
              <td>{user.followers}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )


}