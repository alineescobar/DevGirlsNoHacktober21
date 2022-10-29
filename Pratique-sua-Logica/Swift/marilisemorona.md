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

### Desafio 2

enum Course {
    case logic
    case poo
    case project
    case instrumentalEnglish
    case entrepreneurship
    
    func description() -> String {
        switch self{
        case .logic:
            return "Lógica de Programação"
        case .poo:
            return "Programação Orientada a Objetos"
        case .project:
            return "Projeto I"
        case .instrumentalEnglish:
            return "Inglês Instrumental"
        case .entrepreneurship:
            return "Empreendedorismo"
            
        }
    
    }
}

struct Notes {
    var course: Course
    var note: Double?
}

var courses: [Notes] = []
courses.append(Notes(course: .logic, note: 6.5))
courses.append(Notes(course: .logic, note: 7))
courses.append(Notes(course: .logic, note: 5.5))
courses.append(Notes(course: .logic, note: 7.5))

courses.append(Notes(course: .poo, note: 5))
courses.append(Notes(course: .poo, note: 4.5))
courses.append(Notes(course: .poo, note: 7))
courses.append(Notes(course: .poo, note: 8.5))

courses.append(Notes(course: .project, note: 7.5))
courses.append(Notes(course: .project, note: 8.5))
courses.append(Notes(course: .project, note: 7.4))
courses.append(Notes(course: .project, note: 6.9))

courses.append(Notes(course: .instrumentalEnglish, note: 9.5))
courses.append(Notes(course: .instrumentalEnglish, note: 2.5))
courses.append(Notes(course: .instrumentalEnglish, note: 7.5))
courses.append(Notes(course: .instrumentalEnglish, note: 8))


func listNotes(ofTheCourse curso: Course) -> [Double] {
    var array: [Double] = []
    for course in courses {
        if course.course == curso {
            let noteCourse = course.note ?? 0
            array.append(noteCourse)
        }
    }
    array.sort()
    return array
}



func removeMinNotes(_ curso: Course) -> [Double] {
    var arrayNotes = listNotes(ofTheCourse: curso)
    var newArray: [Double] = []
    var oldArray = arrayNotes
    
    while oldArray.count > 2 {
        let note = oldArray.removeLast()
        newArray.append(note)
    }
    return newArray
}



func sumNotes(_ curso: Course) -> Double {
    var newArrayNotes = removeMinNotes(curso)
    var notes = newArrayNotes
    var sum: Double = 0
    
    for note in notes {
        let value = note
        sum += value
    }
    
    var med = sum/2
    return med
}



func needIsExam(_ curso: Course) -> String {
    var medCourse = sumNotes(curso)
    var med: Double = medCourse*2
    var medForApproved: Double = 8*2
    var newNote: Double = 0
    var sentence: String = ""
    
    if (medForApproved - med) <= 0 {
        sentence = "Eduardo não precisa fazer a quinta prova para a disciplina de \(curso.description())"
    } else {
        newNote = (medForApproved - med)+8
        sentence = "Eduardo precisa fazer a quinta prova para a disciplina de \(curso.description()), e precisá tirar \(newNote) pontos"
    }
    
    return sentence
}

var needExamForLogic = needIsExam(.logic)
print(needExamForLogic)
var needExamForPoo = needIsExam(.poo)
print(needExamForPoo)
var needExamForProject = needIsExam(.project)
print(needExamForProject)
var needExamForIntsEnglish = needIsExam(.instrumentalEnglish)
print(needExamForIntsEnglish)
var needExamForEnterpreneurship = needIsExam(.entrepreneurship)
print(needExamForEnterpreneurship)


### Aprenda Swift

Links para aprender swift:

- [Hacking With Swift](https://www.hackingwithswift.com/)