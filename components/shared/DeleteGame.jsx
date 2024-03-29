// Programmed in Collaboration by: Dennis Russell, Lean Hansen & Frederik Barbré

"use client";

import { usePathname } from "next/navigation";
import {
  handleSetLibrary,
  handleSetWishlist,
} from "../../lib/actions/user.actions";
import More from "../friends/More";
import { useStore } from "../../app/store";

export default function DeleteGame({ clerkId, gameId, isLibrary, slug }) {
  const pathname = usePathname();
  const isProfileMenuOpen = useStore((store) => store.isProfileMenuOpen);

  // this function is used to run the library action or the wishlist action
  async function deleteGame() {
    if (isLibrary) {
      await handleSetLibrary({
        clerkId: clerkId,
        gameId: gameId,
        path: pathname,
      });
    } else {
      await handleSetWishlist({
        clerkId: clerkId,
        gameId: gameId,
        path: pathname,
      });
    }
  }

  return (
    <div
      className={`absolute top-[7px] right-[7px] bg-[#F9F9F9]/10 backdrop-blur-[86px] rounded-full w-[28px] aspect-square cursor-pointer ${
        isProfileMenuOpen ? "z-0" : "z-30"
      }`}
    >
      <div className="w-full h-full bg-black/20 rounded-full flex items-center justify-center">
        <More handleClick={deleteGame} slug={slug} isWhite={true} />
      </div>
    </div>
  );
}
