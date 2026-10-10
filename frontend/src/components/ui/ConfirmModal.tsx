"use client"

import ButtonToggle from "./ButtonToggle";

interface ConfirmModalProps {
    isOpen: boolean;
    title: string;
    description: string;
    onConfirm: () => void;
    onCancel: () => void;
    confirmtext?: string;
    canceltext?: string;
}

const ConfirmModal = ({isOpen, title, description, onConfirm, onCancel, confirmtext = "Confirm", canceltext = "Cancel"}: ConfirmModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-surface rounded-lg p-6 w-84">
                <h2 className="text-lg font-semibold mb-1">{title}</h2>
                <p className="mb-6">{description}</p>
                <div className="flex justify-end gap-4 ">
                    <ButtonToggle onClick={onCancel} className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-400 dark:hover:bg-gray-500">
                        {canceltext}
                    </ButtonToggle>
                    <ButtonToggle onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                        {confirmtext}
                    </ButtonToggle>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
