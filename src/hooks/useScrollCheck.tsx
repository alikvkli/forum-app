import { useEffect, useState } from "react";

// Hook for checking if the page or a specific element is scrollable
const useScrollCheck = (elementRef?: React.RefObject<HTMLElement>): boolean => {
    const [isScrollable, setIsScrollable] = useState(false);

    const checkScrollable = () => {
        const element = elementRef?.current || document.documentElement;
        if (element) {
            const isElementScrollable = element.scrollHeight > element.clientHeight;
            setIsScrollable(isElementScrollable);
        }
    };

    useEffect(() => {
        checkScrollable();

        const handleResize = () => {
            checkScrollable();
        };

        // If an element reference is provided, listen for resize events on the element
        if (elementRef) {
            window.addEventListener("resize", handleResize);
        }

        // Clean up
        return () => {
            if (elementRef) {
                window.removeEventListener("resize", handleResize);
            }
        };
    }, [elementRef]);

    return isScrollable;
};

export default useScrollCheck;
