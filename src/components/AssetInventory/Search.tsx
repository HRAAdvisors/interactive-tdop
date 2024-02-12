import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Fuse from "fuse.js";

export default function Search({ allAssets, setAssets }: any) {
  const fuse = new Fuse(allAssets, {
    includeScore: true,
    keys: [
      "fields.Asset",
      "fields.County",
      "fields.Asset Description",
      "fields.Asset Broadband Focus Area",
      "fields.Asset Covered Population",
    ],
    threshold: 0.3,
  });

  return (
    <section className="px-4 pb-8 sm:px-6 lg:px-8">
      <div className="flex mt-10">
        <div className="w-full relative">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <MagnifyingGlassIcon
            className="pointer-events-none absolute inset-x-2 left-2 h-full w-5 text-gray-400"
            aria-hidden="true"
          />
          <input
            id="search-field"
            className="block w-full border-1 border-gray-300 rounded pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0"
            placeholder="Search..."
            type="search"
            name="search"
            onChange={(e) => {
              if (e.target.value.length) {
                setAssets(fuse.search(e.target.value).map((a: any) => a.item));
              } else {
                setAssets(allAssets);
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}
