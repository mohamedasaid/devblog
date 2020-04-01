import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";
import PropTypes from "prop-types";

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (!password) {
      setAlert("Password is required", "danger");
    }

    register({ name, email, password });
  };

  if (isAuthenticated) {
    return <Redirect to='/login' />;
  }

  return (
    <Fragment>
      <br></br>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <h2 className='section-heading text-uppercase'>Sign up</h2>
            <p className='lead'>
              <i className='section-subheading text-muted'></i> Create Your
              Account
            </p>
            <h3 className='section-subheading text-muted'>
              Welcome to your professional community
            </h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <form
              id='contactForm'
              name='name'
              onSubmit={e => onSubmit(e)}
              novalidate='novalidate text-center'
            >
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      id='name'
                      type='text'
                      placeholder='Your Name *'
                      name='name'
                      value={name}
                      onChange={e => onChange(e)}
                      required='required'
                      data-validation-required-message='Please enter your name.'
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      type='email'
                      name='email'
                      value={email}
                      placeholder='Your Email *'
                      required='required'
                      onChange={e => onChange(e)}
                      data-validation-required-message='Please enter your email address.'
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      type='password'
                      name='password'
                      value={password}
                      placeholder='Your Password *'
                      required='required'
                      onChange={e => onChange(e)}
                      data-validation-required-message='Please enter your phone number.'
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                  <div className='clearfix'></div>
                  <div className='col-lg-12 text-center'>
                    <div id='success'></div>
                    <input
                      className='btn btn-primary btn-xl text-uppercase '
                      type='submit'
                      value='Register'
                      className='btn btn-primary'
                    />
                    <ul>
                      <li>
                        <p className='section-heading'>
                          Already have an account?{" "}
                          <Link to='/login'>Sign in</Link>
                        </p>
                      </li>
                      <li>
                        <p className='section-heading'>
                          Sign in <a href='/auth/google'>with Google</a>{" "}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Register.PropTyoes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, { setAlert, register })(Register);
