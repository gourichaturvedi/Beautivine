import VisitCard from "./VisitCard";
import styles from "../../styles";

const Visit = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Visit our beauty salon"
              className="w-full h-96 lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <p className={`${styles.overline} text-primary-600`}>
                The Perfect Service
              </p>
              <h2 className={`${styles.heading1} text-neutral-900`}>
                Service to Elevate{" "}
                <span className="block">the Better lifestyle</span>
              </h2>
              <p className={`${styles.bodyLarge} text-neutral-600 max-w-lg`}>
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal these content
                here, making it look like readable English.
              </p>
            </div>
            <VisitCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
