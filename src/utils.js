const randomNumber = (to, direction = 'floor') => (direction === 'floor' ? Math.floor(Math.random() * to) : Math.ceil(Math.random() * to));

// eslint-disable-next-line import/prefer-default-export
export { randomNumber };
