//import './StartingPage.sass';
import RenderDifficultyMenu from './DifficultyMenu';
import RenderFullScreenVideo from '../FullScreenVideo/FullScreenVideo';
import BlackScreen from '../PageTransition/BlackScreenTransition';

const StartingPage = () => {
  BlackScreen.fromBlack();
  RenderFullScreenVideo('planet.mp4', 'loop');
  RenderDifficultyMenu();
};

export default StartingPage;