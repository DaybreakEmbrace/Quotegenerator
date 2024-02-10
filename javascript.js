const quotes = [
"\"Twenty years from now you will be more disappointed by the things you didn\'t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sail. Explore. Dream. Discover.\" <br> - Mark Twain",
"\"If you are willing to do more than you are paid to do, eventually you will be paid to do more than you do.\"<br> - Anonymous",
"\"Success is the sum of small efforts, repeated day in and day out.\"<br>  - Robert Collier", 
"\"Only put off until tomorrow what you are willing to die having left undone.\"<br>  - Pablo Picasso",
"\"You can\'t connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future. You have to trust in something -- your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.\"<br> - Steve Jobs",
"\"Many of life\'s failures are people who did not realize how close they were to success when they gave up.\"<br>  - Thomas Edison",
"\"Do what you have always done and you'll get what you have always got.\"<br>  - Sue Knight",
"\"I cannot give you a formula for success, but I can give you the formula for failure, which is: Try to please everybody.\"<br> - Herbert Bayard Swope",
"\"A good plan violently executed now is better than a perfect plan executed next week.\"<br> - George Patton",
"\"Feeling gratitude and not expressing it is like wrapping a present and not giving it.\"<br> - William Arthur Ward",
"\"You wouldn\'t worry so much about what others think of you if you realized how seldom they do.\" <br>  - Eleanor Roosevelt",
"\"Rarely have I seen a situation where doing less than the other guy is a good strategy.\"<br> - Jimmy Spithill",
"\"To be successful you must accept all challenges that come your way. You can't just accept the ones you like.\"<br> - Mike Gafka",
"\"Successful people have fear, successful people have doubts, and successful people have worries. They just don\'t let these feelings stop them.\"<br>  - T. Harv Eker",
"\"There are two types of pain you will go through in life: the pain of discipline and the pain of regret. Discipline weighs ounces while regret weights tons.\"<br>  - Jim Rohn",
"\"Confidence comes not from always being right but from not fearing to be wrong.\"<br> - Peter T. McIntyre",
"\"You can have anything you want if you are willing to give up the belief that you can't have it.\"<br> - Dr. Robert Anthony",
"\"Persons of high self-esteem are not driven to make themselves superior to others; they do not seek to prove their value by measuring themselves against a comparative standard. Their joy is being who they are, not in being better than someone else.\" <br>  - Nathaniel Branden",
"\"When you\'re different, sometimes you don't see the millions of people who accept you for what you are. All you notice is the person who doesn\'t.\"<br>  - Jodi Picoult",
"\"Always with you what cannot be done... Do or do not, there is no try.\"<br>  - Yoda"
]

//quote array function call
function newQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    m = checkTime(m);

     
    document.getElementById('display').innerHTML = h+":"+m;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

//date
function startDate() {
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
  }

  document.getElementById("div").style['pointer-events'] = 'auto';










