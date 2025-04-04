import React from "react";

function Addworkupdate() {
  return (
    <div>
      <div class="relative w-full rounded-3xl bg-white dark:bg-gray-900 max-w-[700px] p-5 lg:p-10 m-4">
        <button class="absolute right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:right-6 sm:top-6 sm:h-11 sm:w-11">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.04289 16.5413C5.65237 16.9318 5.65237 17.565 6.04289 17.9555C6.43342 18.346 7.06658 18.346 7.45711 17.9555L11.9987 13.4139L16.5408 17.956C16.9313 18.3466 17.5645 18.3466 17.955 17.956C18.3455 17.5655 18.3455 16.9323 17.955 16.5418L13.4129 11.9997L17.955 7.4576C18.3455 7.06707 18.3455 6.43391 17.955 6.04338C17.5645 5.65286 16.9313 5.65286 16.5408 6.04338L11.9987 10.5855L7.45711 6.0439C7.06658 5.65338 6.43342 5.65338 6.04289 6.0439C5.65237 6.43442 5.65237 7.06759 6.04289 7.45811L10.5845 11.9997L6.04289 16.5413Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <div>
          <div class="px-2">
            <h4 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Add a new task
            </h4>
            <p class="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Effortlessly manage your to-do list: add a new task
            </p>
          </div>
          <form class="flex flex-col">
            <div class="custom-scrollbar h-[450px] overflow-y-auto px-2">
              <div class="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                <div class="sm:col-span-2">
                  <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Task Title
                  </label>
                  <div class="relative">
                    <input
                      type="text"
                      class="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800"
                      value=""
                    />
                  </div>
                </div>
                <div>
                  <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Due Date
                  </label>
                  <div class="relative">
                    <div class="relative">
                      <input
                        type="date"
                        placeholder="Select date"
                        class="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800"
                        value=""
                      />
                    </div>
                    <span class="absolute right-3.5 top-1/2 -translate-y-1/2">
                      <svg
                        class="fill-gray-700 dark:fill-gray-400"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.33317 0.0830078C4.74738 0.0830078 5.08317 0.418794 5.08317 0.833008V1.24967H8.9165V0.833008C8.9165 0.418794 9.25229 0.0830078 9.6665 0.0830078C10.0807 0.0830078 10.4165 0.418794 10.4165 0.833008V1.24967L11.3332 1.24967C12.2997 1.24967 13.0832 2.03318 13.0832 2.99967V4.99967V11.6663C13.0832 12.6328 12.2997 13.4163 11.3332 13.4163H2.6665C1.70001 13.4163 0.916504 12.6328 0.916504 11.6663V4.99967V2.99967C0.916504 2.03318 1.70001 1.24967 2.6665 1.24967L3.58317 1.24967V0.833008C3.58317 0.418794 3.91896 0.0830078 4.33317 0.0830078ZM4.33317 2.74967H2.6665C2.52843 2.74967 2.4165 2.8616 2.4165 2.99967V4.24967H11.5832V2.99967C11.5832 2.8616 11.4712 2.74967 11.3332 2.74967H9.6665H4.33317ZM11.5832 5.74967H2.4165V11.6663C2.4165 11.8044 2.52843 11.9163 2.6665 11.9163H11.3332C11.4712 11.9163 11.5832 11.8044 11.5832 11.6663V5.74967Z"
                          fill=""
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div>
                  <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Status
                  </label>
                  <div class="relative z-20 bg-transparent dark:bg-form-input">
                    <select class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
                      <option
                        value=""
                        class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                      >
                        To Do
                      </option>
                      <option
                        value=""
                        class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                      >
                        In Progress
                      </option>
                      <option
                        value=""
                        class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                      >
                        Completed
                      </option>
                    </select>
                    <span class="absolute z-30 text-gray-500 -translate-y-1/2 right-4 top-1/2 dark:text-gray-400">
                      <svg
                        class="stroke-current"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.8335 5.9165L8.00016 10.0832L12.1668 5.9165"
                          stroke=""
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div>
                  <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Tags
                  </label>
                  <div class="relative z-20 bg-transparent dark:bg-form-input">
                    <select class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
                      <option
                        value=""
                        class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                      >
                        Marketing
                      </option>
                      <option
                        value=""
                        class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                      >
                        Template
                      </option>
                      <option
                        value=""
                        class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                      >
                        Development
                      </option>
                    </select>
                    <span class="absolute z-30 text-gray-500 -translate-y-1/2 right-4 top-1/2 dark:text-gray-400">
                      <svg
                        class="stroke-current"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.8335 5.9165L8.00016 10.0832L12.1668 5.9165"
                          stroke=""
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div>
                  <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Assignees
                  </label>
                  <div class="relative z-20 bg-transparent dark:bg-form-input">
                    <select class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
                      <option
                        value=""
                        class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                      >
                        Mayad Ahmed
                      </option>
                      <option
                        value=""
                        class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                      >
                        Juhan Ahamed
                      </option>
                      <option
                        value=""
                        class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                      >
                        Mahim Ahmed
                      </option>
                    </select>
                    <span class="absolute z-30 text-gray-500 -translate-y-1/2 right-4 top-1/2 dark:text-gray-400">
                      <svg
                        class="stroke-current"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.8335 5.9165L8.00016 10.0832L12.1668 5.9165"
                          stroke=""
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Description
                  </label>
                  <div class="relative">
                    <textarea
                      placeholder="Type your message here..."
                      rows="6"
                      class="w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-hidden bg-transparent text-gray-900 dark:text-gray-300 text-gray-900 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="relative p-3 mt-6 border border-gray-200 rounded-xl bg-gray-50 dark:border-gray-800 dark:bg-gray-900 sm:p-5">
                <input type="file" id="upload-file" class="sr-only" />
                <div class="flex items-center gap-3 mb-5">
                  <span class="text-lg font-medium text-gray-800 dark:text-white/90">
                    Attachments
                  </span>
                  <span class="block w-px h-4 bg-gray-200 dark:bg-gray-800"></span>
                  <label
                    for="upload-file"
                    class="text-sm font-medium text-brand-500"
                  >
                    Upload file
                  </label>
                </div>
                <div class="flex flex-col items-center gap-3 sm:flex-row">
                  <div class="group relative flex w-full cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-white py-2.5 pl-3 pr-5 dark:border-gray-800 dark:bg-white/5 sm:w-auto">
                    <span class="absolute flex items-center justify-center w-5 h-5 text-gray-400 bg-white border border-gray-200 rounded-full opacity-0 -right-2 -top-2 group-hover:opacity-100 dark:border-gray-800 dark:bg-gray-900">
                      <svg
                        class="fill-current"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.02145 8.2704C2.82618 8.46567 2.82618 8.78225 3.02145 8.97751C3.21671 9.17277 3.53329 9.17277 3.72855 8.97751L5.99935 6.70672L8.2704 8.97777C8.46567 9.17303 8.78225 9.17303 8.97751 8.97777C9.17277 8.78251 9.17277 8.46592 8.97751 8.27066L6.70646 5.99961L8.97751 3.72855C9.17277 3.53329 9.17277 3.21671 8.97751 3.02145C8.78225 2.82618 8.46567 2.82618 8.2704 3.02145L5.99935 5.2925L3.72855 3.02171C3.53329 2.82644 3.21671 2.82644 3.02145 3.02171C2.82618 3.21697 2.82618 3.53355 3.02145 3.72881L5.29224 5.99961L3.02145 8.2704Z"
                          fill=""
                        ></path>
                      </svg>
                    </span>
                    <div class="w-full h-10 max-w-10">
                      <img src="./images/task/pdf.svg" alt="icon" />
                    </div>
                    <div>
                      <p class="text-sm font-medium text-gray-800 dark:text-white/90">
                        Guidelines.pdf
                      </p>
                      <span class="flex items-center gap-1.5">
                        <span class="text-gray-500 text-theme-xs dark:text-gray-400">
                          PDF
                        </span>
                        <span class="inline-block w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span class="text-gray-500 text-theme-xs dark:text-gray-400">
                          Download
                        </span>
                      </span>
                    </div>
                  </div>
                  <div class="group relative flex w-full cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-white py-2.5 pl-3 pr-5 dark:border-gray-800 dark:bg-white/5 sm:w-auto">
                    <span class="absolute flex items-center justify-center w-5 h-5 text-gray-400 bg-white border border-gray-200 rounded-full opacity-0 -right-2 -top-2 group-hover:opacity-100 dark:border-gray-800 dark:bg-gray-900">
                      <svg
                        class="fill-current"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.02145 8.2704C2.82618 8.46567 2.82618 8.78225 3.02145 8.97751C3.21671 9.17277 3.53329 9.17277 3.72855 8.97751L5.99935 6.70672L8.2704 8.97777C8.46567 9.17303 8.78225 9.17303 8.97751 8.97777C9.17277 8.78251 9.17277 8.46592 8.97751 8.27066L6.70646 5.99961L8.97751 3.72855C9.17277 3.53329 9.17277 3.21671 8.97751 3.02145C8.78225 2.82618 8.46567 2.82618 8.2704 3.02145L5.99935 5.2925L3.72855 3.02171C3.53329 2.82644 3.21671 2.82644 3.02145 3.02171C2.82618 3.21697 2.82618 3.53355 3.02145 3.72881L5.29224 5.99961L3.02145 8.2704Z"
                          fill=""
                        ></path>
                      </svg>
                    </span>
                    <div class="w-full h-10 max-w-10">
                      <img src="./images/task/google-drive.svg" alt="icon" />
                    </div>
                    <div>
                      <p class="text-sm font-medium text-gray-800 dark:text-white/90">
                        Branding Assets
                      </p>
                      <span class="flex items-center gap-1.5">
                        <span class="text-gray-500 text-theme-xs dark:text-gray-400">
                          Media
                        </span>
                        <span class="inline-block w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span class="text-gray-500 text-theme-xs dark:text-gray-400">
                          Download
                        </span>
                      </span>
                    </div>
                  </div>
                  <div class="flex h-[60px] w-full cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 dark:border-gray-800 dark:bg-white/5 dark:text-gray-400 sm:w-[60px]">
                    <svg
                      class="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.2502 5.99951C11.2502 5.5853 11.586 5.24951 12.0002 5.24951C12.4145 5.24951 12.7502 5.5853 12.7502 5.99951V11.2498H18.0007C18.4149 11.2498 18.7507 11.5855 18.7507 11.9998C18.7507 12.414 18.4149 12.7498 18.0007 12.7498H12.7502V18.0002C12.7502 18.4144 12.4145 18.7502 12.0002 18.7502C11.586 18.7502 11.2502 18.4144 11.2502 18.0002V12.7498H6C5.58579 12.7498 5.25 12.414 5.25 11.9998C5.25 11.5855 5.58579 11.2498 6 11.2498H11.2502V5.99951Z"
                        fill=""
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center gap-6 px-2 mt-6 sm:flex-row sm:justify-between">
              <div class="flex flex-col items-center gap-3 sm:flex-row">
                <p class="text-sm text-gray-700 dark:text-gray-400">Viewers:</p>
                <div class="flex -space-x-2">
                  <div class="w-8 h-8 overflow-hidden border border-white rounded-full dark:border-gray-900">
                    <img src="./images/user/user-13.jpg" alt="user" />
                  </div>
                  <div class="w-8 h-8 overflow-hidden border border-white rounded-full dark:border-gray-900">
                    <img src="./images/user/user-14.jpg" alt="user" />
                  </div>
                  <div class="w-8 h-8 overflow-hidden border border-white rounded-full dark:border-gray-900">
                    <img src="./images/user/user-15.jpg" alt="user" />
                  </div>
                </div>
              </div>
              <div class="flex items-center w-full gap-3 sm:w-auto">
                <button
                  type="button"
                  class="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="flex w-full justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto"
                >
                  Create Task
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addworkupdate;
