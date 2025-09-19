import { stories } from "../../data";
import styles from "../../styles";

const StoryCard = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {stories.map((story) => (
      <article
        key={story.id}
        className={`${styles.cardBase} group`}
      >
        <div className="relative overflow-hidden rounded-xl mb-6">
          <img
            src={story.icon}
            alt={story.title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="space-y-4">
          <p className={`${styles.overline} text-primary-600`}>
            {story.caption}
          </p>
          <h3 className={`${styles.heading4} text-neutral-900 line-clamp-2`}>
            {story.title}
          </h3>
          <p className={`${styles.bodyMedium} text-neutral-600 line-clamp-3`}>
            {story.desc}
          </p>
        </div>
      </article>
    ))}
  </div>
);

export default StoryCard;
