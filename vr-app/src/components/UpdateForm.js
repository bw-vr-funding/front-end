import React, {useState, useEffect} from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import axios from 'axios';


const UpdateForm = props => {
    const [ newProject, setNewProject] = useState()
    const [data, setData] = useState({
        name: "",
        description: "",
        img_url: "",
        category: "",
        funding_goal: 0,
        funding: 0,
        creator_id: 1
      });
    const match = useRouteMatch();
    const history = useHistory();

    // useEffect(() => {
    //     const id = match.params.id
    //     axiosWithAuth()
    //     .get(`/projects/${id}`)
    //     .then(res => {
    //         console.log('!!!!!', res)
    //     })
    //     .catch(err => {console.log('!!!!!', err)})
    // }, [match.params.id]);

    const handleChanges = e => {
        setNewProject({
            ...newProject,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        const id = match.params.id
        axiosWithAuth()
        .put(`/projects/${newProject.id}`, newProject)
        .then(history.push(`/dashboard`))
        .catch(err => {console.log(err)})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                 name='name'
                 type='text'
                 value={data.name}
                 onChange={handleChanges} 
                />
                <label>Description:</label>
                <input
                 name='name'
                 type='text'
                 value={data.description}
                 onChange={handleChanges} 
                />
                <label>Image:</label>
                <input
                 name='name'
                 type='text'
                 value={data.img_url}
                 onChange={handleChanges} 
                />
                <label>Category:</label>
                <input
                 name='name'
                 type='text'
                 value={data.category}
                 onChange={handleChanges} 
                />
                <label>Funding Goal:</label>
                <input
                 name='name'
                 type='text'
                 value={data.funding_goal}
                 onChange={handleChanges} 
                />
                <label>Funding:</label>
                <input
                 name='name'
                 type='text'
                 value={data.funding}
                 onChange={handleChanges} 
                />
                <button type='submit'>Update Project</button>
            </form>
            
        </div>
    )
}

export default UpdateForm