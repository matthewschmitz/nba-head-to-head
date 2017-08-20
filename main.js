var pointsGood = [
  {name: "1996-97 Michael Jordan", compVal: 29.6},
  {name: "1997-98 Michael Jordan", compVal: 28.7},
  {name: "1988-89 Michael Jordan", compVal: 32.5},
  {name: "1989-90 Patrick Ewing", compVal: 28.6},
  {name: "1992-93 Patrick Ewing", compVal: 24.2},
  {name: "1990-91 Patrick Ewing", compVal: 26.6},
  {name: "2002-03 Allen Iverson", compVal: 27.6},
  {name: "2005-06 Allen Iverson", compVal: 33.0},
  {name: "1999-00 Allen Iverson", compVal: 28.4},
  {name: "2007-08 Kobe Bryant", compVal: 28.3},
  {name: "2008-09 Kobe Bryant", compVal: 26.8},
  {name: "2001-02 Kobe Bryant", compVal: 25.2},
  {name: "2002-03 Kobe Bryant", compVal: 30.0},
  {name: "2009-10 LeBron James", compVal: 29.7},
  {name: "2005-06 LeBron James", compVal: 31.4},
  {name: "2012-13 LeBron James", compVal: 26.8},
  {name: "2005-06 Dirk Nowitzki", compVal: 26.6},
  {name: "2008-09 Dirk Nowitzki", compVal: 25.9},
  {name: "2015-16 Stephen Curry", compVal: 30.1},
  {name: "2016-17 Stephen Curry", compVal: 25.3},
  {name: "2015-16 James Harden", compVal: 29.0},
  {name: "2014-15 James Harden", compVal: 27.4},
  {name: "1994-95 Shaquille O'Neal", compVal: 29.3},
  {name: "1999-00 Shaquille O'Neal", compVal: 29.7},
  {name: "1998-99 Shaquille O'Neal", compVal: 26.3},
  {name: "1988-89 Clyde Drexler", compVal: 27.2},
  {name: "1987-88 Clyde Drexler", compVal: 27.0},
  {name: "1989-90 Clyde Drexler", compVal: 23.3},
  {name: "1993-94 David Robinson", compVal: 29.8},
  {name: "1994-95 David Robinson", compVal: 27.6},
  {name: "1995-95 David Robinson", compVal: 25.0},
  {name: "1987-88 Charles Barkley", compVal: 28.3},
  {name: "1990-91 Charles Barkley", compVal: 27.6},
  {name: "1986-87 Charles Barkley", compVal: 23.0},
  {name: "1987-88 Larry Bird", compVal: 29.9},
  {name: "1985-86 Larry Bird", compVal: 25.8},
  {name: "1982-83 Larry Bird", compVal: 23.6},
  {name: "2002-03 Tracy McGrady", compVal: 32.1},
  {name: "2005-06 Tracy McGrady", compVal: 24.4},
  {name: "2003-04 Tracy McGrady", compVal: 28.0},
  {name: "2000-01 Vince Carter", compVal: 27.6},
  {name: "2001-02 Vince Carter", compVal: 24.7},
  {name: "2006-07 Ray Allen", compVal: 26.4},
  {name: "2003-04 Kevin Garnett", compVal: 24.2},
  {name: "2005-06 Paul Pierce", compVal: 26.8},
  {name: "2002-03 Paul Pierce", compVal: 25.9},
  {name: "1994-95 Hakeem Olajuwon", compVal: 27.8},
  {name: "1993-94 Hakeem Olajuwon", compVal: 27.3},
  {name: "2008-09 Dwyane Wade", compVal: 30.2},
  {name: "2010-11 Dwyane Wade", compVal: 25.5},
  {name: "2013-14 Kevin Durant", compVal: 32.0},
  {name: "2009-10 Kevin Durant", compVal: 30.1},
  {name: "2010-11 Kevin Durant", compVal: 27.7},
  {name: "2016-17 Russell Westbrook", compVal: 31.6},
  {name: "2014-15 Russell Westbrook", compVal: 28.1},
  {name: "2015-16 Russell Westbrook", compVal: 23.5},
  {name: "2010-11 Derrick Rose", compVal: 25.0},
  {name: "1982-83 Sidney Moncrief", compVal: 22.5},
  {name: "1969-70 Jerry West", compVal: 31.2},
  {name: "1962-63 Jerry West", compVal: 27.1},
  {name: "1961-62 Wilt Chamberlain", compVal: 50.4},
  {name: "1969-70 Wilt Chamberlain", compVal: 27.3},
  {name: "1966-67 Wilt Chamberlain", compVal: 24.1},
  {name: "2000-01 Chris Webber", compVal: 27.1},
  {name: "1999-00 Chris Webber", compVal: 24.5},
  {name: "2016-17 Isaiah Thomas", compVal: 28.9},
  {name: "2015-16 Isaiah Thomas", compVal: 22.2},
  {name: "1982-83 Isiah Thomas", compVal: 22.9},
  {name: "2016-17 DeMar DeRozan", compVal: 27.3},
  {name: "1989-90 Karl Malone", compVal: 31.0},
  {name: "1996-97 Karl Malone", compVal: 27.4},
  {name: "1971-72 Kareem Abdul-Jabbar", compVal: 34.8},
  {name: "1974-75 Kareem Abdul-Jabbar", compVal: 30.0},
  {name: "1973-74 Kareem Abdul-Jabbar", compVal: 27.0},
  {name: "1981-82 Moses Malone", compVal: 31.1},
  {name: "1980-81 Moses Malone", compVal: 27.8},
  {name: "1962-63 Elgin Baylor", compVal: 34.0},
  {name: "1959-60 Elgin Baylor", compVal: 29.6},
  {name: "1986-87 Kevin McHale", compVal: 26.1},
  {name: "1971-72 Rick Barry", compVal: 31.5},
  {name: "1965-66 Rick Barry", compVal: 25.7},
  {name: "1976-77 Pete Maravich", compVal: 31.1},
  {name: "1973-74 Pete Maravich", compVal: 27.7},
  {name: "1985-86 Dominique Wilkins", compVal: 30.3},
  {name: "1984-85 Dominique Wilkins", compVal: 27.4},
  {name: "1989-90 Reggie Miller", compVal: 24.6},
  {name: "2006-07 Carmelo Anthony", compVal: 28.9},
  {name: "2009-10 Carmelo Anthony", compVal: 28.2},
  {name: "2016-17 Damian Lillard", compVal: 27.0},
  {name: "2016-17 Anthony Davis", compVal: 28.0},
  {name: "2016-17 DeMarcus Cousins", compVal: 27.0},
  {name: "2015-16 DeMarcus Cousins", compVal: 26.9},
  {name: "2013-14 Blake Griffin", compVal: 24.1},
  {name: "2016-17 Karl-Anthony Towns", compVal: 25.1},
  {name: "2016-17 Kawhi Leonard", compVal: 25.5},
  {name: "2016-17 Kyrie Irving", compVal: 25.2},
  {name: "2009-10 Monta Ellis", compVal: 25.5},
  {name: "2005-06 Gilbert Arenas", compVal: 29.3},
  {name: "2004-05 Gilbert Arenas", compVal: 25.5},
  {name: "2006-07 Gilbert Arenas", compVal: 28.4},
]

