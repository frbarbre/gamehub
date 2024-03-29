// Programmed in Collaboration by: Dennis Russell, Lean Hansen & Frederik Barbré

"use client";

import { useStore } from "../../app/store";
import { AnimatePresence, motion as m } from "framer-motion";

// This component is used to display the modal on the game and friends page
export default function Modal({
  children,
  setIsModalOpen,
  isModalOpen,
  title,
}) {
  const theme = useStore((state) => state.theme);
  const icon = theme === "dark" ? "/close-icon-dark.svg" : "/close-icon.svg";
  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none">
            <m.article
              initial={{ opacity: 0, scale: 0, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="pointer-events-auto relative z-40 bg game-shadow p-[24px] rounded-[2px] w-full max-w-[742px] md:ml-[124px] mx-[24px] max-h-modal md:max-h-[548px] h-full mt-[120px] mb-[110px]"
            >
              <div className="flex justify-between items-start mb-[18px]">
                <h3 className="text-[32px] uppercase font-bold tracking-[1.92px] bg-game-grad bg-clip-text text-transparent">
                  {title}
                </h3>
                <img
                  src={icon}
                  alt="close-icon"
                  className="cursor-pointer"
                  onClick={() => setIsModalOpen(false)}
                />
              </div>
              {children}
            </m.article>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 md:left-[100px] bg-black/20 z-30 pointer-events-auto"
              onClick={() => setIsModalOpen(false)}
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
