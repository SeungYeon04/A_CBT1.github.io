        // HTML 파일 경로 (절대 경로 또는 상대 경로 사용 가능)
        const htmlFiles = [];

        for (var i = 1; i <= 14; i++) {
            htmlFiles.push('Linux2-2-' + i + '.html');
        }
        
        function RandomHTML() {
            // 랜덤 HTML 파일 선택
            const randomIndex = Math.floor(Math.random() * htmlFiles.length);
            const selectedHTMLFile = htmlFiles[randomIndex];
    
            // 선택된 HTML 파일로 이동
            window.location.href = selectedHTMLFile;
        }