import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faQuestionCircle, faChartBar, faCog, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import Index from './src';

library.add(faTimes, faQuestionCircle, faChartBar, faCog, faToggleOff, faToggleOn, faFacebook, faTwitter);

function App() {
  return (
    <Index />
  );
}

export default App;