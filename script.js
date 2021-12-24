let buttons = document.getElementsByClassName('artdeco-button__text');
for(var i=30;i<buttons.length;i++){
    buttons[i].parentElement.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
    document.getElementById("artdeco-modal-outlet").querySelectorAll(".artdeco-button__text")[2].click();
    await new Promise(resolve => setTimeout(resolve, 2000));;
};
