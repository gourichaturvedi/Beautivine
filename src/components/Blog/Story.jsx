import StoryCard from "./StoryCard";
import styles from "../../styles";
import { NavLink } from "react-router-dom";

const Story = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <StoryCard />
        <div className="text-center mt-12">
          <NavLink to="/Blog">
            <button type="button" className={`${styles.btnSecondary}`}>
              View More Stories
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Story;
