/**
 * Creates a new instance of AnnotationManager.
 * @class Represents an object that manages the Annotations that appear on a Document's pages when displayed in a DocumentViewer.
 * @name AnnotationManager
 */
class AnnotationManager {}

/**
 * Triggered when an annotation or annotations have been changed (added, deleted, modified).
 * Attach like annotManager.on('annotationChanged', callback)
 * @name AnnotationManager#annotationChanged
 * @event
 * @param {Array<object>} annotations The annotations that were changed
 * @param {'add' | 'modify' | 'delete'} action The action that occurred (add, delete, modify)
 * @param {AnnotationManager.AnnotationChangedInfoObject} info An object containing extra information about the annotationChanged event
 */

/**
 * @typedef {Object} AnnotationManager.AnnotationChangedInfoObject
 * @property {boolean} imported A boolean that will be true if the annotation change is the result of importing annotations using importAnnotations, importAnnotCommand or if the imported parameter is set to true when calling addAnnotations or deleteAnnotations
 * @property {boolean} isUndoRedo A boolean that will be true if the annotation change is the result of an undo or redo action
 */

module.exports = {
    AnnotationManager: AnnotationManager,
};
