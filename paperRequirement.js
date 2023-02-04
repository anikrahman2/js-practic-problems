function paperRequirement(book1Quantity, book2Quantity, book3Quantity){

  const parBook1PaperRequire = 100;
  const parBook2PaperRequire = 200;
  const parBook3PaperRequire = 300;

  let book1PaperRequire = parBook1PaperRequire * book1Quantity;
  let book2PaperRequire = parBook2PaperRequire * book2Quantity;
  let book3PaperRequire = parBook3PaperRequire * book3Quantity;
  
  let totalPaperRequire = book1PaperRequire + book2PaperRequire + book3PaperRequire;
  return totalPaperRequire;
}


let totalPaperRequirement = paperRequirement(10, 15, 25);
console.log('Your Total Paper Requirement Is: ', totalPaperRequirement);