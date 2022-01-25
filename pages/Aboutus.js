import React, { useState } from "react";
import Layout from "../components/Layout";
const Aboutus = () => {
  return (
    <Layout>
      <section>
        <div className="container">
          <h1 id="about" className="text-center text-capitalize pt-5">
            About Me
          </h1>
          <hr className="w-25 mx-auto pt-5" />
          <div className="row mb-5">
            <div className="col-lg-6 col-md-6 col-12">
              <img
                src="/static/images/front-page/me.jpg"
                className="myImg"
                alt="me"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <h1>Who am I ?</h1>
              <hr />
              <p>
                I am working as assistant professor in the department of
                community Medicine Govt medical college Surat
              </p>
              <button className="btn bg-primary text-white">
                want to know more..
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Aboutus;
