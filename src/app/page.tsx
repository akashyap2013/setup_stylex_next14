import * as stylex from '@stylexjs/stylex';

// Simple StyleX example
const styles = stylex.create({
  base: {
    fontSize: 50,
    color: 'Blue',
    fontFamily: 'Popins',
    padding: 20,
    margin: 20,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    textAlign: 'center',
  },
  button : {
    color: 'white',
    backgroundColor: 'blue',
    padding: 40,
    borderRadius: 5,
    border: 'none',
    cursor: 'pointer',
    marginTop: 20,
    fontSize: 20,
    width: 200,

    ':hover': {
      backgroundColor: 'darkblue',
    },

    ':active': {
      backgroundColor: 'black',
    }
  }
});


export default function Home() {
  return (
    <div {...stylex.props(styles.base)}>
    This text is styled with StyleX
    <button {...stylex.props(styles.button)}>Click me</button>
    </div>
  );
}
