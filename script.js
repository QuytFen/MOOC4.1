document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    const figures = document.querySelectorAll('.gallery figure');

    figures.forEach(fig => {
      fig.addEventListener('mouseover', () => {
        fig.style.transform = 'scale(1.05)';
        fig.style.transition = 'transform 0.3s ease';
      });

      fig.addEventListener('mouseout', () => {
        fig.style.transform = 'scale(1)';
      });
    });
  }
});
