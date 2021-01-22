export class WeightedProject{
title: string;
weightedItems: Array<string> = [];
status: string;

constructor(title:string, weightedItems:Array<string>){
this.title=title;
this.weightedItems=weightedItems;
this.status="8 submissions";
}
}
