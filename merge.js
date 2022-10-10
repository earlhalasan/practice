let list1 = [1, 2, 4];
let list2 = [1, 3, 4];

function Node(data, next) {
  this.data = data;
  this.next = next;
}

function mergeTwoLists(l1, l2) {
  // merge list1 and list2
  // return merged list
  let list3 = list1.concat(list2);
  console.log(list3.sort());
}

mergeTwoLists(list1, list2);
