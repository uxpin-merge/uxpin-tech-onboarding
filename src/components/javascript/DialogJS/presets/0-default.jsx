import React from 'react';
import ButtonJS from '../../ButtonJS/ButtonJS';
import DialogJS from '../DialogJS';
import DialogActionsJS from '../../DialogActionsJS/DialogActionsJS';
import DialogContentJS from '../../DialogContentJS/DialogContentJS';
import DialogContentTextJS from '../../DialogContentTextJS/DialogContentTextJS';
import DialogTitleJS from '../../DialogTitleJS/DialogTitleJS';

export default (
  <DialogJS uxpId="3" aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" open={true}>
    <DialogTitleJS id="alert-dialog-title" close={true} uxpId="4">
      {"Use Google's location service?"}
    </DialogTitleJS>
    <DialogContentJS uxpId="5">
      <DialogContentTextJS id="alert-dialog-description" uxpId="6">
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps
        are running.
      </DialogContentTextJS>
    </DialogContentJS>
    <DialogActionsJS uxpId="7">
      <ButtonJS uxpId="8">Disagree</ButtonJS>
      <ButtonJS autoFocus uxpId="9">
        Agree
      </ButtonJS>
    </DialogActionsJS>
  </DialogJS>
);
