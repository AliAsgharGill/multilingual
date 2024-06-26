import LocalSwitcher from "@/components/local-switcher";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useTransition } from "react";

const Header = () => {
  const t = useTranslations("Navigation");

  return (
    <>
      <header>
        <nav className="flex items-center justify-between">
          <Link href={"/"}>{t("home")}</Link>
          <LocalSwitcher />
        </nav>
      </header>
    </>
  );
};

export default Header;
