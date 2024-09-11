const Welcome = ({ name }) => {
  return (
    <div className="text-right text-4xl 2xl:text-5xl pt-10 pb-5">
      <h1>أهلاً {name}، مرحباً بعودتك</h1>
    </div>
  );
};

export default Welcome;
