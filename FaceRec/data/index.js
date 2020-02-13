var createdDate = '2020-02-12T07:30:10.557Z';
createdDate = new Date(createdDate);
date = createdDate.toLocaleDateString();
time = createdDate.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
console.log(date+' '+time);