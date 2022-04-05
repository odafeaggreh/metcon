console.log(123);
const topNavBar = document.querySelector("#topNavBar");
const buttomNavBar = document.querySelector("#buttomNavBar");
const footerItems = document.querySelector("#footerItems");
const footerSocials = document.querySelector("#footerSocials");
const aboutUpdateCompletedPorjects = document.querySelector(
  "#aboutUpdateCompletedPorjects"
);
const contactInfo = document.querySelector("#contactInfo");
const contactForm = document.querySelector("#contactForm");

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
                class="col-sm-12 col-md-6 col-lg-4 d-flex topper align-items-center text-lg-right justify-content-end"
              >
                <p class="mb-0 register-link">
                  <a
                    href="./contact.html"
                    class="btn btn-primary"
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
              <image src="./images/metcon-logo.png" style="
              width: 90px;
              height: 90px;
              justify-content: center;
              align-items: center;
            " />
            </a>
          </div>
          <div class="col-md-4 d-flex topper mb-md-0 mb-2 align-items-center">
            <div class="icon d-flex justify-content-center align-items-center">
              <span class="fa fa-map"></span>
            </div>
            <div class="pr-md-4 pl-md-3 pl-3 text">
              <p class="con">
                <span>Phone line 1:</span> <a href="tel: ${
                  details.data().phoneNumber
                }" ><span>${details.data().phoneNumber}</span></a>
              </p>
              <p class="con">
                <span>Phone line 2:</span> <a href="tel: ${
                  details.data().phoneNumber2
                }"><span>${details.data().phoneNumber2}</span></a>
              </p>
              <p class="con">Call Us Now 24/7 Customer Support</p>
            </div>
          </div>
        </div>
      </div>`;

    contactInfo.innerHTML = `
      <div class="row" >
              <div class="dbox w-100 d-flex">
                <div
                  class="icon d-flex align-items-center justify-content-center"
                >
                  <span class="fa fa-map-marker"></span>
                </div>
                <div class="text">
                  <p>
                    <span>Headquarters Address:</span>${
                      details.data().businessAddress
                    }
                  </p>
                </div>
              </div>
              <div class="dbox w-100 d-flex">
                <div
                  class="icon d-flex align-items-center justify-content-center"
                >
                  <span class="fa fa-map-marker"></span>
                </div>
                <div class="text">
                  <p>
                    <span>Address:</span>${details.data().businessAdress2}
                  </p>
                </div>
              </div>
              <div class="dbox w-100 d-flex">
                <div
                  class="icon d-flex align-items-center justify-content-center"
                >
                  <span class="fa fa-phone"></span>
                </div>
                <div class="text">
                  <p>
                    <span>Phone:</span>
                    <a href="${details.data().phoneNumber}">${
      details.data().phoneNumber
    }</a>
                  </p>
                </div>
              </div>
              <div class="dbox w-100 d-flex">
                <div
                  class="icon d-flex align-items-center justify-content-center"
                >
                  <span class="fa fa-paper-plane"></span>
                </div>
                <div class="text">
                  <p>
                    <span>Email:</span>
                    <a href="mailto:${details.data().email}">${
      details.data().email
    }</a>
                  </p>
                </div>
              </div>
              </div>
            </div>
      `;

    footerItems.innerHTML = `
    <ul>
      <li>
        <span class="fa fa-map-marker mr-3"></span
        ><span class="text"
          >${details.data().businessAdress2}</span
        >
      </li>
      <li>
        <a href="tel: ${details.data().phoneNumber}"
          ><span class="fa fa-phone mr-3"></span
          ><span class="text">+${details.data().phoneNumber}</span></a
        >
      </li>
      <li>
        <a href="tel: ${details.data().phoneNumber2}"
          ><span class="fa fa-phone mr-3"></span
          ><span class="text">+${details.data().phoneNumber2}</span></a
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

// Contact form

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Input values
  const name = contactForm["name"].value;
  const email = contactForm["email"].value;
  const subject = contactForm["subject"].value;
  const message = contactForm["message"].value;

  db.collection("contact")
    .add({
      to: "info.metconpropertiescompany@gmail.com",
      message: {
        subject: subject,
        name,
        email,
        text: message,
        html: `
                <div>
                  <p>Message from Metcon Property and Construction company website</p>

                  <p>senders name: ${name}</p>
                  <p>senders email address: ${email}</p>
                  <p>senders message: ${message}</p>
                </div>
        `,
      },
    })
    .then(() => console.log("Queued email for delivery!"));
});
