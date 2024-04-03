document.getElementById('insidebutton').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'white';
    this.style.borderColor = '#2cd37b';
    this.style.color = '#2cd37b';
});

document.getElementById('insidebutton').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#2cd37b';
    this.style.borderColor = '#2cd37b';
    this.style.color = 'white';
});