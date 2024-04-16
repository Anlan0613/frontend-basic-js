// log, error, warn, info, clear
console.log('This is a text field');
console.error('Error found');
console.warn('Warning found');
console.info('Information found');
console.clear();

// timer
console.time('timer');
const hello = function () {
    console.log('Hello Console!');
}
const bye = function () {
    console.log('Bye Console!');
}

hello();
bye();

console.timeEnd('timer');
console.clear();

// table
console.table({a: 1, b: 2, c: 3});

for (let i = 0; i < 3; i++) {
    const count = (i);
}
console.clear();

// group
console.group('group');
    console.warn('This is a warning');
    console.error('This is an error');
    console.log('I belong to the group');
console.groupEnd('group');
console.log('I don\'t belong to any group');
console.clear();

const spacing = "20px";
const styles = 'padding: ${spacing}; background-color: yellow; color: red; font-style: italic; border: 1px solid black; font-size: 2em';
console.log('%cI am a styled log', styles);
console.clear();