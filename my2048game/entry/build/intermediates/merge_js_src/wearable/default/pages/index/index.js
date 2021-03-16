let numbers, newNumbers;

const NewTheme = {
    "0": "#D4C8BD",
    "2": "#EDE3DA",
    "4": "#EDE1D1",
    "8": "#F0CBAA",
    "16": "#F1BC9F",
    "32": "#F1AF9D",
    "64": "#F1A08B",
    "128": "#EDD9A6",
    "256": "#F6E5B0",
    "512": "#CDFF3F",
    "1024": "#CADCD4",
    "2048": "#75DBFF"
};

export default {
    data: {
        score: 0,
        best: 9818,
        tiles: [],
        isShow: false,
        Restart: '重开'
    },
    onInit() {
        this.score = 0;
        this.tiles = [];
        this.tiles = [
            {
                text: "",
                backgroundColor: "#cdc1b4",
                color: ""
            },
            {
                text: "",
                backgroundColor: "#cdc1b4",
                color: ""
            },
            {
                text: "",
                backgroundColor: "#cdc1b4",
                color: ""
            },
            {
                text: "",
                backgroundColor: "#cdc1b4",
                color: ""
            },
            {
                text: "",
                backgroundColor: "#cdc1b4",
                color: ""
            },
            {
                text: "",
                backgroundColor: "#cdc1b4",
                color: ""
            },
            {
                text: "",
                backgroundColor: "#cdc1b4",
                color: ""
            },
            {
                text: "",
                backgroundColor: "#cdc1b4",
                color: ""
            },
            {
                text: "",
                backgroundColor: "#cdc1b4",
                color: ""
            },
            {
                text: "",
                backgroundColor: "#cdc1b4",
                color: ""
            },
            {
                text: "",
                backgroundColor: "#cdc1b4",
                color: ""
            },
            {
                text: "",
                backgroundColor: "#cdc1b4",
                color: ""
            },
            {
                text: "",
                backgroundColor: "#cdc1b4",
                color: ""
            },
            {
                text: "",
                backgroundColor: "#cdc1b4",
                color: ""
            },
            {
                text: "",
                backgroundColor: "#cdc1b4",
                color: ""
            },
            {
                text: "",
                backgroundColor: "#cdc1b4",
                color: ""
            },
        ];
        numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        newNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        //        newNumbers = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 8, 4, 2, 0];
        this.supplyNumber();
        this.supplyNumber();
        this.updateView();
    },
    supplyNumber() {
        let positions = [];
        for (let i = 0;i < 16; i++) {
            // 把0的index位置加入positions
            if (!newNumbers[i]) {
                positions.push(i);
            }
        }
        // positions是形如[3, 5, 12]这样的记录0的位置的数组
        // len为3，随机数会取到0, 1, 2中的任意一个
        let i = Math.floor(Math.random() * positions.length);
        if (Math.random() < 0.8) {
            newNumbers[positions[i]] = 2;
        } else {
            newNumbers[positions[i]] = 4;
        }
    },
    onSwipe(e) {
        // 如果新旧数字数组不同，则更新视图
        newNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        // 根据方向获取第一组的起始值，组内公差，组的起始值差
        let start, differ, step;
        switch (e.direction) {
            case 'left':
            // 向左滑动时，分4组进行比较
            // 0, 1, 2, 3是第一组，differ等差为1，下一组起始值是4，step为4-0
            start = 0;
            differ = 1;
            step = 4;
            break;
            case 'right':
            // 向右滑动时，分4组进行比较
            // 3, 2, 1, 0是第一行，differ等差为-1，下一组起始值是7，step为7-3
            start = 3;
            differ = -1;
            step = 4;
            break;
            case 'up':
            // 向上滑动时，分4组进行比较
            // 0, 4, 8, 12是第一组，differ为4，下一组起始值为1，step为1-0
            start = 0;
            differ = 4;
            step = 1;
            break;
            case 'down':
            // 向下滑动时，分4组进行比较
            // 12, 8, 4, 0是第一组，differ为-4，下一组起始值为13，step为13-12
            start = 12;
            differ = -4;
            step = 1;
        }
//        start = 0;
//        differ = 1;
//        step = 4;
        let ids;
        for (let i = 0; i < 4; i++) {
            // 获取本组id
            ids = this.getIds(start, differ);
            // 前一个非0值为null
            let before = null;
            // ids中目前已经知道的，有几个非0数字
            let noZeros = 0;

            for (let j = 0;j < 4; j++) {
                // 当前id为ids中的第j个
                let id = ids[j];
                // number为id所对应的数字
                let number = numbers[id];

                //如果对应id的数字大于0，则比较是否与上一个非0数字(before)相等
                if (number) {
                    if (number === before) {
                        // 如果相等的话
                        // 将上一个ids中对应的非0数字加倍
                        this.score += number * 2;
                        newNumbers[ids[noZeros - 1]] *= 2;
                        // before重置为null
                        before = null;
                    } else {
                        //不相等的话
                        // 修改 newNumbers中的数字为当前数字
                        newNumbers[ids[noZeros]] = number;
                        // 修改before为当前数字
                        before = number;
                        // ids中又多了一个非0的数字
                        noZeros += 1;
                    }
                }
            }
            start += step;
        }
        if (numbers.toString() != newNumbers.toString()) {
            this.supplyNumber();
            this.updateView();
            if (this.isGameOver() == true) {
                for (let i = 0;i < 16; i++) {
                    this.tiles[i].backgroundColor = NewTheme[numbers[i].toString()];
                }
                this.isShow = true;
            }
            newNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
    },
    isGameOver() {
        if(this.isGridsFull() == true && this.isGridsNotMergeable() == true) {
            return true;
        }
    },
    isGridsFull() {
        if (numbers.indexOf(0) == -1) {
            return true;
        }
    },
    isGridsNotMergeable() {
        for(let i = 0; i < 16; i++) {
            if (i < 15) {
                if(numbers[i] == numbers[i + 1] && (i + 1) % 4 != 0) {
                    return false;
                }
            }
            if(i <12) {
                if(numbers[i] == numbers[i + 4]) {
                    return false;
                }
            }
        }
        return true;
    },
    getIds(start, differ) {
        let ids = [];
        for (let i = 4;i; i--) {
            ids.push(start);
            start += differ;
        }
        return ids;
    },
    updateView() {
        const theme = {
            "2": "#eee4da",
            "4": "#ede0c8",
            "8": "#f2b179",
            "16": "#f59563",
            "32": "#f67c5f",
            "64": "#f65e3b",
            "128": "#edcf72",
            "256": "#edcc61",
            "512": "#99cc00",
            "1024": "#83af9b",
            "2048": "#0099cc",
        };
        for (let i = 0;i < 16; i++) {
            if (newNumbers[i] != 0) {
                this.tiles[i].text = newNumbers[i].toString();
                this.tiles[i].backgroundColor = theme[newNumbers[i].toString()];
                if (newNumbers[i] == 2 || newNumbers[i] == 4) {
                    this.tiles[i].color = "#645B52";
                } else {
                    this.tiles[i].color = "#FFFFFF";
                }
            } else {
                this.tiles[i].text = "";
                this.tiles[i].backgroundColor = '#cdc1b4';
            }
        }
        numbers = newNumbers;
    },
}
