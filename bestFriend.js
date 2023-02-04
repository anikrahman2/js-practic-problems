function bestFriend (names){
  let bestFriend = names[0];
  for (i = 0; i < names.length; i++){
    let friendName = names[i];
    if (friendName.length > bestFriend.length){
      bestFriend = friendName;
    }
  }
  return bestFriend;
}

let friendsName = ['Sajeeb Pal', 'Rion Shariyar', 'Aryan Rocky', 'Rocky', 'Samsuszaman peyas', 'Anik & Sajeeb & Rion Are Friend' ]
let bestFriendName = bestFriend(friendsName);
console.log(bestFriendName);