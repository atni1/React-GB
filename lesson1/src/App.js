import './App.css';
import {Message} from './components'

function App() {
  return (
    <div className={'App-bg'}>
      <Message content={'Start learn React'}>
        React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.
      </Message>
    </div>
  );
}

export default App;
