"use client";
import Hero from "@/components/Hero";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Index() {
  const t = useTranslations("Index");
  const t2 = useTranslations("PersonDetails");
  return (
    <>
      <Hero />
      <div className="p-10 flex flex-col justify-center items-center gap-4 ">
        <div
          id="card"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {t("title")}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {t("description")}
          </p>
        </div>
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t2("name")}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {t2("profession")}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {t2("company")}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {t2("description")}
          </p>
        </div>
      </div>
    </>
  );
}
