import LocalSwitcher from "@/components/local-switcher";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useTransition } from "react";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <>
      <header className="flex justify-center items-center">
        {t("copyright")}
      </header>
    </>
  );
};

export default Footer;
