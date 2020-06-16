/**
 * Creates a new instance of AnnotationHistoryManager.
 */
declare class AnnotationHistoryManager extends AnnotationManager {
    /**
     * Triggered when an annotation or annotations have been changed (added, deleted, modified).
     * Attach like annotManager.on('annotationChanged', callback)
     * @param annotations - The annotations that were changed
     * @param action - The action that occurred (add, delete, modify)
     * @param info - An object containing extra information about the annotationChanged event
     */
    on(event: 'annotationChanged', callback: (annotations: object[], action: 'add' | 'modify' | 'delete', info: AnnotationManager.AnnotationChangedInfoObject) => void): void;
    /**
     * Triggered when an annotation or annotations have been changed (added, deleted, modified).
     * Attach like annotManager.on('annotationChanged', callback)
     * @param annotations - The annotations that were changed
     * @param action - The action that occurred (add, delete, modify)
     * @param info - An object containing extra information about the annotationChanged event
     */
    one(event: 'annotationChanged', callback: (annotations: object[], action: 'add' | 'modify' | 'delete', info: AnnotationManager.AnnotationChangedInfoObject) => void): void;
    off(event?: 'annotationChanged', callback?: (annotations: object[], action: 'add' | 'modify' | 'delete', info: AnnotationManager.AnnotationChangedInfoObject) => void): void;
    /**
     * Triggered when an annotation is removed by an undo action
     * @param annotation - The annotation that was removed
     */
    on(event: 'undo', callback: (annotation: any) => void): void;
    /**
     * Triggered when an annotation is removed by an undo action
     * @param annotation - The annotation that was removed
     */
    one(event: 'undo', callback: (annotation: any) => void): void;
    off(event?: 'undo', callback?: (annotation: any) => void): void;
}

/**
 * Creates a new instance of AnnotationManager.
 */
declare class AnnotationManager {
    /**
     * Triggered when an annotation or annotations have been changed (added, deleted, modified).
     * Attach like annotManager.on('annotationChanged', callback)
     * @param annotations - The annotations that were changed
     * @param action - The action that occurred (add, delete, modify)
     * @param info - An object containing extra information about the annotationChanged event
     */
    on(event: 'annotationChanged', callback: (annotations: object[], action: 'add' | 'modify' | 'delete', info: AnnotationManager.AnnotationChangedInfoObject) => void): void;
    /**
     * Triggered when an annotation or annotations have been changed (added, deleted, modified).
     * Attach like annotManager.on('annotationChanged', callback)
     * @param annotations - The annotations that were changed
     * @param action - The action that occurred (add, delete, modify)
     * @param info - An object containing extra information about the annotationChanged event
     */
    one(event: 'annotationChanged', callback: (annotations: object[], action: 'add' | 'modify' | 'delete', info: AnnotationManager.AnnotationChangedInfoObject) => void): void;
    off(event?: 'annotationChanged', callback?: (annotations: object[], action: 'add' | 'modify' | 'delete', info: AnnotationManager.AnnotationChangedInfoObject) => void): void;
}

declare namespace AnnotationManager {
    /**
     */
    type AnnotationChangedInfoObject = {
        /**
         * A boolean that will be true if the annotation change is the result of importing annotations using importAnnotations, importAnnotCommand or if the imported parameter is set to true when calling addAnnotations or deleteAnnotations
         */
        imported: boolean;
        /**
         * A boolean that will be true if the annotation change is the result of an undo or redo action
         */
        isUndoRedo: boolean;
    };
}