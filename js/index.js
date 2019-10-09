let n = prompt("Input n")

function fibonNum(n) {
    if (n == 0) { return (0); }
    if (n <= 2) {
        return (1);
    }
    if (n > 2) {
        return fibonNum(n - 1) + fibonNum(n - 2);
    }
}
document.write("N-не число фібоначі методом рекурсії-  "+fibonNum(n) + "<br>")


let arayFibon = [1, 1];

function fibonMatrix(n) {
    for (let i = 1; i < n; i++) {
        if (n > 2) {
            arayFibon.push(arayFibon[i - 1] + arayFibon[i]);
        }
        document.write(arayFibon[i - 1] + " ");
    }
    return arayFibon[n - 1];
}
document.write("Ряд фібоначчі методом матриці -  "+fibonMatrix(n)+"<br>");



function variable(n) {
    let variableNumFirst;
    let variableNumSecond;
    let variableNum;
    for (let i = 1; i <= n; i++) {
        if (i == 1) {
             variableNumFirst = 1;
             variableNum = variableNumFirst;
        }
        if (i == 2) {
            variableNumSecond = 1;
            variableNum = variableNumSecond;
        }
        if (i > 2) {
            variableNum = variableNumFirst + variableNumSecond;
            variableNumSecond=variableNumFirst;
            variableNumFirst = variableNum;
        }
        
    }
    return variableNum;
}
document.write("N-не число фібоначчі методом змінних -  "+variable(n));
