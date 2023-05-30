/**
 * @type {import("flowbite-react").ThemeProps}
 */
export default {
  theme: {
    // sidebar: {
    //   root: {
    //     inner: "h-full overflow-y-auto overflow-x-hidden bg-sidebar py-4 px-3",
    //   },
    //   item: {
    //     base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-sidebar-item dark:text-white dark:hover:bg-gray-700",
    //     active: "bg-sidebar-item-active",
    //   },
    // },
    navbar: {
      root: {
        base: "border-gray-200 px-2 py-2.5 sm:px-4",
      },
    },
    // footer: {
    //   root: {
    //     base: "w-full bg-columbia-blue md:flex md:items-center md:justify-between",
    //   },
    // },
    // card: {
    //   root: {
    //     children: "flex h-full flex-col gap-4 p-6",
    //   },
    // },
    // button: {
    //   color: {
    //     success:
    //       "text-white bg-green-500 border border-transparent hover:bg-green-600 focus:ring-4 focus:ring-green-200 disabled:hover:bg-green-700",
    //   },
    // },
    tab: {
      tablist: {
        tabitem: {
          base: "flex items-center justify-center p-4 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
          styles: {
            default: {
              base: "rounded-t-lg",
              active: {
                on: "bg-gray-900 text-green-600 dark:bg-gray-800 dark:text-cyan-900",
                off: "text-gray-100 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300",
              },
            },
          },
        },
      },
    },
  },
}
