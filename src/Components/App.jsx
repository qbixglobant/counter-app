import PropTypes from "prop-types";

const App = ({ name }) => {
  const h1 = "text-center mt-3";
  return (
    <h1 className={ h1 }>
      <span className="blue">Hello</span>&nbsp;
      <span className="green">{ name }</span>
    </h1>
  );
};

export default App;

App.defaultProps = {
  name: ""
};

App.propTypes = {
  name: PropTypes.string.isRequired
};
