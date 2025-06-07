import { useEffect, useState } from 'react';

/**
 * Custom hook for responsive design that detects if the screen matches a media query
 * @param query CSS media query string e.g. '(max-width: 767px)'
 * @returns boolean indicating if the query matches
 */
export const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);

        // Initial check
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        // Create listener function
        const listener = () => setMatches(media.matches);

        // Add listener for subsequent changes
        window.addEventListener('resize', listener);

        // Clean up function
        return () => window.removeEventListener('resize', listener);
    }, [matches, query]);

    return matches;
};

export default useMediaQuery; 