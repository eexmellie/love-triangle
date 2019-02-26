/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  const validTriangleIndexes = new Set();

  for (let i = 0; i < preferences.length; i++) {

    // skipping valid counted lover
    if (validTriangleIndexes.has(i)) continue;

    const firstLover = preferences[i];
    const secondLover = preferences[firstLover - 1];
    const thirdLover = preferences[secondLover - 1];
    
    // checking wether the lovers form a triangle
    const isTriangleValid = thirdLover - 1 === i;

    // checking that lovers aren't one "person"
    const areLoversUnique = firstLover !== secondLover;

    if (isTriangleValid && areLoversUnique) {
      count++;
      validTriangleIndexes.add(i);
      validTriangleIndexes.add(firstLover - 1);
      validTriangleIndexes.add(secondLover - 1);
    }
  }
  
  return count;
};
