import useWindowStore from "#store/window.js"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useLayoutEffect, useRef } from "react";
import clsx from "clsx";

const WindowWrapper = (Component, windowKey) => {

    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex, isMaximized } = windows[windowKey];
        const ref = useRef(null)

        useGSAP(()=>{
            const el = ref.current;
            if(!el || !isOpen) return;

            el.style.display = "block";

            gsap.fromTo(el, { scale: 0.8, opacity: 0, y: 40 }, { scale: 1, opacity: 1, y: 0, duration: 0.2, ease: "power3.out"})
        }, [isOpen])

        useGSAP(()=>{
            const el = ref.current;
            if(!el) return;

            const headerEl = el.querySelector("#window-header");

            const [instance] = Draggable.create(el, {
                trigger: headerEl ? headerEl : el,
                onPress: () => focusWindow(windowKey) 
            })

            return () => {
                if (instance) instance.kill();
            };
        }, [])

        useLayoutEffect(()=>{
            const el = ref.current;
            if(!el) return;
            el.style.display = isOpen ? "block" : "none";
        }, [isOpen])

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{ zIndex }}
                onPointerDownCapture={() => focusWindow(windowKey)}
                className={clsx(
                    "absolute",
                    isMaximized && "top-11.25! left-0! w-full! max-w-none! h-[calc(100%_-_45px)]! transform-none! rounded-none! transition-all duration-300"
                )}
            >
                <Component {...props}/>
            </section>)
    }

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`

    return Wrapped;
}

export default WindowWrapper
