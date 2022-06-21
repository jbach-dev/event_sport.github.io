import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBCol, MDBContainer, MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sortValue, setSortValue] = useState("");


  const sortOptions = ["name", "city", "street", "age"];


  useEffect(() => {
    loadUsersData();
  }, []);

  const loadUsersData = async () => {
    return await axios.get("http://localhost:5000/users")
      .then((reponse) => setData(reponse.data))
      .catch((err) => console.log)
  };



  console.log("data", data);
  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    return await axios
      .get(`http://localhost:5000/users?q=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((err) => console.log(err))

    console.log(event.currentTarget.elements);
    console.log(event.currentTarget.elements[0]);
  };

  const handleSort = async (e) => {
    let value = e.target.value;
    setSortValue(value);

    return await axios
      .get(`http://localhost:5000/users?_sort=${value}&_order=asc`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err))
  };

  const handleReset = (event: React.MouseEvent<HTMLElement>) => {

    loadUsersData();
    console.log(event.target);
    console.log(event.currentTarget);
  };



  return (
    <MDBContainer>
      <form style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "800px",
        alignContent: "center"
      }}

        className="d-flex input-group w-auto"
        onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control"
          placeholder='Rechercher...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
        </input>

        <MDBBtn type="submit" color="dark">Recherche...</MDBBtn>
        <MDBBtn className="mx-2" color="info" onClick={handleReset}>Restaurer</MDBBtn>


      </form>
      <MDBCol size="8"> 
        <h5> Trier par :</h5>
        <select style={{width:"100px", borderRadius:"2px", height:"35px"}}
        onChange={handleSort}
        value={sortValue}>
          <option>Selectionnez</option>
          {sortOptions.map((item, index) => 
          <option value={item} key={index}>{item}</option>)}
                
        </select>
      </MDBCol>
      <div style={{ marginTop: "100px" }}>
        <h2 className="text-center">Les évènements</h2>
        <MDBRow>
          <MDBCol size="12">
            <MDBTable>
              <MDBTableHead dark>
                <tr>
                  <th scope="col"> No.</th>
                  <th scope="col"> Nom</th>
                  <th scope="col"> Ville</th>
                  <th scope="col"> Adresse</th>
                  <th scope="col"> Date</th>
                </tr>
              </MDBTableHead>
              {data.length === 0 ? (
                <MDBTableBody className="align-center mb-0">
                  <tr>
                    <td colSpan={8} className="text-center mb-0"> No data found</td>
                  </tr>

                </MDBTableBody>
              ) : (
                data.map((item, index) => (
                  <MDBTableBody key={index}>
                    <tr>
                      <th scope="row">
                        {index + 1}
                      </th>
                      <td>{item['name']}</td>
                      <td>{item['city']}</td>
                      <td>{item['street']}</td>
                      <td>{item['age']}</td>
                    </tr>

                  </MDBTableBody>
                ))
              )}
            </MDBTable>
          </MDBCol>
        </MDBRow>
      </div>
     
     

    </MDBContainer>
  );
}

export default App;

