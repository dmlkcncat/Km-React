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
    // tab: {
    //   tablist: {
    //     tabitem: {
    //       base: "flex items-center justify-center p-4 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
    //       styles: {
    //         default: {
    //           base: "rounded-t-lg",
    //           active: {
    //             on: "bg-gray-900 text-green-600 dark:bg-gray-800 dark:text-cyan-900",
    //             off: "text-gray-100 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300",
    //           },
    //         },
    //       },
    //     },
    //   },
    // },
    timeline: {
      root: {
        direction: {
          horizontal: "items-base sm:flex",
          vertical: "relative border-l border-gray-200 dark:border-gray-700",
        },
      },
      item: {
        root: {
          horizontal: "relative mb-6 sm:mb-0",
          vertical: "mb-10 ml-6",
        },
        content: {
          root: {
            base: "mt-6 sm:pr-8",
          },
          body: "mb-4 text-between font-normal text-gray-500 dark:text-gray-400",
        },
        point: {
          marker: {
            icon: {
              base: "h-4 w-4 text-red-50",
              wrapper:
                "absolute -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 dark:bg-cyan-900 dark:ring-gray-900",
            },
          },
        },
      },
    },
    accordion: {
      root: {
        base: "divide-y divide-gray-200 border-gray-50 shadow dark:divide-gray-700 dark:border-gray-700",
        flush: {
          off: "rounded-lg border",
          on: "border-b",
        },
      },
      content: {
        base: "py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg",
      },
      title: {
        arrow: {
          base: "h-6 w-6 shrink-0",
          open: {
            off: "",
            on: "rotate-180",
          },
        },
        base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400",
        flush: {
          off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
          on: "!bg-transparent dark:!bg-transparent",
        },
        heading: "",
        open: {
          off: "",
          on: "text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white",
        },
      },
    },
    carousel: {
      root: {
        base: "relative h-full w-full",
        leftControl:
          "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
        rightControl:
          "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
      },
      indicators: {
        active: {
          off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
          on: "bg-white dark:bg-gray-800",
        },
        base: "h-3 w-3 rounded-full",
        wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
      },
      item: {
        base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
        wrapper: "w-full flex-shrink-0 transform cursor-grab snap-center",
      },
      control: {
        base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
        icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
      },
      scrollContainer: {
        base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
        snap: "snap-x",
      },
    },
    tab: {
      base: "flex flex-col gap-2",
      tablist: {
        base: "flex text-center",
        styles: {
          default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
          underline:
            "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
          pills:
            "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
          fullWidth:
            "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-cols-4 dark:divide-gray-700 dark:text-gray-400 rounded-none",
        },
        tabitem: {
          base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
          styles: {
            default: {
              base: "rounded-t-lg",
              active: {
                on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
                off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300",
              },
            },
            underline: {
              base: "rounded-t-lg",
              active: {
                on: "text-cyan-600 rounded-t-lg border-b-2 border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500",
                off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
              },
            },
            pills: {
              base: "",
              active: {
                on: "rounded-lg bg-cyan-600 text-white",
                off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
              },
            },
            fullWidth: {
              base: "ml-2 first:ml-0 w-full rounded-none inline-block",
              active: {
                on: "p-4 text-gray-900 bg-gray-100 focus:ring-4 focus:ring-cyan-300 active focus:outline-none dark:bg-gray-700 dark:text-white !rounded-none",
                off: "bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-cyan-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 !rounded-none",
              },
            },
          },
          icon: "mr-2 h-5 w-5",
        },
      },
      tabpanel: "py-3",
    },
  },
}
