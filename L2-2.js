        // HTML 파일 경로 (절대 경로 또는 상대 경로 사용 가능)
        const htmlFiles = [
            'Linux2-2-1.html',
            'Linux2-2-2.html',
            'Linux2-2-3.html',
            'Linux2-2-4.html',
            'Linux2-2-5.html',
            'Linux2-2-6.html',
            'Linux2-2-7.html',
            'Linux2-2-8.html',
            'Linux2-2-9.html',
            'Linux2-2-10.html'
        ];
    
        function RandomHTML() {
            // 랜덤 HTML 파일 선택
            const randomIndex = Math.floor(Math.random() * htmlFiles.length);
            const selectedHTMLFile = htmlFiles[randomIndex];
    
            // 선택된 HTML 파일로 이동
            window.location.href = selectedHTMLFile;
        }