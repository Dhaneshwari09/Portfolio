// // -------------------------------- Navbar
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
//           toggler.click(); // 💥 collapse manually
//         }
//       });
//     });
//   }, []);

//   return (
//     <nav className="navbar navbar-expand-lg custom-navbar px-4 py-3">
//       <div className="container">
//       <a
//   className="navbar-brand d-flex mt-2 align-items-center text-white fw-bold"
//   href="#"
// >
//   <div className="logo-circle me-2"></div>
//   <span className="ms-2">Portfolio</span>
// </a>


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
//           <ul className="navbar-nav ms-auto gap-lg-4 text-center align-items-center w-100 justify-content-center">
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#">
//                 Skills
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#">
//                 Experience
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#">
//                 Projects
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#">
//                 Education
//               </a>
//             </li>

//             {/* Mobile GitHub Button */}
//             <li className="nav-item d-lg-none mt-3 px-3">
//               <a
//                 href="https://github.com/Dhaneshwari09"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn rounded-pill custom-github-btn text-white w-100"
//                 style={{
//                   padding: "6px 14px",
//                   fontSize: "0.95rem",
//                   fontWeight: 500,
//                   borderWidth: "1.2px",
//                   lineHeight: "1.2",
//                 }}
//               >
//                 Github Profile
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Desktop GitHub Button */}
//         <div className="d-none d-lg-block ms-3">
//           <a
//             href="https://github.com/Dhaneshwari09"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn rounded-pill custom-github-btn text-white w-100"
//             style={{
//               padding: "6px 14px",
//               fontSize: "0.95rem",
//               fontWeight: 500,
//               borderWidth: "1.2px",
//               lineHeight: "1.2",
//             }}
//           >
//             Github Profile
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

// .nav-link {
//   color: white !important;
//   padding: 10px 16px;
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
