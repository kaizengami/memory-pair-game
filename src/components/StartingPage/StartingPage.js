//import './StartingPage.sass';
import RenderDifficultyMenu from './DifficultyMenu';
import RenderFullScreenVideo from '../FullScreenVideo/FullScreenVideo';
import BlackScreen from '../PageTransition/BlackScreenTransition';

const StartingPage = () => {
  RenderFullScreenVideo('planet.mp4', 'loop');
  RenderDifficultyMenu();
  //BlackScreen.hide();
};

export default StartingPage;