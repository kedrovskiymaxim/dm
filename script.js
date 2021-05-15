/**
 * валидация
 * @param matrix
 * @return {*}
 */
function main() {
    let arr = document.getElementById('matrix').value.split("\n");
    let arrWidth = arr[0].split(" ").length;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let sarr = arr[i].split(" ");

        for (let j = 0; j < sarr.length; j++) {
            if (!(sarr[j] == 0 || sarr[j] == 1)){
                result = 1;
            }
        }
         if (sarr.length != arrWidth) {
            result = 2;
        }
    }
    /**
     * проверка является ли отношение функцией
     * @param arr
     * @param arrWidth
     * @return {boolean}
     */
    if (result == 0) {
        let func = true;

        for (let i = 0; i < arr.length; i++) {
            let k = 0;
            let sarr = arr[i].split(" ");
            for (let j = 0; j < arrWidth; j++) {
                if (sarr[j] == 1) {
                    k++;
                }
            }
            if (k != 1) {
                func = false;
            }
        }
        if (func == true) {
            document.getElementById('result').innerHTML = "является";
        }
        else {
            document.getElementById('result').innerHTML = "не является";
        }
    }
    else if (result == 1) {
        alert('матрица должна быть бинарной!');
    }
    else {
        alert('матрица не является прямоугольной!');
    }
}