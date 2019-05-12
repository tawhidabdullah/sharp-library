import "./ProfileContent.css";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import isEmpty from "../../../../validation/isEmpty";

import {
  getCurrentProfile,
  createProfile
} from "../../../.././actions/profileAction";
import Spinner from "../../../commonFeilds/Spinner";
import TextFeildGroup from "../../../commonFeilds/TextFeildGroup";
import SelectListGroup from "../../../commonFeilds/SelectListGroup";

class ProfileContent extends Component {
  state = {
    addOrEditProfile: false,
    handle: "",
    gender: "",
    birthday: "",
    mobile: null,
    errors: {}
  };

  onClickCreateProfile = () => {
    const editORCreate = this.state.addOrEditProfile;
    this.setState({
      addOrEditProfile: !editORCreate
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // if profile field isn't empty then make the same value
      // If profile field doesn't exist , make empty string
      profile.handle = !isEmpty(profile.handle) ? profile.handle : "";
      profile.gender = !isEmpty(profile.gender) ? profile.gender : "";
      profile.mobile = !isEmpty(profile.mobile) ? profile.mobile : "";
      profile.birthday = !isEmpty(profile.birthday) ? profile.birthday : "";

      let bday = "";

      for (let i = 0; i < profile.birthday.length; i++) {
        if (profile.birthday[i] === "T") {
          break;
        } else {
          if (profile.birthday[i] === "-") {
            bday += "/";
          } else {
            bday += profile.birthday[i];
          }
        }
      }

      this.setState({
        handle: profile.handle,
        gender: profile.gender,
        mobile: profile.mobile,
        birthday: bday
      });
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onFormSubmit = e => {
    e.preventDefault();
    let profileData = {};
    profileData.handle = this.state.handle;
    profileData.gender = this.state.gender;
    profileData.mobile = this.state.mobile;
    profileData.birthday = this.state.birthday;

    this.props.createProfile(profileData, this.props.history);
  };

  render() {
    const errors = this.state.errors;

    let dashboardContents;
    let createProfileContents;
    const { profile } = this.props.profile;

    const user = this.props.user;
    const loading = this.props.loading;

    if (profile === null || loading) {
      dashboardContents = <Spinner />;
    } else {
      if (profile.handle !== "") {
      }
    }

    return (
      <div id="profileContent">
        <div className="centered">
          <section className="container">
            <main className="main-wrap columns small-12 medium-12 large-7">
              <form action="">
                <div className="panel">
                  <div className="row">
                    <div className="small-12 medium-12 large-12">
                      <div className="profileHead">
                        <h4 className="profileHeading">Personal Information</h4>
                        <p
                          style={{
                            paddingLeft: "70px",
                            fontWeight: "bold",
                            marginBottom: "7px",
                            fontSize: "15px",
                            color: "#4e90a4",
                            cursor: "pointer"
                          }}
                        >
                          Edit
                        </p>
                      </div>
                      <div className="borderAfterHeading" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="columns small-12 medium-6 large-6">
                      <div className="relative input-wrap is-required">
                        <label className="inputLabel">Name</label>
                        <input
                          id="firstName"
                          type="text"
                          name="fname"
                          placeholder="First name *"
                        />

                        <span className="icon validation small success hide">
                          <span className="fa fa-check" />
                        </span>
                        <span className="icon validation small error hide">
                          <span className="fa fa-remove" />
                        </span>
                      </div>
                      <div
                        className="is-helpful"
                        data-helper="Validates if not empty."
                        data-error="Please enter your first name."
                      />
                    </div>
                  </div>

                  <div className="row">
                    <label for="phone" className="inputLabel">
                      Mobile Number *
                    </label>
                    <div className="mobileNumber">
                      <div className="columns small-12 medium-6 large-6">
                        <div className="relative input-wrap">
                          <select name="country-code" id="country-code">
                            <option value="61">Australia (+61)</option>
                            <option value="1" selected>
                              Canada (+1)
                            </option>
                            <option value="91">India (+91)</option>
                            <option value="1">United States (+1)</option>
                            <option value="44">United Kingdom (+44)</option>
                          </select>
                        </div>
                      </div>

                      <div className="columns small-12 medium-6 large-6 phone-col-2">
                        <div className="relative input-wrap is-required">
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Enter your phone number"
                          />

                          <span className="icon validation small success hide">
                            <span className="fa fa-check" />
                          </span>
                          <span className="icon validation small error hide">
                            <span className="fa fa-remove" />
                          </span>
                        </div>
                        <div
                          className="is-helpful"
                          data-helper="Validates with numbers, dots and dashes"
                          data-error="Please enter a valid phone number."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="small-12 medium-12 large-12">
                      <div className="columns">
                        <div className="small-12 medium-12 large-12">
                          <div className="relative input-wrap is-required">
                            <label className="inputLabel">Email Address</label>
                            <input
                              id="email"
                              type="email"
                              name="email"
                              placeholder="Email *"
                            />

                            <span className="icon validation small success hide">
                              <span className="fa fa-check" />
                            </span>
                            <span className="icon validation small error hide">
                              <span className="fa fa-remove" />
                            </span>
                          </div>
                          <div
                            className="is-helpful"
                            data-helper="Validates with proper email format."
                            data-error="Please enter your email."
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="columns">
                      <label for="birthdate" className="inputLabel">
                        What is your birthdate? *
                      </label>
                      <div className="small-12 medium-5 large-5">
                        <div className="relative input-wrap">
                          <input type="date" name="birthdate" id="birthdate" />

                          <span className="icon validation small success hide">
                            <span className="fa fa-check" />
                          </span>
                          <span className="icon validation small error hide">
                            <span className="fa fa-remove" />
                          </span>
                        </div>
                        <div
                          className="is-helpful"
                          data-helper="You must be at least 13."
                          data-error="You must be at least 13."
                        />
                      </div>
                    </div>
                  </div>

                  <div class="ro">
                    <div class="col-xs-12 col-sm-4 col-sm-offset-4 col-md-2 col-md-offset-5">
                      <label className="inputLabel">Gender</label>
                      <ul class="radios">
                        <li>
                          <input
                            type="radio"
                            name="group"
                            id="Male"
                            value="Male"
                            checked
                          />
                          <label for="Male" className="labelForRadios">
                            Male
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            name="group"
                            id="Female"
                            value="Female"
                          />
                          <label for="Female" className="labelForRadios">
                            Female
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button className="profile-content-save-button">Save</button>

                  <div
                    className="borderAfterHeading"
                    style={{
                      marginTop: "30px"
                    }}
                  />
                  <div
                    className="profileHead"
                    style={{
                      padding: "25px 0"
                    }}
                  >
                    <h4 className="profileHeading">Password</h4>
                    <p
                      style={{
                        paddingLeft: "70px",
                        fontWeight: "bold",
                        marginBottom: "7px",
                        fontSize: "15px",
                        color: "#4e90a4",
                        cursor: "pointer"
                      }}
                    >
                      Change your password
                    </p>
                  </div>
                  <div className="borderAfterHeading" />
                </div>

                <div className="panel">
                  <div className="row">
                    <div className="small-12 medium-12 large-12">
                      <h4 className="profileHeading">Reset Password</h4>
                    </div>
                  </div>

                  <div className="row">
                    <div className="small-12 medium-12 large-12">
                      <div className="columns small-12 medium-6 large-6">
                        <div className="relative input-wrap is-optional password-old">
                          <input
                            id="password-old"
                            type="password"
                            name="password-old"
                            placeholder="Enter your current password."
                          />

                          <span className="icon validation small success hide">
                            <span className="fa fa-check" />
                          </span>
                          <span className="icon validation small error hide">
                            <span className="fa fa-remove" />
                          </span>
                        </div>
                        <div
                          className="is-helpful"
                          data-helper="Validates once it reaches 8 characters"
                          data-error="Please enter your current password."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="small-12 medium-12 large-12">
                      <div className="columns small-12 medium-6 large-6">
                        <div className="relative input-wrap is-required password-set">
                          <input
                            id="password1"
                            type="password"
                            name="password1"
                            placeholder="Choose a new password *"
                          />

                          <span className="icon validation small success hide">
                            <span className="fa fa-check" />
                          </span>
                          <span className="icon validation small error hide">
                            <span className="fa fa-remove" />
                          </span>
                        </div>
                        <div className="is-helpful" />
                      </div>

                      <div className="columns small-12 medium-12 large-6">
                        <div className="relative input-wrap is-required password-confirm">
                          <input
                            id="password2"
                            type="password"
                            name="password2"
                            placeholder="Confirm your new password *"
                          />

                          <span className="icon validation small success hide">
                            <span className="fa fa-check" />
                          </span>
                          <span className="icon validation small error hide">
                            <span className="fa fa-remove" />
                          </span>
                        </div>
                        <div
                          className="is-helpful"
                          data-helper="Enter the same password again."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </main>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    errors: state.errors,
    profile: state.profile
  };
};

export default connect(
  mapStateToProp,
  { getCurrentProfile, createProfile }
)(withRouter(ProfileContent));