var pointsBad = [
  {name: "1996-97 Kobe Bryant", compVal: 7.6},
  {name: "2013-14 Giannis Antetokounmpo", compVal: 7.6},
  {name: "2012-13 Andre Drummond", compVal: 7.9},
  {name: "2001-02 Kwame Brown", compVal: 4.5},
  {name: "2003-04 Kwame Brown", compVal: 10.9},
  {name: "2010-11 Gordon Hayward", compVal: 5.4},
  {name: "2014-15 Brandon Jennings", compVal: 15.4},
  {name: "2010-11 Rajon Rondo", compVal: 10.6},
  {name: "2014-15 Kyle Korver", compVal: 12.1},
  {name: "2014-15 Anthony Bennett", compVal: 5.2},
  {name: "2015-16 Aaron Gordon", compVal: 9.2},
  {name: "2015-16 Raymond Felton", compVal: 9.5},
  {name: "2010-11 Paul George", compVal: 7.8},
  {name: "2012-13 DeAndre Jordan", compVal: 8.8},
  {name: "2011-12 Klay Thompson", compVal: 12.5},
  {name: "2015-16 Draymond Green", compVal: 14.0},
  {name: "2012-13 Draymond Green", compVal: 2.9},
  {name: "2009-10 Tracy McGrady", compVal: 8.2},
  {name: "2010-11 Lamar Odom", compVal: 14.4},
  {name: "2011-12 Jeremy Lin", compVal: 14.6},
  {name: "2011-12 Andrew Bogut", compVal: 11.3},
  {name: "2009-10 James Harden", compVal: 9.9},
  {name: "2015-16 Chandler Parsons", compVal: 13.7},
  {name: "2016-17 Bismack Biyambo", compVal: 6.0},
  {name: "2011-12 Serge Ibaka", compVal: 9.1},
  {name: "2012-13 Markieff Morris", compVal: 8.2},
  {name: "2012-13 Marcus Morris", compVal: 7.7},
  {name: "2009-10 Amir Johnson", compVal: 6.2},
  {name: "2012-13 Eric Bledsoe", compVal: 8.5},
  {name: "2013-14 Isaiah Thomas", compVal: 20.3},
  {name: "2016-17 Andre Roberson", compVal: 6.6},
  {name: "2007-08 Zach Randolph", compVal: 17.6},
  {name: "2016-17 Al Jefferson", compVal: 8.1},
  {name: "2014-15 Trey Burke", compVal: 12.8},
  {name: "2015-16 Cory Joseph", compVal: 8.5},
  {name: "2012-13 DeMarre Carrol", compVal: 6.0},
  {name: "2015-16 Austin Rivers", compVal: 8.9},
  {name: "1997-98 Dennis Rodman", compVal: 4.7},
  {name: "2015-16 Andre Iguodala", compVal: 7.0},
  {name: "2011-12 Jimmy Butler", compVal: 2.6},
  {name: "2011-12 Jimmer Fredette", compVal: 7.6},
  {name: "2010-11 Michael Beasley", compVal: 19.2},
  {name: "2016-17 Michael Carter-Williams", compVal: 6.6},
  {name: "2011-12 Robin Lopez", compVal: 5.4},
  {name: "2015-16 Bobby Portis", compVal: 7.0},
  {name: "2011-12 J.J. Redick", compVal: 11.6},
  {name: "1998-99 Dirk Nowitzki", compVal: 8.2},
  {name: "2012-13 Anthony Morrow", compVal: 4.0},
  {name: "2010-11 Marco Belinelli", compVal: 10.5},
  {name: "2016-17 Elfrid Payton", compVal: 12.8},
  {name: "2015-16 D'Angelo Russell", compVal: 13.2}
]

