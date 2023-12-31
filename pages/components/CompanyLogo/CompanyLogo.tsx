"use client";
import Image from "next/image";

import styles from "./logo.module.css";
import useCompanyAssets from "../../Hooks/useCompanyAssets";

function CompanyLogo() {
  const { companyLogo } = useCompanyAssets();

  return (
    <Image
      id="logo-container"
      className={styles.logo}
      src={companyLogo}
      alt="Logo"
      width={180}
      height={37}
      priority
    />
  );
}

export default CompanyLogo;
