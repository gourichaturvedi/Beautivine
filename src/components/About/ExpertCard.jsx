import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { experts } from "../../data";
import styles from "../../styles";

const ExpertCard = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {experts.map((expert) => (
        <div
          key={expert.id}
          className={`${styles.cardBase} group text-center`}
        >
          <div className="relative overflow-hidden rounded-xl mb-6">
            <img
              src={expert.avatar}
              alt={expert.name}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="space-y-4">
            <h3 className={`${styles.heading4} text-neutral-900`}>
              {expert.name}
            </h3>
            <p className={`${styles.overline} text-primary-600`}>
              {expert.job}
            </p>
            <p className={`${styles.bodyMedium} text-neutral-600`}>
              {expert.description}
            </p>
            
            <div className="flex justify-center gap-4 pt-2">
              {[
                { icon: faFacebookF, label: "Facebook" },
                { icon: faTwitter, label: "Twitter" },
                { icon: faLinkedin, label: "LinkedIn" },
              ].map((social, index) => (
                <button
                  key={index}
                  className="w-10 h-10 rounded-lg border border-neutral-200 bg-white flex items-center justify-center hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 group/social"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className="text-neutral-400 group-hover/social:text-primary-600 transition-colors duration-300"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpertCard;
