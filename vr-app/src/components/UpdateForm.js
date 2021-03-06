import React, {useState, useEffect} from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'
const UpdateForm = ({ id, initialData }) => {
  // const [ newData, setNewData] = useState()
  const [newData, setNewData] = useState({
    name: initialData.name,
    description: initialData.description,
    img_url: initialData.img_url,
    category: initialData.category,
    funding_goal: initialData.funding_goal,
    funding: initialData.funding,
    creator_id: localStorage.getItem("User Id"),
  });

  const match = useRouteMatch();
  const history = useHistory();

  const handleChanges = (e) => {
    setNewData({
      ...newData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    const id = match.params.id;
    axiosWithAuth()
      .put(`/projects/${id}`, newData)
      .then(history.push(`/dashboard`))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          name="name"
          type="text"
          value={newData.name}
          onChange={handleChanges}
        />
        <label>Description:</label>
        <input
          name="description"
          type="text"
          value={newData.description}
          onChange={handleChanges}
        />
        <label>Image:</label>
        <input
          name="img_url"
          type="text"
          value={newData.img_url}
          onChange={handleChanges}
        />
        <label>Category:</label>
        <input
          name="category"
          type="text"
          value={newData.category}
          onChange={handleChanges}
        />
        <label>Funding Goal:</label>
        <input
          name="funding_goal"
          type="text"
          value={newData.funding_goal}
          onChange={handleChanges}
        />
        <label>Funding:</label>
        <input
          name="funding"
          type="text"
          value={newData.funding}
          onChange={handleChanges}
        />
        <button type="submit">Update Project</button>
      </form>
    </div>
  );
};
export default UpdateForm