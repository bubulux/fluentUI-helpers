/* eslint-disable react/button-has-type */

import {
  DialogTrigger,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
} from "@fluentui/react-components";

import StrippedDialogSurface from "@previewelevated-modal/StrippedDialogSurface";

type TProps = {
  someString: string;
  someNumber: number;
  someObject: {
    someKey: string;
  };
  onAbort: () => void;
};

export default function ExampleModal({
  someString,
  someNumber,
  someObject,
  onAbort,
}: TProps) {
  return (
    <StrippedDialogSurface>
      <DialogBody>
        <DialogTitle>Dialog title -- {someString}</DialogTitle>
        <DialogContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          exercitationem cumque repellendus eaque est dolor eius expedita nulla
          ullam? Tenetur reprehenderit aut voluptatum impedit voluptates in
          natus iure cumque eaque? Some number: {someNumber} and some object
          key: {someObject.someKey}
        </DialogContent>
        <DialogActions>
          <DialogTrigger disableButtonEnhancement>
            <Button appearance="secondary" onClick={onAbort}>
              Close
            </Button>
          </DialogTrigger>
          <Button appearance="primary">Do Something</Button>
        </DialogActions>
      </DialogBody>
    </StrippedDialogSurface>
  );
}
