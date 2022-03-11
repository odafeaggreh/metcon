const topNavBar = document.querySelector("#topNavBar");
const buttomNavBar = document.querySelector("#buttomNavBar");
const updateCompletedPorjects = document.querySelector(
  "#updateCompletedPorjects"
);
const footerItems = document.querySelector("#footerItems");
const footerSocials = document.querySelector("#footerSocials");
const aboutUpdateCompletedPorjects = document.querySelector(
  "#aboutUpdateCompletedPorjects"
);

console.log(aboutUpdateCompletedPorjects);

// Setup nav bar

db.collection("siteSettings")
  .doc("K38LXCNQsmhYrkys92lW")
  .onSnapshot((details) => {
    topNavBar.innerHTML = `
          <div class="container">
            <div class="row">
              <div
                class="col-sm text-center text-md-left mb-md-0 mb-2 pr-md-4 d-flex topper align-items-center"
              >
                <p class="mb-0 w-100">
                  <span class="fa fa-paper-plane"></span>
                  <a href="mailto: ${
                    details.data().email
                  }"><span class="text">${details.data().email}</span></a>
                </p>
              </div>
              <div class="col-sm justify-content-center d-flex mb-md-0 mb-2">
                <div class="social-media">
                  <p class="mb-0 d-flex">
                    <a
                      href="${details.data().facebook}"
                      class="d-flex align-items-center justify-content-center"
                      ><span class="fa fa-facebook"
                        ><i class="sr-only">Facebook</i></span
                      ></a
                    >
                    <a
                      href="${details.data().twitter}"
                      class="d-flex align-items-center justify-content-center"
                      ><span class="fa fa-twitter"
                        ><i class="sr-only">Twitter</i></span
                      ></a
                    >
                    <a
                      href="${details.data().instagram}"
                      class="d-flex align-items-center justify-content-center"
                      ><span class="fa fa-instagram"
                        ><i class="sr-only">Instagram</i></span
                      ></a
                    >
                  </p>
                </div>
              </div>
              <div
                class="col-sm-12 col-md-6 col-lg-7 d-flex topper align-items-center text-lg-right justify-content-end"
              >
                <p class="mb-0 register-link">
                  <a
                    href="./contact.html"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    >Inquire Now</a
                  >
                </p>
              </div>
            </div>
          </div>`;

    buttomNavBar.innerHTML = `
          <div class="container">
        <div
          class="row d-flex align-items-start align-items-center px-3 px-md-0"
        >
          <!-- TODO: Change logo -->
          <div class="col-md-4 d-flex mb-2 mb-md-0">
            <a class="navbar-brand d-flex align-items-center" href="index.html">
              <span class="flaticon flaticon-crane"></span>
              <span class="ml-2"
                >Metcon <small>Construction Company</small></span
              >
            </a>
          </div>
          <div class="col-md-4 d-flex topper mb-md-0 mb-2 align-items-center">
            <div class="icon d-flex justify-content-center align-items-center">
              <span class="fa fa-map"></span>
            </div>
            <div class="pr-md-4 pl-md-3 pl-3 text">
              <p class="con">
                <span>Free Call</span> <a href="tel: ${
                  details.data().phoneNumber
                }"><span>${details.data().phoneNumber}</span></a>
              </p>
              <p class="con">Call Us Now 24/7 Customer Support</p>
            </div>
          </div>
          <div class="col-md-4 d-flex topper mb-md-0 align-items-center">
            <div class="icon d-flex justify-content-center align-items-center">
              <span class="fa fa-paper-plane"></span>
            </div>
            <div class="text pl-3 pl-md-3">
              <p class="hr"><span>Our Location</span></p>
              <p class="con">
              ${details.data().businessAddress}
              </p>
            </div>
          </div>
        </div>
      </div>`;

    updateCompletedPorjects.innerHTML = `
    <div class="row no-gutters">
      <div class="col-md-6 py-5 bg-secondary aside-stretch">
        <div
          class="heading-section heading-section-white p-4 pl-md-0 py-md-5 pr-md-5"
        >
          <span class="subheading"
            >A Property and Construction Company</span
          >
          <h2 class="mb-4">Best Provider for Industrial Services</h2>
          <h4>
            We offer the best industrial and construction services in the UK
          </h4>
          <p>
            Our purpose is to improve people’s lives through building the
            facilities and infrastructure that communities need
          </p>
        </div>
      </div>
      <div class="col-md-6 d-flex align-items-center">
        <div class="row">
          <div class="col-md-12 d-flex counter-wrap ">
            <div
              class="block-18 bg-primary d-flex align-items-center justify-content-between"
            >
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="flaticon-engineer"></span>
              </div>
              <div class="text">
                <strong class="number" data-number="${
                  details.data().projectCompleted
                }">0</strong>
                <span>Project Completed</span>
              </div>
            </div>
          </div>
          <div class="col-md-12 d-flex counter-wrap">
            <div
              class="block-18 d-flex align-items-center justify-content-between"
            >
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="flaticon-worker-1"></span>
              </div>
              <div class="text">
                <strong class="number" data-number="${
                  details.data().onGoingProjects
                }">0</strong>
                <span>On-going Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

    footerItems.innerHTML = `
    <ul>
      <li>
        <span class="fa fa-map-marker mr-3"></span
        ><span class="text"
          >${details.data().businessAddress}</span
        >
      </li>
      <li>
        <a href="tel: ${details.data().phoneNumber}"
          ><span class="fa fa-phone mr-3"></span
          ><span class="text">${details.data().phoneNumber}</span></a
        >
      </li>
      <li>
        <a href="mailto: ${details.data().email}"
          ><span class="fa fa-paper-plane mr-3"></span
          ><span class="text">${details.data().email}</span></a
        >
      </li>
    </ul>`;

    footerSocials.innerHTML = `
    <div class="ftco-footer-widget">
      <h2 class="ftco-heading-2 d-flex align-items-center">About</h2>
      <p>
        We welcome queries from all our stakeholders and would like to
        hear from you
      </p>
      <ul class="ftco-footer-social list-unstyled mt-4">
        <li>
          <a href="${
            details.data().twitter
          }"><span class="fa fa-twitter"></span></a>
        </li>
        <li>
          <a href="${
            details.data().facebook
          }"><span class="fa fa-facebook"></span></a>
        </li>
        <li>
          <a href="${
            details.data().instagram
          }"><span class="fa fa-instagram"></span></a>
        </li>
      </ul>
    </div>
    `;

    aboutUpdateCompletedPorjects.innerHTML = `
    <div class="row no-gutters">
          <div class="col-md-6 py-5 bg-secondary aside-stretch">
            <div
              class="heading-section heading-section-white p-4 pl-md-0 py-md-5 pr-md-5"
            >
              <span class="subheading"
                >We are a Property and Construction Company</span
              >
              <h2 class="mb-4">
                Best Provider for Industrial Services in the UK
              </h2>
              <h4>
                We are a people-orientated, progressive business, driven by our
                values to deliver lasting change for our stakeholders and the
                communities we work in
              </h4>
              <p>
                We are passionate about our role in providing vital buildings
                and infrastructure across the country, committed to the idea
                that what we do makes a real difference to people's lives. Our
                purpose, vision and values shape our culture, proactively
                guiding our day-to-day activities and keeping us focused on
                what's important to us.
              </p>
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <div class="row">
              <div class="col-md-12 d-flex counter-wrap ">
                <div
                  class="block-18 bg-primary d-flex align-items-center justify-content-between"
                >
                  <div
                    class="icon d-flex align-items-center justify-content-center"
                  >
                    <span class="flaticon-engineer"></span>
                  </div>
                  <div class="text">
                    <strong class="number" data-number="350">0</strong>
                    <span>Projects Completed</span>
                  </div>
                </div>
              </div>
              <div class="col-md-12 d-flex counter-wrap ">
                <div
                  class="block-18 d-flex align-items-center justify-content-between"
                >
                  <div
                    class="icon d-flex align-items-center justify-content-center"
                  >
                    <span class="flaticon-worker-1"></span>
                  </div>
                  <div class="text">
                    <strong class="number" data-number="50">0</strong>
                    <span>On-going Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    `;
  });
