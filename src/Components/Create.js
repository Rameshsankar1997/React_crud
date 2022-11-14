import axios from 'axios';
import React, { useState } from 'react'
import {Form,Button,Checkbox} from 'semantic-ui-react'
import {API_URL} from '../Constants/URL'
import {useNavigate} from 'react-router-dom'

function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checked, setChecked] = useState(false)
  const navigate = useNavigate();

  const PostData = async() =>{
   await axios.post(API_URL,{
      firstName,
      lastName,
      checked
    })
    navigate('/read');
  }
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
      <Button onClick={PostData}>Submit</Button>
    </Form>
  )
}

export default Create