// // import React from 'react';
// // import './CSS/Education.css';
// // import college from './assets/college-logo.png';
// // import tenth from './assets/tenth-logo.png';
// // import twelth from './assets/twelth.jpg';

// // const EducationSection = () => {
// //  const educationData = [
// //   {
// //     logo: college, // replace with your Gyan Ganga logo image variable
// //     title: 'Gyan Ganga College Of Technology, Jabalpur',
// //     degree: 'Bachelor of Technology – BTech, Computer Science and Engineering (Pursuing)',
// //     date: 'Aug 2022 – Jun 2026',
// //     grade: '8.42 CGPA',
// //   },
// //   {
// //     logo: twelth, // replace with your Excellence School logo image variable
// //     title: 'Excellence Higher Secondary School, Beohari',
// //     degree: 'MP Board Class-12th, PCM (Physics, Chemistry, Mathematics)',
// //     date: '2021 – 2022',
// //     grade: 'A',
// //   },
// //   {
// //     logo: tenth, // replace with your Saraswati School logo image variable
// //     title: 'Saraswati Higher Secondary School, Beohari',
// //     degree: 'MP Board Class-10th',
// //     date: '2019 – 2020',
// //     grade: 'A',
// //   },
// // ];


// //   return (
// //     <section className="container education-section">
// //       <h2 className="text-center fw-bold">Education</h2>
// //       <hr className="custom-underline2" />
// //       <div className="container">
// //   <p className="text-center mb-5" style={{ maxWidth: "800px", margin: "0 auto" }}>
// //     My academic journey has been a blend of consistent learning, curiosity, and growth.
// //     Here are the details of my educational background.
// //   </p>
// // </div>

// //       <div className="timeline">
// //         <div className="timeline-line" />
// //         {educationData.map((edu, index) => (
// //           <div key={index}>
// //             <div className="timeline-item">
// //               <div className="edu-header">
// //                 <img src={edu.logo} alt="logo" className="edu-logo" />
// //                 <div className="edu-text">
// //                   <h5><strong>{edu.title}</strong></h5>
// //                   <p>{edu.degree}</p>
// //                   <p>{edu.date}</p>
// //                 </div>
// //               </div>
// //               <div className="edu-grade">
// //                 <strong>Grade:</strong> {edu.grade}
// //               </div>
// //             </div>
// //             {index < educationData.length - 1 && <div className="timeline-dot" />}
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default EducationSection;
// .education-section {
//   background: linear-gradient(135deg, #1c102b, #0b061a, #0b061a);
//   color: white;
//   padding: 40px 0;
//   margin-top: -30px;  
  
// }
// .timeline {
//   position: relative;
//   width: 70%;
//   margin: auto;
//   padding-right: 60px;
// }

// .timeline-line {
//   position: absolute;
//   top: 0;
//   right: 65px;
//   width: 3px;
//   height: 100%;
//   background-color: #a362ea;
//   z-index: 0;
// }

// .timeline-item {
//   position: relative;
//   margin-bottom: 0px;
//   padding: 10px;
//   background-color: #14121f;
//   border: 1px solid #a362ea;
//   border-radius: 10px;
//   z-index: 1;
//   width: 90%;
//   margin-left: auto;
//   margin-right: auto;
//   padding-left: 20px;
// }

// .edu-header {
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   text-align: left;
// }

// .edu-logo {
//   width: 60px;
//   height: 60px;
//   object-fit: cover;
//   border-radius: 8px;
// }

// .edu-text {
//   flex: 1;
//   padding-left: 20px;
// }

// .edu-grade {
//   text-align: left;
//   margin-top: 5px;
// }

// .timeline-dot {
//   position: relative;
//   height: 40px;
// }

// .timeline-dot::before {
//   content: '';
//   position: absolute;
//   top: 50%;
//   right: -0.0px;
//   transform: translateY(-20%);
//   width: 14px;
//   height: 14px;
//   background-color: #d63384;
//   border: 2px solid #a64ac9;
//   border-radius: 50%;
//   z-index: 2;
// }
//  .custom-underline2 {
//   width: 170px;
//   height: 3px;
//   background: linear-gradient(to right, #a100ff, #dd00ff);
//   border: none;
//   margin: 0 auto 20px auto; 
//   border-radius: 2px;
// }
// @media (max-width: 900px) {
//   .timeline {
//     width: 95%;
//     padding-right: 40px; 
//   }

//   .timeline-line {
//     right: 20px; 
//   }

//   .timeline-item {
//     width: 100%;
//     padding: 15px 15px 15px 15px;
//     margin-bottom: 0px; 
//   }

//   .edu-header {
//     flex-direction: column;
//     align-items: center; 
//     gap: 10px;
//     text-align: center;
//   }

//   .edu-logo {
//     width: 60px;
//     height: 60px;
//     margin-bottom: 8px;
//   }

//   .edu-text {
//     padding-left: 10; 
//   }

//   .edu-grade {
//     text-align: center;
//     margin-top: 0px;
//   }

//   .timeline-dot::before {
//     right: -25px; 
//   }
//   .text{
//     margin-left: 10px ;
//     margin-right: 10px;
//     font-size: 1.1rem;
//   }
// }
