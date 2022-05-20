import Index from './src';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faQuestionCircle, faChartBar, faCog, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes, faQuestionCircle, faChartBar, faCog, faToggleOff, faToggleOn);

function App() {
  return (
    <Index />
  );
}

export default App;