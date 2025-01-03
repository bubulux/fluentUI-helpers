import { ModalContextProvider, ModalAnchor } from "@preview/elevated-modal";
import App from "@previewelevated-modal/stories";

/**
 * ### NOTE: This is currently highly experimental, and thus in `preview`, its not recommended to be used
 *
 * @description
 * - in drag and drop enviroments, state is seldomly preserved between re-ordering
 * - this makes using modals a bit tricky which rely on state transitions via portals
 * - because the state is kept at the caller level, the modal will be unmounted and re-mounted, thus losing state
 * - to solve this, we will use a similiar approach to toasting libraries, which instead of using portals, use a single anchor point to which a JSX element is dispatched (via Context API)
 * - this way, no matter what happens to the caller state, the modal will always be mounted to the anchor point, preserving state etc.
 *
 * @accessibility apart from focus trapping, not really accessible
 *
 * @example
 *
 * ```jsx
 * // setting up the root configuration
 * import { ModalContextProvider, ModalAnchor } from "fluentui-helpers";
 *
 * export default function Root() {
 *  return (
 *   <ModalContextProvider>
 *    <App />
 *     // if there are issues with trapping focus, use disableTrapping flag on ModalAnchor
 *    <ModalAnchor />
 *   </ModalContextProvider>
 *  );
 *
 *
 * // the ModalAnchor itself provides a shell container for the actual modal, it has 100% width and height of the viewport
 * // an example could be:
 *
 *
 * import {
 *   DialogTrigger,
 *   DialogTitle,
 *   DialogBody,
 *   DialogActions,
 *   DialogContent,
 *   Button,
 * } from "@fluentui/react-components";
 *
 * // this one is not available, the gist is, is that the DialogSurface cannot be used directly, issues with the way the container spreads
 * import StrippedDialogSurface from "@preview/elevated-modal/StrippedDialogSurface";
 *
 * type TProps = {
 *   someString: string;
 *   someNumber: number;
 *   someObject: {
 *     someKey: string;
 *   };
 *   onAbort: () => void;
 * };
 *
 * export default function ExampleModal({
 *   someString,
 *   someNumber,
 *   someObject,
 *   onAbort,
 * }: TProps) {
 *   return (
 *     <StrippedDialogSurface>
 *       <DialogBody>
 *         <DialogTitle>Dialog title -- {someString}</DialogTitle>
 *         <DialogContent>
 *           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
 *           exercitationem cumque repellendus eaque est dolor eius expedita nulla
 *           ullam? Tenetur reprehenderit aut voluptatum impedit voluptates in
 *           natus iure cumque eaque? Some number: {someNumber} and some object
 *           key: {someObject.someKey}
 *         </DialogContent>
 *         <DialogActions>
 *           <DialogTrigger disableButtonEnhancement>
 *             <Button appearance="secondary" onClick={onAbort}>
 *               Close
 *             </Button>
 *           </DialogTrigger>
 *           <Button appearance="primary">Do Something</Button>
 *         </DialogActions>
 *       </DialogBody>
 *     </StrippedDialogSurface>
 *   );
 * }
 * ```
 *
 */
export default function Root() {
  return (
    <ModalContextProvider>
      <App />
      <ModalAnchor />
    </ModalContextProvider>
  );
}
