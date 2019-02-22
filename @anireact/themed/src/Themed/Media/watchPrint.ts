export const watchPrint = (subscriber: (touch: boolean) => unknown) => {
    const printMql = matchMedia('all and print');

    printMql.addEventListener('change', () => subscriber(printMql.matches));
};
