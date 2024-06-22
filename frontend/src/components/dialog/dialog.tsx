import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    messageTitle: string;
    errorMessage: string;
}

export const Dialog = ({ isOpen, onClose, errorMessage, messageTitle }: DialogProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalContent>
                <ModalHeader>{messageTitle}</ModalHeader>
                <ModalBody>
                    <p>{errorMessage}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

