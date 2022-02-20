var programmingLanguages = [
      'Javascript',
      'Python',
      'PHP',
      'Java',
];

for (var i = 0; i < programmingLanguages.length; i++) {
      console.log(i, programmingLanguages[i]);
}


function average(mylist) {
      var total = 0;

      for (var i = 0; i < mylist.length; i++) {
            total += mylist[i];
      }

      return total / mylist.length;
}


var examResults = [
      100,
      60,
      50,
      30,
      10
];

average(examResults);