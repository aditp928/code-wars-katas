// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

const accum = (s) => {
    let output = '';
     let c = null;
     for (let i = 0; i < s.length; i++) {
       c = s[i].toLowerCase();
       for (let j = 0; j <= i; j++) {
         output += (j === 0) ? c.toUpperCase() : c;
       }
       if (i < s.length-1) {
        output += '-';
      }
    }
    return output
}
