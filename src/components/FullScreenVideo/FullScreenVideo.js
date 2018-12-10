import './FullScreenVideo.sass';

const videoHtml = (file_name, loop) => {
    return `<video autoplay muted ${loop} id="full-screen-video">
                <source src="static/media-files/video/${file_name}" type="video/mp4">
            </video>`
}

const RenderFullScreenVideo = (file_name, loop = '') => {
    const container = document.getElementById('container');
    return container.insertAdjacentHTML('beforeend', videoHtml(file_name, loop));
}

export default RenderFullScreenVideo;