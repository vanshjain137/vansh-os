import { Mail, Search, Image as ImageIcon } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";
import { gallery, photosLinks } from "#constants";
import useWindowStore from "#store/window";
import { useState } from "react";

const Photos = () => {
    const { openWindow } = useWindowStore();
    const [activeTab, setActiveTab] = useState("Library");

    const getDisplayedPhotos = () => {
        if (activeTab === "Library") return gallery;
        return gallery.filter((photo) => photo.category === activeTab);
    };

    const currentPhotos = getDisplayedPhotos();

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />

                <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                    <Mail className="icon" />
                    <Search className="icon" />
                </div>
            </div>

            <div className="flex w-full h-[calc(100%-45px)] min-h-125">
                <div className="sidebar">
                    <h2>Photos</h2>
                    <ul>
                        {photosLinks.map(({ id, icon, title }) => (
                            <li
                            key={id}
                            onClick={() => setActiveTab(title)}
                            className={`cursor-pointer transition-colors ${
                                activeTab === title
                                ? 'bg-blue-100! text-blue-700!'
                                : 'bg-transparent! text-gray-700! hover:bg-gray-200!'
                            }`}
                            >
                                <img src={icon} alt={title} className="w-4 h-4 object-contain"/>
                                <p>{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="gallery">
                    {currentPhotos.length > 0 ? (
                        <ul>
                            {currentPhotos.map(({ id, img }) => (
                                <li
                                    key={id}
                                    onClick={() =>
                                        openWindow("imgfile", {
                                            id,
                                            name: `${activeTab} image`,
                                            icon: "/images/image.png",
                                            kind: "file",
                                            fileType: "img",
                                            imageUrl: img,
                                        })
                                    }
                                >
                                    <img src={img} alt={`${activeTab} image ${id}`} />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-3 col-span-full">
                            <ImageIcon size={48} className="opacity-50" />
                            <p className="font-medium">No Photos in {activeTab}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow