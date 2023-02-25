//getHashTags from head lines of the news paper
//words with the longest length in descending order

//Without inbuilt traditional method
const getags = (headline) => {
  headline = String(headline).toLowerCase().split(" ");
  const hashTags = [];
  let longLength = [];
  for (let index = 0; index < headline.length; index++) {
    headline[index] = headline[index].replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
    longLength.push(headline[index].length);
  }
  longLength = longLength.sort((a, b) => b - a).slice(0, 3);
  for (let index1 = 0; index1 < longLength.length; index1++) {
    for (let index2 = 0; index2 < headline.length; index2++) {
      if (longLength[index1] == headline[index2].length) {
        hashTags.push("#" + headline[index2]);
        headline = headline.filter((val) => val !== headline[index2]);
      }
    }
  }
  console.log(hashTags.slice(0, 3));
};

//Simple code with inbuilt functions
const getHashTags = (headline) => {
  headline = String(headline)
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")
    .toLowerCase()
    .split(" ");
  headline.sort((a, b) => b.length - a.length);
  console.log(headline.map((word) => "#" + word).slice(0, 3));
};

getHashTags("How the Avocado Became the Fruit of the Global Trade");
getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year");
getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit");
getHashTags("Visualizing Science");
getHashTags(
  "Hey! This is big news, Fifa cup in #Australia is dream come true moment"
);
