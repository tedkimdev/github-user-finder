export function* hello() {
  console.log("Hello Sagas!");
}

const helloSaga = [hello()];

export default helloSaga;
