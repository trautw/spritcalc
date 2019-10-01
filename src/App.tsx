import React from 'react';
import logo from './logo.svg';
import './App.css';

interface SquareProps{
  value: String
}

class Square extends React.Component<SquareProps> {
  render() {
    return (
      <button className="square"
      >
        {this.props.value}
      </button>
    );
  }
}

interface InFieldProps{
  value: string,
  onChange: any
} 
interface InFieldState{
  title: string
} 
class InField extends React.Component<InFieldProps,InFieldState>{ 

  constructor(props: InFieldProps){
    super(props);
    this.state = {
      title: props.value
    };
  }


  render() {
    return <input type='text' name='title' value={this.props.value} 
      onChange={this.props.onChange}/>
  }
}

interface CalculatorProps{
  startValue: string
} 

interface CalculatorState{
  start: number,
  end: number,
  range: number
} 

class Calculator extends React.Component<CalculatorProps,CalculatorState>{
  constructor(props: CalculatorProps){
    super(props);
    this.state = {
      start: 100,
      end: 300,
      range: 200
    } 
  } 

  calc(){
    return 17;
  } 

  handleRangeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const range = Number(event.target.value);
    const end = range + this.state.start;
    this.setState({end, range});
  }

  handleStartChange(event: React.ChangeEvent<HTMLInputElement>) {
    const start = Number(event.target.value);
    const range = this.state.end - start;
    this.setState({start, range});
  }

  handleEndChange(event: React.ChangeEvent<HTMLInputElement>) {
    const end = Number(event.target.value);
    const range = end - this.state.start;
    this.setState({end, range});
  }

  render() {
    return (
      <div>
        Start <InField value={this.state.start.toString()} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleStartChange(e)}/><p/>
        Ende <InField value={this.state.end.toString()} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleEndChange(e)}/><p/>
        Entfernung <InField value={this.state.range.toString()} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleRangeChange(e)}/><p/>
      </div>
    )};
} 

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Square value='99' />
        <Calculator startValue='111'/>
        <p>
          Edit the <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
