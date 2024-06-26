import LocalSwitcher from "@/components/local-switcher";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useTransition } from "react";

const Header = () => {
  const t = useTranslations("Footer");

  return (
    <>
      <header className="flex justify-center items-center">
        {t("copyright")}
      </header>
    </>
  );
};

export default Header;
