import type { Metadata } from "next";
import UG2027LandingPage, { metadata as originalMetadata } from "../2027/page";
import styles from "./poppins.module.css";

export const metadata: Metadata = {
  ...originalMetadata,
  title: "UG in Business Management — Poppins Edition | NEXIS Siliguri",
};

/** Shared content and interactions, with typography scoped to this variation. */
export default function UG2027PoppinsPage() {
  return (
    <div className={styles.variation} data-font-theme="poppins">
      <UG2027LandingPage />
    </div>
  );
}
