export class WeightedProject{
title: string;
weightedItems: Array<string> = [];

constructor(title:string, weightedItems:Array<string>){
this.title=title;
this.weightedItems=weightedItems;
}
}
