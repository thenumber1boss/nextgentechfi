import React from "react";
import styles from "./explore-events-card.module.css";

//Takes heading, body of text and image as props.

const ExploreEventsCard = ({ heading, supportingText, image }) => {
  return (
    <div className={styles.exploreEventsCard}>
      <img className={styles.image} alt={`Nextgen ${heading} event`} src={image} />
      <div className={styles.frame}>
            <div className={styles.div}>
              <div className={styles.heading}>{heading}</div>
              <p className={styles.eventText}>
                {supportingText}
              </p>
        </div>
        <div className={styles.CTAWrapper}>
          <div className={styles.CTA}>Learn more</div>
        </div>
      </div>
    </div>
  );
};

export default ExploreEventsCard;
