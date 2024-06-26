"use client";
import { useRouter, usePathname } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { MdLanguage } from "react-icons/md";

const LocalSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const pathSegments = pathname.split("/");
    const currentLocale = pathSegments[1] || "en";
    setLocale(currentLocale);
  }, [pathname]);

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}`);
  };

  return (
    <div className="flex items-center justify-center space-x-2 border-2 rounded">
      <div className="flex items-center justify-around space-x-2">
        <MdLanguage className="text-2xl" />
        <select
          name="locale"
          className="bg-transparent py-2"
          onChange={onSelectChange}
          value={locale}
          id="locale-select"
        >
          <option value="en">English</option>
          <option value="ar">Arabic</option>
          <option value="de">German</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="hi">Hindi</option>
          <option value="id">Indonesian</option>
          <option value="it">Italian</option>
          <option value="ur">Urdu</option>
        </select>
      </div>
    </div>
  );
};

export default LocalSwitcher;
