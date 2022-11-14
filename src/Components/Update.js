import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Form,Button,Checkbox} from 'semantic-ui-react'
import { API_URL } from '../Constants/URL';

function Update() {
  
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const UpdateUser = async () => {
   await axios.put(API_URL + id,{
      firstName,
      lastName,
      checked
    })
    navigate('/read')
  }

  useEffect(()=>{
    setId(localStorage.getItem('id'))
    setFirstName(localStorage.getItem('firstName'))
    setLastName(localStorage.getItem('lastName'))
    setChecked(localStorage.getItem('checked'))
  },[])

  return (
    <Form className='form'>
      <Form.Field>
        <label>First Name</label>
        <input placeholder='Enter the First Name' value={firstName} onChange={event=>setFirstName(event.target.value)}/>
      </Form.Field><br/>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Enter the Last Name' value={lastName} onChange={event=>setLastName(event.target.value)}/>
      </Form.Field><br/>
      <Form.Field>
      <Checkbox label = 'Agree the Terms & conditions' checked={checked} onChange={()=>setChecked(!checked)}/>
      </Form.Field><br/>
      <Button onClick={UpdateUser}>Submit</Button>
    </Form>
  )
}

export default Update