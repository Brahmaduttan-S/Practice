import './App.css';
import NewItem from './components/NewItem'

function App() {
  const course = [
      {
          courseId: 7864818,
          courseName:'React - The Complete Guide (incl Hooks, React Router, Redux)',
          courseAmount: 3499
      },
      {
          courseId: 2837164,
          courseName:'MongoDB - The Complete Developers Guide 2022',
          courseAmount: 2499
      },
      {
          courseId: 2312782,
          courseName:'React Native - The Practical Guide [2022]',
          courseAmount: 1528
      },
      {
          courseId: 2917412,
          courseName:'Quantitative Finance & Algorithmic Trading in Python',
          courseAmount: 3499
      }
  ]
  return (
    <div className="App">
      
      <header className="App-header">
        <h1 className="hello">Hello World</h1>  
      </header>
      <h3>React JS</h3>
      <a href="https://reactjs.org/"><img className="img" src="logo512.png"/></a>
      <NewItem 
          courseID = {course[0].courseId}
          courseTITLE = {course[0].courseName}
          courseAMOUNT = {course[0].courseAmount}
          ></NewItem>
      <NewItem 
          courseID = {course[1].courseId}
          courseTITLE = {course[1].courseName}
          courseAMOUNT = {course[1].courseAmount}
          ></NewItem>
      <NewItem 
          courseID = {course[2].courseId}
          courseTITLE = {course[2].courseName}
          courseAMOUNT = {course[2].courseAmount}
          ></NewItem>
      <NewItem 
          courseID = {course[3].courseId}
          courseTITLE = {course[3].courseName}
          courseAMOUNT = {course[3].courseAmount}
          ></NewItem>
    </div>
    
  );
}

export default App;
