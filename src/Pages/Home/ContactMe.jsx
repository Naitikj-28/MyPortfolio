// import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

// export default function ContactMe() {
//   return (
//     <section id="Contact" className="contact--section">
//       <div>
//         <p className="sub--title">Get In Touch</p>
//         <h2>Contact Me</h2>
//         <p className="text-lg">
//           Feel free to reach out to me through any of the platforms below!
//         </p>
//       </div>
//       <div className="contact--info">
//         <p className="contact--text">
//           📧 <a href="mailto:naitikjain2810@gmail.com">naitikjain2810@gmail.com</a>
//         </p>
//         <p className="contact--text">
//           📞 <a href='contact:9909741013'>9909741013</a> 
//         </p>
//         <p className="contact--text">
//           📍 Ahmedabad,Gujarat,India
//         </p>
//       </div>
//       <div className="social-icons">
//         <a href="https://instagram.com/naitik28_j" target="_blank" rel="noopener noreferrer">
//           <FaInstagram />
//         </a>
//         <a href="https://github.com/Naitikj-28" target="_blank" rel="noopener noreferrer">
//           <FaGithub />
//         </a>
//         <a href="https://linkedin.com/in/naitikjjain1228" target="_blank" rel="noopener noreferrer">
//           <FaLinkedin />
//         </a>
//       </div>
//     </section>
//   );
// }
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactMe() {
  const handleResumeDownload = () => {
    const userConfirmed = window.confirm("Do you want to download the resume?");
    if (userConfirmed) {
      const link = document.createElement("a");
      link.href = "../img/MyResume.pdf";
      link.download = "NaitikJain_Resume.pdf";
      link.click();
    }
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Feel free to reach out to me through any of the platforms below!
        </p>
      </div>
      <div className="contact--info">
        <p className="contact--text">
          📧 <a href="mailto:naitikjain2810@gmail.com">naitikjain2810@gmail.com</a>
        </p>
        <p className="contact--text">
          📞 <a href='contact:9909741013'>9909741013</a> 
        </p>
        <p className="contact--text">
          📍 Ahmedabad, Gujarat, India
        </p>
      </div>
      <div className="resume-download">
        <button onClick={handleResumeDownload} className="resume-button">
          Download Resume
        </button>
      </div>
      <div className="social-icons">
        <a href="https://instagram.com/naitik28_j" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/Naitikj-28" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/naitikjjain1228" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