var arrayChoiceArray = [pointsGood, pointsBad];

function checkAnswer($game, $question, $clickedOption) {

  var questionOn = $game.data('currentQuestion');
  questionOn++;
  $game.data('currentQuestion', questionOn);

  var player1 = $question.data('value1');
  var player2 = $question.data('value2');

  $('#leftGameAnswer .actualValue').text(player1);
  $('#rightGameAnswer .actualValue').text(player2);

  $('#leftGameAnswer .actualValue').hide();
  $('#rightGameAnswer .actualValue').hide();

  // If user clicked left option
  if ($clickedOption.attr('id') === 'leftGameAnswer') {

    // If correct
    if (player1 > player2) {

      var countOfCorr = $game.data('correctQuestions');
      countOfCorr++;
      $game.data('correctQuestions', countOfCorr);

      $('#leftGameAnswer .actualValue').prepend('<i class="fa fa-check" aria-hidden="true"></i>');
      $('#rightGameAnswer .actualValue').prepend('<i class="fa fa-times" aria-hidden="true"></i>');

    } else if (player1 < player2) { // If incorrect

      var countOfIncorr = $game.data('incorrectQuestions');
      countOfIncorr++;
      $game.data('incorrectQuestions', countOfIncorr);

      $('#rightGameAnswer .actualValue').prepend('<i class="fa fa-check" aria-hidden="true"></i>');
      $('#leftGameAnswer .actualValue').prepend('<i class="fa fa-times" aria-hidden="true"></i>');

    } else { // If tied

      var countOfCorr = $game.data('correctQuestions');
      countOfCorr++;
      $game.data('correctQuestions', countOfCorr);

      $('#leftGameAnswer .actualValue').prepend('<i class="fa fa-check" aria-hidden="true"></i>');
      $('#rightGameAnswer .actualValue').prepend('<i class="fa fa-check" aria-hidden="true"></i>');

    }
  } else {

    // If correct
    if (player2 > player1) {

      var countOfCorr = $game.data('correctQuestions');
      countOfCorr++;
      $game.data('correctQuestions', countOfCorr);

      $('#rightGameAnswer .actualValue').prepend('<i class="fa fa-check" aria-hidden="true"></i>');
      $('#leftGameAnswer .actualValue').prepend('<i class="fa fa-times" aria-hidden="true"></i>');

    } else if (player2 < player1) { // If incorrect

      var countOfIncorr = $game.data('incorrectQuestions');
      countOfIncorr++;
      $game.data('incorrectQuestions', countOfIncorr);

      $('#leftGameAnswer .actualValue').prepend('<i class="fa fa-check" aria-hidden="true"></i>');
      $('#rightGameAnswer .actualValue').prepend('<i class="fa fa-times" aria-hidden="true"></i>');

    } else { // If tied

      var countOfCorr = $game.data('correctQuestions');
      countOfCorr++;
      $game.data('correctQuestions', countOfCorr);

      $('#leftGameAnswer .actualValue').prepend('<i class="fa fa-check" aria-hidden="true"></i>');
      $('#rightGameAnswer .actualValue').prepend('<i class="fa fa-check" aria-hidden="true"></i>');

    }

  }

  $('#correctCounter').text($game.data('correctQuestions'));
  $('#incorrectCounter').text($game.data('incorrectQuestions'));

  $('#leftGameAnswer .actualValue').fadeIn(2000);
  $('#rightGameAnswer .actualValue').fadeIn(2000);

  if ($game.data('currentQuestion') > 30) {
    $('#nextQuestionText').text('Finish game');
  }

  $('.nextQuestion').delay(1000).fadeIn(1000);

  $('.nextQuestion').on('click', function() {
    if ($game.data('currentQuestion') <= 30) {
      loadQuestion($game);
    } else {
      endGame($game);
    }
  })

  return;
}

