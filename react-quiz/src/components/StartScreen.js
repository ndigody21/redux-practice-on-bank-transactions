function StartScreen({ numQuestions, dispatch }) {
  return (
    <main className="start">
      <h2>welcom to the react quiz!</h2>
      <h3>{numQuestions} questions to test your react mastrey</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let Start
      </button>
    </main>
  );
}

export default StartScreen;
