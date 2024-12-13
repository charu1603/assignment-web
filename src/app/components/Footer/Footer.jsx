import './Footer.css';
function Footer() {
  const footerContent = [
    {
      title: "Company",
      subtitle: ["SafetyStays", "Signature", "XSeries", "About"],
    },
    {
      title: "Company",
      subtitle: ["SafetyStays", "Signature", "XSeries", "About"],
    },
    {
      title: "Contact",
      subtitle: ["mail@saffronstays.com", "+91 3728253727", "Contact us", "Contact to Partner"],
    },
    {
      title: "Partner with Us",
      subtitle: ["List a Home", "Partner"],
    },
    {
      title: "Policies",
      subtitle: ["Privacy Policy", "Terms", "Sitemap", "Cancellation Policy"],
    },
  ]

  return (
    <div className="footer">
      <div className="footerC">
        {footerContent.map((section, index) => (
          <div key={index} className="title">
            <h3>{section.title}</h3>
            <ul>
              {section.subtitle.map((link, linkIndex) => (
                <li key={linkIndex}>
{link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footerEnd">
        <div className="copyright"><p>© 2021 SaffronStays. All rights reserved</p></div>
        <div className="socials">
            <button className="social"></button>
            <button className="social"></button>
            <button className="social"></button>
            <button className="social"></button>
        </div>
      </div> 
    </div>
  )
}

export default Footer;