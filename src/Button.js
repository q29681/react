import './App.css';

const message = function(){
    window.alert('are you sure to submit?')
  }


function Button(props){
    const text = props.children;
    return <>
      <button
        id='button'
        onClick={props.handleClick}>
        {text}
      </button>
    </>
}

export default Button;