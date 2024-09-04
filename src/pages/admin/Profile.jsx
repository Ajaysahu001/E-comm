import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { getUserStart } from './../../redux/actions/user.action';

export default function Profile() {
  let users = useSelector(state => state.user.users);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  let currentUserId = localStorage.getItem('currentUserId')

  const user = users.find(user => user.uid === currentUserId)

  useEffect(() => {
    dispatch(getUserStart())

    setTimeout(() => {
      if (!user)
        navigate('/login')
    }, 1000)
  }, [users.length])

  return (
    <div className="card">
      <div className='card-header d-flex justify-content-between'>
        <h3>Profile</h3>
        <Link to={`/admin/profile/edit`} className='btn btn-primary'>Edit Profile</Link>
      </div>
      <div className="card-body">
        <ul className="list-group">
          <li className="list-group-item">Name: {user?.name}</li>
          <li className="list-group-item">Email: {user?.email}</li>
          <li className="list-group-item">Contact: {user?.phone}</li>
          <li className="list-group-item">Address: {user?.address}</li>
        </ul>
      </div>
    </div>
  )
}
