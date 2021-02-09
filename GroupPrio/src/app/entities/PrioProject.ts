export class PrioProject{

    title: string; 
    items: string[];
    isMultipleSubmissionsAllowed: boolean;

    constructor(title:string, items:string[], isMultipleSubmissionsAllowed:boolean){
        this.title = title;
        this.items = items;
        this.isMultipleSubmissionsAllowed = isMultipleSubmissionsAllowed;
    }
}