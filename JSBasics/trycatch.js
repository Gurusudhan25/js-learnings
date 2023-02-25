const s = () => {
  try {
    throw 8;
  } catch (e) {
    console.log(8);
  }
};

try {
    console.log(11);
//   log(1);
} catch (e) {
  console.log(e.message);
} finally {
  console.log(10);
}

s();
