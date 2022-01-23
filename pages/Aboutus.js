import React, { useState } from "react";
import Layout from "../components/Layout";
const Aboutus = () => {
  return (
    <Layout>
      <section>
        <div class="container">
          <h1 id="about" class="text-center text-capitalize pt-5">
            About Me
          </h1>
          <hr class="w-25 mx-auto pt-5" />
          <div class="row mb-5">
            <div class="col-lg-6 col-md-6 col-12">
              <img
                src="/static/images/front-page/me.jpg"
                class="myImg"
                alt="me"
              />
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <h1>Who am I ?</h1>
              <hr />
              <p>
                I am working as assistant professor in the department of
                community Medicine Govt medical college Surat
              </p>
              <button class="btn bg-primary text-white">
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
