const topNavBar = document.querySelector("#topNavBar");
const buttomNavBar = document.querySelector("#buttomNavBar");
const footerItems = document.querySelector("#footerItems");
const footerSocials = document.querySelector("#footerSocials");
const aboutUpdateCompletedPorjects = document.querySelector(
  "#aboutUpdateCompletedPorjects"
);

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
                    <strong class="number" data-number="${
                      details.data().projectCompleted
                    }">0</strong>
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

// Team member1

// db.collection("team")
//   .doc("member!")
//   .onSnapshot((details) => {
//     teamMember1.innerHTML = `
//     <div class="block-2">
//               <div class="flipper">
//                 <div
//                   class="front"
//                   style="background-image: url(/images/team-1.jpg)"
//                 >
//                   <div class="box">
//                     <h2>Ryan 7 Anderson</h2>
//                     <p>Head Engineer</p>
//                   </div>
//                 </div>
//                 <div class="back">
//                   <!-- back content -->
//                   <blockquote>
//                     <p>
//                       &ldquo;Even the all-powerful Pointing has no control about
//                       the blind texts it is an almost unorthographic life One
//                       day however a small line of blind text &rdquo;
//                     </p>
//                   </blockquote>
//                   <div class="author d-flex">
//                     <div class="image align-self-center">
//                       <img src="images/team-1.jpg" alt="" />
//                     </div>
//                     <div class="name align-self-center ml-3">
//                       Ryan Anderson <span class="position">Head Engineer</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//     `;
//   });

const teamMembers = document.querySelector("#teamMembers");

(async function getMarker() {
  const snapshot = await db.collection("team").get();
  let setHTML = snapshot.docs.map((doc) => {
    return `
    <div class="col-lg-3 col-sm-6" >
            <div class="block-2">
              <div class="flipper">
                <div
                  class="front"
                  style="background-image: url(${doc.data().url})"
                >
                  <div class="box">
                    <h2>${doc.data().name}</h2>
                    <p>${doc.data().jobTitle}</p>
                  </div>
                </div>
                <div class="back">
                  <!-- back content -->
                  <blockquote>
                    <p>
                    ${doc.data().bio}
                    </p>
                  </blockquote>
                  <div class="author d-flex">
                    <div class="image align-self-center">
                      <img src="${doc.data().url}" alt="" />
                    </div>
                    <div class="name align-self-center ml-3">
                      ${doc.data().name} <span class="position">${
      doc.data().jobTitle
    }</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;
  });

  teamMembers.innerHTML = setHTML.join("");
})();
