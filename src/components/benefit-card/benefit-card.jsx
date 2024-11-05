import React from "react";
import styles from "./benefit-card.module.css";

const BenefitCard = ({ heading, textBody, clipColor }) => {
  return (
    <div className={styles.benefitCard} >
      <div className={styles.clip} style={{ backgroundColor: clipColor }} />
      <div className={styles.div}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.textBody}>
          {textBody}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;