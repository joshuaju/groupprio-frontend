export class WeightedProject{
title: string;
weightedItems: Array<string> = [];
submissionCount: number;

constructor(title:string, weightedItems:Array<string>, submissionCount:number){
    this.title = title;
    this.weightedItems = weightedItems;
    this.submissionCount = submissionCount;
}
}
