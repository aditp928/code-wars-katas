// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// ###Arguments (Haskell)

// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// ###Arguments (Other languages)

// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// ###Example

// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'


const titleCase = (title, minorWords) => {
     
    if (title===('')) {
        return ""
     }
 
    let arrTitle=title.split(" ")
    //console.log(arrTitle)
    let arrMinor;
    
    if (minorWords){
    arrMinor=minorWords.split(" ")
    }else{
        arrMinor=[];
    }
    //console.log(arrMinor)
    
    let arrLower=[];
    let arr2=[];
  
  for (j=0;j<arrTitle.length;j++){
      arrTitle[j]=arrTitle[j].split("")
      
      for (k=0;k<arrTitle[j].length;k++){
          arrTitle[j][k]=arrTitle[j][k].toLowerCase()
      }
      arrLower.push(arrTitle[j].join(""))
      console.log(arrLower)
  }
  
  for (j=0;j<arrMinor.length;j++){
      arrMinor[j]=arrMinor[j].split("")
      
      for (k=0;k<arrMinor[j].length;k++){
          arrMinor[j][k]=arrMinor[j][k].toLowerCase()
      }
      arr2.push(arrMinor[j].join(""))
      console.log(arr2)
  }
  
  for (j=0;j<arrLower.length;j++){
      if((arr2.indexOf(arrLower[j]))===-1){
          
        let word1=arrLower[j].split("")
        word1[0]=word1[0].toUpperCase()
        arrLower[j]=word1.join("")
        console.log(arrLower[j])
        
          console.log(arrLower[j]+", this word should have upper case on 1st letter")
      }else{
          arrLower[j]
          console.log(arrLower[j]+", all letters in this word stay lower case")
      }
    }
      let firstWord=arrLower[0].split("")
      firstWord[0]=firstWord[0].toUpperCase()
      arrLower[0]=firstWord.join("")
      console.log(firstWord)
      
     arrLower=arrLower.join(" ")
    return arrLower
 }
    


