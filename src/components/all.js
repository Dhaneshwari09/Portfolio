// // // // import React from "react";
// // // // import "./CSS/Contact.css";

// // // // const Contact = () => {
// // // //   return (
// // // //     <section className="contact-section">
// // // //       <h2 className="contact-heading">Contact</h2>
// // // //       <hr className="custom-underline3" />
// // // //       <p className="contact-subtext">
// // // //         I'm always open to new opportunities and meaningful conversations. Feel
// // // //         free to get in touch!
// // // //       </p>
// // // //       <div className="contact-box">
// // // //         <h3 className="contact-box-title">
// // // //           Email Me{" "}
// // // //           <span role="img" aria-label="rocket">
// // // //             🚀
// // // //           </span>
// // // //         </h3>
// // // //         <form className="contact-form">
// // // //           <input type="email" placeholder="Your Email" required />
// // // //           <input type="text" placeholder="Your Name" required />
// // // //           <input type="text" placeholder="Subject" required />
// // // //           <textarea placeholder="Message" rows="5" required />
// // // //           <button type="submit">Send</button>
// // // //         </form>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Contact;
// // // // .contact-section {
// // // //   text-align: center;
// // // //   padding: 50px 20px;
// // // //   background: linear-gradient(135deg, #1c102b, #0b061a);
// // // //   color: white;
// // // //   /* margin-right: -100px;      Right side overlap */

// // // // }

// // // // .contact-heading {
// // // //   font-size: 2.5rem;
// // // //   font-weight: bold;
// // // // }

// // // // .contact-subtext {
// // // //   margin-top: 10px;
// // // //   font-size: 1.1rem;
// // // //   margin-bottom: 40px;
// // // // }

// // // // .contact-box {
// // // //   max-width: 500px;
// // // //   margin: 0 auto;
// // // //   background-color: #0d0a1a;
// // // //   padding: 30px;
// // // //   border-radius: 15px;
// // // //   box-shadow: 0 0 20px rgba(131, 56, 236, 0.3);
// // // // }

// // // // .contact-box-title {
// // // //   font-size: 1.3rem;
// // // //   font-weight: 600;
// // // //   margin-bottom: 20px;
// // // //   text-align: left;
// // // //   color: white;
// // // // }

// // // // .contact-form input,
// // // // .contact-form textarea {
// // // //   width: 100%;
// // // //   background-color: #14121f;
// // // //   border: 1px solid #888;
// // // //   padding: 12px;
// // // //   margin-bottom: 15px;
// // // //   border-radius: 8px;
// // // //   color: white;
// // // //   font-size: 1rem;
// // // // }

// // // // .contact-form input::placeholder,
// // // // .contact-form textarea::placeholder {
// // // //   color: #aaa;
// // // // }

// // // // .contact-form button {
// // // //   width: 100%;
// // // //   padding: 12px;
// // // //   background: linear-gradient(90deg, #a100ff, #dd00ff);
// // // //   color: white;
// // // //   border: none;
// // // //   border-radius: 8px;
// // // //   font-size: 1.1rem;
// // // //   cursor: pointer;
// // // //   transition: 0.3s;
// // // // }

// // // // .contact-form button:hover {
// // // //   opacity: 0.9;
// // // // }
// // // // .custom-underline3 {
// // // //   width: 150px;
// // // //   height: 3px;
// // // //   background: linear-gradient(to right, #a100ff, #dd00ff);
// // // //   border: none;
// // // //   margin: 0 auto 20px auto; /* Center aligned and spaced below */
// // // //   border-radius: 2px;
// // // // }


















// // // import React from "react";
// // // import "./CSS/Home.css";
// // // import { ReactTyped } from "react-typed";
// // // import profile from "./assets/profile.jpg";
// // // import resume from "./assets/resume.pdf";

