# coding-quiz
Quiz created using html, CSS and javaScript.




Link to quiz Github Repository: https://github.com/victoriadeyemi/coding-quiz
Link to deployed quiz application: 
Screenshot of deployed quiz application: 




<!DOCTYPE html>
<html lang="en-gb">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Coding Quiz</title>

    <link rel="stylesheet" href="./assets/css/styles.css" />
  </head>

  <body>
    <div class="scores"><a href="highscores.html">View Highscores</a></div>

    <div class="timer">Time: <span id="time">0</span></div>

    <div class="wrapper">
      <div id="start-screen" class="start">
        <h1>Coding Quiz Challenge</h1>
        <p>
          Try to answer the following code-related questions within the time
          limit. Keep in mind that incorrect answers will penalize your
          score/time by ten seconds!
        </p>
        <button id="start">Start Quiz</button>
      </div>

      <div id="questions" class="hide">
        <h2 id="question-title"></h2>
        <div id="choices" class="choices"></div>
      </div>

      <div id="end-screen" class="hide">
        <h2>All done!</h2>
        <p>Your final score is <span id="final-score"></span>.</p>
        <p>
          Enter initials: <input type="text" id="initials" max="3" />
          <button id="submit">Submit</button>
        </p>
      </div>

      <div id="feedback" class="feedback hide"></div>
    </div>

    <script src="./assets/js/questions.js"></script>
    <script src="./assets/js/logic.js"></script>
    
  </body>
</html>



highscores

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Highscores</title>

    <link rel="stylesheet" href="./assets/css/styles.css" />
  </head>

  <body>
    <div class="wrapper">
      <h1>Highscores</h1>
      <ol id="highscores"></ol>

      <a href="index.html"><button>Go Back</button></a>
      <button id="clear">Clear Highscores</button>
    </div>

    <script src="./assets/js/scores.js"></script>
  </body>
</html>
