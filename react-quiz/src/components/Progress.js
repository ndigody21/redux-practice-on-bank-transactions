function Progress({ numQuestions, points, index, maxPossiblePoints, answer }) {
  // converting the boolean that will result from if there is a number or not if no number ie false it convert its to 0 and add to index then vice verser
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question<strong>{index}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
