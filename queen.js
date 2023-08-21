(() => {
    const cellSize = 50;
    const blancSize = 20;
    const queenColor = '#0d09ff';
    const queens = [];

    function checkCell(i, j) {
        queens.forEach((q) => {
            if (q.i === i || q.j === j || Math.abs(q.j - j) === Math.abs(q.i - i)) {
                q.elm.style.backgroundColor = '#ff4c09';
                setTimeout(() => {
                    q.elm.style.backgroundColor = queenColor;
                }, 1000)
            }
        });
    }
    
    const board = document.createElement('div');
    Object.assign(board.style, {
        position: 'absolute',
        inset: '0 0 0 0',
        width: cellSize * 8 + blancSize * 2 + 'px',
        height: cellSize * 8 + blancSize * 2 + 'px',
        background: '#f6f6f6',
    });

    const place = document.createElement('div');
    Object.assign(place.style, {
        position: 'relative',
        left: blancSize + 'px',
        top: blancSize + 'px',
        width: cellSize * 8 + 'px',
        height: cellSize * 8 + 'px',
        background: '#eee',
    });
    board.appendChild(place);

    for (let i = 0; i < 8; i += 1) {
        for (let j = 0; j < 8; j += 1) {
            const cell = document.createElement('div');
            Object.assign(cell.style, {
                position: 'absolute',
                top: `${cellSize * i}px`,
                left: `${cellSize * j}px`,
                width: cellSize + 'px',
                height: cellSize + 'px',
                background: (i + j) % 2 ? '#fff' : '#000',
            });
            place.appendChild(cell);
            
            cell.addEventListener('click', () => {
                if (cell.firstChild) {
                    const index = queens.findIndex(e => e.elm === cell.firstChild);
                    queens.splice(index, 1);
                    cell.firstChild.remove();
                } else {
                    const queen = document.createElement('div');
                    Object.assign(queen.style, {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: (cellSize - blancSize) + 'px',
                        height: (cellSize - blancSize) + 'px',
                        backgroundColor: queenColor,
                        borderRadius: '50%',
                        transform: 'translate(-50%, -50%)'
                    });
                    cell.appendChild(queen);
                    
                    checkCell(i, j);
                    queens.push({
                        i, j, elm: queen
                    });
                    
                }    
            });
        }
    }

    for (let i = 0; i < 8; i += 1) {
        const number = document.createElement('div');
        Object.assign(number.style, {
            position: 'absolute',
            textAlign: 'center',
            top: `${cellSize * i + cellSize / 2 - blancSize / 2}px`,
            left: -blancSize + `px`,
            width: blancSize + 'px',
            height: blancSize + 'px',
        });
        number.textContent = i;
        place.appendChild(number);
    }

    for (let i = 0; i < 8; i += 1) {
        const number = document.createElement('div');
        Object.assign(number.style, {
            position: 'absolute',
            textAlign: 'center',
            left: `${cellSize * i + cellSize / 2 - blancSize / 2}px`,
            top: -blancSize + `px`,
            width: blancSize + 'px',
            height: blancSize + 'px',
        });
        number.textContent = i;
        place.appendChild(number);
    }


    document.body.appendChild(board);
})();