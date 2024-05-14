"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { HiSearch, HiBell, HiChat } from "react-icons/hi";
import app from "./../Shared/firebaseConfig";
import { useRouter } from "next/navigation";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const db = getFirestore(app);

  useEffect(() => {
    saveUserInfo();
  }, [session]);

  const saveUserInfo = async () => {
    if (session?.user) {
      await setDoc(doc(db, "user", session.user.email), {
        userName: session.user.name,
        email: session.user.email,
        userImage: session.user.image,
      });
    }
  };

  const onCreateClick = () => {
    if (session) {
      router.push("/pin-builder");
    } else {
      signIn();
    }
  };

  return (
    <div
      className="flex justify-between 
     gap-3 md:gap-2 items-center p-6 align-middle lg:h-20"
    >
      <Image
        src="/logo.png"
        alt="logo"
        width={40}
        height={40}
        onClick={() => router.push("/")}
        className="hover:bg-gray-300 p-2
        rounded-full cursor-pointer"
      />
      <button
        className="bg-black
         text-white p-2 px-3 rounded-full
         text-[15px]
          hidden md:block"
        onClick={() => router.push("/")}
      >
        Home
      </button>

      <button
        className="bg-black
         text-white p-2 rounded-full
         text-[15px]
          hidden md:block"
        onClick={() => router.push("/")}
      >
        Explore
      </button>

      <button
        className="font-semibold p-2 px-3
         rounded-full text-[15px]"
        onClick={() => onCreateClick()}
      >
        Create
      </button>
      <div
        className="bg-[#e9e9e9] p-2 px-3
         gap-3 items-center rounded-full w-[70%] hidden md:flex h-10"
      >
        <HiSearch
          className="text-[20px] 
        text-gray-500"
        />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full  text-[15px]"
        />
      </div>
      <HiSearch
        className="text-[15px] 
        text-gray-500 md:hidden"
      />
      <HiBell className="text-[20px] md:text-[40px] text-gray-500 cursor-pointer" />
      <HiChat className="text-[20px] md:text-[40px] text-gray-500 cursor-pointer" />
      {session?.user ? (
        <Image
          src={session.user.image}
          onClick={() => router.push("/" + session.user.email)}
          alt="user-image"
          width={60}
          height={60}
          className="hover:bg-gray-300 p-2
        rounded-full cursor-pointer"
        />
      ) : (
        <button
          className="font-semibold p-2 px-4 rounded-full"
          onClick={() => signIn()}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default Header;