// // // export default function Home() {
// // //   return (
// // //     // <div className="home-section d-flex align-items-center text-white px-3 px-sm-5 px-5 py-5">
// // //         <div className="home-section d-flex align-items-center text-white px-3 py-5">

// // //       <div className="container">
// // //         <div className="row flex-column-reverse flex-md-row align-items-center">
// // //           {/* Left Column - Text */}
// // //           <div className="col-md-6 text-center text-md-start home-text-section">
// // //             <h1 className="fw-bold display-5">Hi, I am</h1>
// // //             <h1 className="fw-bold display-4">Dhaneshwari Patel</h1>
// // //             <h4 className="mt-3">
// // //               I am a{" "}
// // //               <span className="highlight-text">
// // //                 <ReactTyped
// // //                   strings={["Programmer", "Software Developer"]}
// // //                   typeSpeed={60}
// // //                   backSpeed={40}
// // //                   loop
// // //                 />
// // //               </span>
// // //             </h4>

// // //             <p className="mt-4 text-secondary">
// // //               I'm a Computer Science undergraduate with a foundation in
// // //               programming, web and mobile app development, and backend
// // //               technologies. I’m passionate about building innovative tech
// // //               solutions, constantly learning, and growing in dynamic
// // //               environments. Ready to take on new challenges and make a
// // //               meaningful impact!
// // //             </p>

// // //             <a
// // //               href={resume}
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               className="btn resume-btn mt-4 px-4 py-2 fw-bold"
// // //             >
// // //               Career Profile
// // //             </a>
// // //           </div>
// // //           {/* Right Column - Image */}
// // //           <div className="col-md-6 text-center mb-4">
// // //             <div className="image-wrapper mx-auto">
// // //               <img
// // //                 src={profile}
// // //                 alt="Profile"
// // //                 className="img-fluid rounded-circle"
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // // home-section {
// // //   background-color: #141321;
// // //   min-height: 80vh;
// // //   /* margin-right: -100px; Right side overlap */
 
// // // }

// // // .highlight-text {
// // //   color: #a362ea;
// // //   font-weight: bold;
// // //   font-size: 1.4rem;
// // // }

// // // .typed-cursor {
// // //   display: inline-block;
// // //   animation: blink 1s step-end infinite;
// // //   color: #a362ea;
// // // }

// // // @keyframes blink {
// // //   50% {
// // //     opacity: 0;
// // //   }
// // // }

// // // .resume-btn {
// // //   background: linear-gradient(to right, #a100ff, #dd00ff);
// // //   color: white;
// // //   border: none;
// // //   border-radius: 15px;
// // //   transition: background 0.3s ease;
// // // }

// // // .resume-btn:hover {
// // //   background: linear-gradient(to right, #dd00ff, #a100ff);
// // // }

// // // .image-wrapper {
// // //   border: 3px solid #a362ea;
// // //   border-radius: 50%;
// // //   padding: 5px;
// // //   width: 350px;
// // //   height: 350px;
// // //   overflow: hidden;
// // //   margin-top: 80px;
// // // }

// // // /* ✅ Medium screen adjustment */
// // // @media (max-width: 1250px) {
// // //   .home-text-section {
// // //     margin-top: 40px;
// // //   }

// // //   .image-wrapper {
// // //     width: 340px;
// // //     height: 340px;
// // //     margin-top: 60px;
// // //   }
// // // }

// // // @media (max-width: 992px) {
// // //   .home-text-section {
// // //     margin-top: 60px;
// // //   }

// // //   .image-wrapper {
// // //     width: 320px;
// // //     height: 320px;
// // //     margin-top: 40px;
// // //   }
// // // }

// // // /* ✅ Tablet/small screen */
// // // @media (max-width: 768px) {
// // //   .home-text-section {
// // //     margin-top: 40px;
// // //     text-align: center;
// // //   }

// // //   .image-wrapper {
// // //     width: 290px;
// // //     height: 290px;
// // //     margin-top: 30px;
// // //   }
// // // }

