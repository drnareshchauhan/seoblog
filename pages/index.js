import Layout from "../components/Layout";
import Link from "next/link";
import { NavLink } from "reactstrap";
import { APP_NAME } from "../config";
import { urlObjectKeys } from "next/dist/next-server/lib/utils";

const styles = {
  backgroundPosition: "center",
  height: "25vh",
  width: "100%",
  objectFit: "cover",
  opacity: "50%",
};

const Index = () => {
  return (
    <Layout hideSearch="false">
      <article className="overflow-hidden">
        {/* <div>
          <section>
            <img
              className="home-image"
              src={`/static/images/NakamaSpeed.png`}
            />
          </section>
        </div> */}
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="/static/images/bs1.jpg"
                alt="First slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h1 className="display-4 text-light font-weight-bold mt-4">
                  {APP_NAME}
                </h1>
                <p className="lead text-light">
                  Random blogs from random dweebs
                </p>
                <hr className="my-4"></hr>
                {/* <p className="lead">
              <a
                className="btn btn-outline-light btn-lg"
                href="/blogs"
                role="button"
              >
                Check 'Em
              </a>
            </p> */}
                {/* <h5>My Caption Title (1st Image)</h5>
                <p>
                  The whole caption will only show up if the screen is at least
                  medium size.
                </p> */}
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="/static/images/bs2.jpg"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="/static/images/bs3.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <div className="container mb-4">
          <div className="row justify-content-between">
            {/* <div
              className="col-md-8 offset-4"
              style={{
                backgroundColor: "grey",
                backgroundImage:
                  "url(" + "/static/images/nakamagarage.jpg" + ")",
              }}
            >
              sup
            </div> */}
            <div className="col-md-5 mt-4">
              <div className="card bg-dark text-white">
                <img
                  className="card-img"
                  style={styles}
                  src="/static/images/front-page/hero2.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay align-items-center d-flex ">
                  <div className="card-body justify-content-center text-center">
                    <Link href="/signin">
                      <button
                        type="button"
                        className="btn btn-lg btn-outline-light"
                      >
                        Sign In
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 mt-4">
              <div className="card bg-dark text-white">
                <img
                  className="card-img"
                  style={styles}
                  src="/static/images/front-page/hero4.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay align-items-center d-flex ">
                  <div className="card-body justify-content-center text-center">
                    <Link href="/blogs">
                      <button
                        type="button"
                        className="btn btn-lg btn-outline-light"
                      >
                        Read Blogs
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-md-5 mt-4 ">
              <div className="card bg-dark text-white view zoom">
                <img
                  className="card-img"
                  style={styles}
                  src="/static/images/front-page/img3.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay align-items-center d-flex ">
                  <div className="card-body justify-content-center text-center">
                    <Link href="/contact">
                      <button
                        type="button"
                        className="btn btn-lg btn-outline-light"
                      >
                        Contact
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Index;
