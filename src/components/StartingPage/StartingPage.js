//import './StartingPage.sass';
import RenderDifficultyMenu from './DifficultyMenu';
import RenderFullScreenVideo from '../FullScreenVideo/FullScreenVideo';
import BlackScreen from '../PageTransition/BlackScreenTransition';
import Sound from '../Sound';

const StartingPage = () => {
  BlackScreen.fromBlack();
  Sound();
  RenderFullScreenVideo('planet.mp4', 'loop');
  RenderDifficultyMenu();
};

export default StartingPage;