// // // /* ✅ Very small screen: image up, text just below with perfect spacing */
// // // @media (max-width: 750px) {
// // //   .image-wrapper {
// // //     width: 260px;
// // //     height: 260px;
// // //     margin-top: 50px;
// // //   }

// // //   .home-text-section {
// // //     margin-top: 10px;
// // //   }

// // //   .resume-btn {
// // //     width: 250px;
// // //     margin-bottom: 20px;
// // // }
// // // }

// // // /* ✅ Extra small phones */
// // // @media (max-width: 480px) {
// // //   .image-wrapper {
// // //     width: 230px;
// // //     height: 230px;
// // //     margin-top: 40px;
// // //   }

// // //   .home-text-section {
// // //     margin-top: 5px;
// // //   }
// // // }



// // // @media (max-width: 400px) {
// // //   .container {
// // //     padding-left: 10px !important;
// // //     padding-right: 10px !important;
// // //   }

// // //   .home-text-section {
// // //     padding: 0 !important;
// // //     margin: 0 auto;
// // //     text-align: center;
// // //   }

// // //   .home-text-section p {
// // //     font-size: 0.95rem;
// // //     line-height: 1.5;
// // //     padding: 0;
// // //     margin: 0 auto;
// // //   }

// // //   .resume-btn {
// // //     width: 100%;
// // //     max-width: 250px;
// // //     margin: 20px auto 0 auto;
// // //     padding: 10px;
// // //     font-size: 1rem;
// // //   }

// // //   .profile-img {
// // //     width: 180px;
// // //     height: 180px;
// // //   }
// // // }

// // import React from "react";
// // import "./CSS/Home.css";
// // import { ReactTyped } from "react-typed";
// // import profile from "./assets/profile.jpg";
// // import resume from "./assets/resume.pdf";

// // export default function Home() {
// //   return (
// //     // <div className="home-section d-flex align-items-center text-white px-3 px-sm-5 px-5 py-5">
// //         <div className="home-section d-flex align-items-center text-white px-3 py-5">

// //       <div className="container">
// //         <div className="row flex-column-reverse flex-md-row align-items-center">
// //           {/* Left Column - Text */}
// //           <div className="col-md-6 text-center text-md-start home-text-section">
// //             <h1 className="fw-bold display-5">Hi, I am</h1>
// //             <h1 className="fw-bold display-4">Dhaneshwari Patel</h1>
// //             <h4 className="mt-3">
// //               I am a{" "}
// //               <span className="highlight-text">
// //                 <ReactTyped
// //                   strings={["Programmer", "Software Developer"]}
// //                   typeSpeed={60}
// //                   backSpeed={40}
// //                   loop
// //                 />
// //               </span>
// //             </h4>

// //             <p className="mt-4 text-secondary">
// //               I'm a Computer Science undergraduate with a foundation in
// //               programming, web and mobile app development, and backend
// //               technologies. I’m passionate about building innovative tech
// //               solutions, constantly learning, and growing in dynamic
// //               environments. Ready to take on new challenges and make a
// //               meaningful impact!
// //             </p>

// //             <a
// //               href={resume}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="btn resume-btn mt-4 px-4 py-2 fw-bold"
// //             >
// //               Career Profile
// //             </a>
// //           </div>
// //           {/* Right Column - Image */}
// //           <div className="col-md-6 text-center mb-4">
// //             <div className="image-wrapper mx-auto">
// //               <img
// //                 src={profile}
// //                 alt="Profile"
// //                 className="img-fluid rounded-circle"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // .home-section {
// //   background-color: #141321;
// //   min-height: 80vh;
// //   /* margin-right: -100px; Right side overlap */
 
// // }

// // .highlight-text {
// //   color: #a362ea;
// //   font-weight: bold;
// //   font-size: 1.4rem;
// // }

// // .typed-cursor {
// //   display: inline-block;
// //   animation: blink 1s step-end infinite;
// //   color: #a362ea;
// // }

