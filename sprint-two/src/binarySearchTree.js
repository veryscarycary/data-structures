var BinarySearchTree = function(value) {
  var instance = Object.create(binaryTreeMethods);
  instance.value = value;
  instance.left = null;
  instance.right = null;

  return instance;
};

var binaryTreeMethods = {};

// Time complexity: O(log n)
binaryTreeMethods.insert = function (value, branch) {
  // debugger;
  var branch = branch || this;

  if (value > branch.value) {
    if (!branch.right) {
      branch.right = {value: value};
    } else if (branch.right) {
      this.insert(value, branch.right);
    }
  } else if (value < branch.value) {
    if (!branch.left) {
      branch.left = {value: value};
    } else if (branch.left) {
      this.insert(value, branch.left);
    }
  }
};

// Time complexity: O(log n)
binaryTreeMethods.contains = function (value, branch) {
  var branch = branch || this;

  if (value === branch.value) {
    return true;
  } else if (value > branch.value) {
    if (branch.right) {
      return this.contains(value, branch.right);
    } else {
      return false;
    }
  } else if (value < branch.value) {
    if (branch.left) {
      return this.contains(value, branch.left);
    } else {
      return false;
    }
  }
};

// Time complexity: O(n)
binaryTreeMethods.depthFirstLog = function (cb, branch) {
  branch = branch || this;
  cb(branch.value);

  if (branch.left) {
    this.depthFirstLog(cb, branch.left);
  }
  if (branch.right) {
    this.depthFirstLog(cb, branch.right);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
