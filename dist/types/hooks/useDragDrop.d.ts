export interface DragDropState {
    isDragging: boolean;
    isOver: boolean;
    draggedItemId: string | null;
    overDropId: string | null;
}
/**
 * `useDragDrop` is a hook for enabling drag and drop interactions in your component.
 * It manages the state and events related to dragging and dropping items.
 *
 * @param dragData - The data associated with the drag item.
 * @param onDrop - The function to execute when an item is dropped.
 * @return - An object containing the drag and drop state and binding functions for draggable and droppable elements.
 */
export declare function useDragDrop(onDrop: (dragId: string, dropId: string) => void): {
    state: DragDropState;
    bindDrag: (dragId: string) => {
        draggable: boolean;
        onDragStart: (e: React.DragEvent) => void;
    };
    bindDrop: (dropId: string) => {
        onDragOver: (e: React.DragEvent) => void;
        onDragEnter: (e: React.DragEvent) => void;
        onDragLeave: (e: React.DragEvent) => void;
        onDrop: (e: React.DragEvent) => void;
    };
};
