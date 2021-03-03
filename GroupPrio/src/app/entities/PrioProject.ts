export class PrioProject{

    title: string; 
    items: string[];
    isSubmissionAllowed: boolean;

    constructor(title:string, items:string[], isSubmissionAllowed:boolean){
        this.title = title;
        this.items = items;
        this.isSubmissionAllowed = isSubmissionAllowed;
    }
}