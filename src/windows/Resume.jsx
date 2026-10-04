import { useState, useEffect } from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";
import { Download, ZoomIn, ZoomOut } from "lucide-react";
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = () => {
    const isMaximized = useWindowStore((state) => state.windows.resume?.isMaximized);
    const [scale, setScale] = useState(1.0);

    useEffect(() => {
        if (isMaximized) {
            // Instantly jumps to 110% when maximized
            setScale(1.1); 
        } else {
            // Reverts to exactly 100% on the small screen
            setScale(1.0);
        }
    }, [isMaximized]);

    const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 3.0));
    const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));

    return (
        // Conditionally swap the background: dark gray when maximized, white when small
        <div className={`flex flex-col w-full h-full transition-colors ${isMaximized ? 'bg-[#525659]' : 'bg-white'}`}>
            <div id="window-header" className="w-full bg-gray-100 border-b border-gray-300 flex items-center justify-between pr-4 relative shrink-0">
                <WindowControls target="resume" />
                
                <h2 className="font-bold text-sm absolute left-1/2 -translate-x-1/2 text-gray-800">Resume.pdf</h2>

                <div className="flex items-center gap-4 ml-auto text-gray-600">
                    <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-md border border-gray-300 shadow-sm">
                        <button onClick={zoomOut} className="hover:bg-gray-100 p-1 rounded transition-colors"><ZoomOut size={14} /></button>
                        <span className="text-xs font-medium w-9 text-center">{Math.round(scale * 100)}%</span>
                        <button onClick={zoomIn} className="hover:bg-gray-100 p-1 rounded transition-colors"><ZoomIn size={14} /></button>
                    </div>
                    <a href="files/resume.pdf" download className="cursor-pointer hover:text-black transition-colors" title="Download Resume">
                        <Download size={16} />
                    </a>
                </div>
            </div>

            {/* Conditionally add/remove padding so the small screen is perfectly flush */}
            <div className={`flex-1 flex justify-center overflow-auto w-full min-h-0 ${isMaximized ? 'py-10' : 'py-0'}`}>
                <Document file="files/resume.pdf">
                    <Page
                        pageNumber={1}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        // Only show the heavy document shadow on the dark background
                        className={isMaximized ? "shadow-2xl" : ""}
                        scale={scale} 
                    />
                </Document>
            </div>
        </div>
    )
}

const ResumeWindow = WindowWrapper(Resume, 'resume')

export default ResumeWindow