function f(number) {
    if (!((typeof number !== "number") || (number > 1000) || (number < 2))) {
        let count = 0;

        for (i = 2; i <= 1000; i++) {
            if (number % i === 0) {
                count++;
            }
        }

        if (count > 1) {
            console.log("Число", number, " - составное число");  
        } else {
            console.log("Число", number, " - простое число");
        }

    } else {
        console.log("Данные неверны!");
    }
}

f(13);

f(14);

f(1111);

f("");
