import PropTypes from "prop-types";

const App = ({ name, subtitle }) => {
  const h1 = "text-center mt-3 green display-1";
  const h2 = "text-center blue display-2";
  return (
    <>
      <h1 className={ h1 }>{ name }</h1>
      <h2 className={ h2 }>{ subtitle }</h2>
    </>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired
};

App.defaultProps = {
  name: "",
  subtitle: "Subtitle"
};

export default App;