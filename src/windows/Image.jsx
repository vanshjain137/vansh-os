import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    const isMaximized = windows.imgfile?.isMaximized;

    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
            </div>

            <div className={`transition-colors ${isMaximized ? 'w-full h-[calc(100%-45px)] flex justify-center items-center bg-[#1c1c1e] p-0' : 'p-5 bg-white'}`}>
                {imageUrl ? (
                    <div className={isMaximized ? 'w-full h-full' : 'w-full'}>
                        <img
                            src={imageUrl}
                            alt={name}
                            className={
                                isMaximized 
                                    ? "w-full h-full object-contain" 
                                    : "w-full h-auto max-h-[70vh] object-contain rounded"
                            }
                        />
                    </div>
                ) : null}
            </div>
        </>
    );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;