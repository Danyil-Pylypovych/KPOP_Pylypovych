import { Component } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'my-app',
    template: `
        <form (ngSubmit)="onSubmit()">

            <label for="name">Назва товару:</label><br>
            <input name="name" (keyup)="onKeyName($event)"><br>

            <label for="price">Ціна:</label><br>
            <input name="price" (keyup)="onKeyPrice($event)"><br><br>

            <button class="button" type="submit">Додати у кошик</button>
        </form>
        
        <br><br>

        <table style="border:1px solid gray;">
            <tr>
                <th width="100px;">Назва товару</th>
                <th>Ціна</th>
            </tr>
            <tr *ngFor="let row of rows" >
                <td>{{row.name}}</td>
                <td>{{row.price}}</td>
            </tr>
        </table>
        <br>
        <form (ngSubmit)="clean()">
            <button class="button" type="submit">Очистити список</button>
        </form>
        <h2>Сума покупок: {{sum}}</h2>`
})

export class AppComponent  {
    name = 'Lab_3';
    sum: number = 0
    productPrice: string
    productName: string
    rows: any[] = []

    priceInput: any
    nameInput: any

    resetting() {
        this.priceInput.value = ""
        this.nameInput.value = ""
    }

    onSubmit() {
        const temp: number = Number(this.productPrice);
        this.sum += temp;

        this.rows.push({
            name: this.productName,
            price: this.productPrice
        })

        this.resetting()
    }

    onKeyPrice(event: any) {
        this.productPrice = event.target.value;
        this.priceInput = event.target
    }

    onKeyName(event: any) {
        this.productName = event.target.value;
        this.nameInput = event.target
    }

    clean() {
        this.rows = []
        this.sum = 0
    }
}