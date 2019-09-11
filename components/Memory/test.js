var images = [
    1,
    2,
    3,
    4,
    5,
    6,
    1,
    2,
    3,
    4,
    5,
    6
  ];
  
  var shuffle=images;
  var imagesrandom = [];
  
  for (i = 0; i < images.lengh; i++) {
    var randomItem = shuffle[Math.floor(Math.random()*shuffle.length)];
    imagesrandom[i].push(randomItem);
    shuffle.splice(Math.floor(Math.random()*shuffle.length),1);
  }
  
  console.log(imagesrandom);