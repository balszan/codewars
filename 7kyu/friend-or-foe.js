function friend(friends){
    let result=[]
    friends.forEach((friend) => {
        if(friend.length==4) {
            result.push(friend)
        }
    })
    return result
  }