// // @keyframes blink {
// //   50% {
// //     opacity: 0;
// //   }
// // }

// // .resume-btn {
// //   background: linear-gradient(to right, #a100ff, #dd00ff);
// //   color: white;
// //   border: none;
// //   border-radius: 15px;
// //   transition: background 0.3s ease;
// // }

// // .resume-btn:hover {
// //   background: linear-gradient(to right, #dd00ff, #a100ff);
// // }

// // .image-wrapper {
// //   border: 3px solid #a362ea;
// //   border-radius: 50%;
// //   padding: 5px;
// //   width: 350px;
// //   height: 350px;
// //   overflow: hidden;
// //   margin-top: 80px;
// // }

// // /* ✅ Medium screen adjustment */
// // @media (max-width: 1250px) {
// //   .home-text-section {
// //     margin-top: 40px;
// //   }

// //   .image-wrapper {
// //     width: 340px;
// //     height: 340px;
// //     margin-top: 60px;
// //   }
// // }

// // @media (max-width: 992px) {
// //   .home-text-section {
// //     margin-top: 60px;
// //   }

// //   .image-wrapper {
// //     width: 320px;
// //     height: 320px;
// //     margin-top: 40px;
// //   }
// // }

// // /* ✅ Tablet/small screen */
// // @media (max-width: 768px) {
// //   .home-text-section {
// //     margin-top: 40px;
// //     text-align: center;
// //   }

// //   .image-wrapper {
// //     width: 290px;
// //     height: 290px;
// //     margin-top: 30px;
// //   }
// // }

// // /* ✅ Very small screen: image up, text just below with perfect spacing */
// // @media (max-width: 750px) {
// //   .image-wrapper {
// //     width: 260px;
// //     height: 260px;
// //     margin-top: 50px;
// //   }

// //   .home-text-section {
// //     margin-top: 10px;
// //   }

// //   .resume-btn {
// //     width: 250px;
// //     margin-bottom: 20px;
// // }
// // }

// // /* ✅ Extra small phones */
// // @media (max-width: 480px) {
// //   .image-wrapper {
// //     width: 230px;
// //     height: 230px;
// //     margin-top: 40px;
// //   }

// //   .home-text-section {
// //     margin-top: 5px;
// //   }
// // }



// // @media (max-width: 400px) {
// //   .container {
// //     padding-left: 10px !important;
// //     padding-right: 10px !important;
// //   }

// //   .home-text-section {
// //     padding: 0 !important;
// //     margin: 0 auto;
// //     text-align: center;
// //   }

// //   .home-text-section p {
// //     font-size: 0.95rem;
// //     line-height: 1.5;
// //     padding: 0;
// //     margin: 0 auto;
// //   }

// //   .resume-btn {
// //     width: 100%;
// //     max-width: 250px;
// //     margin: 20px auto 0 auto;
// //     padding: 10px;
// //     font-size: 1rem;
// //   }

// //   .profile-img {
// //     width: 180px;
// //     height: 180px;
// //   }
// // }



// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "./CSS/Navbar.css";

// export default function Navbar() {
//   useEffect(() => {
//     const links = document.querySelectorAll(".nav-link");
//     const toggler = document.querySelector(".navbar-toggler");
//     const navbarCollapse = document.getElementById("navbarContent");

//     links.forEach((link) => {
//       link.addEventListener("click", () => {
//         if (navbarCollapse.classList.contains("show")) {
//           toggler.click();
//         }
//       });
//     });

//     return () => {
//       links.forEach((link) => {
//         link.removeEventListener("click", () => {});
//       });
//     };
//   }, []);

//   return (
//     <nav className="navbar navbar-expand-lg custom-navbar px-4 py-3">
//       <div className="container">
//         <a className="navbar-brand d-flex mt-2 align-items-center text-white fw-bold" href="#home">
//           <div className="logo-circle me-2"></div>
//           <span className="ms-2">Portfolio</span>
//         </a>

