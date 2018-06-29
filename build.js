const babel = require("babel-core")
// const preset = require("babel-preset-react-app")
const transformPlugin = require("babel-plugin-transform-react-jsx")

const output = babel.transform(
  `
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    );
  }
}
`,
  {
    // presets: [preset],
    plugins: ["transform-react-jsx"],
    babelrc: false
  }
)

console.log(output.code)
