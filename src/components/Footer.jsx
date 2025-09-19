import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// Removed asset import - using text logo
import styles from "../styles";
import { footerLinks } from "../data";

const Footer = () => (
  <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
    <div className="max-w-7xl mx-auto px-6">
      {/* Main Footer Content */}
      <div className="grid md:grid-cols-2 gap-8 py-12 border-b border-neutral-700">
        {/* Logo and Social */}
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-6">
            <h2 className="text-3xl font-display font-bold text-white">
              <span className="gradient-text">Beautivine</span>
            </h2>
            <p className="text-neutral-400 text-sm mt-1">Divine Beauty Experience</p>
          </div>
          <div className="flex gap-4">
            {[
              { icon: faFacebookF, label: "Facebook" },
              { icon: faTwitter, label: "Twitter" },
              { icon: faLinkedin, label: "LinkedIn" },
              { icon: faInstagram, label: "Instagram" },
            ].map((social, index) => (
              <button
                key={index}
                className="w-10 h-10 rounded-lg border border-neutral-600 bg-neutral-800/50 flex items-center justify-center hover:border-primary-300 hover:bg-primary-900/20 transition-all duration-300 group"
                aria-label={social.label}
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  className="text-neutral-300 group-hover:text-primary-300 transition-colors duration-300"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.id} className="">
              <h4 className={`${styles.footerHeading} mb-4`}>{footerLink.title}</h4>
              <ul className="space-y-3">
                {footerLink.links.map((link, index) => (
                  <li key={index}>
                    <button className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm text-left">
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Copyright */}
      <div className="py-6 text-center">
        <p className={`${styles.bodySmall} text-neutral-400`}>
          © 2023 Beautivine. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
