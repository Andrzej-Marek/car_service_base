import React, { PropsWithChildren, ReactPortal, useEffect } from "react";
import { createPortal } from "react-dom";

interface OwnProps {
    isVisible: boolean;
}

const modalRoot = document.getElementById("modal");

// TODO: Not ready, just simple structure
const Modal = ({ isVisible, children }: PropsWithChildren<OwnProps>) => {
    // element to which the modal will be rendered
    const el = document.createElement("div");

    useEffect(() => {
        if (!modalRoot) {
            return;
        }
        // append to root when the children of Modal are mounted
        modalRoot.appendChild(el);

        // do a cleanup
        return () => {
            modalRoot.removeChild(el);
        };
    }, [el]);

    if (!isVisible) {
        return <div />;
    }
    return createPortal(
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                overflow: "hidden",
                backgroundColor: "rgba(0,0,0,0.6)",
            }}
            onClick={() => console.log("123")}
        >
            <div
                style={{
                    position: "relative",
                    left: "50%",
                    top: "200px",
                    transform: "translateX(-50%)",
                    zIndex: 999,
                    display: "inline-block",
                }}
            >
                {children}
            </div>
        </div>,
        el
    );
};

export default Modal;
