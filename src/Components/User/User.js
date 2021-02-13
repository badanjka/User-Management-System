import React, { Component } from 'react';
import "./User.css"
import { Link } from "react-router-dom"

class User extends Component {

    render() {
        return (
            <div className="user">
                <Link to={"/CandidatePage/" + this.props.data.id}>
                <div class="container">
    <div class="profile large">
      <div class="cover"><img src="https://cdn.shrm.org/image/upload/c_crop%2Ch_552%2Cw_552%2Cx_0%2Cy_0/c_fit%2Cf_auto%2Cq_auto%2Cw_767/v1/Tools%20and%20Samples/HubPages_1x1_Remote_Work_pw1heu?databtoa=eyIxeDEiOnsieCI6MCwieSI6MCwieDIiOjU1MiwieTIiOjU1MiwidyI6NTUyLCJoIjo1NTJ9fQ%3D%3D"/>
        <div class="layer">
          <div class="loader"></div>
        </div>
      </div>
      <div class="user-info">
        <div class="profile-pic"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixhnZxucLmfqq5yDQ2Gyd08Z1XRAa44_LJQ&usqp=CAU"/>
          <div class="layer">
            <div class="loader"></div>
          </div>
        </div>
        <div class="username">
          <div class="name"><span class="verified">{this.props.data.name}</span></div>
          <div class="about">{this.props.data.email}</div>
        </div>
      </div>     
    </div>
  </div>
                {/* <Link to={"/CandidatePage/" + this.props.data.id}>
                    <img src="https://tinyurl.com/y2nvk6f3" ></img>
                    <h3>{this.props.data.name}</h3>
                    <p>{this.props.data.email}</p>
                </Link> */}
                 </Link>
            </div>
        );
    }
}
export { User };