import { useEffect } from 'react';
import "./modal.css"
const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    const handleBackdropClick = (e) => {
        if (e.target.className === 'modal-backdrop') {
            onClose();
        }
    };

    return (
        <div
            className="modal-backdrop"
            onClick={handleBackdropClick}

        >
            <div
                className="modal-content"

            >
                <button
                className='btn-modal'
                    onClick={onClose}

                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
