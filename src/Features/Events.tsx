import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Events.css";

function Events() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sortValue, setSortValue] = useState("");

  const sortOptions = [
    "title",
    "description",
    "price",
    "city",
    "month_date",
    "year_date",
  ];

  useEffect(() => {
    loadUsersData();
  }, []);

  const loadUsersData = async () => {
    return await axios
      .get("http://localhost:5000/events")
      .then((reponse) => setData(reponse.data));
  };

  console.log("data", loadUsersData);
  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    return await axios
      .get(`http://localhost:5000/events?q=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((err) => console.log(err));

    console.log(event.currentTarget.elements);
    console.log(event.currentTarget.elements[0]);
  };

  const handleSort = async (e) => {
    const value = e.target.value;
    setSortValue(value);

    return await axios
      .get(`http://localhost:5000/events?_sort=${value}&_order=asc`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleReset = (event: React.MouseEvent<HTMLElement>) => {
    loadUsersData();
    console.log(event.target);
    console.log(event.currentTarget);
  };

  return (
    <div>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "800px",
          alignContent: "center",
          marginTop: "40px",
        }}
        className="d-flex input-group w-auto"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Rechercher..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>

        <button type="submit" className="Bouton-Submit">
          Recherche...
        </button>
        <button className="Bouton-Restaurer" color="info" onClick={handleReset}>
          Restaurer
        </button>
      </form>
      <div className="Filtre">
        <h5 className="Trier"> Trier par :</h5>
        <select
          className="Bouton-filtre"
          onChange={handleSort}
          value={sortValue}
        >
          <option>Selectionnez</option>
          {sortOptions.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div style={{ marginTop: "40px" }}>
        <h2 className="text-center">Les évènements</h2>
        <div>
          <div>
            <div>
              <div>
                <div className="Div-title">
                  <p className="Desc Titre"> Titre</p>
                  <p className="Desc Description DescTitle"> Description</p>
                  <p className="Desc">Photo</p>
                  <p className="Desc"> Prix</p>
                  <p className="Desc"> Adresse</p>
                  <p className="Desc"> Date</p>
                </div>
              </div>
              {data.length === 0 ? (
                <div className="align-center mb-0">
                    <p className="text-center mb-0"> No data found</p>
                </div>
              ) : (
                data.map((item, index) => (
                  <div key={index}>
                    <div className="Div-content">
                      <p>{index + 1}</p>
                      <p className="Desc">{item["title"]}</p>
                      <p className="Desc Description">{item["description"]}</p>
                      <p className="Desc">
                        <img src={item["picture"]}></img>
                      </p>
                      <p className="Desc">{item["price"]}</p>
                      <p className="Desc">
                        {item["street"]}
                        <br />
                        {item["city"]}
                      </p>
                      <p className="Desc">
                        {item["day_date"]}
                        <br />
                        {item["month_date"]}
                        <br />
                        {item["year_date"]}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
