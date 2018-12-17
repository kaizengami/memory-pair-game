//import './StartingPage.sass';
import RenderDifficultyMenu from './DifficultyMenu';
import GameOptions from './GameOptions';
import RenderFullScreenVideo from '../FullScreenVideo/FullScreenVideo';
import BlackScreen from '../PageTransition/BlackScreenTransition';
import Sundtrack from '../Sound';

const StartingPage = () => {
  BlackScreen.fromBlack();
  Sundtrack('starting-page.mp3', true);
  RenderFullScreenVideo('planet.mp4', 'loop');
  RenderDifficultyMenu();
  GameOptions.render();
};

export default StartingPage;