/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (let i = 0; i < preferences.length; i++) {

    // skipping valid checked triangle
    if (preferences[i] === -1) continue;
    
    const firstLover = preferences[i];
    const secondLover = preferences[firstLover - 1];
    const thirdLover = preferences[secondLover - 1];

    // checking wether the lovers form a triangle
    const isTriangleValid = thirdLover - 1 === i;

    // checking that lovers aren't one "person"
    const areLoversUnique = firstLover !== secondLover;

    if (isTriangleValid && areLoversUnique) {
      count++;

      // marking lovers of valid triangle as checked
      preferences[i] = -1;
      preferences[firstLover - 1] = -1;
      preferences[secondLover - 1] = -1;
    }
  }

  return count;
};
