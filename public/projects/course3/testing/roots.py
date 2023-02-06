from math import sqrt

def roots():
    a = 0
    while a == 0:
        a = getNumber("Введите коэффицент а  -->")
        if a == 0:
            print("Коэффичент а не может быть равен нулю")
        
    b = getNumber("Введите коэффицент b -->")
    c = getNumber("Введите коэффицент c -->")

    try:
        d = b**2 - 4*a*c
    except:
        print("Дискриминант отрицательный")
        return
    
    if d>= 0:
        x1 = (-b + sqrt(d)) / 2*a
        x2 = (-b - sqrt(d)) / 2*a
        return x1, x2
    else:
        print("Корней нет")
        return


def getNumber(text):
    try:
        number = float(input(text))
    except:
        print("Введено некоректное значение! Попробуйте снова -->")
        return getNumber(text)
    return number

while True:
    print(roots())
