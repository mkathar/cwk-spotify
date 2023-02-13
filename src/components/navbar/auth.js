import React from "react";
import { Menu } from "@headlessui/react";
import { Icon } from "../../icons";
export default function auth() {
  const user = {
    name: "Muhammed Mustafa KATAR",
    avatar: "https://avatars.githubusercontent.com/u/109306011?v=4",
  };
  return (
    <Menu as="nav" className={"relative"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={` flex items-center h-8 rounded-3xl  py-1  ${
              open ? "bg-active" : "bg-black"
            }`}
          >
            <img
              src={user.avatar}
              className="w-8 h-8  rounded-full mr-2 p-px "
            />
            <span className="text-sm font-semibold mr-2">{user.name}</span>
            <span className={open && "rotate-180"}>
              <Icon name="downDir" size={16} />
            </span>
          </Menu.Button>
          <Menu.Items   className={
                "absolute top-full right-0 w-48 bg-active rounded-md  translate-y-2"
              }>
            <Menu.Item
            
            >
              {({ active }) => (
                <a
                  className={`h-10 flex items-center justify-between px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="#"
                >
                  Account 
                  <Icon name={'external'} size={16}/>
                </a>
              )}
            </Menu.Item>
            <Menu.Item
            
            >
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="#"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item
            
            >
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="#"
                >
                  Log out
                </a>
              )}
            </Menu.Item>
        
        
        
            
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}
/**/
