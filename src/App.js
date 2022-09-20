import Page1 from './lib/page1/Page1'
import Page2 from './lib/page2/Page2';
import Page5 from './lib/page5/page5';
import Page4 from './lib/page4/page4';
import Page3 from './lib/page3/page3';
import NewNav from './lib/header/NewNav';
function App() {
  return (
    <div className="App">
      <div className='row'>
        <NewNav />
        <Page1 />
      </div>
      <div className='row'>
        <Page2 />
      </div>
      <div className='row'>
        <Page3 />
      </div>
      <div className='row'>
        <Page4/>
      </div>
      <div className='row'>
        <Page5/>
      </div>
    </div>
  );
}

export default App;
