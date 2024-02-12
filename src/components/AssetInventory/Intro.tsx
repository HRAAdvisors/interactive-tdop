import React, { Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";
import { QuestionMarkCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

export default function Intro() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
        Texas Digital Opportunity Resource Hub
      </h1>
      <Popover.Group className="flex">
        <Popover className="relative">
          <Popover.Button className="">
            <QuestionMarkCircleIcon className="w-6 h-6" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Popover.Panel className="absolute left-0 z-10 mt-2 origin-top-left rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none w-56">
              <p>
                To gather the information in the hub, the Texas Broadband Development Office created
                a survey and circulated it to organizations, residents, and advocacy groups working
                to advance digital opportunity. Because this information is crowdsourced,
                information may not be complete. We invite you to help us keep the information up to
                date and as comprehensive as possible.
              </p>
            </Popover.Panel>
          </Transition>
        </Popover>
        <Popover className="relative">
          <Popover.Button className="">
            <PlusCircleIcon className="w-6 h-6" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Popover.Panel className="absolute left-0 z-10 mt-2 origin-top-left rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none w-56">
              Do you see an important resource missing, or one that has incomplete information?{" "}
              <a
                className="underline"
                target="_blank"
                href="https://airtable.com/appbal6AbAyP6G2la/shrrej5ygBW70ekxL"
              >
                Click here
              </a>{" "}
              to submit an asset for review or suggest updates. Once verified, your resource will be
              added to the list. Thank you!
            </Popover.Panel>
          </Transition>
        </Popover>
      </Popover.Group>
      <p className="mt-2 max-w-xl text-sm text-gray-700">
        Looking for organizations or local governments providing digital resources like free wi-fi
        access, internet skills classes, or hotspot devices? The Texas Digital Opportunity Resource
        Hub is designed to help anyone find digital opportunity resources.
      </p>
      <p className="mt-2 max-w-xl text-sm text-gray-700">
        Digital Opportunity Resources are things like public computer centers, device access
        programs, sources of funding, or digital literacy training programs. This hub will enable
        Texans to find resources in their communities or learn about what people in other parts of
        the state are doing. It is a work in progress and will expand as people interested in
        advancing digital opportunity add information.
      </p>
      <p className="mt-2 max-w-xl text-sm text-gray-700">
        To use the hub, start by using the drop-down menus below to filter resources for a type of
        service (i.e., broadband access), organization (i.e., library), or population group served
        (i.e., low-income households).
      </p>
    </div>
  );
}
