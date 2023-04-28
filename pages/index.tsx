import type { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.css";
const Onboarding: NextPage = () => {
  return (
    <div className={styles.onboarding}>
      <div className={styles.div}>
        <img
          className={styles.companyLogoIcon}
          alt=""
          src="/company-logo.svg"
        />
        <div className={styles.stepperModal}>
          <div className={styles.ctaSection}>
            <div className={styles.stepper}>
              <div className={styles.baseStepper}>
                <div className={styles.baseStepper1}>
                  <img className={styles.lockIcon} alt="" src="/lock.svg" />
                </div>
                <div className={styles.textContainer}>
                  <div className={styles.stepName}>Account</div>
                </div>
              </div>
             
              <div className={styles.baseStepper2}>
                <div className={styles.baseStepper3}>
                  <img className={styles.lockIcon} alt="" src="/user.svg" />
                </div>
                <div className={styles.textContainer}>
                  <div className={styles.stepName}>Personal</div>
                </div>
              </div>
            
              <div className={styles.baseStepper2}>
                <div className={styles.baseStepper3}>
                  <img className={styles.lockIcon} alt="" src="/dollar.svg" />
                </div>
                <div className={styles.textContainer}>
                  <div className={styles.stepName}>Billing</div>
                </div>

                
              </div>
             
              <div className={styles.baseStepper2}>
                <div className={styles.baseStepper3}>
                  <img className={styles.likeIcon} alt="" src="/like.svg" />
                </div>
                <div className={styles.textContainer}>
                  <div className={styles.stepName}>Done</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputs}>
            <div className={styles.inputField}>
              <div className={styles.label}>Name</div>
              <input className={styles.inputBox}
                
                 
                
              />
              <div className={styles.hintText}>Hint text</div>
            </div>
            <div className={styles.inputField}>
              <div className={styles.label}>Email*</div>
              <input className={styles.inputBox}
                
                
              />
              <div className={styles.hintText1}>
                Please input a real Email Address
              </div>
            </div>
            <div className={styles.passwordSection}>
              <div className={styles.inputField2}>
                <div className={styles.label}>Password*</div>
                <input
                  className={styles.inputBox2}
                  type="text"
                  placeholder="Password"
                />
                <div className={styles.hintText1}>
                  Please enter your password
                </div>
              </div>
              <div className={styles.inputField2}>
                <div className={styles.label}>Confirm Password*</div>
                <input
                  className={styles.inputBox2}
                  type="text"
                  placeholder="Confirm Password"
                />
                <div className={styles.hintText1}>Passwords need to match</div>
              </div>
            </div>
            <div className={styles.checkbox}>
              <div className={styles.checkboxFrame}>
              <input type="checkbox" className={styles.checkboxInput} />
              </div>
              <div className={styles.textContainer4}>
                <div className={styles.someHeadingText}>
                  I accept the Terms and Privacy Policy
                </div>
                <div className={styles.supportingTextGoes}>
                  Supporting text goes here
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ctaSection1}>
            <button className={styles.button}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder.svg"
              />
              <div className={styles.text4}>Next</div>
              <img
                className={styles.chevronrightIcon}
                alt=""
                src="/chevronright.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
