import { Injectable } from '@angular/core';

export interface QuestionItem {
    ItemNo: number;
    Name: string;
    Description: string;
}

export interface AnswerItem {
    ItemNo: number;
    Name: string;
}

export const QUESTION_LIST: QuestionItem[] = [
    {ItemNo: 1, Name: "Q1", Description:"This is question 1"},
    {ItemNo: 2, Name: "Q2", Description:"This is question 2"},
    {ItemNo: 3, Name: "Q3", Description:"This is question 3"},
    {ItemNo: 4, Name: "Q4", Description:"This is question 4"},
    {ItemNo: 5, Name: "Q5", Description:"This is question 5"},
    {ItemNo: 6, Name: "Q6", Description:"This is question 6"},
    {ItemNo: 7, Name: "Q7", Description:"This is question 7"},
    {ItemNo: 8, Name: "Q8", Description:"This is question 8"},
    {ItemNo: 9, Name: "Q9", Description:"This is question 9"},
    {ItemNo: 10, Name: "Q10", Description:"This is question 10"}
];

export const QUESTION_LIST_TH: QuestionItem[] = [
    {ItemNo: 1, Name: "Q1", Description:"คำถามที่ 1"},
    {ItemNo: 2, Name: "Q2", Description:"คำถามที่ 2"},
    {ItemNo: 3, Name: "Q3", Description:"คำถามที่ 3"},
    {ItemNo: 4, Name: "Q4", Description:"คำถามที่4"},
    {ItemNo: 5, Name: "Q5", Description:"คำถามที่ 5"},
    {ItemNo: 6, Name: "Q6", Description:"คำถามที่ 6"},
    {ItemNo: 7, Name: "Q7", Description:"คำถามที่ 7"},
    {ItemNo: 8, Name: "Q8", Description:"คำถามที่ 8"},
    {ItemNo: 9, Name: "Q9", Description:"คำถามที่ 9"},
    {ItemNo: 10, Name: "Q10", Description:"คำถามที่ 10"}
];

export const ANSWER_LIST: AnswerItem[] = [
    {ItemNo: 1, Name: "Never"},
    {ItemNo: 2, Name: "Rarely"},
    {ItemNo: 3, Name: "Depend on Occasion 50:50"},
    {ItemNo: 4, Name: "Most Likely"},
    {ItemNo: 5, Name: "Everytime"},
    {ItemNo: 6, Name: "Not Applicable"},
 ];

export const ANSWER_LIST_TH: AnswerItem[] = [
    {ItemNo: 1, Name: "ไม่เคย"},
    {ItemNo: 2, Name: "ไม่ค่อยมี"},
    {ItemNo: 3, Name: "แล้วแต่โอกาส 50:50"},
    {ItemNo: 4, Name: "โดยส่วนมาก"},
    {ItemNo: 5, Name: "ทุกครั้ง"},
    {ItemNo: 6, Name: "ไม่สามารถทำได้"},
];

export const QuestionsPerPage: number = 3;
export const MinPageNo: number = 1;
export const MaxPageNo: number = Math.ceil(QUESTION_LIST.length / QuestionsPerPage);

@Injectable({
    providedIn: 'root'
  })
export class Global {
    public language: string = "EN";
    public pageNo: number = 1;

    public selectQuestionList() {
        return (this.language == 'TH') ? QUESTION_LIST_TH : QUESTION_LIST; 
    }

    public selectAnswerList() {
        return (this.language == 'TH') ? ANSWER_LIST_TH : ANSWER_LIST; 
    }
}
