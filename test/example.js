/**
 * Should show no linter errors.
 */
const goodCode = () => {
  if (Date.now() % 2 === 0) {
    console.log('even time!');
  } else {
    console.log('odd time!');
  }
};

// Should show multiple linter errors
const badCode=()=>{
  let foo = true;
  if(foo) console.log('bad code ran, but does not pass eslint!');
  return;
}

// Should complain about no JSDoc
const noJsDoc = () => {
  console.log('Oops no jsdoc');
};

goodCode();
badCode();
noJsDoc();
