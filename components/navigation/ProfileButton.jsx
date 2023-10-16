"use client";

import { useState } from "react";
import { useStore } from "../../app/store";
import { useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfileButton({ avatar, username, email, clerkId }) {
  const theme = useStore((store) => store.theme);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`p-[2px] rounded-full ${
          isMenuOpen
            ? "bg-game-grad"
            : theme === "light"
            ? "bg-black/20"
            : "bg-white/20"
        }`}
      >
        <img
          className="w-[43px] aspect-square object-cover rounded-full"
          src={avatar}
          alt={`${username}'s avatar`}
        />
      </button>
      {isMenuOpen && (
        <ProfileMenu
          username={username}
          email={email}
          avatar={avatar}
          theme={theme}
          clerkId={clerkId}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
    </>
  );
}

function ProfileMenu({
  username,
  email,
  avatar,
  theme,
  clerkId,
  setIsMenuOpen,
}) {
  const { signOut } = useClerk();
  const router = useRouter();

  const profileLinks = [
    {
      name: "profile",
      icon: "/profile-icon.svg",
      href: `/profile/${clerkId}`,
      isLink: true,
    },
    {
      name: "wishlist",
      icon: "/wishlist-icon-grad.png",
      href: `/wishlist/${clerkId}`,
      isLink: true,
    },
    {
      name: "sign out",
      icon: "/sign-out-icon.svg",
      handleClick: () => signOut(),
      isLink: false,
    },
  ];

  function handleRouteChange() {
    router.push(`/profile/${clerkId}`);
    setIsMenuOpen(false);
  }

  return (
    <article
      className={`fixed z-20 flex flex-col gap-[24px] md:bottom-[18px] md:left-[118px] md:top-auto md:right-auto top-[116px] left-[24px] p-[24px] right-[24px] shadow-profile rounded-[7px] ${
        theme === "light"
          ? "bg-back-light shadow-black/10"
          : "bg-back-dark shadow-black/30"
      }`}
    >
      <section
        className="flex flex-col items-center gap-[5px] cursor-pointer"
        onClick={handleRouteChange}
      >
        <img
          src={avatar}
          alt={`${username}'s avatar`}
          className="w-[82px] aspect-square object-cover rounded-full"
        />
        <h2 className="uppercase font-bold bg-game-grad bg-clip-text text-transparent text-[18px] tracking-[1.08px] pt-[5px]">
          {username}
        </h2>
        <p
          className={`text-[14px] font-medium ${
            theme === "light" ? "text-black/50" : "text-white/50"
          }`}
        >
          {email}
        </p>
      </section>
      <hr
        className={`w-[230px] border-t-[0.5px] ${
          theme === "light" ? "border-black/20" : "border-white/20"
        }`}
      />
      <nav className="flex flex-col gap-[32px] pl-[24px]">
        {profileLinks.map((link) => (
          <div key={link.name} onClick={() => setIsMenuOpen(false)}>
            {link.isLink ? (
              <Link href={link.href} className="block">
                <ProfileLink name={link.name} icon={link.icon} />
              </Link>
            ) : (
              <button onClick={link.handleClick} className="block">
                <ProfileLink name={link.name} icon={link.icon} />
              </button>
            )}
          </div>
        ))}
      </nav>
    </article>
  );
}

function ProfileLink({ icon, name }) {
  return (
    <span className="flex gap-[20px] items-center">
      <img
        src={icon}
        alt={`${name}-icon`}
        className="w-[16px] object-contain"
      />
      <p className="text-[16px] uppercase font-bold tracking-[0.96px]">
        {name}
      </p>
    </span>
  );
}
