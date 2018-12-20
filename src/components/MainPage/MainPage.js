//import './MainPage.sass';
import BlackScreen from '../PageTransition/BlackScreenTransition';
import Sundtrack from '../Sound';
import RenderGameScene from './GameScene';
import RenderDialogBox from './DialogBox';

const MainPage = () => {
    RenderGameScene();
    RenderDialogBox();
    BlackScreen.fromBlack();
    Sundtrack.change('main-page.mp3');
};

export default MainPage;