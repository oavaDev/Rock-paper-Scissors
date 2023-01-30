import React from 'react';
import './App.css';
import Select from './components/Select';

function App() {
  const retrievedPoints = JSON.parse(localStorage.getItem('points') || '');
  const [userValue, setUserValue] = React.useState<string>('');
  const [homeValue, setHomeValue] = React.useState<string>('');
  const [points, setPoints] = React.useState<number>(retrievedPoints);
  const [isDraw, setIsDraw] = React.useState<boolean>(false);
  const [userWon, setUserWon] = React.useState<boolean>(false);

  React.useEffect(() => {
    localStorage.setItem('points', JSON.stringify(points));
  }, [points]);

  
  const getHomeValue = () => {
    const auxhomeValue = Math.floor(Math.random() * 3);
    if (auxhomeValue === 0) {
      setHomeValue('Paper');
      return 'Paper';
    }
    if (auxhomeValue === 1) {
      setHomeValue('Scissors');

      return 'Scissors';
    }
    if (auxhomeValue === 2) {
      setHomeValue('Rock');
      return 'Rock';
    }
  };

  const getWinner = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    const hValue = getHomeValue();
    setUserValue(value);
    if (value === 'Rock' && hValue === 'Scissors') {
      console.log('User wins!');
      setUserWon(true);
      setIsDraw(false);
      setPoints(points + 1);
    } else if (value === 'Paper' && hValue === 'Rock') {
      console.log('User wins!');
      setUserWon(true);
      setIsDraw(false);
      setPoints(points + 1);
    } else if (value === 'Scissors' && hValue === 'Paper') {
      console.log('User wins!', value, hValue);
      setUserWon(true);
      setIsDraw(false);
      setPoints(points + 1);
    } else if (value === hValue) {
      console.log("It's a tie.");
      setIsDraw(true);
      setUserWon(false);
    } else {
      console.log('Home wins');
      setUserWon(false);
      setIsDraw(false);
    }
    setTimeout(() => {
      setHomeValue('');
    }, 2000);
  };
  return (
    <div className='App'>
      <div className='Header'>
        <div className='Header__title'>
          ROCK <br /> PAPER <br /> SCISSORS
        </div>
        <div className='Header__label'>
          <span>SCORE</span>
          <span>{points}</span>
        </div>
      </div>
      <div className='Game'>
        {homeValue === '' ? (
          <>
            <div>
              <div>
                <button onClick={getWinner} value={'Paper'}>
                  <Select selection='Paper' />
                </button>
              </div>
              <div>
                <button onClick={getWinner} value={'Scissors'}>
                  <Select selection='Scissors' />
                </button>
              </div>
            </div>
            <div>
              <div>
                <button onClick={getWinner} value={'Rock'}>
                  <Select selection='Rock' />
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <div className='Selected'>
                <button value={'Rock'}>
                  <Select selection={userValue} />
                </button>
                <p>YOU PICKED</p>
              </div>
              <div className='Selected'>
                <button>
                  <Select selection={homeValue} />
                </button>
                <p>THE HOUSE PICKED</p>
              </div>
            </div>
            <div className='Selected__win'>
              {userWon && 'YOU WIN'}
              {!userWon && !isDraw && 'YOU LOSE'}
              {isDraw && "IT'S A DRAW"}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
