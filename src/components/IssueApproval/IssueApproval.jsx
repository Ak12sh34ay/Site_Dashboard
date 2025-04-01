import React from "react";

function IssueApproval() {
  return (
    <div>
      <div class="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
        <div>
          <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
            <h2
              class="text-xl font-semibold text-gray-800 dark:text-white/90"
              x-text="pageName"
            >
              Invoices
            </h2>
            <nav>
              <ol class="flex items-center gap-1.5">
                <li>
                  <a
                    class="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
                    href="/"
                    data-discover="true"
                  >
                    Home
                    <svg
                      class="stroke-current"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
                        stroke=""
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li class="text-sm text-gray-800 dark:text-white/90">
                  Invoices
                </li>
              </ol>
            </nav>
          </div>
          <div class="flex flex-col h-full gap-6 sm:gap-5 xl:flex-row">
            <div class="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-white/[0.03] xl:w-1/5">
              <div class="relative w-full mb-5">
                <form>
                  <button class="absolute -translate-y-1/2 left-4 top-1/2">
                    <svg
                      class="fill-gray-500 dark:fill-gray-400"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.04199 9.37381C3.04199 5.87712 5.87735 3.04218 9.37533 3.04218C12.8733 3.04218 15.7087 5.87712 15.7087 9.37381C15.7087 12.8705 12.8733 15.7055 9.37533 15.7055C5.87735 15.7055 3.04199 12.8705 3.04199 9.37381ZM9.37533 1.54218C5.04926 1.54218 1.54199 5.04835 1.54199 9.37381C1.54199 13.6993 5.04926 17.2055 9.37533 17.2055C11.2676 17.2055 13.0032 16.5346 14.3572 15.4178L17.1773 18.2381C17.4702 18.531 17.945 18.5311 18.2379 18.2382C18.5308 17.9453 18.5309 17.4704 18.238 17.1775L15.4182 14.3575C16.5367 13.0035 17.2087 11.2671 17.2087 9.37381C17.2087 5.04835 13.7014 1.54218 9.37533 1.54218Z"
                        fill=""
                      ></path>
                    </svg>
                  </button>
                  <input
                    type="text"
                    placeholder="Search Invoice..."
                    class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-[42px] pr-3.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  />
                </form>
              </div>
              <div class="space-y-1">
                <div class="flex cursor-pointer items-center gap-3 rounded-lg bg-gray-100 p-2 hover:bg-gray-100 dark:bg-white/[0.03] dark:hover:bg-white/[0.03]">
                  <div class="w-12 h-12 overflow-hidden rounded-full">
                    <img src="./images/user/user-19.jpg" alt="user" />
                  </div>
                  <div>
                    <span class="mb-0.5 block text-sm font-medium text-gray-800 dark:text-white/90">
                      Zain Geidt
                    </span>
                    <span class="block text-gray-500 text-theme-xs dark:text-gray-400">
                      ID: #348
                    </span>
                  </div>
                </div>
                <div class="flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-white/[0.03]">
                  <div class="w-12 h-12 overflow-hidden rounded-full">
                    <img src="./images/user/user-17.jpg" alt="user" />
                  </div>
                  <div>
                    <span class="mb-0.5 block text-sm font-medium text-gray-800 dark:text-white/90">
                      Carla George
                    </span>
                    <span class="block text-gray-500 text-theme-xs dark:text-gray-400">
                      ID: #982
                    </span>
                  </div>
                </div>
                <div class="flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-white/[0.03]">
                  <div class="w-12 h-12 overflow-hidden rounded-full">
                    <img src="./images/user/user-20.jpg" alt="user" />
                  </div>
                  <div>
                    <span class="mb-0.5 block text-sm font-medium text-gray-800 dark:text-white/90">
                      Abram Schleifer
                    </span>
                    <span class="block text-gray-500 text-theme-xs dark:text-gray-400">
                      ID: #289
                    </span>
                  </div>
                </div>
                <div class="flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-white/[0.03]">
                  <div class="w-12 h-12 overflow-hidden rounded-full">
                    <img src="./images/user/user-34.jpg" alt="user" />
                  </div>
                  <div>
                    <span class="mb-0.5 block text-sm font-medium text-gray-800 dark:text-white/90">
                      Lincoln Donin
                    </span>
                    <span class="block text-gray-500 text-theme-xs dark:text-gray-400">
                      ID: #522
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] xl:w-4/5">
              <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
                <h3 class="font-medium text-gray-800 text-theme-xl dark:text-white/90">
                  Invoice
                </h3>
                <h4 class="text-base font-medium text-gray-700 dark:text-gray-400">
                  ID : #348
                </h4>
              </div>
              <div class="p-5 xl:p-8">
                <div class="flex flex-col gap-6 mb-9 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-400">
                      From
                    </span>
                    <h5 class="mb-2 text-base font-semibold text-gray-800 dark:text-white/90">
                      Zain Geidt
                    </h5>
                    <p class="mb-4 text-sm text-gray-500 dark:text-gray-400">
                      1280, Clair Street, <br />
                      Massachusetts, New York - 02543
                    </p>
                    <span class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Issued On:
                    </span>
                    <span class="block text-sm text-gray-500 dark:text-gray-400">
                      11 March, 2027
                    </span>
                  </div>
                  <div class="h-px w-full bg-gray-200 dark:bg-gray-800 sm:h-[158px] sm:w-px"></div>
                  <div class="sm:text-right">
                    <span class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-400">
                      To
                    </span>
                    <h5 class="mb-2 text-base font-semibold text-gray-800 dark:text-white/90">
                      Albert Word
                    </h5>
                    <p class="mb-4 text-sm text-gray-500 dark:text-gray-400">
                      355, Shobe Lane <br />
                      Colorado, Fort Collins - 80543
                    </p>
                    <span class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Due On:
                    </span>
                    <span class="block text-sm text-gray-500 dark:text-gray-400">
                      16 March, 2027
                    </span>
                  </div>
                </div>
                <div class="overflow-hidden rounded-2xl border border-gray-100 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                  <div class="max-w-full overflow-x-auto">
                    <table class="min-w-full undefined">
                      <thead class="border-b border-gray-100 dark:border-white/[0.05]">
                        <tr>
                          <th class="px-5 py-3 text-sm font-medium text-left text-gray-700 dark:text-gray-400">
                            #
                          </th>
                          <th class="px-5 py-3 text-sm font-medium text-left text-gray-700 dark:text-gray-400">
                            Product
                          </th>
                          <th class="px-5 py-3 text-sm font-medium text-left text-gray-700 dark:text-gray-400">
                            Quantity
                          </th>
                          <th class="px-5 py-3 text-sm font-medium text-left text-gray-700 dark:text-gray-400">
                            Unit Cost
                          </th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-100 dark:divide-white/[0.05]">
                        <tr>
                          <td class="px-5 py-3.5 text-left dark:border-white/[0.05] text-gray-500 text-theme-sm dark:text-gray-400">
                            1
                          </td>
                          <td class="px-5 py-3.5 text-left dark:border-white/[0.05] text-gray-500 text-theme-sm dark:text-gray-400">
                            TailGrids
                          </td>
                          <td class="px-5 py-3.5 text-left dark:border-white/[0.05] text-gray-500 text-theme-sm dark:text-gray-400">
                            1
                          </td>
                          <td class="px-5 py-3.5 text-left dark:border-white/[0.05] text-gray-500 text-theme-sm dark:text-gray-400">
                            $48
                          </td>
                        </tr>
                        <tr>
                          <td class="px-5 py-3.5 text-left dark:border-white/[0.05] text-gray-500 text-theme-sm dark:text-gray-400">
                            1
                          </td>
                          <td class="px-5 py-3.5 text-left dark:border-white/[0.05] text-gray-500 text-theme-sm dark:text-gray-400">
                            TailGrids
                          </td>
                          <td class="px-5 py-3.5 text-left dark:border-white/[0.05] text-gray-500 text-theme-sm dark:text-gray-400">
                            1
                          </td>
                          <td class="px-5 py-3.5 text-left dark:border-white/[0.05] text-gray-500 text-theme-sm dark:text-gray-400">
                            $48
                          </td>
                        </tr>
                        <tr>
                          <td class="px-5 py-3.5 text-left dark:border-white/[0.05] text-gray-500 text-theme-sm dark:text-gray-400">
                            1
                          </td>
                          <td class="px-5 py-3.5 text-left dark:border-white/[0.05] text-gray-500 text-theme-sm dark:text-gray-400">
                            TailGrids
                          </td>
                          <td class="px-5 py-3.5 text-left dark:border-white/[0.05] text-gray-500 text-theme-sm dark:text-gray-400">
                            1
                          </td>
                          <td class="px-5 py-3.5 text-left dark:border-white/[0.05] text-gray-500 text-theme-sm dark:text-gray-400">
                            $48
                          </td>
                        </tr>
                        <tr>
                          <td class="px-5 py-3.5 text-left dark:border-white/[0.05] text-gray-500 text-theme-sm dark:text-gray-400">
                            1
                          </td>
                          <td class="px-5 py-3.5 text-left dark:border-white/[0.05] text-gray-500 text-theme-sm dark:text-gray-400">
                            TailGrids
                          </td>
                          <td class="px-5 py-3.5 text-left dark:border-white/[0.05] text-gray-500 text-theme-sm dark:text-gray-400">
                            1
                          </td>
                          <td class="px-5 py-3.5 text-left dark:border-white/[0.05] text-gray-500 text-theme-sm dark:text-gray-400">
                            $48
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="pb-6 my-6 text-right border-b border-gray-100 dark:border-gray-800">
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    Sub Total amount: $3,098
                  </p>
                  <p class="mb-3 text-sm text-gray-500 dark:text-gray-400">
                    Vat (10%): $312
                  </p>
                  <p class="text-lg font-semibold text-gray-800 dark:text-white/90">
                    Total : $3,410
                  </p>
                </div>
                <div class="flex items-center justify-end gap-3">
                  <button class="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                    Proceed to payment
                  </button>
                  <button class="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">
                    <svg
                      class="fill-current"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.99578 4.08398C6.58156 4.08398 6.24578 4.41977 6.24578 4.83398V6.36733H13.7542V5.62451C13.7542 5.42154 13.672 5.22724 13.5262 5.08598L12.7107 4.29545C12.5707 4.15983 12.3835 4.08398 12.1887 4.08398H6.99578ZM15.2542 6.36902V5.62451C15.2542 5.01561 15.0074 4.43271 14.5702 4.00891L13.7547 3.21839C13.3349 2.81151 12.7733 2.58398 12.1887 2.58398H6.99578C5.75314 2.58398 4.74578 3.59134 4.74578 4.83398V6.36902C3.54391 6.41522 2.58374 7.40415 2.58374 8.61733V11.3827C2.58374 12.5959 3.54382 13.5848 4.74561 13.631V15.1665C4.74561 16.4091 5.75297 17.4165 6.99561 17.4165H13.0041C14.2467 17.4165 15.2541 16.4091 15.2541 15.1665V13.6311C16.456 13.585 17.4163 12.596 17.4163 11.3827V8.61733C17.4163 7.40414 16.4561 6.41521 15.2542 6.36902ZM4.74561 11.6217V12.1276C4.37292 12.084 4.08374 11.7671 4.08374 11.3827V8.61733C4.08374 8.20312 4.41953 7.86733 4.83374 7.86733H15.1663C15.5805 7.86733 15.9163 8.20312 15.9163 8.61733V11.3827C15.9163 11.7673 15.6269 12.0842 15.2541 12.1277V11.6217C15.2541 11.2075 14.9183 10.8717 14.5041 10.8717H5.49561C5.08139 10.8717 4.74561 11.2075 4.74561 11.6217ZM6.24561 12.3717V15.1665C6.24561 15.5807 6.58139 15.9165 6.99561 15.9165H13.0041C13.4183 15.9165 13.7541 15.5807 13.7541 15.1665V12.3717H6.24561Z"
                        fill=""
                      ></path>
                    </svg>
                    Print
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssueApproval;
