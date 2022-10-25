### Swift

Para executar a resolução deste pacote basta instalar o Xcode, se você tiver um MacBook, ou ainda pode utilizar o playground swift on line, através do link:
https://online.swiftplayground.run/


### Desafio 1

import UIKit

enum ToPay {
    case water
    case lux
    case phone
    case internet
    case rental
    case englishCourse
    case university
}

struct BillsToPay {
    var bill: ToPay
    var value: Double
}

var arrayToPay: [BillsToPay] = []
var sumBills: Double = 0

arrayToPay.append(BillsToPay(bill: .water, value: 358.0))
arrayToPay.append(BillsToPay(bill: .lux, value: 245.0))
arrayToPay.append(BillsToPay(bill: .phone, value: 98.0))
arrayToPay.append(BillsToPay(bill: .internet, value: 150.0))
arrayToPay.append(BillsToPay(bill: .rental, value: 1850.0))
arrayToPay.append(BillsToPay(bill: .englishCourse, value: 350.0))
arrayToPay.append(BillsToPay(bill: .university, value: 390.0))

func sum() -> Double {
    for item in arrayToPay {
        print(arrayToPay)
        let newValue = item.value
        sumBills += newValue
    }
    print(sumBills)
    return sumBills
}

sum()


### Aprenda Swift

Links para aprender swift:

- [Hacking With Swift](https://www.hackingwithswift.com/)