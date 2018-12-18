//import './MainPage.sass';
import BlackScreen from '../PageTransition/BlackScreenTransition';
import Sundtrack from '../Sound';
import RenderGameScene from './GameScene';

const MainPage = () => {
    RenderGameScene();
    BlackScreen.fromBlack();
    //Sundtrack.play();
};

export default MainPage;