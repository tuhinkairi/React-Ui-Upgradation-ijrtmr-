import { useEffect } from 'react';

const useDimensionsBadge = () => {
  useEffect(() => {
    // Ensure Dimensions script is loaded and the API is present
    interface DimensionsWindow extends Window {
      __dimensions_embed?: {
        addBadges: () => void;
      };
      __plumX?: {
        widgets: {
          init: () => void;
        }
      }
    }

    const dimensionsEmbed = (window as DimensionsWindow).__dimensions_embed;
    if (dimensionsEmbed?.addBadges && typeof dimensionsEmbed.addBadges === 'function') {
      dimensionsEmbed.addBadges();
    }

    const plum = (window as DimensionsWindow).__plumX;
    if (plum?.widgets.init && typeof plum.widgets.init === "function") {
      plum.widgets.init()
    }

    // Attach custom event listeners to all relevant elements
    const badgeElements = document.querySelectorAll('.__dimensions_badge_embed__');

    const handleHide = () => {
      console.warn('A Dimensions badge was hidden');
    };

    const handleShow = () => {
      console.info('A Dimensions badge was shown');
    };

    badgeElements.forEach((el) => {
      el.addEventListener('dimensions_embed:hide', handleHide);
      el.addEventListener('dimensions_embed:show', handleShow);
    });

    // Clean up to prevent memory leaks
    return () => {
      badgeElements.forEach((el) => {
        el.removeEventListener('dimensions_embed:hide', handleHide);
        el.removeEventListener('dimensions_embed:show', handleShow);
      });
    };
  }, []);
};

export default useDimensionsBadge;
