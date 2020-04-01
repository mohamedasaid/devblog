import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className='page-section' id='contact'>
      <Fragment>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className='section-heading text-uppercase'>Login</h2>
              <h3 className='section-subheading text-muted'>Your Account</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <form id='loginForm' name='login' novalidate='novalidate'>
                <div className='row'>
                  <div className='col-md-5'>
                    <div className='form-group'>
                      <p className='help-block text-danger'></p>
                    </div>
                    <div className='form-group'>
                      <input
                        id='email'
                        name='email'
                        className='form-control section-heading'
                        type='email'
                        placeholder='Your Email *'
                        required='required'
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                    <div className='form-group'>
                      <input
                        className='form-control section-heading'
                        name='password'
                        type='password'
                        placeholder='Your Password*'
                        required='required'
                        data-validation-required-message='Please enter your password.'
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='clearfix'></div>
                  <div className='col-lg-12'>
                    <div id='success'></div>
                    <input
                      type='submit'
                      value='Login'
                      className='btn btn-primary'
                    />
                    <ul>
                      <li>
                        <p className='section-heading'>
                          No account? <Link to='/register'> Create one</Link>
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
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    </section>
  );
};

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Login);
