import { Component }        from '@angular/core';
import { ToastsManager }    from 'ng2-toastr/ng2-toastr';

@Component({
    templateUrl: 'notifications.component.html'
})
export class NotificationsComponent {

    constructor(public toastr: ToastsManager) { }

    showSuccess() {
        this.toastr.success('You are awesome!', 'Success!');
    }

    showError() {
        this.toastr.error('This is not good!', 'Oops!');
    }

    showWarning() {
        this.toastr.warning('You are being warned.', 'Alert!');
    }

    showInfo() {
        this.toastr.info('Just some information for you.');
    }

    showCustom() {
        this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
    }

}
