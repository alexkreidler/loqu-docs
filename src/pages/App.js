import tw from "twin.macro";
import { Trends } from "./../components";
import React from "react";

import Link from "@docusaurus/Link";
const App = () => (
  <div>
    <div tw="bg-white lg:flex lg:flex-row">
      <div tw="lg:ml-auto lg:max-w-1/2">
        {/* <div tw="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            tw="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div tw="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div tw="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span tw="sr-only">Workflow</span>
                  <img
                    tw="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  ></img>
                </a>
              </div>
            </div>
            <div tw="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              <a href="#" tw="font-medium text-gray-500 hover:text-gray-900">
                Documentation
              </a>

              <a href="#" tw="font-medium text-gray-500 hover:text-gray-900">
                About
              </a>
            </div>
          </nav>
        </div> */}

        <main tw="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div tw="sm:text-center lg:text-left">
            <h1 tw="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span tw="block xl:inline">Unleash your </span>
              <span tw="block text-indigo-600 xl:inline">data</span>
            </h1>
            <p tw="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Loqu is a library for building Semantic Web Components
            </p>
            <div tw="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div tw="rounded-md shadow">
                <Link
                  to="docs"
                  tw="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Documentation
                </Link>
              </div>
              <div tw="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="https://github.com/alexkreidler/loqu"
                  target="_blank"
                  tw="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Github
                </a>
              </div>
            </div>

            <h1 tw="mt-6 text-lg tracking-tight font-extrabold text-gray-900 hidden">
              {/* Should add your? */}
              <span tw="block text-indigo-600 xl:inline">Ontology</span> +{" "}
              <span tw="block text-indigo-600 xl:inline">Data</span> +{" "}
              <span tw="block text-indigo-600 xl:inline">Components</span> =
              Brilliant Applications
            </h1>
          </div>
        </main>
      </div>
      <div tw="lg:max-w-1/2 m-4 lg:m-10 lg:flex lg:flex-grow box-border object-contain justify-center content-center ">
        <Trends tw="mx-auto" style={{ maxHeight: "30rem" }}></Trends>
      </div>
    </div>

    <div tw="py-12 bg-white">
      <div tw="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div tw="lg:text-center">
          {/* <h2 tw="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Transactions
          </h2> */}
          <p tw="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to build applications
          </p>
          <p tw="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Semantic Web Components unlock a whole range of productivity
            improvements.
          </p>
        </div>

        <div tw="mt-10">
          <dl tw="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div tw="flex">
              <div tw="flex-shrink-0">
                <div tw="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    tw="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
              </div>
              <div tw="ml-4">
                <dt tw="text-lg leading-6 font-medium text-gray-900">
                  Use shared ontologies
                </dt>
                <dd tw="mt-2 text-base text-gray-500">
                  Take advantage of best-practices in data management.
                </dd>
              </div>
            </div>

            <div tw="flex">
              <div tw="flex-shrink-0">
                <div tw="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    tw="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
              </div>
              <div tw="ml-4">
                <dt tw="text-lg leading-6 font-medium text-gray-900">
                  Connect to massive data sources
                </dt>
                <dd tw="mt-2 text-base text-gray-500">
                  Source data from your knowledge graph, or the web of Linked
                  Open Data.
                </dd>
              </div>
            </div>

            <div tw="flex">
              <div tw="flex-shrink-0">
                <div tw="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    tw="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div tw="ml-4">
                <dt tw="text-lg leading-6 font-medium text-gray-900">
                  Share components
                </dt>
                <dd tw="mt-2 text-base text-gray-500">
                  Re-use published components for common ontologies like
                  Schema.org
                </dd>
              </div>
            </div>

            <div tw="flex">
              <div tw="flex-shrink-0">
                <div tw="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    tw="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
              </div>
              <div tw="ml-4">
                <dt tw="text-lg leading-6 font-medium text-gray-900">
                  Dynamic UI Generation
                </dt>
                <dd tw="mt-2 text-base text-gray-500">
                  Loqu presents a beautiful, functional user interface by
                  default that can handle generic data structures defined as
                  ontologies. You can extend this UI by adding your own
                  components step by step.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>

    {/* END APP */}
  </div>
);

export default App;
