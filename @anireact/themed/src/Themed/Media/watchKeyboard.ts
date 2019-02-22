const ignore_ = [
    'text',
    'password',
    'date',
    'datetime-local',
    'month',
    'number',
    'search',
    'tel',
    'time',
    'url',
    'week',
];

export const watchKeyboard = (subscriber: (keyboard: boolean) => unknown, ignore = ignore_) => {
    const keydown = (e: Event) => {
        const target = e.target! as Element;
        const tag = target.tagName.toLowerCase();

        if (tag !== 'textarea' && !(tag === 'input' && ignore.includes(target.getAttribute('type')!.toLowerCase())))
            return;

        subscriber(true);
    };

    const mousedown = () => subscriber(false);

    window.addEventListener('keydown', keydown);
    window.addEventListener('mousedown', mousedown);

    return () => {
        window.removeEventListener('keydown', keydown);
        window.removeEventListener('mousedown', mousedown);
    };
};
