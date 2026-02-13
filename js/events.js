function GetRandomFont() {
    const fonts = ['Times New Roman', 'Arial', 'Verdana', 'Courier New', 'Georgia', 'Comic Sans MS', 'Impact', 'Lucida Console', 'Palatino Linotype', 'Tahoma', 'Trebuchet MS', 'Garamond', 'Bookman', 'Candara', 'Calibri','Noto Sans SC', 'Microsoft YaHei'];
    const randomIndex = Math.floor(Math.random() * fonts.length);
    return fonts[randomIndex];
}

export function ChangeFontH1(){
    const my_name = document.querySelector('.change-font');
    if (!my_name) return;

    my_name.addEventListener('mouseover', () => {
        my_name.style.fontFamily = GetRandomFont();
    });

    my_name.addEventListener('mouseout', () => {
        my_name.style.fontFamily = 'Raleway, sans-serif';
    });
}
