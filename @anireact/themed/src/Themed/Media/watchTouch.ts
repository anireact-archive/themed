export const watchTouch = (subscriber: (touch: boolean) => unknown) => {
    const touchMql = matchMedia('(any-pointer: coarse)');

    touchMql.addEventListener('change', () => subscriber(touchMql.matches));
};
