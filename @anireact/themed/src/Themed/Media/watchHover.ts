export const watchHover = (subscriber: (touch: boolean) => unknown) => {
    const hoverMql = matchMedia('(any-hover: hover)');

    hoverMql.addEventListener('change', () => subscriber(hoverMql.matches));
};
