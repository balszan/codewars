function getMiddle(s) {
  sarray = s.split("")

  if(sarray.length%2!=0) {
    return sarray[sarray.length/2-0.5]
  } else if (sarray.length%2==0) {
    return sarray[sarray.length/2-1]+sarray[sarray.length/2]
  }



}

console.log(getMiddle("test"))