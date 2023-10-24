'use client';

import Search from './Search';
import Filters from './Filters';
import { useState } from 'react';
import { AnimatePresence, motion as m } from 'framer-motion';

export default function SearchContainer({ searchParams, value }) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);

  return (
    <>
      <Search
        value={value}
        isSearchPage={true}
        searchParams={searchParams}
        handleFilter={() => setIsFiltersOpen(!isFiltersOpen)}
      />
      <AnimatePresence>
        {isFiltersOpen && (
          <>
            <Filters searchParams={searchParams} />
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, type: 'spring' }}
              onClick={() => setIsFiltersOpen(false)}
              className="bg-black/20 fixed inset-0 md:left-[100px]"
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
