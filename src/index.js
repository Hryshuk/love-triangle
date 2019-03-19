/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  const set = preferences.reduce((s, current, index, pref) => {
    const v1 = index + 1;
    const v2 = current;
    const v3 = pref[v2 - 1];
    if (v3 !== undefined && pref[v3 - 1] === v1) {
      s.add(v1);
      s.add(v2);
      s.add(v3);
    }
    return s;
  }, new Set());

  const count = Math.floor(set.size / 3);
  return count;
};
