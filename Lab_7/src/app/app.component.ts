import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = ''
  city:string = ''
  adress:string = ''
  user: string = ''
  phoneNumber: string = ''
  email: string = ''
  nameOB:string = ''
  opal:boolean = false
  vent:boolean = false
  GVS:boolean  = false

  err1: string = ''
  err2: string = ''
  err3: string = ''
  err4: string = ''
  err5: string = ''
  err6: string = ''
  err7: string = ''
  err8: string = ''

  result: string = ''
  
  checkAllVal():boolean{
    let result1: number = 0;
    let result2: number = 0;
    let result3: number = 0;
    let result4: number = 0;
    let result5: number = 0;
    let result6: number = 0;
    let result7: number = 0;
    let result8: number = 0;

    this.err1 = ''
    this.err2 = ''
    this.err3 = ''
    this.err4 = ''
    this.err5 = ''
    this.err6 = ''
    this.err7 = ''
    this.err8 = ''

    let regexp1: string = '[\\А-Я].*'
    let str1: string = this.name;
    result1 = str1.search(regexp1)
    if (this.name == ''){
      result1 = -2
    }
    let regexp2: string = '[\\А-Я].*'
    let str2: string = this.city;
    result2 = str2.search(regexp2)
    if (this.city == ''){
      result2 = -3
    }
    let regexp3: string = '[\\А-Я].*[\\0-9].*[\\А-Я]'
    let str3: string = this.adress;
    result3 = str3.search(regexp3)
    if (this.adress == ''){
      result3 = -4
    }
    let regexp4: string = '[\\А-Я].*'
    let str4: string = this.user;
    result4 = str4.search(regexp4)
    if (this.user == ''){
      result4 = -5
    }

    let regexp5: string = '^[0-9]*$'
    let str5: string = this.phoneNumber;
    result5 = str5.search(regexp5)

    if(this.phoneNumber.length != 10){
      result5 = -6
    }
    if (this.phoneNumber == ''){
      result5 = -7
    }

    let regexp6: string = '[\\a-z].*@gmail\\.com'
    let str6: string = this.email;
    result6 = str6.search(regexp6)
    if (this.email == ''){
      result6 = -8
    }

    let regexp7: string = '[\\А-Я].*'
    let str7: string = this.nameOB;
    result7 = str7.search(regexp7)
    if (this.city == ''){
      result7 = -9
    }

    if(!this.opal && !this.vent && !this.GVS){
      result8 = -10
    }




    if(result1 ==0){
      if(result2 ==0){
        if(result3 ==0){
          if(result4 ==0){
            if(result5 ==0){
              if(result6 ==0){
                if(result7 ==0){
                  if(result8 ==0){
                    this.result = 'Надіслано'
                  }
                  else {
                    this.err8 = 'Оберіть область використання'
                  }
                }
                else if(result7 == -9){
                  this.err7 = 'Заповните поле!'
                }
                else{
                  this.err7 ='Назва об`экту введена некоректно'
                }
              }
              else if(result6 == -8){
                this.err6 = 'Заповните поле!'
              }
              else{
                this.err6 ='Email введено невірно (gmail@gmail.com)'
              }
            }
            else if(result5 == -6){
              this.err5 = 'Введено забагато або замало цифр (має бути 10)'
            }
            else if(result5 == -7){
              this.err5 = 'Заповните поле!'
            }
            else{
              this.err5 ='Тільки цифри від 0 до 9'
            }
          }
          else if(result4 == -5){
            this.err4 = 'Заповните поле!'
          }
          else{
            this.err4 ='Контактну особу введено некоректно'
          }
        }
        else if(result3 == -4){
          this.err3 = 'Заповните поле!'
        }
        else{
          this.err3 ='Не правильно введено адресу (Шовкуненко 3А)'
        }
      }
      else if(result2 == -3){
        this.err2 = 'Заповните поле!'
      }
      else {
        this.err2 = 'Назва міста введена некоректно'
      }
    }
    else if(result1 == -2){
      this.err1 = 'Заповните поле!'
    }
    else{
      this.err1 = 'Назва введена некоректно'
    }




    return true
  }
}
