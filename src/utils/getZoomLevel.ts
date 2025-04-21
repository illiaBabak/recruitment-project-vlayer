export const getZoomLevel = (): string => {
  const zoomLevel = window.outerWidth / window.innerWidth;

  return (Math.round(zoomLevel * 100) / 100).toString();
};
