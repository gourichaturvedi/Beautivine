// Removed asset import - using web-based image
import styles from "../../styles";

const About = () => {
  return (
    <section className="py-20 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Beautivine Spa Experience"
                className="w-full h-full min-h-96 lg:min-h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>
            <div className="p-8 lg:p-12">
              <div className="space-y-6">
                <p className={`${styles.overline} text-primary-300`}>
                  About Us
                </p>
                <h2 className={`${styles.heading1} text-white max-w-lg`}>
                  Style is a Reflection of your{" "}
                  <span className="bg-gradient-to-r from-primary-300 to-primary-100 bg-clip-text text-transparent">
                    Attitude & Personality
                  </span>
                </h2>
                <p className={`${styles.bodyLarge} text-neutral-300 max-w-lg`}>
                  There are many variations of passages of Lorem Ipsum available, but
                  the majority have suffered alteration in some form, buying to
                  injected humour, or randomized words which don't look even many
                  desktop publishing packages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
