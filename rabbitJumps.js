function countJumps(garden) {
    let jumps = 0;
    let numCarrots = countCarrots(garden);
    
    while (numCarrots > 0) {
      jumps++;
      let i = 0;
      while (i < garden.length && garden[i][0] === 0) {
        i++;
      }
      if (i === garden.length) {
        break;
      }
      let j = 0;
      while (j < garden[0].length && garden[i][j] === 1) {
        garden[i][j] = 0;
        numCarrots--;
        j++;
      }
    }
    
    return jumps;
  }
  
  function countCarrots(garden) {
    let numCarrots = 0;
    for (let i = 0; i < garden.length; i++) {
      for (let j = 0; j < garden[0].length; j++) {
        if (garden[i][j] === 1) {
          numCarrots++;
        }
      }
    }
    return numCarrots;
  }

  /*example use of the function:
  let garden =[
    [1,0,1],
    [0,0,1],
    [1,1,1]
  ];

  console.log(countJumps(garden));  //this will display the output

  */
  
  
