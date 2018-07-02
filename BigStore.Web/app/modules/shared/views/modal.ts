
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


  

@Component({
    selector: 'modal',
    templateUrl: 'app/modules/shared/views/modal.html' 
}) 
     
export class modal implements OnInit
{
    @Input('show-modal') showModal: boolean;
    @Input('title') title: string;
    @Input('sub-title') subTitle: string;
    @Input('cancel-label') cancelLabel: string;
    @Input('positive-label') positiveLabel: string;

    @Output('closed') closeEmitter: EventEmitter<ModalResult> = new EventEmitter<ModalResult>();
    @Output('loaded') loadedEmitter: EventEmitter<modal> = new EventEmitter<modal>();
    @Output() positiveLabelAction = new EventEmitter();

    constructor() { }

    ngOnInit()
    {
        this.loadedEmitter.next(this);
    }

    show()
    {
        this.showModal = true;
    }

    hide()
    {
        this.showModal = false;
        //this.closeEmitter.next({
        //    action: ModalAction.POSITIVE
        //});
    }

    positiveAction()
    {
        this.positiveLabelAction.next(this);
        return false;
    }

    cancelAction()
    {
        this.showModal = false;
        this.closeEmitter.next({
            action: ModalAction.CANCEL
        });
        return false;
    }
}

export enum ModalAction { POSITIVE, CANCEL }

export interface ModalResult
{
    action: ModalAction;
}