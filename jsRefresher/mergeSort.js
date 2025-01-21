function sortedArray(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  let midindex = Math.floor(nums.length / 2);

  let left = sortedArray(nums.slice(0, midindex));
  let right = sortedArray(nums.slice(midindex));

  return mergeArray(left, right);
}

function mergeArray(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...right, ...left];
}
