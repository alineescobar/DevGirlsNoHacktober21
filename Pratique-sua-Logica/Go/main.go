package main

import (
	"fmt"
	"sort"
)

type Notas []float32

type Materia map[string]Notas

const media = 8

func main() {
	materias := Materia{
		"Lógica de Programação":           Notas{6.5, 7, 5.5, 7.5},
		"Programação Orientada a Objetos": Notas{5, 4.5, 7, 8.5},
		"Projeto I":                       Notas{7.5, 8.5, 7.4, 6.9},
		"Inglês Instrumental":             Notas{9.5, 4.5, 7.5, 8},
		"Empreendedorismo":                Notas{7.3, 5, 6, 8},
	}

	resultados := Resultado(materias)

	for _, r := range resultados {
		fmt.Println(r)
	}
}

func Resultado(materias Materia) []string {
	var result []string
	for k, m := range materias {
		nota5 := CalculaNota5(m)

		if nota5 <= 0 {
			result = append(result, fmt.Sprintf("%s: %s\n", k, "Aprovado"))
		} else {
			result = append(result, fmt.Sprintf("%s: %.2f\n", k, nota5))
		}
	}

	return result
}

func CalculaNota5(notas Notas) float32 {
	sort.Slice(notas, func(i, j int) bool {
		return notas[i] > notas[j]
	})

	mediaNotas := (notas[0] + notas[1]) / 2

	return media - mediaNotas
}
