// 切換顯示區塊
function showSection(sectionId) {
    // 隱藏所有 section
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 顯示被點選的 section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // 滾動到頂部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 額外功能：自動儲存內容到瀏覽器（讓 contenteditable 的內容重新整理不會不見）
document.querySelectorAll('[contenteditable="true"]').forEach((element, index) => {
    // 載入儲存的內容
    const savedContent = localStorage.getItem('checkList-' + index);
    if (savedContent) {
        element.innerHTML = savedContent;
    }

    // 當內容改變時儲存
    element.addEventListener('input', () => {
        localStorage.setItem('checkList-' + index, element.innerHTML);
    });
});
