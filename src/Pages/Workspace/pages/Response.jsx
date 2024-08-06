import React from "react";
import "./Response.css";
import Navigation from "./Navigation";

const Response = () => {
  const stats = [
    { label: "Views", value: 6 },
    { label: "Starts", value: 3 },
    { label: "Completion rate", value: "33%" },
  ];

  const tableData = [
    {
      id: 1,
      date: "Jul 17, 03:23 PM",
      button1: "Hi!",
      email: "abc@g.com",
      text: "alpha",
      button2: "Studio App to Manage Clients, Tracking App for Clients",
      rating: 5,
    },
    {
      id: 2,
      date: "Jul 17, 02:48 PM",
      button1: "Hi!",
      email: "",
      text: "fsdfasd",
      button2: "",
      rating: 3,
    },
    {
      id: 3,
      date: "Jul 14, 04:25 PM",
      button1: "Hi!",
      email: "",
      text: "",
      button2: "",
      rating: 4,
    },
  ];

  return (
    <>
      <Navigation></Navigation>
      <div className="response">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box">
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
            </div>
          ))}
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Submitted on</th>
                <th>Button 1</th>
                <th>Email 1</th>
                <th>Text 1</th>
                <th>Button 2</th>
                <th>Rating 1</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.date}</td>
                  <td>{row.button1}</td>
                  <td>{row.email}</td>
                  <td>{row.text}</td>
                  <td>{row.button2}</td>
                  <td>{row.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="scroll-note">scroll bar if the columns are more</div>
      </div>
    </>
  );
};

export default Response;
