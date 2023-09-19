let cells = ['', '', '', '', '', '', '', '', ''];

        let currentPlayer = 'X';

        let result = document.querySelector('.result');

        let btns = document.querySelectorAll('.btn');

        let moves = 0; // New variable to count moves

        let conditions = [

            [0, 1, 2],

            [3, 4, 5],

            [6, 7, 8],

            [0, 3, 6],

            [1, 4, 7],

            [2, 5, 8],

            [0, 4, 8],

            [2, 4, 6]

        ];

 

        const ticTacToe = (element, index) => {

            element.value = currentPlayer;

            element.disabled = true;

            cells[index] = currentPlayer;

            currentPlayer = currentPlayer == 'X' ? 'O' : 'X';

            result.innerHTML = `Player ${currentPlayer} Turn`;

 

            moves++; // Increment moves on each move

 

            for (let i = 0; i < conditions.length; i++) {

                let condition = conditions[i];

                let a = cells[condition[0]];

                let b = cells[condition[1]];

                let c = cells[condition[2]];

 

                if (a == '' || b == '' || c == '') {

                    continue;

                }

 

                if ((a == b) && (b == c)) {

                    result.innerHTML = `Player ${a} Won 🎉`;

                    btns.forEach((btn) => btn.disabled = true);

                    return; // Exit the function if a player has won

                }

            }

 

            if (moves === 9) {

                result.innerHTML = `It's a Draw!`;

            }

        };

 

        function reset() {

            cells = ['', '', '', '', '', '', '', '', ''];

            btns.forEach((btn) => {

                btn.value = '';

            });

            currentPlayer = 'X';

            result.innerHTML = `Player X Turn`;

            btns.forEach((btn) => btn.disabled = false);

            moves = 0; // Reset moves

        };

 

        document.querySelector('#reset').addEventListener('click', reset);

 

        btns.forEach((btn, i) => {

            btn.addEventListener('click', () => ticTacToe(btn, i));

        });