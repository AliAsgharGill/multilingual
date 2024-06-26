"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

const LocalSwitcher = () => {
  const router = useRouter();
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // console.log(e.target.value);
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}`)    ;
  };
  return (
    <>
      <div className="space-x-2 border-2 rounded ">
        <select
          name=""
          className="bg-transparent py-2"
          onChange={onSelectChange}
          id=""
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
    </>
  );
};

export default LocalSwitcher;