function createGame() {

  // Create game jQuery object
  var $game = $('.gameContainer');

  // Initialize game attributes
  $game.data('correctQuestions', 0);
  $game.data('incorrectQuestions', 0);
  $game.data('currentQuestion', 1);

  $('#correctCounter').text($game.data('correctQuestions'));
  $('#incorrectCounter').text($game.data('incorrectQuestions'));

  return $game;

}

function endGame($game) {
  $('#headerInfoPage').text('Game Over');
  $('#secondHeaderInfoPage').text('You answered ' + $game.data('correctQuestions') + ' out of 30 questions correctly.');
  if ($game.data('correctQuestions') >= 25) {
    $('#paragraphInfoPage').text('Congrats! You seem to know your stuff.');
  } else {
    $('#paragraphInfoPage').text('Better luck next time...');
  }
  $('#startButtonInfoPage').text('Play Again');

  $('.container').fadeIn(2000);

  return;
}

function loadQuestion($game) {

  $('.nextQuestion').hide();

  $('#leftGameAnswer .actualValue').hide();
  $('#rightGameAnswer .actualValue').hide();

  $('#questionCounter').text($game.data('currentQuestion'));

  // Create question jQuery object
  var $question = $('.gameQuestion');

  // Initialize question attributes
  $question.data('answered', false);

  // Find array choice index
  var arrayChoiceIndex = Math.floor(Math.random() * arrayChoiceArray.length);

  var chosenArray = arrayChoiceArray[arrayChoiceIndex];

  // Find player indices
  var plIndex1 = Math.floor(Math.random() * chosenArray.length);
  do {
    var plIndex2 = Math.floor(Math.random() * chosenArray.length);
  } while (plIndex1 === plIndex2);

  // Collect values
  var plName1 = chosenArray[plIndex1].name;
  var plName2 = chosenArray[plIndex2].name;
  var plValue1 = chosenArray[plIndex1].compVal;
  var plValue2 = chosenArray[plIndex2].compVal;

  // Place values in question object
  $question.data('value1', plValue1);
  $question.data('value2', plValue2);

  // Place player names into option boxes
  $('#leftGameAnswer .playerName').text(plName1);
  $('#rightGameAnswer .playerName').text(plName2);

  $('.gameAnswer').on('click', function() {

    var $clickedOption = $(this);

    if ($question.data('answered') === false) {
      $question.data('answered', true);
      checkAnswer($game, $question, $clickedOption);
    }

    return;

  });

  return;

}

$(function() {

  $('.startButton').on('click', function() {
    var ourGame = createGame();

    $('.container').fadeOut(2000);

    loadQuestion(ourGame);
  });

});
