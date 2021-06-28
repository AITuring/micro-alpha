const Hello = () => {
  return (
    <>
      <div>Hello</div>
      <button onClick={() => window.open('/', '_blank')}>open</button>
    </>
  );
};

export default Hello;
