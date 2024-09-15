import { useState, useEffect } from "react";

// Helper function to determine the number of columns based on the container's width
function getColumnOnWidth(width: number | undefined) {
    console.log("###", width);
  if (!width) {
    return 4;
  }
  if (width >= 1150) {
    return 5;
  }
  if (width >= 960) {
    return 4;
  }
  if (width >= 700) {
    return 3;
  }
  if (width >= 400) {
    return 2;
  }
  return 1;
}

// Custom hook to determine the number of columns based on the width of a container
export const useColumns = (containerRef: React.RefObject<HTMLDivElement>) => {
  const [columns, setColumns] = useState<number>(4); // Default to 4 columns

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const newColumnCount = getColumnOnWidth(containerRef.current.offsetWidth);
        setColumns(newColumnCount); // Update columns when the width changes
      }
    };

    // Use ResizeObserver to watch for width changes
    const observer = new ResizeObserver(() => handleResize());

    // Observe the container's width
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Initial setup to get columns on mount
    handleResize();

    const copyReference: HTMLDivElement | null = containerRef.current;

    // Clean up observer on component unmount
    return () => {
      if (copyReference) {
        observer.unobserve(copyReference);
      }
    };
  }, [containerRef]); // Add containerRef as a dependency

  return columns;
};
