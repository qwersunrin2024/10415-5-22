let users = {
    kim: [1234, "eat food"], // 0번 인덱스에 비밀번호 추가 (숫자로 저장하기로 함)
    sang: [5678, "study hard"],
};

let currentUser;

function login() {
    currentUser = prompt("Username을 입력해 주세요!");
    let isNew = true;
    for (let existing in users) {
        if (existing === currentUser) isNew = false;
    }
    if (isNew) {
        alert(`${currentUser}님 처음 오신 것을 환영합니다.`);
        users[currentUser] = [parseInt(prompt("비밀번호를 등록해 주세요!"))]; // 비밀번호 추가
    } else {
        alert(`${currentUser}님 다시 접속 하신 것을 환영합니다.`);
        const checkPassword = function () {
            let password = parseInt(prompt("Password를 입력해 주세요!"));
            if (password !== users[currentUser][0]) {
                alert("비밀번호가 틀렸습니다.");
                return true;
            }
            return false;
        };
        while (checkPassword()) {}
    }
}

function showList() {
    let i = 0;
    console.log("**************");
    users[currentUser].slice(1).forEach((task) => {
        console.log(`${i + 1}. ${task}`);
        i++;
    });
    console.log("**************");
}

function addList() {
    let newTask = prompt("할 일을 추가해 주세요!");
    users[currentUser].push(newTask);
}

function deleteList() {
    showList(); // 현재 사용자의 할 일 목록을 보여줍니다
    let index = parseInt(prompt("몇 번째 일을 삭제할까요?"));

    if (index >= 1 && index <= users[currentUser].slice(1).length) {
        users[currentUser].splice(index, 1); // 지정된 인덱스의 할 일을 삭제합니다
        alert("일이 삭제되었습니다.");
    } else {
        alert("올바른 번호를 선택해 주세요.");
        deleteList();
    }
}

function printCaps() {
    console.log(
        users[currentUser]
            .filter((user) => typeof user === "string")
            .map((user) => user.toUpperCase())
    );
}

login(); // 함수 호출

while (true) {
    let command = prompt("무엇을 도와드릴까요? (press: Q to exit)");
    if (command === "list") {
        showList();
    } else if (command === "add") {
        addList();
    } else if (command === "del") {
        deleteList();
    } else if (command === "show") {
        printCaps();
    } else if (command === "Q" || command == "q") {
        break;
    }
}
