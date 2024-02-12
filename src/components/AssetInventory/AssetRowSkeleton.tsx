import React from "react";
import { Disclosure } from "@headlessui/react";
import {
  MapPinIcon,
  ChevronDownIcon,
  ArrowTopRightOnSquareIcon,
  ArrowPathIcon,
} from "@heroicons/react/20/solid";
import FocusArea from "./FocusArea";
import classNames from "classnames";

import CoveredPopulation from "./CoveredPopulation";

export default function AssetRowSkelton() {
  return (
    <li
      className="
    animate-pulse
    bg-gradient-to-r from-gray-100 from-10% via-gray-200 via-30% to-gray-100 to-90%
    relative h-[150px] relative border border-1 border-slate-200 shadow mb-4 rounded w-full
    "
    ></li>
  );
}
