// Next, React, Tw
import { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { twMerge } from "tailwind-merge";

// Mui
import { Tooltip } from "@mui/material";

// Icons
import { Icon } from "@iconify/react";

// Others
import AuthGuard from "../providers/AuthGuard";
import { logout } from "../stores/auth";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Standard and Vars
  const { push, asPath } = useRouter();
  const dispatch = useDispatch();

  // Others

  const TABS = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: "majesticons:chat-line",
      icon_selected: "majesticons:chat",
    },
  ];

  const sidePanels = (
    <>
      <button
        type="button"
        className="flex items-center justify-center h-[45px]"
        onClick={() => push("/dashboard")}
      >
        <Icon icon="ri:gemini-fill" className={twMerge("text-[25px]")} />
      </button>
      <div className="flex flex-grow flex-col gap-4 py-4">
        {TABS?.map((o, i) => (
          <Link
            key={i}
            href={o?.path}
            className={twMerge(
              "group relative flex justify-center p-2",
              asPath === o?.path && "border-r-4 border-black"
            )}
          >
            <Icon
              icon={asPath !== o?.path ? o?.icon : o?.icon_selected}
              className={twMerge("text-[20px]")}
            />
            <p
              className={twMerge(
                "absolute left-[45px] top-0 z-10 hidden whitespace-nowrap bg-white px-4 py-2 text-xs font-bold group-hover:block"
              )}
            >
              {o?.label}
            </p>
          </Link>
        ))}
      </div>
      <div className="mb-4 flex flex-col gap-4">
        <div className="flex gap-1 rotate-270 my-8">
          <p className="font-bold text-lg">Nomad.AI</p>
        </div>
        <Link
          href="/profile"
          className={twMerge("group relative flex justify-center")}
        >
          <Icon icon="mdi:user" className={twMerge("text-[20px]")} />
          <div
            className={twMerge(
              "absolute left-[45px] top-0 z-10 hidden whitespace-nowrap bg-white px-4 py-2 text-xs font-bold group-hover:block"
            )}
          >
            Profile
          </div>
        </Link>
        <button
          type="button"
          className={twMerge("group relative flex justify-center")}
          onClick={() => dispatch(logout())}
        >
          <Icon
            icon="material-symbols:logout"
            className={twMerge("text-[20px]")}
          />
          <div
            className={twMerge(
              "absolute left-[45px] top-0 z-10 hidden whitespace-nowrap bg-white px-4 py-2 text-xs font-bold group-hover:block"
            )}
          >
            Log Out
          </div>
        </button>
      </div>
    </>
  );

  return (
    <AuthGuard>
      <div className="relative h-screen">
        <div
          className={twMerge(
            "absolute left-0 top-0 hidden border-r border-gray-300 h-full flex-col justify-between md:flex w-[45px] bg-white text-primary"
          )}
        >
          {sidePanels}
        </div>
        <div
          className={twMerge(
            "absolute top-0 flex h-full w-full flex-col overflow-auto transition-transform duration-1000 ease-in-out md:left-[45px] md:w-[calc(100%_-_45px)]"
          )}
        >
          <div className="flex items-center justify-between gap-2 bg-white p-2">
            <Icon
              icon="ci:hamburger-lg"
              className={twMerge("text-[20px] text-white")}
            />
          </div>
          <div className="flex-grow">
            <div className="h-full w-full flex flex-col">{children}</div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
};

export default Layout;