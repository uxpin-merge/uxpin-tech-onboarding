import React from 'react';
import ButtonTS from '../../ButtonTS/ButtonTS';
import DialogTS from '../DialogTS';
import DialogActionsTS from '../../DialogActionsTS/DialogActionsTS';
import DialogContentTS from '../../DialogContentTS/DialogContentTS';
import DialogContentTextTS from '../../DialogContentTextTS/DialogContentTextTS';
import DialogTitleTS from '../../DialogTitleTS/DialogTitleTS';

export default (
  <DialogTS uxpId="3" aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" open={true}>
    <DialogTitleTS id="alert-dialog-title" close={true} uxpId="4">
      {"Use Google's location service?"}
    </DialogTitleTS>
    <DialogContentTS uxpId="5">
      <DialogContentTextTS id="alert-dialog-description" uxpId="6">
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps
        are running.
      </DialogContentTextTS>
    </DialogContentTS>
    <DialogActionsTS uxpId="7">
      <ButtonTS uxpId="8">Disagree</ButtonTS>
      <ButtonTS autoFocus uxpId="9">
        Agree
      </ButtonTS>
    </DialogActionsTS>
  </DialogTS>
);
