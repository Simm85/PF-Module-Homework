function ladyBugs(input) {
    let data = input.slice();
    let fieldSize = data[0];
    let ladyBugPosition = data[1].split(' ');
    let flyZone = [];
    let commands = [];

    for (let i = 0; i < fieldSize; i++) {
        flyZone.push(0);
    }

    for (let position of ladyBugPosition) {
        if (position >= 0 && position < flyZone.length) {
            flyZone.splice(position, 1, 1);
        } else {
            continue;
        }
    }

    for (let i = 2; i < data.length; i++) {
        commands.push(data[i]);
    }

    commands = commands.map(cmd => cmd.split(' '));

    for (let i = 0; i < commands.length; i++) {
        let ladyBugIndex = Number(commands[i][0]);
        let flyDirection = commands[i][1];
        let flyLength = Number(commands[i][2]);
        let currentLadyBug = flyZone[ladyBugIndex];
        let inBounds = ladyBugIndex >= 0 && ladyBugIndex < flyZone.length;
        let isSlotFree = flyZone[ladyBugIndex + 1] === 0;

        if (inBounds && currentLadyBug === 1) {
            flyZone.splice(ladyBugIndex, 1, 0);
            if (isSlotFree) {
                if (flyDirection === 'left') flyLength = -flyLength;
                flyZone[ladyBugIndex + flyLength] = 1;
            } else {
                for (let j = ladyBugIndex + 2; j < flyZone.length; j++) {
                    isSlotFree = flyZone[j] === 0;
                    if (isSlotFree) {
                        if (flyDirection === 'left') flyLength = -flyLength;
                        flyZone[ladyBugIndex + flyLength] = 1;
                        break;
                    }
                }
            }
        }
    }

    return console.log(flyZone.join(' '));
}
ladyBugs([3, '0 1', '0 right 1', '2 right 1']);   // 0 1 0
ladyBugs([5, '3', '3 left 2', '1 left -2']);     //  0 0 0 1 0
ladyBugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);    // 0 0 0