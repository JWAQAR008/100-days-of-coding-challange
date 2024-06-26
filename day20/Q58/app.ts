// *Question 58:* Average Score Calculator: Write a simple program that can take lots of scores and find their average.

// *Explain & TIP:* This program can handle any number of scores you give it, and it tells you the average score. Handy for seeing how well you did overall!

//this program calculate the average of all scores given 
function averageScore(...scores: number[]): number {
    //Adds all scores together and divides by the number of scores
  let total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}
//Examle: Finding the average of four scores
console.log(averageScore(80, 90, 70, 60));// show the average score
//we add up all the scores, then divide by how many there are
