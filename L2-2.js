const filesMap = {
    "2023": [],
    "2024": [],
    "2022X": []
};

// Populate the filesMap with the appropriate file names
for (var i = 1; i <= 3; i++) {
    filesMap["2023"].push('L2-20230912/Linux23.12.09-' + i + '.html');
}

for (var i = 1; i <= 3; i++) {
    filesMap["2022X"].push('' + i + '.html');
}

for (var i = 1; i <= 3; i++) {
    filesMap["2024"].push('' + i + '.html');
}


function updateOptions() {
    const selectBox = document.getElementById("linux2-options");
    selectBox.innerHTML = '';

    const option = document.createElement("option");
    option.text = "Select a date";
    option.value = "";
    selectBox.add(option);

    const years = Object.keys(filesMap);
    years.forEach(year => {
        const opt = document.createElement("option");
        opt.value = year;
        opt.text = year;
        selectBox.add(opt);
    });

    selectBox.style.display = "inline";
}

function RandomHTML() {
    const selectedYear = document.getElementById("linux2-options").value;
    if (selectedYear && filesMap[selectedYear]) {
        const files = filesMap[selectedYear];
        const randomIndex = Math.floor(Math.random() * files.length);
        const selectedHTMLFile = files[randomIndex];
        window.location.href = selectedHTMLFile;
    } else {
        alert("날짜를 선택하세요");
    }
}

function Next(){
    if (window.location.href.includes('2023')) {
        // 현재 파일이 "리눅스 2 2023"인 경우 실행할 코드
        
        const files = []; 
        for (var i = 1; i <= 3; i++) { 
            files.push('Linux23.12.09-' + i + '.html');
        }

        const randomIndex = Math.floor(Math.random() * files.length);
        const selectedHTMLFile = files[randomIndex];
        window.location.href = selectedHTMLFile;
    } 

}