//         <button
//           className="navbar-toggler text-white border-0"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//           aria-controls="navbarContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarContent">
//           <ul className="navbar-nav ms-auto gap-lg-4 text-center align-items-center justify-content-end w-100 pe-4">
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#home">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#skills">Skills</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#projects">Projects</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#education">Education</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#contact">Contact</a>
//             </li>
//             <li className="nav-item d-lg-none mt-3 px-3">
//               <a
//                 href="https://github.com/Dhaneshwari09"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn rounded-pill custom-github-btn text-white w-100"
//               >
//                 GitHub Profile
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div className="d-none d-lg-block ms-3">
//           <a
//             href="https://github.com/Dhaneshwari09"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn rounded-pill custom-github-btn text-white"
//           >
//             GitHub Profile
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }
// .custom-navbar {
//   background-color: transparent !important;
//   position: absolute;
//   width: 100%;
//   top: 0;
//   z-index: 10;
//   padding: 0.5rem 1rem;
//   border: none !important;  /* ensures no unwanted border */
//   /* margin-right: -100px;      Right side overlap */
    
// }

// .navbar-toggler {
//   border: none !important;
//   outline: none !important;
//   box-shadow: none !important;
// }


// .navbar-toggler-icon {
//   background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
// }
// .navbar-collapse {
//   background-color: rgba(20, 19, 33, 0.4);
//   backdrop-filter: blur(3px);
//   border-radius: 12px;
//   margin-top: 10px;
//   padding: 0.5rem;
// }
// /* Menu only when open – transparent blur */
// .transparent-menu.collapse.show {
//   background-color: rgba(0, 0, 0, 0.4);
//   backdrop-filter: blur(6px);
//   border-radius: 10px;
//   padding: 1rem;
//   margin-top: 10rem;
// }

// /* Hide borders/padding when collapsed */
// .transparent-menu.collapse {
//   padding: 0;
//   margin: 0;
//   background: transparent !important;
// }

// /* Move links a bit left from end */
// .navbar-nav {
//   padding-right: 100px; /* Adjust value to move slightly left */
// }

// /* Style each nav link */
// .nav-link {
//   color: white !important;
//   padding: 10px 16px;
//   position: relative;
//   transition: all 0.3s ease;
// }

// /* Underline on hover */
// .nav-link::after {
//   content: '';
//   position: absolute;
//   left: 0;
//   bottom: 4px;
//   width: 0;
//   height: 2px;
//   background-color: #a855f7; /* underline color */
//   transition: width 0.3s ease;
// }

// .nav-link:hover::after {
//   width: 100%;
// }


// .github-btn-mobile {
//   margin-top: 10px;
//   padding: 6px 14px;
//   font-size: 0.95rem;
//   font-weight: 500;
//   border-width: 1.2px;
//   line-height: 1.2;
// }

// /* -----porfolio circle------------- */
// .logo-circle {
//   width: 20px;
//   height: 20px;
//   background-color: white;
//   border-radius: 50%;
//   position: relative;
// }

// .logo-circle::after {
//   content: "";
//   position: absolute;
//   top: -4px;
//   left: -4px;
//   width: 28px;
//   height: 28px;
//   border: 4px solid #141321;
//   border-radius: 50%;
// }

// .logo-circle::before {
//   content: "";
//   position: absolute;
//   top: -12px;
//   left: -12px;
//   width: 44px;
//   height: 44px;
//   border: 3px solid #9f43f8; /* purple border */
//   border-bottom: none; /* so it's like a half circle */
//   border-radius: 50%;
// }

// /* ------github-button--------- */
// .custom-github-btn {
//   color: #9f43f8; /* Purple text */
//   border: 1.5px solid #9f43f8; /* Purple border */
//   transition: all 0.3s ease;
// }

// .custom-github-btn:hover {
//   background-color: #9f43f8;
//   color: white;
// }


