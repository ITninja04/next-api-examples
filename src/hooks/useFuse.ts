import Fuse from 'fuse.js'
import * as React from 'react'

export const FuseDefaultOptions = {
  isCaseSensitive: false,
  findAllMatches: false,
  useExtendedSearch: true,
  includeMatches: true,
  includeScore: true,
  keys: ['body', 'title']
}

/**
 * A React Hook that filters an array using the Fuse.js fuzzy-search library.
 *
 * @param list The array to filter.
 * @param searchTerm The search term to filter by.
 * @param fuseOptions Options for Fuse.js.
 *
 * @returns The filtered array.
 *
 * @see https://fusejs.io/
 */
export function useFuse<T>(
  list: T[],
  searchTerm: string,
  fuseOptions?: Fuse.IFuseOptions<T>
) {
  const fuse = React.useMemo(() => {
    return new Fuse(list, fuseOptions)
  }, [list, fuseOptions])

  const results = React.useMemo(() => {
    return fuse.search(searchTerm)
  }, [fuse, searchTerm])

  return results
}
