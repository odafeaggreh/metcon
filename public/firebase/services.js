console.log(123);
const topNavBar = document.querySelector("#topNavBar");
const buttomNavBar = document.querySelector("#buttomNavBar");
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
    </div>`;
  });
