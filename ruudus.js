import boxen from 'boxen';


console.log(boxen('Box 1 ', {
  padding: 1,
  borderStyle: 'double',
  borderColor: 'cyan',
  backgroundColor: 'black',
}));


console.log(boxen('Box 2', {
  padding: 2,
  borderStyle: 'round',
  borderColor: 'blue',
  backgroundColor: 'yellow',
}));


console.log(boxen('Box 3', {
  padding: 3,
  borderStyle: 'arrow',
  borderColor: 'red',
  backgroundColor: 'red',
}));


console.log(boxen('Box 4', {
  padding: 4,
  borderStyle: 'classic',
  borderColor: 'magenta',
  backgroundColor: 'green',
}));


console.log(boxen('Box 5', {
  padding: 5,
  borderStyle: 'bold',
  borderColor: 'cyan',
  backgroundColor: 'cyan',
}));


console.log(boxen('Box 6', {
  padding: 6,
  borderStyle: 'doubleSingle',
  borderColor: 'white',
  backgroundColor: 'black',
}));
